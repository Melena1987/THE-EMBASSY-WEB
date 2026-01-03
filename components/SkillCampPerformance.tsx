
import React, { useRef, useState } from 'react';

const SkillCampPerformance: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const specialists = [
    {
      name: "Adriana Rodríguez",
      role: "Fisioterapeuta y Sport Performance Coach",
      caption: "Entrenando con Franz Wagner, jugador de Orlando Magic",
      description: "Especialista en rendimiento deportivo. Aplica su experiencia profesional para optimizar la salud física del jugador/a.",
      image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766962810086__MPR6147.jpg?alt=media&token=bf5ec025-0efa-4f2e-b8f4-69a10a55f633"
    },
    {
      name: "Begoña Pedraza",
      role: "Pilates & Control",
      caption: "Internacional Peak Pilates Master Trainer desde 2003",
      description: "Maestra de 2º generación de Pilates. Más de 30 años de experiencia en Fitness y nuevas tendencias.",
      image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892425_Bego_a_Pedraza.jpg?alt=media&token=3c4848a4-fe92-4808-8e3c-d860cea72e5d"
    },
    {
      name: "Noe Masiá",
      role: "Dietista Deportiva",
      caption: "Noelia Masiá durante una charla de Experiencia MVP",
      description: "Jugadora profesional de baloncesto en Liga Femenina Endesa y dietista deportiva especializada en rendimiento.",
      image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_noe_masia.jpeg?alt=media&token=91379ca9-100c-48a1-b982-58a4296eb477"
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
    <section className="py-24 md:py-32 bg-white text-black px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-4">
            Health & <br className="md:hidden" /> Performance
          </h2>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-3 gap-8 md:gap-16 lg:gap-24 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0"
          >
            {specialists.map((spec, idx) => (
              <div key={idx} className="reveal flex-none w-[85vw] md:w-auto snap-center group flex flex-col">
                <div className="relative aspect-square overflow-hidden mb-6 bg-neutral-100">
                  <img src={spec.image} alt={spec.name} className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-[10px] md:text-xs text-gray-400 font-bold leading-relaxed mb-6 uppercase tracking-wider">{spec.caption}</p>
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-black tracking-tight mb-1">{spec.name}</h3>
                  <p className="text-lg md:text-xl font-light text-gray-500 leading-tight">{spec.role}</p>
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed max-w-sm">{spec.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:hidden items-center gap-6 mt-8">
            <div className="flex justify-center gap-2">
              {specialists.map((_, i) => (
                <button key={i} onClick={() => scrollToIndex(i)} className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-gold' : 'w-2 bg-white/20'}`} />
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={() => scrollToIndex(activeIndex - 1)} disabled={activeIndex === 0} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center disabled:opacity-20 text-gold">
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button onClick={() => scrollToIndex(activeIndex + 1)} disabled={activeIndex === specialists.length - 1} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center disabled:opacity-20 text-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCampPerformance;