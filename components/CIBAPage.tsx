
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const CIBAPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  const assets = {
    logo: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_LOGO-CIBA-2022.jpg?alt=media&token=f16340d8-bf38-4586-84eb-34a5f91abd30',
    hero: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_CIBA_forum.jpeg?alt=media&token=4fd454d0-0c52-4d38-8bbc-baa152c653af',
    song: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_17_-_CIBA_CANCI_N_COMPLETA.mp4?alt=media&token=b824f7f7-5aab-4100-a76e-8331d3420096',
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const img = new Image();
    img.src = assets.hero;
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

  const toggleSong = () => {
    if (videoRef.current) {
      if (isVideoPlaying) { videoRef.current.pause(); } else { videoRef.current.play(); }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen font-sans selection:bg-gold overflow-x-hidden">
      <section className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        <div 
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${assets.hero})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <button onClick={onBack} className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.4em] group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {t('common', 'backEvents')}
          </button>
          <img src={assets.logo} alt="CIBA" className="h-32 md:h-48 w-auto rounded-3xl mx-auto mb-8 shadow-2xl" />
          <h1 className="reveal active text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-6">{t('ciba', 'title')}</h1>
          <p className="reveal active text-lg md:text-2xl font-light uppercase tracking-[0.2em] text-white/70 max-w-4xl mx-auto italic">{t('ciba', 'heroDesc')}</p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="reveal text-center mb-16">
          <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block italic">{t('ciba', 'subtitle')}</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-10 leading-tight">{t('ciba', 'whatIs')}</h2>
          <div className="space-y-6 text-white/60 text-lg md:text-xl font-medium leading-relaxed uppercase tracking-tight max-w-4xl mx-auto">
            <p>{t('ciba', 'intro1')}</p>
            <p className="text-sm font-light leading-loose text-white/40 tracking-widest">{t('ciba', 'intro2')}</p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gold text-white text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8">{t('ciba', 'rhythm')}</h2>
        <button onClick={toggleSong} className="flex items-center gap-6 bg-black text-white px-12 py-6 rounded-full text-xs font-black uppercase tracking-[0.4em] mx-auto shadow-2xl">
          {isVideoPlaying ? 'PAUSE RHYTHM' : 'PLAY SONG'}
        </button>
        <div className="reveal mt-16 max-w-5xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden bg-black shadow-2xl border border-white/20">
          <video ref={videoRef} src={assets.song} className="w-full h-full object-cover" onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} />
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div><span className="text-7xl md:text-9xl font-black italic tracking-tighter text-gold">500+</span><p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-4">{t('ciba', 'statsPlayers')}</p></div>
          <div><span className="text-7xl md:text-9xl font-black italic tracking-tighter text-gold">120</span><p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-4">{t('ciba', 'statsTeams')}</p></div>
          <div><span className="text-7xl md:text-9xl font-black italic tracking-tighter text-gold">300</span><p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-4">{t('ciba', 'statsGames')}</p></div>
        </div>
      </section>

      <section className="py-32 bg-[#050505] text-center">
        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none text-white">{t('ciba', 'activities')}</h2>
        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none text-white">{t('ciba', 'objective')}</h2>
        <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base font-medium uppercase tracking-[0.2em] leading-relaxed">{t('ciba', 'objDesc')}</p>
      </section>

      <section className="py-32 bg-gold text-white text-center">
        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-12 leading-none">{t('ciba', 'cta')}</h2>
        <button onClick={onBack} className="inline-flex items-center gap-6 bg-black text-white px-16 py-8 rounded-full text-sm font-black uppercase tracking-[0.4em] shadow-2xl">
          {t('common', 'backEvents')}
        </button>
      </section>
    </div>
  );
};

export default CIBAPage;
