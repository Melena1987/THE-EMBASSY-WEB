
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
    <div className="min-h-[100svh] bg-[#050505] text-white relative overflow-hidden font-sans">
      {/* Background visual decor - Enhanced Cinematic Look */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gold/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Fixed Top Navigation Area */}
      <div className="absolute top-0 left-0 w-full z-50 p-8 md:p-12">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-4 text-white/30 hover:text-gold transition-all uppercase text-[10px] font-black tracking-[0.5em] group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          VOLVER AL INICIO
        </button>
      </div>

      <div className={`relative z-10 min-h-[100svh] flex flex-col items-center justify-center p-6 transition-all duration-[1.5s] cubic-bezier(0.22, 1, 0.36, 1) ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
        <div className="max-w-5xl w-full text-center">
          <div className="mb-12 reveal active">
             <img 
               src={LOGOS.main} 
               alt="THE EMBASSY" 
               className="h-14 md:h-24 mx-auto mb-10 brightness-0 invert object-contain" 
             />
             <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>

          <h1 className="text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-10">
            PERFORMANCE <br className="md:hidden" /> <span className="text-gold">LAB</span>
          </h1>
          
          <div className="inline-flex items-center gap-5 px-10 py-5 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-full mb-16 shadow-2xl relative group">
            <div className="absolute inset-0 bg-gold/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="w-2.5 h-2.5 bg-gold rounded-full animate-ping"></span>
            <p className="text-gold text-[10px] md:text-xs font-black uppercase tracking-[0.6em] italic relative z-10">
              UNDER CONSTRUCTION
            </p>
          </div>

          <p className="text-white/40 text-lg md:text-2xl font-light uppercase tracking-[0.2em] max-w-3xl mx-auto leading-relaxed italic mb-20">
            ESTAMOS PREPARANDO EL ESPACIO DE <span className="text-white font-black">ANÁLISIS BIOMECÁNICO</span> MÁS AVANZADO DE EUROPA.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
             {[
               { icon: '🧬', label: 'Biometría', desc: 'Análisis de datos físicos' },
               { icon: '⚡', label: 'Recuperación', desc: 'Crioterapia y Fisio Pro' },
               { icon: '📈', label: 'Optimización', desc: 'Mejora de técnica individual' }
             ].map((item, i) => (
               <div key={i} className="p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] group hover:border-gold/40 hover:bg-white/[0.04] transition-all duration-700 hover:scale-105">
                  <span className="text-5xl block mb-6 group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-gold transition-colors block mb-2">{item.label}</span>
                  <p className="text-[8px] font-bold text-white/10 group-hover:text-white/40 uppercase tracking-widest">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-white/[0.01] italic pointer-events-none select-none z-0">
        SOON
      </div>

      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .reveal.active {
          animation: subtle-float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PerformanceLabPage;
