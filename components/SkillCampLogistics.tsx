
import React from 'react';

const SkillCampLogistics: React.FC = () => {
  return (
    <section className="relative py-40 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <div className="reveal">
            <span className="text-gold text-[11px] font-black tracking-[0.6em] uppercase mb-8 block italic">The Mission</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] mb-12 text-white">
              FORJANDO LA <br/> <span className="text-gold">EXCELENCIA</span>
            </h2>
            
            <div className="space-y-8 text-white/70 max-w-xl">
              <p className="text-lg md:text-xl font-light leading-relaxed tracking-tight">
                Cinco días de inmersión total en <span className="text-white font-bold italic">The Sanctuary</span>, diseñados bajo el rigor del baloncesto profesional para jugadores que no aceptan límites.
              </p>
              
              <div className="h-[1px] w-20 bg-gold/50"></div>
              
              <p className="text-sm md:text-base font-medium leading-loose uppercase tracking-widest text-white/50">
                Un programa intensivo que combina técnica individual avanzada, análisis táctico y optimización física de élite.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal">
            {[
              { label: 'Intensity', val: '100%', sub: 'Focus Pro' },
              { label: 'Sessions', val: '05', sub: 'Elite Days' },
              { label: 'Format', val: 'PRO', sub: 'Technical' },
              { label: 'Limit', val: 'VIP', sub: 'Exclusive' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 p-10 rounded-[3rem] hover:border-gold/30 transition-all duration-500 group">
                <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em] mb-4 block group-hover:text-gold transition-colors">{stat.label}</span>
                <span className="text-6xl font-black italic tracking-tighter text-white block mb-2">{stat.val}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">{stat.sub}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-1/2 left-[-10%] text-[25vw] font-black text-white/[0.02] italic -z-0 pointer-events-none select-none">
        SKILL
      </div>
    </section>
  );
};

export default SkillCampLogistics;
