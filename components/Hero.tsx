
import React, { useState, useEffect } from 'react';
import { LOGOS } from '../constants.tsx';

interface HeroProps {
  onExplore?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const nextEventLogo = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946347121_avance_global_cup_logo.png?alt=media&token=b4d7d75a-dc46-436c-b5c5-81edd0ba6154";

  useEffect(() => {
    const img = new Image();
    img.src = LOGOS.heroBg;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[100svh] flex flex-col justify-between overflow-hidden bg-black">
      {/* Background with fixed parallax effect */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `url(${LOGOS.heroBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
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

      {/* Robust Next Event Widget with Moving Gold Border */}
      <div className="reveal active absolute inset-x-0 bottom-10 md:inset-x-auto md:bottom-auto md:top-32 md:right-12 z-20 flex justify-center md:block px-6 md:px-0">
        <a 
          href="https://avanceglobalcup.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block max-w-[90vw] md:max-w-none"
        >
          <div className="moving-gold-border flex items-center gap-3 md:gap-5 bg-black/60 backdrop-blur-2xl p-2 pr-6 md:p-3 md:pr-8 rounded-full transition-all duration-500 hover:bg-black/80 hover:scale-105 shadow-2xl">
            <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-full p-1.5">
              <img 
                src={nextEventLogo} 
                alt="Avance Global Cup" 
                className="w-full h-full object-contain" 
              />
            </div>
            
            <div className="text-left overflow-hidden">
              <div className="flex items-center gap-2 mb-0.5 whitespace-nowrap">
                <span className="text-gold text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">PRÓXIMO EVENTO</span>
                <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gold rounded-full animate-pulse flex-shrink-0"></span>
              </div>
              <p className="text-white text-[10px] md:text-sm font-black uppercase tracking-tighter italic leading-none truncate md:whitespace-normal">
                AVANCE GLOBAL CUP
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* BOTTOM GROUP: Description & CTAs */}
      <div className="relative z-10 pb-44 md:pb-32 text-center px-6">
        <p className="reveal active text-base md:text-2xl text-white/80 max-w-4xl mx-auto mb-10 font-light leading-relaxed tracking-wide uppercase">
          Diseñado por <span className="text-white font-bold italic border-b border-gold pb-1">Berni Rodríguez</span> y <span className="text-white font-bold italic border-b border-gold pb-1">José Manuel Calderón</span>. <br className="hidden md:block" />
          1500m2 de alto rendimiento FIBA/NBA en la Costa del Sol.
        </p>
        
        <div className="reveal active flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
          <a href="#contacto" className="w-full sm:w-auto bg-gold text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] transition-all hover:scale-105 hover:bg-white hover:text-black shadow-xl shadow-gold/20 text-center text-sm md:text-base">
            Reservar Pista
          </a>
          
          <button 
            onClick={(e) => { e.preventDefault(); onExplore?.(); }}
            className="w-full sm:w-auto text-white/80 px-6 sm:px-10 py-4 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:text-gold transition-all flex items-center justify-center gap-2 sm:gap-3 group border border-white/10 sm:border-transparent rounded-full sm:rounded-none whitespace-nowrap text-[10px] sm:text-sm"
          >
            Explora el Training Center
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* Decorative vertical lines (Left) */}
      <div className="absolute left-6 md:left-12 bottom-12 hidden md:flex flex-col space-y-4 opacity-30">
        <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] font-bold">Costa del Sol</span>
        <div className="w-[1px] h-32 bg-white mx-auto"></div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .z-0 {
            background-attachment: scroll !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
