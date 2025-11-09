'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Helper Hook to Detect Mobile ---
// We use 768px (Tailwind's 'md' breakpoint) to switch layouts
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ensure window is defined (for SSR/Next.js)
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set initial state
    handleChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isMobile;
};
// --- End Helper Hook ---


const PDFBookFlipper = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');
  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [pageImages, setPageImages] = useState({});
  const [loadError, setLoadError] = useState(null);
  const [pdfjsLib, setPdfjsLib] = useState(null);
  const pageContainerRef = useRef(null);
  const [pageDims, setPageDims] = useState({ width: 500, height: 700 });

  // --- Use the hook ---
  const isMobile = useIsMobile();

  const pdfPath = '/occular_visual_aid.pdf'; // Make sure this is in your /public folder

  // --- Adapt page logic for mobile/desktop ---
  const pageIncrement = isMobile ? 1 : 2;
  const leftPage = currentPage;
  const rightPage = isMobile ? -1 : currentPage + 1; // -1 signifies no right page in mobile

  useEffect(() => {
    const loadPdfJs = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
        script.async = true;

        script.onload = () => {
          if (window.pdfjsLib) {
            window.pdfjsLib.GlobalWorkerOptions.workerSrc =
              'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            setPdfjsLib(window.pdfjsLib);
          }
        };

        script.onerror = () => setLoadError('Failed to load PDF.js library');
        document.head.appendChild(script);
        return () => document.head.removeChild(script);
      } catch (error) {
        console.error('Error loading PDF.js:', error);
        setLoadError('Failed to load PDF.js library');
      }
    };
    loadPdfJs();
  }, []);

  useEffect(() => {
    if (!pdfjsLib) return;
    const loadPDF = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(pdfPath);
        const pdf = await loadingTask.promise;
        setPdfDoc(pdf);
        setNumPages(pdf.numPages);
      } catch (error) {
        setLoadError(`Failed to load PDF: ${error.message}`);
      }
    };
    loadPDF();
  }, [pdfjsLib, pdfPath]);

  // This effect watches the page container size and updates render dimensions
  // It works for both mobile (w-full) and desktop (w-1/2)
  useEffect(() => {
    const container = pageContainerRef.current;
    if (!container || !pdfDoc) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        const width = entry.contentRect.width;
        if (width === 0) return;
        const height = (width / 5) * 7; // Maintain 5:7 aspect ratio

        setPageDims((prevDims) => {
          if (Math.abs(prevDims.width - width) > 1 || Math.abs(prevDims.height - height) > 1) {
            setPageImages({}); // Clear cache to force re-render at new size
            return { width, height };
          }
          return prevDims;
        });
      }
    });

    observer.observe(container);
    
    // Set initial dimensions
    const initialWidth = container.clientWidth;
    if (initialWidth > 0) {
      const initialHeight = (initialWidth / 5) * 7;
      setPageDims({ width: initialWidth, height: initialHeight });
    }

    return () => observer.disconnect();
  }, [pdfDoc, isMobile]); // Re-run when view mode changes

  // This effect renders the PDF pages, now adapted for mobile/desktop
  useEffect(() => {
    if (!pdfDoc) return;

    const renderPage = async (pageNum) => {
      if (pageNum < 0 || pageNum >= numPages) return; // Guard clause
      
      const desiredWidth = pageDims.width;
      const desiredHeight = pageDims.height;

      if (!desiredWidth || !desiredHeight || pageImages[pageNum]) return;

      try {
        const page = await pdfDoc.getPage(pageNum + 1);
        const viewport = page.getViewport({ scale: 1.0 });

        const scaleX = desiredWidth / viewport.width;
        const scaleY = desiredHeight / viewport.height;
        const scale = Math.min(scaleX, scaleY);
        const scaledViewport = page.getViewport({ scale });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        await page.render({
          canvasContext: context,
          viewport: scaledViewport,
        }).promise;

        const imageUrl = canvas.toDataURL();
        setPageImages((prev) => ({ ...prev, [pageNum]: imageUrl }));
      } catch (error) {
        console.error(`Error rendering page ${pageNum}:`, error);
      }
    };

    // --- Adapt render/preload logic ---
    if (isMobile) {
      renderPage(currentPage); // Render current
      if (currentPage + 1 < numPages) renderPage(currentPage + 1); // Preload next
    } else {
      renderPage(leftPage); // Render left
      if (rightPage < numPages) renderPage(rightPage); // Render right
      if (leftPage + 2 < numPages) renderPage(leftPage + 2); // Preload next left
      if (rightPage + 2 < numPages) renderPage(rightPage + 2); // Preload next right
    }
  }, [pdfDoc, currentPage, numPages, pageDims, isMobile, leftPage, rightPage]);

  // --- Adapt flip logic ---
  const flipToNext = () => {
    const atLastPage = isMobile
      ? currentPage >= numPages - 1
      : currentPage >= numPages - 2;

    if (isFlipping || atLastPage) return;
    
    setIsFlipping(true);
    setFlipDirection('next');
    setTimeout(() => {
      setCurrentPage((prev) => prev + pageIncrement);
      setIsFlipping(false);
      setFlipDirection('');
    }, 600);
  };

  const flipToPrev = () => {
    if (isFlipping || currentPage <= 0) return;
    
    setIsFlipping(true);
    setFlipDirection('prev');
    setTimeout(() => {
      setCurrentPage((prev) => prev - 2);
      setIsFlipping(false);
      setFlipDirection('');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-teal-900 to-gray-950 flex items-center justify-center p-4 md:p-8 text-gray-100">
      {loadError ? (
        // ... (Error UI - unchanged) ...
        <div className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl max-w-md border border-teal-700/40">
          <h2 className="text-xl font-bold text-red-400 mb-4">Error Loading PDF</h2>
          <p className="text-gray-300 mb-4">{loadError}</p>
          <div className="text-sm text-gray-400">
            <p className="mb-2">Common solutions:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Ensure the PDF file exists in your <code className="bg-gray-800 px-1 rounded">/public</code> folder</li>
              <li>Check that the path is correct: <code className="bg-gray-800 px-1 rounded">{pdfPath}</code></li>
              <li>Verify file name: <code className="bg-gray-800 px-1 rounded">occular_visual_aid.pdf</code></li>
              <li>Try refreshing the page</li>
            </ul>
          </div>
        </div>
      ) : !pdfDoc ? (
        // ... (Loading UI - unchanged) ...
        <div className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading PDF viewer...</p>
          </div>
        </div>
      ) : (
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Responsive Book Container */}
          <div
            className={`relative ${
              isMobile ? 'w-full max-w-lg mx-auto' : 'flex gap-1 md:gap-2'
            } perspective-container`}
          >
            {/* Left Page (or Single Page on Mobile) */}
            <div
              ref={pageContainerRef} // Ref is always here
              className={`relative ${
                isMobile
                  ? 'w-full rounded-xl' // Mobile: full width, rounded corners
                  : 'w-1/2 rounded-l-xl' // Desktop: half width, left corners
              } aspect-[5/7] bg-gray-900 border border-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden ${
                isMobile && isFlipping
                  ? 'opacity-0' // Mobile fade animation
                  : 'opacity-100'
              } transition-opacity duration-300 ease-in-out`}
            >
              <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col">
                <div className="text-xs text-gray-400 mb-2">
                  Page {leftPage + 1}
                </div>
                <div className="flex-1 flex items-center justify-center overflow-hidden bg-gray-800/60 rounded">
                  {pageImages[leftPage] ? (
                    <img
                      src={pageImages[leftPage]}
                      alt={`Page ${leftPage + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="text-gray-500">Loading...</div>
                  )}
                </div>
                <div className="text-xs text-gray-500 text-center mt-2">
                  {leftPage + 1} / {numPages}
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-gray-800/40 to-transparent pointer-events-none"></div>
            </div>

            {/* Right Page (Desktop-only) */}
            <div
              className={` ${
                isMobile ? 'hidden' : 'relative w-1/2' // --- Hide on mobile ---
              } aspect-[5/7] bg-gray-900 border border-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-r-xl overflow-hidden transition-transform duration-600 origin-left ${
                flipDirection === 'next' ? 'animate-flip-next' : ''
              } ${
                flipDirection === 'prev' ? 'animate-flip-prev' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col backface-hidden">
                <div className="text-xs text-gray-400 mb-2 text-right">
                  Page {rightPage + 1}
                </div>
                <div className="flex-1 flex items-center justify-center overflow-hidden bg-gray-800/60 rounded">
                  {rightPage < numPages && pageImages[rightPage] ? (
                    <img
                      src={pageImages[rightPage]}
                      alt={`Page ${rightPage + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : rightPage < numPages ? (
                    <div className="text-gray-500">Loading...</div>
                  ) : null}
                </div>
                <div className="text-xs text-gray-500 text-center mt-2">
                  {rightPage < numPages ? `${rightPage + 1} / ${numPages}` : ''}
                </div>
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-gray-800/40 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Navigation Buttons (Adapted disable logic) */}
          <button
            onClick={flipToPrev}
            disabled={currentPage <= 0 || isFlipping}
            className="absolute left-[-10px] sm:left-[-20px] md:left-[-30px] lg:left-[-50px] top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-gray-800/80 border border-teal-700 text-teal-400 shadow-lg flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <button
            onClick={flipToNext}
            disabled={
              isFlipping ||
              (isMobile && currentPage >= numPages - 1) ||
              (!isMobile && currentPage >= numPages - 2)
            }
            className="absolute right-[-10px] sm:right-[-20px] md:right-[-30px] lg:right-[-50px] top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-gray-800/80 border border-teal-700 text-teal-400 shadow-lg flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          {/* Page Counter (Adapted text) */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-gray-400">
            {isMobile
              ? `Page ${currentPage + 1} of ${numPages}`
              : `Pages ${currentPage + 1}-${Math.min(
                  currentPage + 2,
                  numPages
                )} of ${numPages}`}
          </div>
        </div>
      )}

      {/* Styles are unchanged */}
      <style jsx>{`
        .perspective-container {
          perspective: 2000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        @keyframes flipNext {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-180deg); }
        }
        @keyframes flipPrev {
          0% { transform: rotateY(-180deg); }
          100% { transform: rotateY(0deg); }
        }
        .animate-flip-next {
          animation: flipNext 0.6s ease-in-out;
        }
        .animate-flip-prev {
          animation: flipPrev 0.6s ease-in-out;
        }
        .duration-600 {
          transition-duration: 600ms;
        }
        /* Custom aspect ratio utility */
        .aspect-\[5\/7\] {
          aspect-ratio: 5 / 7;
        }
      `}</style>
    </div>
  );
};

export default PDFBookFlipper;