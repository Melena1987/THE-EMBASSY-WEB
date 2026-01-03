
import React, { useEffect, useRef, useState } from 'react';
import { LOGOS } from '../constants';

const TheSanctuaryPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const assets = {
    heroBg: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716__DSC7048_edited.jpg?alt=media&token=cb61fbf4-d4ab-4c2e-85a9-38ca402943e9',
    nbpaLogo: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_image_400x400.png?alt=media&token=3636d6d6-919c-4894-ba8b-8913a60154dd',
    video1: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_23_-_Day_one_at_The_Sanctuary__.mp4?alt=media&token=5486d63a-2b4b-4b19-a452-8f70a7dcef84',
    video2: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_22_-_Year_four_____The_NBPA_is_in_Andaluc_a_this_week_for_The_Sanctuary__an_offseason_performance_ret.mp4?alt=media&token=ec2114a8-552f-4baf-919d-bfaf9428f481'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Preload hero image
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

  const activities = [
    { title: 'Performance', desc: 'Entrenamientos de alto rendimiento en instalaciones de primer nivel.', icon: '🏀' },
    { title: 'Recovery', desc: 'Sesiones de recuperación y tecnología deportiva avanzada.', icon: '⚡' },
    { title: 'Mental Health', desc: 'Yoga y bienestar mental enfocados en flexibilidad y concentración.', icon: '🧘' },
    { title: 'Networking', desc: 'Encuentros entre jugadores, técnicos, ejecutivos y empresas tech.', icon: '🤝' }
  ];

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen selection:bg-gold overflow-x-hidden">
      
      {/* HERO SECTION - REPLICA SKILL CAMP EFFECT */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div 
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url(${assets.heroBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Overlay to match high-performance aesthetic */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
        </div>

        {/* Skeleton while loading */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-neutral-900 z-0 animate-pulse"></div>
        )}
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <button 
            onClick={onBack}
            className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.4em] group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            BACK TO EVENTS
          </button>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12 reveal active">
            <img src={LOGOS.main} className="h-10 md:h-16 w-auto brightness-0 invert" alt="The Embassy" />
            <div className="hidden md:block w-[1px] h-12 bg-white/20"></div>
            <img src={assets.nbpaLogo} className="h-16 md:h-24 w-auto" alt="NBPA" />
          </div>

          <h1 className="reveal active text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-6">
            THE <span className="text-gold">SANCTUARY</span>
          </h1>
          <p className="reveal active text-lg md:text-2xl font-light uppercase tracking-[0.2em] text-white/70 max-w-3xl mx-auto italic">
            EL PROGRAMA GLOBAL DE ALTO RENDIMIENTO DE LA NBPA EN ANDALUCÍA.
          </p>
        </div>

        {/* Removed Scroll indicator div as requested */}
      </section>

      {/* INTRO: WHAT & WHERE */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block italic">The Concept</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">¿QUÉ ES <br/> THE SANCTUARY?</h2>
            <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed mb-8 uppercase tracking-tight">
              The Sanctuary es el programa deportivo‑cultural organizado por la <span className="text-white">NBPA (National Basketball Players Association)</span> y la Junta de Andalucía, que transforma The Embassy Fuengirola en un centro global de alto rendimiento e innovación durante una semana.
            </p>
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
              <h4 className="text-gold text-xs font-black uppercase tracking-widest mb-4 italic">Ubicación de Élite</h4>
              <p className="text-sm font-light text-white/70 uppercase tracking-widest leading-loose">
                Celebrado en el Training Center Fuengirola‑Higuerón: centro homologado por la FIBA con máxima discreción y trato VIP para los atletas de la NBA.
              </p>
            </div>
          </div>
          <div className="reveal grid grid-cols-1 gap-6">
            <div className="aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative group">
              <video src={assets.video1} autoPlay muted loop playsInline className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative group lg:ml-12">
              <video src={assets.video2} autoPlay muted loop playsInline className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS: IMPACT 2025 */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="reveal">
              <span className="text-gold text-xs font-black tracking-[0.4em] uppercase mb-4 block italic">Edición 2025</span>
              <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">IMPACTO <br/> GLOBAL</h2>
            </div>
            <div className="reveal bg-black text-white p-8 rounded-3xl md:max-w-sm">
               <span className="text-gold text-4xl font-black italic tracking-tighter">$4.5M</span>
               <p className="text-[10px] font-black uppercase tracking-widest mt-2 opacity-60">Valoración del impacto mediático estimado por la Junta de Andalucía.</p>
            </div>
          </div>

          <div className="reveal mb-24">
            <p className="text-2xl md:text-4xl font-light uppercase tracking-tighter leading-tight text-gray-400 mb-12">
              PARTICIPACIÓN DE ESTRELLAS COMO <span className="text-black font-black">JAYLEN BROWN</span>, <span className="text-black font-black">ERIC GORDON</span>, <span className="text-black font-black">LOS HERMANOS THOMPSON</span>, DAVION MITCHELL Y MÁS.
            </p>
            <div className="h-[2px] w-full bg-black/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {activities.map((act, i) => (
              <div key={i} className="reveal group">
                <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500 block">{act.icon}</div>
                <h3 className="text-xl font-black uppercase italic tracking-tight mb-4">{act.title}</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESSENCE SECTION */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-10 block italic">En Esencia</span>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-[1.2] mb-12">
            UNA COMBINACIÓN ÚNICA DE DESARROLLO FÍSICO, MENTAL Y CULTURAL EN UN ENTORNO EXCLUSIVO, POSICIONANDO A ANDALUCÍA COMO DESTINO DEPORTIVO GLOBAL.
          </h2>
          <div className="flex justify-center gap-12 items-center opacity-30">
            <img src={LOGOS.main} className="h-8 brightness-0 invert" alt="Embassy" />
            <img src={assets.nbpaLogo} className="h-12" alt="NBPA" />
          </div>
        </div>
        
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-white/[0.02] italic pointer-events-none select-none z-0">
          ANDALUCÍA
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="galeria" className="py-24 bg-[#080808] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 reveal">
            <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block italic">The Stars in Action</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">
              GALERÍA <span className="text-gold">STARS</span>
            </h2>
          </div>

          <div className="reveal relative w-full rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
            <iframe
              src="https://galeriaoficial.app/?embed=true#/public/album/vJfcZORDnIw51aUSeMI9"
              width="100%"
              height="700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Galería: THE EMBASSY Stars"
              className="w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gold text-white text-center">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-12 leading-none">EL SANTUARIO <br/> DEL RENDIMIENTO</h2>
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-6 bg-black text-white px-16 py-8 rounded-full text-sm font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-2xl"
          >
            VOLVER A EVENTOS
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .z-0 {
            background-attachment: scroll !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TheSanctuaryPage;
