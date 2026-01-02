
import React from 'react';
import { LOGOS } from '../constants.tsx';

interface HeroProps {
  onExplore?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative h-[100svh] flex flex-col justify-between overflow-hidden">
      {/* Background with optimized overlay */}
      <div className="absolute inset-0 z-0 scale-105 animate-[subtle-zoom_20s_infinite_alternate]">
        <img 
          src={LOGOS.heroBg} 
          className="w-full h-full object-cover"
          alt="The Embassy Basketball Court"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black"></div>
      </div>

      {/* TOP GROUP: Badge & Logo */}
      <div className="relative z-10 pt-24 md:pt-32 text-center">
        <div className="reveal active inline-block bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full mb-8">
          <span className="text-gold text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">THE SANCTUARY FOR PERFORMANCE</span>
        </div>
        
        <div className="reveal active flex justify-center px-6">
          <img 
            src={LOGOS.main} 
            alt="THE EMBASSY" 
            className="w-full max-w-[280px] md:max-w-[550px] h-auto object-contain brightness-0 invert"
          />
        </div>
      </div>

      {/* BOTTOM GROUP: Description & CTAs */}
      <div className="relative z-10 pb-20 md:pb-32 text-center px-6">
        <p className="reveal active text-base md:text-2xl text-white/80 max-w-4xl mx-auto mb-10 font-light leading-relaxed tracking-wide uppercase">
          Diseñado por <span className="text-white font-bold italic border-b border-gold pb-1">Berni Rodríguez</span> y <span className="text-white font-bold italic border-b border-gold pb-1">José Manuel Calderón</span>. <br className="hidden md:block" />
          1500m2 de alto rendimiento FIBA/NBA en la Costa del Sol.
        </p>
        
        <div className="reveal active flex flex-col sm:flex-row items-center justify-center gap-8">
          <a href="#contacto" className="group relative overflow-hidden bg-gold text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-xl shadow-gold/20">
            <span className="relative z-10">Explora el Training Center</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="absolute inset-0 z-20 flex items-center justify-center text-black font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">Reservar Ahora</span>
          </a>
          <button 
            onClick={(e) => { e.preventDefault(); onExplore?.(); }}
            className="text-white/80 px-10 py-4 font-bold uppercase tracking-[0.2em] hover:text-gold transition-all flex items-center gap-3 group"
          >
            Ver Instalaciones
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-12 bottom-12 hidden xl:flex flex-col space-y-4 opacity-30">
        <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] font-bold">Costa del Sol</span>
        <div className="w-[1px] h-32 bg-white mx-auto"></div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
