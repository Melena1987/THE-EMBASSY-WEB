
import React from 'react';
import StarsCarousel from './StarsCarousel.tsx';

const StarsSection: React.FC = () => {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-20 reveal">
        <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-10 block italic">Global Basketball Hub</span>
        <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-[1.1] max-w-5xl mx-auto mb-12">
          Hay lugares que se definen por las personas que los habitan. Nos sentimos orgullosos de haber sido el campo de entrenamiento para algunos de los rostros más reconocidos del baloncesto mundial.
        </h2>
      </div>
      <div className="reveal active">
        <StarsCarousel />
      </div>
    </section>
  );
};

export default StarsSection;
