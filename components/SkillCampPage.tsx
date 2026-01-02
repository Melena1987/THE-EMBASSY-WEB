
import React, { useEffect, useRef, useState } from 'react';
import { LOGOS, TEAM, INSTALLATION_IMAGES } from '../constants';

const SkillCampPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCampLogo = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1767138288808_frontal.png?alt=media&token=cd73d94c-6b1a-4d09-b081-309d6d4751b0";
  const heroBg = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_036.jpg?alt=media&token=e35e2655-a8cb-4db4-b527-54e76095b763";

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen font-sans selection:bg-orange-600 overflow-x-hidden">
      
      {/* SECTION 1: HERO - SKILL CAMP 2025 with PARALLAX */}
      <section className="relative h-[100svh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Parallax Background Container */}
        <div 
          className="absolute inset-0 z-0 scale-110"
          style={{ 
            transform: `translateY(${scrollY * 0.4}px)`,
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center">
          <button 
            onClick={onBack}
            className="absolute top-[-100px] md:top-[-120px] left-0 inline-flex items-center gap-3 text-white/50 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em] group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver a Eventos
          </button>

          <div className="reveal active flex flex-col items-center">
            <img 
              src={skillCampLogo} 
              alt="THE EMBASSY SKILL CAMP 2025" 
              className="w-full max-w-[320px] md:max-w-[500px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </div>
          
          <div className="reveal active mt-12 space-y-6">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-[0.4em] italic text-white drop-shadow-lg">
              SKILL CAMP 2025
            </h2>
            <div className="h-[2px] w-24 bg-orange-600 mx-auto"></div>
            <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl drop-shadow-md">
              Llega el campus de tecnificación definitivo. Cinco días de entrenamiento de élite en THE EMBASSY (Fuengirola) diseñados <span className="text-orange-500 font-bold italic">por jugadores para jugadores</span>.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 2: LOGISTICS BOX */}
      <section className="relative py-24 md:py-32 flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={INSTALLATION_IMAGES[0]} 
            className="w-full h-full object-cover grayscale"
            alt="The Embassy Court"
          />
        </div>
        
        <div className="reveal relative z-10 bg-white text-black p-10 md:p-16 text-center max-w-2xl mx-6 shadow-2xl border-b-[10px] border-orange-600">
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tighter mb-8 italic font-black">THE SANCTUARY</h2>
          <div className="space-y-6 text-sm md:text-base font-medium uppercase tracking-tight">
            <p className="leading-relaxed">Entrena como los profesionales en un centro de vanguardia con estándares NBA en la Costa del Sol.</p>
            <p className="font-black text-orange-600">THE EMBASSY TRAINING CENTER (FUENGIROLA)</p>
            <div className="w-8 h-[1px] bg-black/20 mx-auto my-4"></div>
            <p>Fechas del <span className="font-black">26 al 30 de diciembre</span>.</p>
            <p>Horarios de las sesiones de <span className="font-black">15:30 a 19:30</span>.</p>
            <div className="w-8 h-[1px] bg-black/20 mx-auto my-4"></div>
            <p className="font-black text-lg">Categorías Cadete, Junior y Sub 22</p>
            <p className="text-gray-400 font-bold text-xs tracking-widest mt-2">(GENERACIONES 2003 A 2011)</p>
          </div>
          
          <div className="mt-12">
            <a href="#equipo" className="inline-block bg-black text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-colors">
              Staff Técnico de Élite
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: TECHNICAL STAFF */}
      <section id="equipo" className="py-32 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="reveal text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-20">Technical <span className="text-orange-600">Staff</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Alfonso Sánchez */}
            <div className="reveal group">
              <div className="aspect-[4/5] overflow-hidden mb-6 border-l-4 border-orange-600 shadow-xl">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892425_Alfonso_S_nchez_THE_EMBASSY_400x400.jpg?alt=media&token=89499cfd-ad20-441a-95ca-16e16cdbf709" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Alfonso" />
              </div>
              <p className="text-[10px] text-gray-500 mb-2 uppercase leading-tight font-medium">Aaron Gordon (Denver Nuggets) entrenando con Alfonso.</p>
              <h3 className="text-2xl font-black uppercase italic">Alfonso Sánchez</h3>
              <p className="text-orange-600 font-bold mb-6 text-sm">Director y Entrenador de Desarrollo</p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-tight">
                Exjugador profesional ACB. Actualmente entrenador de desarrollo de jugadores en The Embassy y Director de técnica individual en Academia 675.
              </p>
            </div>

            {/* Fran Vázquez */}
            <div className="reveal group delay-100">
              <div className="aspect-[4/5] overflow-hidden mb-6 border-l-4 border-orange-600 shadow-xl">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_13_400x400.jpg?alt=media&token=47aeffdb-a5b2-4be0-a4ba-4d11d1263796" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Fran" />
              </div>
              <p className="text-[10px] text-gray-500 mb-2 uppercase leading-tight font-medium">Fran Vázquez dirigiendo entrenamientos de élite.</p>
              <h3 className="text-2xl font-black uppercase italic">Fran Vázquez</h3>
              <p className="text-orange-600 font-bold mb-6 text-sm">Especialista en Juego Interior</p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-tight">
                Leyenda ACB, máximo taponador histórico y campeón de Euroliga. Entrenador de desarrollo de interiores en Unicaja y Selección Española.
              </p>
            </div>

            {/* Adam Waczynski */}
            <div className="reveal group delay-200">
              <div className="aspect-[4/5] overflow-hidden mb-6 border-l-4 border-orange-600 shadow-xl">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_15_400x400.jpg?alt=media&token=4b7eb880-1c3c-4ebb-90ad-e88f2c67d8ce" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Adam" />
              </div>
              <p className="text-[10px] text-gray-500 mb-2 uppercase leading-tight font-medium">Adam Waczynski en sesión de tiro profesional.</p>
              <h3 className="text-2xl font-black uppercase italic">Adam Waczynski</h3>
              <p className="text-orange-600 font-bold mb-6 text-sm">Shooting Skill Coach</p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-tight">
                Exjugador profesional internacional y referente del tiro exterior. Especialista en mecánica de tiro de alto rendimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HEALTH & PERFORMANCE */}
      <section className="py-32 bg-neutral-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="reveal text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-20 text-center">Health & <span className="text-orange-600">Performance</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Adriana */}
            <div className="reveal group text-center">
              <div className="aspect-square overflow-hidden mb-8 rounded-full border-4 border-orange-600 max-w-[280px] mx-auto shadow-2xl">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892425_Adriana_THE_EMBASSY__2__400x400.jpg?alt=media&token=851f872c-f868-4493-9503-70ab89bd09a4" className="w-full h-full object-cover" alt="Adriana" />
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-2">Adriana Rodríguez</h3>
              <p className="text-orange-500 font-bold mb-6 text-xs tracking-widest uppercase">Sport Performance Coach</p>
              <p className="text-sm text-white/50 leading-relaxed font-medium uppercase tracking-tight px-4">
                Especialista en optimización física de élite. Directora de rendimiento en THE EMBASSY.
              </p>
            </div>

            {/* Begoña */}
            <div className="reveal group delay-100 text-center">
              <div className="aspect-square overflow-hidden mb-8 rounded-full border-4 border-orange-600 max-w-[280px] mx-auto shadow-2xl">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_050.jpg?alt=media&token=91bbf74f-6cad-4f7c-9bfb-8c020278973a" className="w-full h-full object-cover grayscale" alt="Begoña" />
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-2">Begoña Pedraza</h3>
              <p className="text-orange-500 font-bold mb-6 text-xs tracking-widest uppercase">Pilates & Control Expert</p>
              <p className="text-sm text-white/50 leading-relaxed font-medium uppercase tracking-tight px-4">
                Master Trainer con 30 años de experiencia. Especialista en control postural y prevención.
              </p>
            </div>

            {/* Noe Masiá */}
            <div className="reveal group delay-200 text-center">
              <div className="aspect-square overflow-hidden mb-8 rounded-full border-4 border-orange-600 max-w-[280px] mx-auto shadow-2xl">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_2_400x400.jpg?alt=media&token=b778b075-0e9d-4570-90c0-305816fb9013" className="w-full h-full object-cover" alt="Noe" />
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-2">Noe Masiá</h3>
              <p className="text-orange-500 font-bold mb-6 text-xs tracking-widest uppercase">Dietista Deportiva</p>
              <p className="text-sm text-white/50 leading-relaxed font-medium uppercase tracking-tight px-4">
                Jugadora profesional y experta en nutrición aplicada al rendimiento deportivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DAILY PLAN */}
      <section className="py-32 bg-white text-black px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="reveal text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
              Daily <span className="text-orange-600">Plan</span>
            </h2>
            <p className="reveal text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Programación de Alto Rendimiento</p>
          </div>
          
          <div className="reveal space-y-4">
            {[
              { time: '15:30 - 16:00', event: 'Pilates / Sesión Multimedia / Presentación', note: 'Enfoque en movilidad y control postural' },
              { time: '16:00 - 16:30', event: 'Warm Up & Activation', note: 'Preparación específica para la carga de trabajo' },
              { time: '16:30 - 18:45', event: 'Sesiones de Tecnificación', note: 'Estaciones de tiro, juego interior y técnica individual' },
              { time: '18:45 - 19:30', event: 'Competición & Pick-Up', note: 'Aplicación táctica y competiciones reales' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-neutral-50 p-8 md:w-1/3 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                  <span className="text-2xl font-black italic text-orange-600">{item.time}</span>
                </div>
                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                  <h4 className="text-xl font-black uppercase tracking-tight mb-1 italic">{item.event}</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="reveal mt-12 bg-orange-600/5 p-8 rounded-3xl border border-orange-600/10">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-orange-600 text-center">
              * Planning sujeto a ajustes técnicos del staff. Incluye charlas formativas para padres y jugadores.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 bg-black text-center reveal border-t border-white/5">
        <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-10">¿Listo para dar el siguiente paso?</h3>
        <button 
          onClick={onBack}
          className="group relative overflow-hidden bg-white text-black px-12 py-6 text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:bg-orange-600 hover:text-white"
        >
          Volver a Eventos
        </button>
      </section>

    </div>
  );
};

export default SkillCampPage;
