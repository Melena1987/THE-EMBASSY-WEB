
import React, { useRef, useState } from 'react';

const SkillCampStaff: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const staff = [
    {
      name: "Alfonso Sánchez",
      role: "Director y Entrenador",
      image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766962810087_aaron_gordon.jpeg?alt=media&token=c7cd97ad-7a4c-40c7-b9b1-33c22bc3a234",
      caption: "Aaron Gordon (Denver Nuggets) entrenando con Alfonso Sánchez.",
      desc: "Exjugador de baloncesto profesional. Entrenador de desarrollo en The Embassy y Director de técnica individual en Academia 675."
    },
    {
      name: "Fran Vázquez",
      role: "Entrenador",
      image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766962810087_d8dd6927-be46-44d9-a484-a812471d0aec.jpg?alt=media&token=556284d8-55cf-41d2-80ab-23a8b5127d46",
      caption: "Fran Vázquez con Alberto Díaz (Selección Española).",
      desc: "Máximo taponador histórico ACB y campeón de Euroliga. Especialista en desarrollo de jugadores interiores."
    },
    {
      name: "Adam Waczynski",
      role: "Entrenador",
      image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_adam.jpg?alt=media&token=899fec3a-90cf-413c-9865-dbdef355232b",
      caption: "Adam Waczynski en su campus en Polonia.",
      desc: "Exjugador profesional 5x5, integrante de The Embassy 3x3. Shooting Skill Coach de élite."
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.children[0].clientWidth + 32;
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].clientWidth + 32;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

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
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0"
          >
            {staff.map((member, idx) => (
              <div key={idx} className="reveal flex-none w-[85vw] md:w-auto snap-center group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-6 bg-neutral-100">
                  <img src={member.image} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-6 leading-relaxed">
                  {member.caption}
                </p>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-2">{member.name}</h3>
                <p className="text-gold font-black text-[10px] uppercase tracking-[0.2em] mb-6">{member.role}</p>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:hidden items-center gap-6 mt-8">
            <div className="flex justify-center gap-2">
              {staff.map((_, i) => (
                <button key={i} onClick={() => scrollToIndex(i)} className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-gold' : 'w-2 bg-white/20'}`} />
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={() => scrollToIndex(activeIndex - 1)} disabled={activeIndex === 0} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center disabled:opacity-20 text-gold">
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button onClick={() => scrollToIndex(activeIndex + 1)} disabled={activeIndex === staff.length - 1} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center disabled:opacity-20 text-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCampStaff;