
import React, { useEffect, useRef } from 'react';
import { STATS } from '../constants.tsx';

const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const reveals = containerRef.current?.querySelectorAll('.reveal');
    reveals?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-white text-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 reveal">
          <div>
            <span className="text-gold text-[10px] md:text-sm font-black tracking-[0.4em] uppercase mb-3 md:mb-4 block italic">The Numbers</span>
            <h2 className="text-3xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">THE EMBASSY <br/> EN DATOS</h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm">
            <div className="flex items-center gap-6 md:gap-8 mb-4 md:mb-6">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761953861247_fiba.png?alt=media&token=9bfb33df-5c09-4d97-a105-72d20dad3436" 
                alt="FIBA" 
                className="h-8 md:h-12 w-auto object-contain"
              />
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762446589359_logo_nba_400x400.png?alt=media&token=98a22c9b-5ef4-4594-a2b9-11838230c606" 
                alt="NBA" 
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 font-medium uppercase text-[9px] md:text-xs tracking-widest leading-relaxed">
              Equipamiento homologado por la FIBA y diseñado bajo los estándares de la NBA para el máximo rendimiento profesional.
            </p>
          </div>
        </div>

        {/* Grid ajustado a 2 columnas en móvil */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 md:gap-y-20 md:gap-x-16 lg:gap-x-32">
          {STATS.map((stat, idx) => (
            <div key={idx} className={`reveal group`}>
              <div className="flex items-baseline space-x-1 md:space-x-2">
                <span className="text-4xl md:text-7xl xl:text-8xl font-black tracking-tighter group-hover:text-gold transition-colors duration-500 whitespace-nowrap">
                  {stat.value}
                </span>
                <span className="text-gold font-black text-sm md:text-xl italic">+</span>
              </div>
              <div className="h-[2px] md:h-[3px] w-10 md:w-20 bg-black mt-1 md:mt-2 mb-2 md:mb-4 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              <p className="text-[9px] md:text-[11px] font-black tracking-[0.15em] md:tracking-[0.25em] text-gray-400 uppercase leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative text hidden or ultra-subtle on mobile */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 text-[30vw] font-black text-black/[0.01] md:text-black/[0.02] pointer-events-none select-none italic -z-0">
        MVP
      </div>
    </section>
  );
};

export default Stats;
