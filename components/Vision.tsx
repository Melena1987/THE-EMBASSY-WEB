import React, { useEffect, useRef } from 'react';
import { VISION_POINTS } from '../constants';

const Vision: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="reveal text-gold text-sm font-black tracking-[0.4em] uppercase mb-6 block italic">Filosofía de Élite</span>
          <h2 className="reveal text-4xl md:text-6xl font-black mb-12 uppercase leading-[1.1] italic tracking-tighter">
            REDEFINIENDO EL <br/> <span className="text-gold">ENTRENAMIENTO</span> <br/> PROFESIONAL.
          </h2>
          
          <div className="space-y-10">
            {VISION_POINTS.map((point, idx) => (
              <div key={point.id} className={`reveal group relative pl-20 transition-all delay-${idx * 150}`}>
                {/* Numbering with high contrast gold/orange tint */}
                <span className="absolute left-0 top-0 text-5xl font-black text-gold/30 group-hover:text-gold transition-all duration-700 italic select-none">
                  {point.id}
                </span>
                <div className="h-[1px] w-12 bg-gold/50 mb-4 group-hover:w-full transition-all duration-1000"></div>
                <h3 className="text-xl font-black uppercase tracking-wider group-hover:text-gold transition-colors italic">
                  {point.title}
                </h3>
                <p className="text-white/50 font-light mt-2 uppercase text-xs tracking-[0.15em] leading-loose">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group reveal">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(212,140,0,0.1)]">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_050.jpg?alt=media&token=91bbf74f-6cad-4f7c-9bfb-8c020278973a" 
              className="w-full h-full object-cover object-left brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-[2s] ease-out"
              alt="The Embassy Professional Facilities"
            />
          </div>
          {/* Accent frame */}
          <div className="absolute -top-6 -right-6 w-full h-full border border-gold/30 rounded-[2rem] -z-10 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-700"></div>
          
          {/* Floating badge with provided FIBA Logo */}
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] rotate-[-4deg] group-hover:rotate-0 transition-all duration-500 hidden md:flex flex-col items-center gap-2 border border-black/5">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761953861247_fiba.png?alt=media&token=9bfb33df-5c09-4d97-a105-72d20dad3436" 
              className="h-14 w-auto object-contain"
              alt="FIBA Logo"
            />
            <div className="h-[2px] w-8 bg-gold mb-1"></div>
            <p className="text-black font-black uppercase tracking-tighter text-[10px] italic">EQUIPMENT APPROVED</p>
          </div>
        </div>
      </div>

      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Vision;