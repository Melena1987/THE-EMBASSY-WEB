
import React from 'react';

const SkillCampPerformance: React.FC = () => {
  const specialists = [
    {
      name: "Adriana Rodríguez",
      role: "Fisioterapeuta y Sport Performance Coach",
      caption: "Entrenando con Franz Wagner, jugador de Orlando Magic",
      description: "Especialista en rendimiento deportivo. Aplica su experiencia profesional en el baloncesto élite para optimizar la salud física del jugador/a y su actuación en la pista.",
      image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766962810086__MPR6147.jpg?alt=media&token=bf5ec025-0efa-4f2e-b8f4-69a10a55f633"
    },
    {
      name: "Begoña Pedraza",
      role: "Pilates & Control",
      caption: "Internacional Peak Pilates Master Trainer desde 2003",
      description: "Maestra de 2º generación de Pilates. Más de 30 años de experiencia en Fitness y nuevas tendencias de entrenamiento. Directora de Pilates Studio en Higuerón Resort.",
      image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892425_Bego_a_Pedraza.jpg?alt=media&token=3c4848a4-fe92-4808-8e3c-d860cea72e5d"
    },
    {
      name: "Noe Masiá",
      role: "Dietista Deportiva",
      caption: "Noelia Masiá durante una charla de Experiencia MVP",
      description: "Jugadora profesional de baloncesto, actualmente en Liga Femenina Endesa, dietista deportiva. Ayuda a jugadores y jugadoras en su rendimiento.",
      image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_noe_masia.jpeg?alt=media&token=91379ca9-100c-48a1-b982-58a4296eb477"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-black px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="reveal mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-4">
            Health & <br className="md:hidden" /> Performance
          </h2>
        </div>
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {specialists.map((spec, idx) => (
            <div key={idx} className="reveal group flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden mb-6 bg-neutral-100">
                <img 
                  src={spec.image} 
                  alt={spec.name} 
                  className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Image Caption */}
              <p className="text-[10px] md:text-xs text-gray-400 font-medium leading-relaxed mb-6 uppercase tracking-wider">
                {spec.caption}
              </p>

              {/* Name and Role */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-black tracking-tight mb-1">{spec.name}</h3>
                <p className="text-lg md:text-xl font-light text-gray-500 leading-tight">
                  {spec.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed max-w-sm">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCampPerformance;
