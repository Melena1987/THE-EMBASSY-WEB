
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface SkillCampHeroProps {
  onBack: () => void;
}

const SkillCampHero: React.FC<SkillCampHeroProps> = ({ onBack }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();
  const skillCampLogo = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1767138288808_frontal.png?alt=media&token=cd73d94c-6b1a-4d09-b081-309d6d4751b0";
  const heroBg = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_036.jpg?alt=media&token=e35e2655-a8cb-4db4-b527-54e76095b763";

  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Fixed Background Layer using CSS - High Performance */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#001021]/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002B5B]/20 to-black"></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#001021] z-0 animate-pulse"></div>
      )}
      
      <div className="relative z-10 px-6 w-full max-w-7xl mx-auto flex flex-col items-center">
        <button 
          onClick={onBack}
          className="absolute top-[-10svh] md:top-[-12svh] left-0 md:left-6 inline-flex items-center gap-4 text-white/30 hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.5em] group py-4"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t('common', 'backHub')}
        </button>

        <div className="reveal active flex flex-col items-center justify-center w-full">
          <div className="relative group max-w-[240px] md:max-w-[440px] w-full animate-[fade-in-scale_1.8s_cubic-bezier(0.22,1,0.36,1)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            <img 
              src={skillCampLogo} 
              alt="THE EMBASSY SKILL CAMP" 
              className="w-full h-auto drop-shadow-[0_0_50px_rgba(0,123,255,0.3)] transition-transform duration-1000 group-hover:scale-[1.03]"
            />
          </div>
        </div>
        
        <div className="reveal active mt-16 md:mt-24 text-center">
           <div className="inline-flex items-center gap-4 px-8 py-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-gold rounded-full animate-ping"></span>
              <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.6em] italic">
                 {t('skillcamp', 'winter')}
              </p>
           </div>
           
           <h1 className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] max-w-2xl mx-auto leading-loose">
              {t('skillcamp', 'elite')}
           </h1>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-gold/0 to-gold"></div>

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

export default SkillCampHero;
