
import React, { useEffect, useRef, useState } from 'react';
import { LOGOS } from '../constants';

const MVPPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const assets = {
    heroBg: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_Experiencia_MVP.jpg?alt=media&token=9fa58bde-4463-48ac-aff5-079fbee35486',
    secondaryImg: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1767434979651_experiencia_MVP.png?alt=media&token=634c8622-a6c2-4ade-ab87-f1b2611d4dbd',
    video: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_15_-_Testimonios_MVP_2025.mp4?alt=media&token=b96cbae8-b2bd-4add-a60c-62bfa5ae0acf',
    academia675Logo: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_Captura_de_pantalla_2025-09-07_210933_edited_400x400.png?alt=media&token=78acf2f8-433f-4b85-ad38-2227080e6f2b',
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
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen selection:bg-gold overflow-x-hidden font-sans">
      
      {/* HERO SECTION - PARALLAX EFFECT */}
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
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
        </div>

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

          <div className="flex flex-col items-center justify-center gap-6 mb-8 reveal active">
            <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md">
              <img src={assets.andaluciaLogo} alt="Junta de Andalucía" className="h-6 w-auto brightness-0 invert" />
              <div className="w-[1px] h-4 bg-white/20"></div>
              <span className="text-gold text-[10px] font-black tracking-[0.6em] uppercase italic">
                TALENT PROGRAM
              </span>
            </div>
          </div>

          <h1 className="reveal active text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-6">
            EXPERIENCIA <span className="text-gold">MVP</span>
          </h1>
          <p className="reveal active text-lg md:text-2xl font-light uppercase tracking-[0.2em] text-white/70 max-w-3xl mx-auto italic">
            DONDE EL TALENTO ANDALUZ SE ENCUENTRA CON LA ÉLITE.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal order-2 lg:order-1 relative group">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img src={assets.secondaryImg} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Experiencia MVP Action" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/20 rounded-[3rem] -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-700"></div>
          </div>
          <div className="reveal order-1 lg:order-2">
            <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block italic">Elite Clinics</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">¿QUÉ ES <br/> EXPERIENCIA MVP?</h2>
            <div className="space-y-6 text-white/60 text-lg md:text-xl font-medium leading-relaxed uppercase tracking-tight">
              <p>
                Son campus y clínics de <span className="text-white">tecnificación avanzada</span>. No es solo jugar; es una inmersión total diseñada para perfeccionar habilidades técnicas y tácticas esenciales: <span className="text-gold">tiro, bote, pase y defensa</span>.
              </p>
              <p className="text-sm font-light leading-loose text-white/40 tracking-widest">
                Dirigido a jóvenes talentos (generalmente de 9 a 14 años), el programa busca elevar el nivel competitivo a través del rigor y la excelencia técnica en el entorno más profesional de Europa.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-8">
               <div className="flex items-center gap-6 group">
                 <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/50 transition-all duration-500 group-hover:scale-110 group-hover:border-gold">
                   <img src={assets.berniPhoto} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Berni Rodríguez" />
                 </div>
                 <div className="h-10 w-[1px] bg-white/20"></div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Liderado por <br/> <span className="text-white">Berni Rodríguez</span></p>
               </div>
               <div className="flex items-center gap-6">
                 <img src={assets.andaluciaLogo} className="h-12 w-auto brightness-0 invert opacity-50" alt="Junta de Andalucía" />
                 <div className="h-10 w-[1px] bg-white/20"></div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Patrocinador <br/> Principal</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL VIDEO SECTION */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="reveal mb-20">
            <span className="text-gold text-xs font-black tracking-[0.4em] uppercase mb-4 block italic">Voices of Success</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8">TESTIMONIOS <br/> <span className="text-gold">MVP</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm font-bold uppercase tracking-widest leading-relaxed">
              La experiencia contada por sus protagonistas. Revive la intensidad y el aprendizaje de las ediciones anteriores.
            </p>
          </div>

          <div 
            onClick={handlePlayVideo}
            className="reveal relative aspect-video max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-black group cursor-pointer"
          >
            <video 
              ref={videoRef}
              src={assets.video} 
              className="w-full h-full object-cover"
              controls={isVideoPlaying}
              poster={assets.heroBg}
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
            />
            
            {!isVideoPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all duration-500">
                <div className="w-24 h-24 bg-gold text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                   <span className="text-white text-[10px] font-black uppercase tracking-[0.5em] opacity-80 group-hover:opacity-100 transition-opacity">Haz clic para reproducir</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & VALUES */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="reveal lg:col-span-1">
              <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-gold mb-6">NUESTRA <br/> FILOSOFÍA</h3>
              <p className="text-white/40 text-sm font-medium uppercase tracking-[0.2em] leading-loose">
                Buscamos que los participantes vivan una inmersión total en el baloncesto de alto rendimiento, aprendiendo no solo del juego, sino también de valores fundamentales.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'VALORES', desc: 'Esfuerzo, compañerismo, disciplina y vida sana como pilares de formación.', icon: '💎' },
                { title: 'ENTORNO PRO', desc: 'Entrenar en el mismo lugar donde lo hacen las estrellas de la NBA.', icon: '🏟️' },
                { title: 'CALIDAD TÉCNICA', desc: 'Bajo la dirección de Academia 675 y Berni Rodríguez.', icon: '🏀' },
                { title: 'EXPERIENCIA 360', desc: 'Desde la nutrición hasta la táctica individual avanzada.', icon: '🔄' }
              ].map((item, i) => (
                <div key={i} className="reveal bg-white/[0.03] p-10 rounded-[2.5rem] border border-white/5 hover:border-gold/30 transition-all duration-500">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h4 className="text-xl font-black uppercase italic tracking-tight text-white mb-4">{item.title}</h4>
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="galeria" className="py-24 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 reveal">
            <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block italic">The Captured Talent</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">
              GALERÍA <span className="text-gold">MVP 2025</span>
            </h2>
          </div>

          <div className="reveal relative w-full rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
            <iframe
              src="https://galeriaoficial.app/?embed=true#/public/album/aMH6LYyfLJreOQUr6M1z"
              width="100%"
              height="700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Galería: Experiencia MVP 2025"
              className="w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gold text-white text-center">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-12 leading-none">FORJA TU <br/> FUTURO</h2>
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

export default MVPPage;
