
import React, { useEffect, useRef, useState } from 'react';
import { LOGOS } from '../constants';
import { useLanguage } from '../context/LanguageContext.tsx';

const TheSanctuaryPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  const assets = {
    heroBg: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716__DSC7048_edited.jpg?alt=media&token=cb61fbf4-d4ab-4c2e-85a9-38ca402943e9',
    nbpaLogo: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_image_400x400.png?alt=media&token=3636d6d6-919c-4894-ba8b-8913a60154dd',
    video1: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_23_-_Day_one_at_The_Sanctuary__.mp4?alt=media&token=5486d63a-2b4b-4b19-a452-8f70a7dcef84',
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const img = new Image();
    img.src = assets.heroBg;
    img.onload = () => setIsLoaded(true);

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
    <div ref={sectionRef} className="bg-black text-white min-h-screen selection:bg-gold overflow-x-hidden">
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div 
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${assets.heroBg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <button onClick={onBack} className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.4em] group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {t('common', 'backEvents')}
          </button>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12 reveal active">
            <img src={LOGOS.main} className="h-10 md:h-16 w-auto brightness-0 invert" alt="Embassy" />
            <img src={assets.nbpaLogo} className="h-16 md:h-24 w-auto" alt="NBPA" />
          </div>
          <h1 className="reveal active text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-6">{t('sanctuary', 'title')}</h1>
          <p className="reveal active text-lg md:text-2xl font-light uppercase tracking-[0.2em] text-white/70 max-w-3xl mx-auto italic">{t('sanctuary', 'heroDesc')}</p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="reveal text-center">
          <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block italic">The Concept</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">{t('sanctuary', 'whatIs')}</h2>
          <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed mb-8 uppercase tracking-tight">{t('sanctuary', 'intro')}</p>
        </div>
      </section>

      <section className="py-32 bg-white text-black text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8">{t('sanctuary', 'impact')}</h2>
        <p className="text-2xl md:text-4xl font-light uppercase tracking-tighter leading-tight text-gray-400 mb-12">{t('sanctuary', 'essence')}</p>
      </section>

      <section className="py-32 bg-gold text-white text-center">
        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-12 leading-none">{t('sanctuary', 'cta')}</h2>
        <button onClick={onBack} className="inline-flex items-center gap-6 bg-black text-white px-16 py-8 rounded-full text-sm font-black uppercase tracking-[0.4em] shadow-2xl">
          {t('common', 'backEvents')}
        </button>
      </section>
    </div>
  );
};

export default TheSanctuaryPage;
