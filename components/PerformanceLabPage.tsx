
import React, { useEffect, useState } from 'react';
import { LOGOS } from '../constants';

const PerformanceLabPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[100svh] bg-black text-white relative overflow-hidden font-sans">
      {/* Background visual decor - Enhanced */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gold/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Fixed Top Navigation Area */}
      <div className="absolute top-0 left-0 w-full z-50 p-6 md:p-12">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-4 text-white/40 hover:text-gold transition-all uppercase text-[10px] font-black tracking-[0.5em] group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          VOLVER AL INICIO
        </button>
      </div>

      <div className={`relative z-10 min-h-[100svh] flex flex-col items-center justify-center p-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl w-full text-center">
          <div className="mb-12 reveal active">
             <img 
               src={LOGOS.main} 
               alt="THE EMBASSY" 
               className="h-12 md:h-20 mx-auto mb-8 brightness-0 invert object-contain" 
             />
             <div className="h-[1px] w-24 bg-gold/50 mx-auto"></div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8">
            PERFORMANCE <br className="md:hidden" /> <span className="text-gold">LAB</span>
          </h1>
          
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full mb-16 shadow-2xl">
            <span className="w-2 h-2 bg-gold rounded-full animate-ping"></span>
            <p className="text-gold text-[10px] md:text-xs font-black uppercase tracking-[0.6em] italic">
              UNDER CONSTRUCTION
            </p>
          </div>

          <p className="text-white/40 text-base md:text-xl font-light uppercase tracking-[0.25em] max-w-2xl mx-auto leading-relaxed italic">
            ESTAMOS PREPARANDO EL ESPACIO DE <span className="text-white font-black">ANÁLISIS BIOMECÁNICO</span> MÁS AVANZADO DE EUROPA.
          </p>

          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 max-w-3xl mx-auto">
             {[
               { icon: '🧬', label: 'Biometría' },
               { icon: '⚡', label: 'Recuperación' },
               { icon: '📈', label: 'Optimización' }
             ].map((item, i) => (
               <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] group hover:border-gold/30 transition-all duration-500">
                  <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-gold transition-colors">{item.label}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-white/[0.01] italic pointer-events-none select-none z-0">
        SOON
      </div>

      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .reveal.active {
          animation: subtle-float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PerformanceLabPage;
