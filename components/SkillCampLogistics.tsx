
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const SkillCampLogistics: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-32 md:py-48 bg-black overflow-hidden flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Main Heading Group */}
        <div className="reveal mb-12">
          <h2 className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4">
            THE EMBASSY
          </h2>
          <h3 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none text-white">
            {t('skillcamp', 'title')}
          </h3>
        </div>

        {/* Description Text */}
        <div className="reveal space-y-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed tracking-tight uppercase">
            {t('skillcamp', 'logistics1')}
          </p>

          <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed tracking-tight uppercase">
            {t('skillcamp', 'logistics2')}
          </p>
        </div>

        {/* CTA Button Group */}
        <div className="reveal mt-16 flex flex-col items-center gap-8">
          <a 
            href="#galeria" 
            className="bg-gold text-white px-12 py-5 rounded-none font-black uppercase tracking-[0.1em] text-sm md:text-base hover:bg-white hover:text-black transition-all shadow-2xl"
          >
            {t('skillcamp', 'gallery')}
          </a>
          
          {/* Subtle scroll indicator for this section */}
          <div className="mt-8 flex flex-col items-center gap-4 opacity-20">
            <div className="w-[1px] h-12 bg-white"></div>
          </div>
        </div>

      </div>

      {/* Decorative background typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] italic pointer-events-none select-none -z-0">
        ELITE
      </div>
    </section>
  );
};

export default SkillCampLogistics;
