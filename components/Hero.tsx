
import React, { useState, useEffect } from 'react';
import { LOGOS } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

interface HeroProps {
  onExplore?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const img = new Image();
    img.src = LOGOS.heroBg;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[100svh] flex flex-col justify-between overflow-hidden bg-black">
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `url(${LOGOS.heroBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
      </div>

      <div className="relative z-10 pt-40 lg:pt-48 xl:pt-32 text-center">
        <div className="reveal active inline-block bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full mb-8">
          <span className="text-gold text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">{t('hero', 'badge')}</span>
        </div>
        
        <div className="reveal active flex justify-center px-6">
          <img 
            src={LOGOS.main} 
            alt="THE EMBASSY" 
            className="w-full max-w-[240px] md:max-w-[380px] lg:max-w-[480px] h-auto object-contain brightness-0 invert"
          />
        </div>
      </div>

      <div className="relative z-10 pb-20 md:pb-24 lg:pb-32 text-center px-8 md:px-16">
        <p className="reveal active text-base md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-10 md:mb-12 font-light leading-relaxed tracking-wide uppercase">
          {t('hero', 'description')}
        </p>
        
        <div className="reveal active flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
          <a href="#contacto" className="w-full sm:w-auto bg-gold text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] transition-all hover:scale-105 hover:bg-white hover:text-black shadow-xl shadow-gold/20 text-center text-sm md:text-base">
            {t('hero', 'cta')}
          </a>
          
          <button 
            onClick={(e) => { e.preventDefault(); onExplore?.(); }}
            className="w-full sm:w-auto text-white/80 px-6 sm:px-10 py-4 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:text-gold transition-all flex items-center justify-center gap-2 sm:gap-3 group border border-white/10 sm:border-transparent rounded-full sm:rounded-none whitespace-nowrap text-[10px] sm:text-sm"
          >
            {t('hero', 'explore')}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
