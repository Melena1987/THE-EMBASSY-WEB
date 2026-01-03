
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const SkillCampVisualMedia: React.FC = () => {
  const { t } = useLanguage();
  const raisaImg = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_WhatsApp_Image_2025-11-27_at_15.19.57.jpeg?alt=media&token=f4f4638d-2fe0-4b11-a268-6ad6ebbaa6c6";
  
  const raisaTapeImages = [
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766996005556__DSC3692_400x400.jpg?alt=media&token=36954a7d-1107-4cc9-bd5e-ae08c978552b",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766913363907__DSC4913_400x400.jpg?alt=media&token=26aeb33a-6bba-49f9-9da0-6d89a75da6d6",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766913363908__DSC6927_400x400.jpg?alt=media&token=0e66c325-4350-49ba-8cd8-24e2480b4216",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766913363908__DSC5169_400x400.jpg?alt=media&token=838be6b0-6dda-4c0b-9e7b-a9f5e606b4e2",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766784932279__DSC3650_400x400.jpg?alt=media&token=922220e0-a82a-4abc-960e-07b7082d1201"
  ];

  const duplicatedTape = [...raisaTapeImages, ...raisaTapeImages, ...raisaTapeImages];

  return (
    <section className="py-24 md:py-40 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-center mb-32 gap-16">
          <div className="reveal flex-1 space-y-8">
            <div className="inline-block px-4 py-1 bg-gold/10 border border-gold/20 rounded-full">
              <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase">Behind the lens</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic">
              {t('skillcamp', 'raisaTitle')}
            </h2>
            
            <div className="space-y-6 pt-6">
              <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter flex items-center gap-4">
                Raisa Pozo
                <span className="h-[2px] w-12 bg-gold"></span>
              </h3>
              <p className="text-lg md:text-xl font-light text-white/50 leading-relaxed max-w-md uppercase tracking-wide">
                {t('skillcamp', 'raisaDesc')}
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 inline-block">
                <p className="text-sm font-black text-gold uppercase tracking-[0.2em] italic">
                   &gt;&gt; {t('skillcamp', 'pack')}
                </p>
                <p className="text-[10px] text-white/40 uppercase mt-2 tracking-widest font-bold">
                  {t('skillcamp', 'packDesc')}
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
                <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-gold/50 rounded-tr-3xl"></div>
                <div className="absolute bottom-8 left-8">
                   <span className="text-4xl font-black italic text-white/20 select-none">POZO</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="reveal w-full relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] py-10">
          {duplicatedTape.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 px-3 w-[280px] md:w-[400px]">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 group relative">
                <img 
                  src={src} 
                  alt={`Raisa Pozo Shot ${idx}`} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-400px * ${raisaTapeImages.length} - 1.5rem * ${raisaTapeImages.length})); }
        }
        @media (max-width: 768px) {
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-280px * ${raisaTapeImages.length} - 1.5rem * ${raisaTapeImages.length})); }
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillCampVisualMedia;
