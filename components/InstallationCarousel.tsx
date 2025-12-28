import React, { useState, useEffect } from 'react';
import { INSTALLATION_IMAGES } from '../constants';

const InstallationCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % INSTALLATION_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % INSTALLATION_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + INSTALLATION_IMAGES.length) % INSTALLATION_IMAGES.length);
  };

  return (
    <div className="relative group w-full h-full">
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        {INSTALLATION_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              idx === currentIndex 
                ? 'opacity-100 scale-100 pointer-events-auto' 
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={img}
              alt={`Installation view ${idx + 1}`}
              className="w-full h-full object-cover brightness-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-gold hover:border-gold z-20"
      >
        <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-gold hover:border-gold z-20"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {INSTALLATION_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-500 rounded-full h-1 ${
              idx === currentIndex ? 'w-10 bg-gold' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-8 left-8 z-20 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
        <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
          {String(currentIndex + 1).padStart(2, '0')} / {String(INSTALLATION_IMAGES.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default InstallationCarousel;