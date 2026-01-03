
import React, { useEffect, useRef, useState } from 'react';
import { LOGOS } from '../constants';
import { useLanguage } from '../context/LanguageContext.tsx';

const TeamBuildingPage: React.FC<{ onBack: () => void, onContact?: () => void }> = ({ onBack, onContact }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen selection:bg-gold overflow-x-hidden font-sans">
      <section className="relative h-[85svh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_031.jpg?alt=media&token=1484f778-a8dd-4cff-9e23-780295ae2092" className="w-full h-full object-cover opacity-40 grayscale" alt="Court" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <button onClick={onBack} className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.4em] group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {t('common', 'backHub')}
          </button>
          <span className="reveal active text-white text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">{t('teambuilding', 'subtitle')}</span>
          <h1 className="reveal active text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-6">{t('teambuilding', 'title')}</h1>
          <p className="reveal active text-lg md:text-2xl font-light uppercase tracking-[0.2em] text-white/70 max-w-4xl mx-auto italic">{t('teambuilding', 'heroDesc')}</p>
        </div>
      </section>

      <section className="py-32 bg-white text-black text-center px-6">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">{t('teambuilding', 'philosophyTitle')}</h2>
        <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8 uppercase tracking-tight max-w-4xl mx-auto">{t('teambuilding', 'philosophyDesc')}</p>
      </section>

      <section className="py-32 bg-[#050505] text-center px-6">
        <div className="max-w-4xl mx-auto relative space-y-4">
          <div className="bg-gold/10 border border-gold/40 p-10 rounded-t-[5rem] mx-auto max-w-[400px]"><h3 className="text-2xl font-black uppercase italic tracking-tight text-gold">{t('teambuilding', 'pyramid1')}</h3></div>
          <div className="bg-white/[0.03] border border-white/10 p-12 mx-auto max-w-[700px]"><h3 className="text-2xl font-black uppercase italic tracking-tight text-white">{t('teambuilding', 'pyramid2')}</h3></div>
          <div className="bg-white/[0.01] border border-white/5 p-14 rounded-b-[2rem] mx-auto max-w-full"><h3 className="text-2xl font-black uppercase italic tracking-tight text-white">{t('teambuilding', 'pyramid3')}</h3></div>
        </div>
      </section>

      <section className="py-32 bg-gold text-white text-center">
        <h2 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter mb-12 leading-none">{t('teambuilding', 'cta')}</h2>
        <button onClick={() => onContact ? onContact() : (window.location.href = '#contacto')} className="inline-flex items-center gap-6 bg-black text-white px-16 py-8 rounded-full text-sm font-black uppercase tracking-[0.4em] shadow-2xl">
          REQUEST QUOTE
        </button>
      </section>
    </div>
  );
};

export default TeamBuildingPage;
