
import React, { useEffect, useRef, useState } from 'react';
import { LOGOS } from '../constants';
import { useLanguage } from '../context/LanguageContext.tsx';

const MVPPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  const assets = {
    heroBg: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_Experiencia_MVP.jpg?alt=media&token=9fa58bde-4463-48ac-aff5-079fbee35486',
    secondaryImg: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1767434979651_experiencia_MVP.png?alt=media&token=634c8622-a6c2-4ade-ab87-f1b2611d4dbd',
    video: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_15_-_Testimonios_MVP_2025.mp4?alt=media&token=b96cbae8-b2bd-4add-a60c-62bfa5ae0acf',
    andaluciaLogo: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961908083_Logo_Andaluc_a___Junta.png?alt=media&token=270b8c03-9c10-4cda-a299-1c0e790c997a',
    berniPhoto: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892425_Berni_Rodr_guez_THE_EMBASSY_400x400.jpg?alt=media&token=839e65db-8149-4bf4-89ec-b4e595fa33ba'
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

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) { videoRef.current.pause(); } else { videoRef.current.play(); }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen selection:bg-gold overflow-x-hidden font-sans">
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div 
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${assets.heroBg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <button onClick={onBack} className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.4em] group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {t('common', 'backEvents')}
          </button>
          <div className="flex flex-col items-center justify-center gap-6 mb-8 reveal active">
            <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md">
              <img src={assets.andaluciaLogo} alt="Andalucía" className="h-6 w-auto brightness-0 invert" />
              <div className="w-[1px] h-4 bg-white/20"></div>
              <span className="text-gold text-[10px] font-black tracking-[0.6em] uppercase italic">{t('mvp', 'subtitle')}</span>
            </div>
          </div>
          <h1 className="reveal active text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-6">{t('mvp', 'title')}</h1>
          <p className="reveal active text-lg md:text-2xl font-light uppercase tracking-[0.2em] text-white/70 max-w-3xl mx-auto italic">{t('mvp', 'heroDesc')}</p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal relative group">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative"><img src={assets.secondaryImg} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Action" /></div>
          </div>
          <div className="reveal">
            <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block italic">Elite Clinics</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">{t('mvp', 'whatIs')}</h2>
            <div className="space-y-6 text-white/60 text-lg md:text-xl font-medium leading-relaxed uppercase tracking-tight">
              <p>{t('mvp', 'intro1')}</p>
              <p className="text-sm font-light leading-loose text-white/40 tracking-widest">{t('mvp', 'intro2')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white text-black text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8">{t('mvp', 'testimonials')}</h2>
        <div onClick={handlePlayVideo} className="reveal relative aspect-video max-w-5xl mx-auto rounded-[3rem] overflow-hidden bg-black group cursor-pointer shadow-2xl">
          <video ref={videoRef} src={assets.video} className="w-full h-full object-cover" controls={isVideoPlaying} poster={assets.heroBg} />
        </div>
      </section>

      <section className="py-32 bg-[#050505] text-center">
        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-12 leading-none text-white">{t('mvp', 'philosophy')}</h2>
        <p className="text-white/40 text-lg uppercase tracking-widest mb-16 italic font-medium">{t('mvp', 'philosophyDesc')}</p>
      </section>

      <section className="py-32 bg-gold text-white text-center">
        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-12 leading-none">{t('mvp', 'cta')}</h2>
        <button onClick={onBack} className="inline-flex items-center gap-6 bg-black text-white px-16 py-8 rounded-full text-sm font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-2xl">
          {t('common', 'backEvents')}
        </button>
      </section>
    </div>
  );
};

export default MVPPage;
