'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PDFBookFlipper = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');
  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(144);
  const [pageImages, setPageImages] = useState({});
  const [loadError, setLoadError] = useState(null);
  const [pdfjsLib, setPdfjsLib] = useState(null);
  
  const pdfPath = '/occular_visual_aid.pdf';
  
  const leftPage = currentPage;
  const rightPage = currentPage + 1;

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

  useEffect(() => {
    if (!pdfDoc) return;
    const renderPage = async (pageNum) => {
      if (pageImages[pageNum]) return;
      try {
        const page = await pdfDoc.getPage(pageNum + 1);
        const desiredWidth = 500;
        const desiredHeight = 700;
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
          viewport: scaledViewport
        }).promise;

        const imageUrl = canvas.toDataURL();
        setPageImages(prev => ({ ...prev, [pageNum]: imageUrl }));
      } catch (error) {
        console.error(`Error rendering page ${pageNum}:`, error);
      }
    };

    renderPage(leftPage);
    if (rightPage < numPages) renderPage(rightPage);
    if (leftPage + 2 < numPages) renderPage(leftPage + 2);
    if (rightPage + 2 < numPages) renderPage(rightPage + 2);
  }, [pdfDoc, leftPage, rightPage, numPages, pageImages]);

  const flipToNext = () => {
    if (isFlipping || currentPage >= numPages - 2) return;
    setIsFlipping(true);
    setFlipDirection('next');
    setTimeout(() => {
      setCurrentPage(prev => prev + 2);
      setIsFlipping(false);
      setFlipDirection('');
    }, 600);
  };

  const flipToPrev = () => {
    if (isFlipping || currentPage <= 0) return;
    setIsFlipping(true);
    setFlipDirection('prev');
    setTimeout(() => {
      setCurrentPage(prev => prev - 2);
      setIsFlipping(false);
      setFlipDirection('');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-teal-900 to-gray-950 flex items-center justify-center p-4 text-gray-100">
      {loadError ? (
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
        <div className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading PDF viewer...</p>
          </div>
        </div>
      ) : (
      <div className="relative">
        <div className="relative flex gap-1 perspective-container">
          {/* Left Page */}
          <div className="relative w-[500px] h-[700px] bg-gray-900 border border-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-l-xl overflow-hidden">
            <div className="absolute inset-0 p-6 flex flex-col">
              <div className="text-xs text-gray-400 mb-2">Page {leftPage + 1}</div>
              <div className="flex-1 flex items-center justify-center overflow-hidden bg-gray-800/60">
                {pageImages[leftPage] ? (
                  <img 
                    src={pageImages[leftPage]} 
                    alt={`Page ${leftPage + 1}`}
                    className="max-w-full max-h-full object-contain rounded"
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

          {/* Right Page */}
          <div 
            className={`relative w-[500px] h-[700px] bg-gray-900 border border-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-r-xl overflow-hidden transition-transform duration-600 origin-left ${
              flipDirection === 'next' ? 'animate-flip-next' : ''
            } ${flipDirection === 'prev' ? 'animate-flip-prev' : ''}`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 p-6 flex flex-col backface-hidden">
              <div className="text-xs text-gray-400 mb-2 text-right">Page {rightPage + 1}</div>
              <div className="flex-1 flex items-center justify-center overflow-hidden bg-gray-800/60">
                {rightPage < numPages && pageImages[rightPage] ? (
                  <img 
                    src={pageImages[rightPage]} 
                    alt={`Page ${rightPage + 1}`}
                    className="max-w-full max-h-full object-contain rounded"
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

        {/* Navigation Buttons */}
        <button
          onClick={flipToPrev}
          disabled={currentPage <= 0 || isFlipping}
          className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800/80 border border-teal-700 text-teal-400 shadow-lg flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={flipToNext}
          disabled={currentPage >= numPages - 2 || isFlipping}
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800/80 border border-teal-700 text-teal-400 shadow-lg flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Page Counter */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-gray-400">
          Pages {currentPage + 1}-{Math.min(currentPage + 2, numPages)} of {numPages}
        </div>
      </div>
      )}

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
      `}</style>
    </div>
  );
};

export default PDFBookFlipper;
