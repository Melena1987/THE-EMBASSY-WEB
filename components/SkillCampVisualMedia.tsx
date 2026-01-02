
import React from 'react';

const SkillCampVisualMedia: React.FC = () => {
  const raisaImg = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_WhatsApp_Image_2025-11-27_at_15.19.57.jpeg?alt=media&token=f4f4638d-2fe0-4b11-a268-6ad6ebbaa6c6";
  
  const galleryImages = [
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_050.jpg?alt=media&token=91bbf74f-6cad-4f7c-9bfb-8c020278973a",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_036.jpg?alt=media&token=e35e2655-a8cb-4db4-b527-54e76095b763",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_019.jpg?alt=media&token=6bf0b512-e239-4863-af3c-3455d7c77f7a"
  ];

  return (
    <section className="py-24 md:py-32 bg-black text-white px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header & Portrait Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="reveal flex-1">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-16 uppercase italic">
              Visual Media
            </h2>
            
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter">Raisa Pozo</h3>
              <p className="text-lg md:text-xl font-light text-white/60 leading-relaxed max-w-md uppercase">
                Fotógrafa profesional con experiencia en ACB y Euroliga.
              </p>
              <p className="text-lg md:text-xl font-black text-white leading-relaxed max-w-md uppercase tracking-tighter">
                &gt;&gt; Incluye pack de fotos profesionales entrenando.
              </p>
            </div>
          </div>

          <div className="reveal relative shrink-0">
             <div className="w-[300px] md:w-[400px] aspect-[3/4] overflow-hidden rounded-3xl relative">
                <img 
                  src={raisaImg} 
                  alt="Raisa Pozo" 
                  className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-transform duration-700"
                />
                {/* Decorative R */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm w-16 h-16 flex items-center justify-center rounded-xl border border-white/10">
                  <span className="text-4xl font-black italic">R</span>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Horizontal Gallery Section */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div key={i} className="aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer">
              <img 
                src={img} 
                alt={`Skill Camp Moment ${i + 1}`} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillCampVisualMedia;
