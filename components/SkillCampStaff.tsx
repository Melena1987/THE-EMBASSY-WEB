
import React from 'react';

const SkillCampStaff: React.FC = () => {
  return (
    <section id="equipo" className="py-32 bg-white text-black px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="reveal">
            <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block italic">Top Level Coaching</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">STAFF <br/> TÉCNICO</h2>
          </div>
          <p className="reveal max-w-sm text-gray-400 font-bold text-xs uppercase tracking-widest leading-loose">
            Un equipo multidisciplinar de leyendas del baloncesto y especialistas en alto rendimiento para una formación 360º.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <div className="reveal group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 bg-neutral-100">
              <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766962810087_aaron_gordon.jpeg?alt=media&token=c7cd97ad-7a4c-40c7-b9b1-33c22bc3a234" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt="Alfonso Sánchez" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-2xl font-black uppercase italic tracking-tight mb-2">Alfonso Sánchez</h3>
            <p className="text-gold font-black text-[10px] uppercase tracking-[0.2em] mb-6">Director & Player Development</p>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider leading-relaxed">
              Exjugador ACB. Director de técnica individual con experiencia entrenando a estrellas de la NBA como Aaron Gordon.
            </p>
          </div>

          <div className="reveal group delay-100">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 bg-neutral-100">
              <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766962810087_d8dd6927-be46-44d9-a484-a812471d0aec.jpg?alt=media&token=556284d8-55cf-41d2-80ab-23a8b5127d46" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt="Fran Vázquez" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-2xl font-black uppercase italic tracking-tight mb-2">Fran Vázquez</h3>
            <p className="text-gold font-black text-[10px] uppercase tracking-[0.2em] mb-6">Interior Specialist</p>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider leading-relaxed">
              Máximo taponador histórico ACB. Leyenda del juego interior y especialista en el desarrollo de pívots de élite.
            </p>
          </div>

          <div className="reveal group delay-200">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 bg-neutral-100">
              <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_adam.jpg?alt=media&token=899fec3a-90cf-413c-9865-dbdef355232b" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt="Adam Waczynski" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-2xl font-black uppercase italic tracking-tight mb-2">Adam Waczynski</h3>
            <p className="text-gold font-black text-[10px] uppercase tracking-[0.2em] mb-6">Shooting Skill Coach</p>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider leading-relaxed">
              Referente del tiro exterior internacional. Maestro en la mecánica de tiro y eficiencia ofensiva profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCampStaff;
