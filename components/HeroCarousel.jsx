"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/Hero_sec_image1.jpg",
  "/Hero_sec_image2.jpg",
  "/Hero_sec_image3.jpg",
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={images[currentIndex]}
        alt="Pharmacy Hero Slide"
        className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-[#0f172a]/50 to-transparent flex flex-col items-start justify-center px-10 md:px-20 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
            Trusted Healthcare, Right at Your Doorstep
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-gray-200">
            Experience seamless access to quality medicines, health products, and wellness essentials — all in one place.
          </p>

          {/* Updated Button with Medical Theme */}
          <button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300">
            Shop Medicines
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        <ChevronRight size={26} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
