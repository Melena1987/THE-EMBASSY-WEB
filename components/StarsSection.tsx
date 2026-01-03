
import React from 'react';
import StarsCarousel from './StarsCarousel.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

const StarsSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-black overflow-hidden flex flex-col justify-center min-h-[70vh]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-10 md:mb-16 reveal">
        <span className="text-gold text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mb-6 md:mb-10 block italic">{t('stars', 'subtitle')}</span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black italic uppercase tracking-tighter text-white leading-[1.2] max-w-4xl mx-auto">
          {t('stars', 'desc')}
        </h2>
      </div>
      <div className="reveal active">
        <StarsCarousel />
      </div>
    </section>
  );
};

export default StarsSection;
