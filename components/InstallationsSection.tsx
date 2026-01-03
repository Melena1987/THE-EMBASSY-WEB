
import React from 'react';
import InstallationCarousel from './InstallationCarousel.tsx';
import { LOGOS } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

const InstallationsSection: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    { title: t('installations', 'point1_title'), desc: t('installations', 'point1_desc') },
    { title: t('installations', 'point2_title'), desc: t('installations', 'point2_desc') },
    { title: t('installations', 'point3_title'), desc: t('installations', 'point3_desc') },
    { title: t('installations', 'point4_title'), desc: t('installations', 'point4_desc') }
  ];

  return (
    <section id="instalaciones" className="py-32 bg-white text-black overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal order-2 lg:order-1 relative group">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(212,140,0,0.15)] relative z-10">
              <InstallationCarousel />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] rotate-[4deg] group-hover:rotate-0 transition-all duration-500 hidden md:flex flex-col items-center gap-2 border border-black/5 z-20">
              <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761953861247_fiba.png?alt=media&token=9bfb33df-5c09-4d97-a105-72d20dad3436" className="h-14 w-auto object-contain" alt="FIBA Logo" />
              <div className="h-[2px] w-8 bg-gold mb-1"></div>
              <p className="text-black font-black uppercase tracking-tighter text-[10px] italic">{t('installations', 'fibaBadge')}</p>
            </div>
          </div>
          <div className="reveal order-1 lg:order-2">
            <span className="text-gold text-xs font-black tracking-[0.4em] uppercase mb-6 block italic">{t('installations', 'subtitle')}</span>
            <div className="mb-10">
              <img src={LOGOS.sanctuary} alt="THE SANCTUARY" className="h-24 md:h-36 w-auto object-contain" />
            </div>
            <div className="space-y-10">
              <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-xl uppercase tracking-tight" dangerouslySetInnerHTML={{ __html: t('installations', 'desc').replace('THE EMBASSY', '<span className="text-black font-black">THE EMBASSY</span>') }} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {items.map((item, i) => (
                  <div key={i} className="group">
                    <div className="w-12 h-[3px] bg-black mb-5 group-hover:bg-gold group-hover:w-full transition-all duration-700"></div>
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2 group-hover:text-gold transition-colors italic">{item.title}</h4>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationsSection;
