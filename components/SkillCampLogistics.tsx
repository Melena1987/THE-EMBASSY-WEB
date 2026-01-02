
import React from 'react';
import { INSTALLATION_IMAGES } from '../constants';

const SkillCampLogistics: React.FC = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden flex flex-col items-center">
      {/* Text Content from Image */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24 reveal">
        <h3 className="text-white text-xl md:text-3xl font-light uppercase tracking-[0.4em] mb-4">
          THE EMBASSY
        </h3>
        <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-12">
          SKILL CAMP 2025
        </h2>
        
        <div className="space-y-12">
          <p className="text-white/80 text-lg md:text-2xl font-medium leading-relaxed tracking-tight max-w-3xl mx-auto">
            Llega el campus de tecnificación de Navidad definitivo. Cinco días de entrenamiento de élite en THE EMBASSY (Fuengirola) diseñados <span className="text-orange-600 font-bold">por jugadores para jugadores</span> que buscan la excelencia.
          </p>
          
          <p className="text-white/80 text-lg md:text-2xl font-medium leading-relaxed tracking-tight max-w-3xl mx-auto">
            Perfecciona tus habilidades, compite al máximo nivel y aprende de tres referentes del baloncesto profesional: <br className="hidden md:block" />
            <span className="text-white font-black">Adam Waczynski, Alfonso Sánchez y Fran Vázquez.</span>
          </p>

          <div className="pt-8">
            <button className="bg-[#D35400] text-white px-10 py-4 font-black uppercase tracking-[0.1em] text-sm hover:bg-orange-700 transition-all shadow-xl">
              Galeria Oficial
            </button>
          </div>
        </div>
      </div>

      {/* Logistics Details Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="reveal">
           <span className="text-orange-600 text-[10px] font-black tracking-[0.5em] uppercase mb-6 block italic">The Experience</span>
           <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-10 text-white">
              DETALLES DEL <br/> <span className="text-white/20">PROGRAMA</span>
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-neutral-900/50 rounded-3xl border border-white/5 group hover:border-orange-600/30 transition-all">
                 <p className="text-[10px] text-orange-600 font-black tracking-[0.2em] mb-2 uppercase">Fechas</p>
                 <p className="text-2xl font-black italic uppercase text-white">26 - 30 DIC</p>
                 <p className="text-[10px] text-white/30 uppercase mt-2 tracking-widest">Inmersión Navideña</p>
              </div>
              <div className="p-8 bg-neutral-900/50 rounded-3xl border border-white/5 group hover:border-orange-600/30 transition-all">
                 <p className="text-[10px] text-orange-600 font-black tracking-[0.2em] mb-2 uppercase">Horario</p>
                 <p className="text-2xl font-black italic uppercase text-white">15:30 - 19:30</p>
                 <p className="text-[10px] text-white/30 uppercase mt-2 tracking-widest">Sesiones Intensivas</p>
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
              <p className="text-4xl font-black italic tracking-tighter mb-2">100%</p>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80">ENFOQUE PROFESIONAL</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCampLogistics;
