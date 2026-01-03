
import React, { useEffect, useRef, useState } from 'react';

const CIBAPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const assets = {
    logo: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_LOGO-CIBA-2022.jpg?alt=media&token=f16340d8-bf38-4586-84eb-34a5f91abd30',
    hero: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_CIBA_forum.jpeg?alt=media&token=4fd454d0-0c52-4d38-8bbc-baa152c653af',
    song: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_17_-_CIBA_CANCI_N_COMPLETA.mp4?alt=media&token=b824f7f7-5aab-4100-a76e-8331d3420096',
    poster: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1767435741139_ciba_cartel.PNG?alt=media&token=59332c83-a424-4c42-9cdd-472a44000231',
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Preload hero image
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
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen font-sans selection:bg-gold overflow-x-hidden">
      
      {/* HERO SECTION - FIXED PARALLAX EFFECT */}
      <section className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        {/* Fixed Background Layer */}
        <div 
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url(${assets.hero})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed', 
          }}
        >
          {/* Elite Overlays */}
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
          {/* Subtle noise/dust effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        {/* Skeleton while loading */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-neutral-900 z-0 animate-pulse"></div>
        )}

        <div className="relative z-10 text-center px-6">
          <button 
            onClick={onBack}
            className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.4em] group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            BACK TO EVENTS
          </button>

          <div className="reveal active flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full -z-10 animate-pulse"></div>
              <img 
                src={assets.logo} 
                alt="CIBA Logo" 
                className="h-32 md:h-48 w-auto rounded-3xl shadow-2xl border border-white/10 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <h1 className="reveal active text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-6">
            CIBA <span className="text-gold">BASKETBALL</span>
          </h1>
          <p className="reveal active text-lg md:text-2xl font-light uppercase tracking-[0.2em] text-white/70 max-w-4xl mx-auto italic">
            La Convención Internacional de Baloncesto de la Costa del Sol.
          </p>
        </div>
      </section>

      {/* WHAT IS IT? */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block italic">The Convention</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-10 leading-tight">¿QUÉ ES <br/> CIBA?</h2>
            <div className="space-y-6 text-white/60 text-lg md:text-xl font-medium leading-relaxed uppercase tracking-tight">
              <p>
                Es el <span className="text-white">mayor evento deportivo anual</span> de baloncesto en la Costa del Sol. 
              </p>
              <p className="text-sm font-light leading-loose text-white/40 tracking-widest">
                Organizado por los campeones del mundo <span className="text-white">Berni Rodríguez y José Manuel Calderón</span>, con el apoyo del Ayuntamiento de Fuengirola, CIBA es el epicentro donde la formación, la competición y la fiesta del basket se unen.
              </p>
            </div>
          </div>
          
          <div className="reveal bg-white/[0.03] p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl -z-10 group-hover:bg-gold/20 transition-all"></div>
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="text-4xl">📅</div>
                <div>
                  <h4 className="text-gold text-xs font-black uppercase tracking-widest mb-1 italic">¿CUÁNDO?</h4>
                  <p className="text-xl font-black uppercase italic tracking-tighter">28 y 29 de junio, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="text-4xl">📍</div>
                <div>
                  <h4 className="text-gold text-xs font-black uppercase tracking-widest mb-1 italic">¿DÓNDE?</h4>
                  <p className="text-xl font-black uppercase italic tracking-tighter leading-tight">FUENGIROLA: PABELLÓN JUAN GÓMEZ 'JUANITO' & PALACIO DE LA PAZ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL SONG SECTION */}
      <section className="py-32 bg-gold text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8">EL RITMO <br/> DE CIBA</h2>
            <p className="text-xl font-bold uppercase tracking-widest italic opacity-80 mb-10">Siente la energía del evento con nuestra canción oficial.</p>
            <button 
              onClick={toggleSong}
              className="flex items-center gap-6 bg-black text-white px-12 py-6 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-2xl group"
            >
              {isVideoPlaying ? 'PAUSAR RITMO' : 'REPRODUCIR CANCIÓN'}
              <div className="w-8 h-8 flex items-center justify-center bg-gold rounded-full group-hover:scale-110 transition-transform">
                {isVideoPlaying ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : (
                  <svg className="w-4 h-4 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                )}
              </div>
            </button>
          </div>
          
          <div className="reveal relative aspect-video rounded-[2.5rem] overflow-hidden bg-black shadow-3xl border border-white/20">
            <video 
              ref={videoRef}
              src={assets.song} 
              className="w-full h-full object-cover"
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
            />
            {!isVideoPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer" onClick={toggleSong}>
                 <div className="w-20 h-20 border-2 border-white/50 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-8 h-8 text-white translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PARTICIPATION STATS */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="reveal group">
              <span className="text-7xl md:text-9xl font-black italic tracking-tighter text-gold group-hover:text-white transition-colors">500+</span>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-4">Jugadores Participantes</p>
            </div>
            <div className="reveal group delay-100">
              <span className="text-7xl md:text-9xl font-black italic tracking-tighter text-gold group-hover:text-white transition-colors">120</span>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-4">Equipos Inscritos</p>
            </div>
            <div className="reveal group delay-200">
              <span className="text-7xl md:text-9xl font-black italic tracking-tighter text-gold group-hover:text-white transition-colors">300</span>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-4">Partidos en 48 Horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTED ACTIVITIES */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24 reveal">
            <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block italic">The Experience</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-tight">ACTIVIDADES <br/> <span className="text-gold">DESTACADAS</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'FAN ZONE', 
                desc: 'Castillos hinchables, zona de juegos, música y animación para toda la familia durante todo el fin de semana.', 
                icon: '🎈' 
              },
              { 
                title: 'CIBA FÓRUM', 
                desc: 'Prestigiosos Premios Huella 2025 entregados a Ana Cruz, Paloma del Río y Sport Change Project.', 
                icon: '🎙️' 
              },
              { 
                title: 'OLÉ STAR', 
                desc: 'Partido espectáculo de artistas y deportistas contra la Academia 675 (diversidad funcional cognitiva).', 
                icon: '✨' 
              }
            ].map((activity, i) => (
              <div key={i} className="reveal bg-white/[0.02] p-12 rounded-[3rem] border border-white/5 hover:border-gold/30 transition-all duration-500 group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform block">{activity.icon}</div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight text-white mb-6">{activity.title}</h3>
                <p className="text-white/30 text-xs font-bold uppercase tracking-widest leading-loose">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVE & POSTER INTEGRATED */}
      <section className="py-32 bg-white text-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
          
          <div className="lg:col-span-3 reveal">
            <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-8 block italic">Our Mission</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-10 leading-none">NUESTRO <br/> <span className="text-gold">OBJETIVO</span></h2>
            <p className="text-xl md:text-3xl font-light uppercase tracking-tighter leading-relaxed text-gray-500 italic mb-12">
              PROMOVER EL BALONCESTO COMO VEHÍCULO DE <span className="text-black font-black">INTEGRACIÓN, EDUCACIÓN, SALUD E INNOVACIÓN</span> PARA TODA LA FAMILIA.
            </p>
            <div className="flex items-center gap-6 opacity-30">
               <div className="h-[1px] w-20 bg-black"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Official Vision 2025</span>
            </div>
          </div>

          <div className="lg:col-span-2 reveal flex justify-center lg:justify-end">
            <div className="relative group max-w-[320px] md:max-w-[400px]">
              <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src={assets.poster} 
                alt="CIBA Cartel 2025" 
                className="w-full h-auto rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-black/5 transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-black/5">
                <span className="text-[9px] font-black uppercase tracking-widest">Official Poster</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="galeria" className="py-24 bg-[#080808] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 reveal">
            <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block italic">The Atmosphere</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">
              GALERÍA <span className="text-gold">CIBA 2025</span>
            </h2>
          </div>

          <div className="reveal relative w-full rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
            <iframe
              src="https://galeriaoficial.app/?embed=true#/public/album/ImXLLipEdQrHJflwPKMv"
              width="100%"
              height="700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Galería: CIBA Basketball 2025"
              className="w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gold text-white text-center">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-12 leading-none">VIVE LA FIESTA <br/> DEL BASKET</h2>
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
        .shadow-3xl {
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.7);
        }
        @media (max-width: 1024px) {
          .z-0 {
            background-attachment: scroll !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CIBAPage;
