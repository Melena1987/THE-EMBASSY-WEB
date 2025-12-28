
import React from 'react';
import { STAR_VISITORS } from '../constants';

const StarsCarousel: React.FC = () => {
  // We duplicate the array to create a seamless infinite loop
  const duplicatedStars = [...STAR_VISITORS, ...STAR_VISITORS];

  return (
    <div className="w-full overflow-hidden bg-black py-10 relative group">
      {/* Gradient overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-scroll hover:[animation-play-state:paused]">
        {duplicatedStars.map((src, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 px-4 w-[250px] md:w-[350px]"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02] bg-neutral-900 shadow-2xl">
              <img 
                src={src} 
                alt={`Basketball Star ${idx + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * ${STAR_VISITORS.length} - 2rem * ${STAR_VISITORS.length})); }
        }
        @media (max-width: 768px) {
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-250px * ${STAR_VISITORS.length} - 2rem * ${STAR_VISITORS.length})); }
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default StarsCarousel;
