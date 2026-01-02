
import React from 'react';
import { INSTALLATION_IMAGES } from '../constants';

const SkillCampLogistics: React.FC = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="reveal">
           <span className="text-orange-600 text-[10px] font-black tracking-[0.5em] uppercase mb-6 block italic">The Experience</span>
           <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-10">
              ENTRENA EN <br/> <span className="text-white/20">EL SANTUARIO</span>
           </h2>
           <p className="text-white/40 text-lg md:text-xl font-medium uppercase tracking-tight leading-relaxed mb-12">
              Cinco días de inmersión total diseñados por <span className="text-white">Alfonso Sánchez</span> para jugadores que buscan la excelencia técnica y física bajo estándares profesionales.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-neutral-900/50 rounded-3xl border border-white/5">
                 <p className="text-[10px] text-orange-600 font-black tracking-[0.2em] mb-2 uppercase">Fechas</p>
                 <p className="text-2xl font-black italic uppercase">26 - 30 DIC</p>
              </div>
              <div className="p-8 bg-neutral-900/50 rounded-3xl border border-white/5">
                 <p className="text-[10px] text-orange-600 font-black tracking-[0.2em] mb-2 uppercase">Horario</p>
                 <p className="text-2xl font-black italic uppercase">15:30 - 19:30</p>
              </div>
           </div>
        </div>
        
        <div className="reveal relative group">
           <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10">
              <img 
                 src={INSTALLATION_IMAGES[0]} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                 alt="Instalaciones The Embassy"
              />
           </div>
           <div className="absolute -bottom-8 -left-8 bg-orange-600 text-white p-10 rounded-3xl shadow-2xl rotate-[-3deg] hidden md:block">
              <p className="text-4xl font-black italic tracking-tighter mb-2">15:30h</p>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80">COMIENZO SESIÓN</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCampLogistics;
