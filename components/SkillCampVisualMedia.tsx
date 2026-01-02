
import React from 'react';

const SkillCampVisualMedia: React.FC = () => {
  // Imagen principal que representa el estilo de Raisa (Enfoque en detalle/acción)
  const raisaImg = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_WhatsApp_Image_2025-11-27_at_15.19.57.jpeg?alt=media&token=f4f4638d-2fe0-4b11-a268-6ad6ebbaa6c6";
  
  // Selección de fotos del Skill Camp (Acción, Técnica y Ambiente)
  const galleryImages = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_050.jpg?alt=media&token=91bbf74f-6cad-4f7c-9bfb-8c020278973a",
      caption: "Intensidad en pista"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_031.jpg?alt=media&token=1484f778-a8dd-4cff-9e23-780295ae2092",
      caption: "Técnica individual"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_025.jpg?alt=media&token=0734f083-4749-4a46-9f88-f6ee7bfd0f53",
      caption: "Visión de juego"
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-black text-white px-6 md:px-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-16">
          <div className="reveal flex-1 space-y-8">
            <div className="inline-block px-4 py-1 bg-gold/10 border border-gold/20 rounded-full">
              <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase">Behind the lens</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic">
              VISUAL <br/> <span className="text-gold">CONTENT</span>
            </h2>
            
            <div className="space-y-6 pt-6">
              <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter flex items-center gap-4">
                Raisa Pozo
                <span className="h-[2px] w-12 bg-gold"></span>
              </h3>
              <p className="text-lg md:text-xl font-light text-white/50 leading-relaxed max-w-md uppercase tracking-wide">
                Fotógrafa oficial de <span className="text-white">The Embassy</span>. Capturando la esencia del baloncesto profesional con una estética cinematográfica única.
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 inline-block">
                <p className="text-sm font-black text-gold uppercase tracking-[0.2em] italic">
                   &gt;&gt; PACK FOTOGRÁFICO INCLUIDO
                </p>
                <p className="text-[10px] text-white/40 uppercase mt-2 tracking-widest font-bold">
                  Documentación profesional de cada jugador durante el campus.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal relative shrink-0">
             <div className="w-full max-w-[450px] aspect-[3/4] overflow-hidden rounded-[3rem] relative group shadow-[0_50px_100px_-20px_rgba(212,140,0,0.2)]">
                <img 
                  src={raisaImg} 
                  alt="Raisa Pozo Photography Style" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Visual Accent */}
                <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-gold/50 rounded-tr-3xl"></div>
                <div className="absolute bottom-8 left-8">
                   <span className="text-4xl font-black italic text-white/20 select-none">POZO</span>
                </div>
             </div>
          </div>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-[2.5rem] group cursor-crosshair shadow-2xl ${i === 1 ? 'md:translate-y-12' : ''}`}
            >
              <div className="aspect-[4/5] w-full">
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                <div className="border border-white/20 p-6 w-full h-full flex flex-col justify-end items-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold mb-2">Skill Camp 2025</span>
                   <h4 className="text-xl font-black uppercase italic tracking-tighter">{img.caption}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillCampVisualMedia;
