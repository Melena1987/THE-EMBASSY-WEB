
import React from 'react';

interface SkillCampHeroProps {
  onBack: () => void;
  scrollY: number;
}

const SkillCampHero: React.FC<SkillCampHeroProps> = ({ onBack, scrollY }) => {
  const skillCampLogo = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1767138288808_frontal.png?alt=media&token=cd73d94c-6b1a-4d09-b081-309d6d4751b0";
  const heroBg = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_036.jpg?alt=media&token=e35e2655-a8cb-4db4-b527-54e76095b763";

  return (
    <section className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out scale-110"
        style={{ 
          transform: `translateY(${scrollY * 0.2}px) scale(1.1)`,
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Blue Overlays for the requested "más azulada" effect */}
        <div className="absolute inset-0 bg-[#002B5B]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#003d82]/40 via-transparent to-black"></div>
      </div>
      
      <div className="relative z-10 px-6 w-full max-w-7xl mx-auto flex flex-col items-center">
        <button 
          onClick={onBack}
          className="absolute top-[-10svh] md:top-[-15svh] left-0 md:left-6 inline-flex items-center gap-3 text-white/40 hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.4em] group py-4"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          VOLVER
        </button>

        <div className="reveal active flex flex-col items-center justify-center w-full">
          {/* Logo made smaller as requested: max-w reduced from 320/600 to 260/480 */}
          <div className="relative group max-w-[260px] md:max-w-[480px] w-full animate-[fade-in-scale_1.5s_ease-out]">
            <img 
              src={skillCampLogo} 
              alt="THE EMBASSY SKILL CAMP" 
              className="w-full h-auto drop-shadow-[0_0_80px_rgba(255,255,255,0.15)] transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
        
        <div className="reveal active mt-12 md:mt-16 text-center">
           <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6">
              <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em] italic">
                 EDICIÓN INVIERNO 2025
              </p>
           </div>
           <p className="text-white/60 text-xs md:text-sm font-bold uppercase tracking-[0.3em] max-w-2xl mx-auto leading-loose">
              TECNIFICACIÓN DE ÉLITE <span className="text-white">COSTA DEL SOL</span>
           </p>
        </div>
      </div>
    </section>
  );
};

export default SkillCampHero;
