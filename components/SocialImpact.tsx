
import React, { useEffect, useRef } from 'react';
import { SOCIAL_PROJECTS } from '../constants';

const SocialImpact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-20 reveal">
          <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block italic">Impacto en la Comunidad</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 text-white">COMPROMISO SOCIAL</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base font-medium uppercase tracking-[0.2em] leading-relaxed">
            Creemos que el baloncesto es una herramienta para formar a la próxima generación y crear un impacto positivo en la sociedad. Estos proyectos definen nuestra visión fuera de la pista.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 items-center reveal">
          {SOCIAL_PROJECTS.map((proj, idx) => (
            <a 
              key={proj.name} 
              href={proj.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-8 group transition-all duration-700 delay-${idx * 150} cursor-pointer`}
            >
              <div className="h-20 md:h-28 w-full overflow-hidden flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110">
                <img 
                  src={proj.url} 
                  alt={proj.name} 
                  className="h-full w-auto object-contain brightness-150 grayscale group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
                />
              </div>
              <div className="h-[2px] w-8 bg-gold/30 group-hover:w-full transition-all duration-700"></div>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/50 group-hover:text-gold transition-colors text-center">
                {proj.name}
              </span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Abstract Background Graphic */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent pointer-events-none -z-0"></div>
    </section>
  );
};

export default SocialImpact;
