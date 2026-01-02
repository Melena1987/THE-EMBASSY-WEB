
import React from 'react';

const SkillCampVenueInfo: React.FC = () => {
  const bgImage = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_015.jpg?alt=media&token=2d4244b8-f480-4ff3-adc1-dfc165edaa3a";

  return (
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden py-20">
      {/* Fixed-like Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          className="w-full h-full object-cover brightness-75"
          alt="The Embassy Training Center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Central Info Card */}
      <div className="relative z-10 w-full max-w-4xl mx-6 reveal">
        <div className="bg-white text-black p-10 md:p-24 shadow-2xl text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-[0.2em] mb-4">
            THE EMBASSY
          </h2>
          
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-sm md:text-lg font-medium leading-relaxed tracking-tight text-gray-800">
              Entrena como los profesionales en un centro de <br className="hidden md:block" />
              vanguardia con estándares NBA en la Costa del Sol.
            </p>
            
            <p className="text-sm md:text-lg font-black uppercase tracking-tight">
              THE EMBASSY en Fuengirola, Málaga.
            </p>

            <div className="text-gray-400 text-lg">-</div>

            <div className="space-y-2">
              <p className="text-sm md:text-lg font-medium">
                Fechas del <span className="font-black">26 al 30 de diciembre.</span>
              </p>
              <p className="text-sm md:text-lg font-medium">
                Horarios de las sesiones de <span className="font-black">15:30 a 19:30.</span>
              </p>
            </div>

            <div className="text-gray-400 text-lg">-</div>

            <p className="text-sm md:text-lg font-medium">
              <span className="font-black">Categorías Cadete, Junior y Sub 22</span>, desde 2003 a 2011
            </p>
          </div>

          <div className="pt-10">
            <a 
              href="#equipo"
              className="inline-block bg-[#D35400] text-white px-10 py-4 font-black uppercase tracking-[0.1em] text-xs hover:bg-orange-700 transition-all shadow-xl"
            >
              Descubre el Staff Técnico
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCampVenueInfo;
