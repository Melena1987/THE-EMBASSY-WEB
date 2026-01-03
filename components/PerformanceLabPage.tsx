
import React from 'react';
import { LOGOS } from '../constants';

const PerformanceLabPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background visual decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <button 
          onClick={onBack}
          className="mb-16 inline-flex items-center gap-3 text-gold hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.4em] group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          VOLVER AL INICIO
        </button>

        <div className="mb-12">
           <img src={LOGOS.main} alt="THE EMBASSY" className="h-16 md:h-24 mx-auto mb-8 brightness-0 invert" />
           <div className="h-[2px] w-24 bg-gold mx-auto mb-12"></div>
        </div>

        <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
          PERFORMANCE <span className="text-gold">LAB</span>
        </h1>
        
        <div className="inline-flex items-center gap-4 px-8 py-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full mb-12">
          <span className="w-2 h-2 bg-gold rounded-full animate-ping"></span>
          <p className="text-gold text-[10px] md:text-xs font-black uppercase tracking-[0.5em] italic">
            UNDER CONSTRUCTION
          </p>
        </div>

        <p className="text-white/40 text-lg md:text-xl font-light uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed">
          ESTAMOS PREPARANDO EL ESPACIO DE <span className="text-white font-bold">ANÁLISIS BIOMECÁNICO Y RENDIMIENTO</span> MÁS AVANZADO DE EUROPA.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-20">
           <div className="p-8 border border-white/10 rounded-3xl">
              <span className="text-2xl block mb-2">🧬</span>
              <span className="text-[10px] font-black uppercase tracking-widest">Biometría</span>
           </div>
           <div className="p-8 border border-white/10 rounded-3xl">
              <span className="text-2xl block mb-2">⚡</span>
              <span className="text-[10px] font-black uppercase tracking-widest">Recuperación</span>
           </div>
           <div className="p-8 border border-white/10 rounded-3xl">
              <span className="text-2xl block mb-2">📈</span>
              <span className="text-[10px] font-black uppercase tracking-widest">Optimización</span>
           </div>
        </div>
      </div>

      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.01] italic pointer-events-none select-none z-0">
        COMING SOON
      </div>
    </div>
  );
};

export default PerformanceLabPage;
