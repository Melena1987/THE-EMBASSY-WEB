
import React, { useEffect, useRef, useState } from 'react';
import { LOGOS } from '../constants';

const TeamBuildingPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

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

  const objectives = [
    { title: 'Fortalecer el trabajo en equipo', desc: 'Refuerza valores como la confianza y el apoyo mutuo entre compañeros.', icon: '🤝' },
    { title: 'Potenciar el liderazgo', desc: 'Identifica y desarrolla capacidades de liderazgo y coordinación efectiva.', icon: '👑' },
    { title: 'Mejorar la comunicación', desc: 'Promueve la escucha activa y la transmisión clara de ideas.', icon: '💬' },
    { title: 'Crear vínculos duraderos', desc: 'Establece relaciones personales que trascienden el entorno laboral.', icon: '❤️' }
  ];

  const schedule = [
    { time: '9:30', title: 'Bienvenida', desc: 'Recepción de los participantes en nuestras instalaciones.' },
    { time: '10:00', title: 'Introducción participativa', desc: 'Explicación de objetivos y metodología de la jornada.' },
    { time: '11:00', title: 'Actividad práctica I', desc: 'Ejercicios de colaboración o motivación según formación elegida.' },
    { time: '12:30', title: 'Actividad práctica II', desc: 'Desafíos de resolución de problemas y comunicación efectiva.' },
    { time: '14:00', title: '"La prórroga" y cierre', desc: 'Conclusiones finales y tentempié para todos los participantes.' }
  ];

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen selection:bg-gold overflow-x-hidden font-sans">
      
      {/* HERO SECTION */}
      <section className="relative h-[85svh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_031.jpg?alt=media&token=1484f778-a8dd-4cff-9e23-780295ae2092" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Court Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <button 
            onClick={onBack}
            className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.4em] group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            VOLVER AL HUB
          </button>
          
          <span className="reveal active text-white text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Experiencia Corporativa</span>
          <h1 className="reveal active text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-6">
            TEAM <span className="text-gold">BUILDING</span>
          </h1>
          <p className="reveal active text-lg md:text-2xl font-light uppercase tracking-[0.2em] text-white/70 max-w-4xl mx-auto italic">
            FORTALECIENDO EQUIPOS A TRAVÉS DEL DEPORTE Y LA COLABORACIÓN.
          </p>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-32 bg-white text-black px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block italic">Filosofía de Élite</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">MÁS QUE UN <br/> ENTRENAMIENTO</h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8 uppercase tracking-tight">
              The Embassy es un innovador centro de excelencia deportiva y empresarial fundado por profesionales del baloncesto de élite. Nuestra misión es transformar las dinámicas de equipo en el entorno corporativo utilizando principios probados del deporte de alto rendimiento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
               <div className="p-6 bg-neutral-50 rounded-2xl border border-black/5">
                 <h4 className="font-black text-xs uppercase mb-2">Elite Exp</h4>
                 <p className="text-[10px] uppercase text-gray-400">Dirigido por campeones mundiales.</p>
               </div>
               <div className="p-6 bg-neutral-50 rounded-2xl border border-black/5">
                 <h4 className="font-black text-xs uppercase mb-2">Premium</h4>
                 <p className="text-[10px] uppercase text-gray-400">Instalaciones de primer nivel en Málaga.</p>
               </div>
               <div className="p-6 bg-neutral-50 rounded-2xl border border-black/5">
                 <h4 className="font-black text-xs uppercase mb-2">Metodología</h4>
                 <p className="text-[10px] uppercase text-gray-400">Deporte profesional y desarrollo empresarial.</p>
               </div>
            </div>
          </div>
          <div className="reveal relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-black">
             <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_050.jpg?alt=media&token=91bbf74f-6cad-4f7c-9bfb-8c020278973a" className="w-full h-full object-cover opacity-80" alt="Team Building Practice" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-white shadow-xl animate-pulse">
                   <svg className="w-8 h-8 translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* LA EXPERIENCIA - PIRÁMIDE */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-20">LA EXPERIENCIA <span className="text-gold">EMBASSY</span></h2>
          
          <div className="relative space-y-4">
            {/* Pyramid Level 1 */}
            <div className="bg-gold/10 border border-gold/40 p-10 rounded-t-[5rem] mx-auto max-w-[400px] relative group hover:bg-gold/20 transition-all">
              <span className="text-3xl mb-4 block">🤝</span>
              <h3 className="text-2xl font-black uppercase italic tracking-tight text-gold">PERTENENCIA</h3>
              <p className="text-xs uppercase tracking-widest text-white/50 mt-2">Fomenta el compromiso y la identificación con la empresa</p>
            </div>
            {/* Pyramid Level 2 */}
            <div className="bg-white/[0.03] border border-white/10 p-12 mx-auto max-w-[700px] group hover:bg-white/[0.05] transition-all">
              <span className="text-3xl mb-4 block">💬</span>
              <h3 className="text-2xl font-black uppercase italic tracking-tight text-white">COMUNICACIÓN</h3>
              <p className="text-xs uppercase tracking-widest text-white/40 mt-2">Desarrolla canales efectivos de diálogo entre equipos</p>
            </div>
            {/* Pyramid Level 3 */}
            <div className="bg-white/[0.01] border border-white/5 p-14 rounded-b-[2rem] mx-auto max-w-full group hover:bg-white/[0.02] transition-all">
              <span className="text-3xl mb-4 block">👥</span>
              <h3 className="text-2xl font-black uppercase italic tracking-tight text-white">TRABAJO EN EQUIPO</h3>
              <p className="text-xs uppercase tracking-widest text-white/30 mt-2">Potencia la colaboración y sinergia entre colaboradores</p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-gold/5 border-l-4 border-gold text-left inline-block">
             <p className="text-xs font-bold uppercase tracking-widest leading-relaxed text-white/60">
               Experiencia incluida en <span className="text-white">FUNDAE</span> que combina teoría participativa con dinámicas de grupo prácticas usando el baloncesto como hilo conductor.
             </p>
          </div>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-4 block">Impacto Directo</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter">OBJETIVOS QUE <br/> TRANSFORMAN</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((obj, i) => (
              <div key={i} className="reveal p-10 bg-neutral-50 rounded-[2.5rem] border border-black/5 hover:border-gold/30 transition-all group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform block">{obj.icon}</div>
                <h3 className="text-xl font-black uppercase italic tracking-tight mb-4">{obj.title}</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMACIONES ESPECÍFICAS */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3 reveal">
               <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 block italic">Programas Formativos</span>
               <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8">NUESTROS <br/> PROGRAMAS</h2>
               <p className="text-white/40 text-sm font-medium uppercase tracking-[0.2em] leading-loose">
                 Cada formación está meticulosamente estructurada para garantizar resultados tangibles y duraderos.
               </p>
            </div>
            <div className="lg:w-2/3 space-y-8 reveal">
               {[
                 { title: 'Alto Rendimiento', icon: '⚡', desc: 'Maximizar el potencial colectivo mediante ejercicios inspirados en estrategias de equipos profesionales.' },
                 { title: 'Resiliencia y Adaptabilidad', icon: '🌊', desc: 'Fortalecer la capacidad de respuesta ante desafíos bajo situaciones de presión competitiva.' },
                 { title: 'Identidad Corporativa', icon: '🆔', desc: 'Cultivar una cultura organizacional distintiva mediante experiencias compartidas significativas.' }
               ].map((prog, i) => (
                 <div key={i} className="flex gap-8 p-10 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-all">
                    <div className="text-4xl shrink-0">{prog.icon}</div>
                    <div>
                       <h4 className="text-xl font-black uppercase italic text-gold mb-2">{prog.title}</h4>
                       <p className="text-white/50 text-xs uppercase tracking-widest leading-loose">{prog.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ESTRUCTURA DE LA JORNADA */}
      <section className="py-32 bg-white text-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
             <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter">ESTRUCTURA DE <br/> LA JORNADA</h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold/20 hidden md:block"></div>
            <div className="space-y-16">
              {schedule.map((item, i) => (
                <div key={i} className={`reveal flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 text-center md:text-right px-8">
                     {i % 2 === 0 ? (
                       <>
                         <h4 className="text-2xl font-black italic text-gold">{item.time}</h4>
                         <h3 className="text-xl font-black uppercase mt-1">{item.title}</h3>
                       </>
                     ) : (
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.desc}</p>
                     )}
                  </div>
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black relative z-10 shrink-0 border-4 border-white shadow-xl">
                    {i + 1}
                  </div>
                  <div className="md:w-1/2 text-center md:text-left px-8">
                     {i % 2 !== 0 ? (
                       <>
                         <h4 className="text-2xl font-black italic text-gold">{item.time}</h4>
                         <h3 className="text-xl font-black uppercase mt-1">{item.title}</h3>
                       </>
                     ) : (
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.desc}</p>
                     )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASOS DE ÉXITO */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="reveal mb-20">
             <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8">EXPERIENCIAS DE <span className="text-gold">ÉXITO</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { name: 'Meliá Hotels', text: '"Una vivencia que fortalece tanto al equipo como al individuo."', author: 'Rocío Galán Pérez' },
               { name: 'Higuerón Hotel', text: '"Una experiencia única que une deporte y empresa."', author: 'Luis García Conde' },
               { name: 'Málaga C.F.', text: '"Nos ayudó a prepararnos mejor para los desafíos."', author: 'Víctor García Marín' }
             ].map((caseStudy, i) => (
               <div key={i} className="reveal p-10 bg-white/[0.02] border border-white/5 rounded-3xl text-left">
                  <div className="h-12 w-12 bg-gold/10 rounded-full mb-6 flex items-center justify-center text-gold">⭐</div>
                  <p className="text-lg font-black italic tracking-tight mb-6 leading-relaxed">"{caseStudy.text}"</p>
                  <div className="h-[1px] w-12 bg-gold/30 mb-4"></div>
                  <h4 className="text-white font-black uppercase text-xs mb-1">{caseStudy.name}</h4>
                  <p className="text-white/30 text-[9px] uppercase tracking-widest">{caseStudy.author}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* INFO PRÁCTICA */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
           {[
             { val: '20', label: 'MÍNIMO PARTICIPANTES', desc: 'Grupo básico para experiencia óptima' },
             { val: '90', label: 'MÁXIMO PARTICIPANTES', desc: 'Capacidad estándar instalaciones' },
             { val: '5h', label: 'DURACIÓN FORMACIÓN', desc: 'Jornada completa estructurada' },
             { val: '100%', label: 'PERSONALIZACIÓN', desc: 'Adaptamos cada aspecto' }
           ].map((stat, i) => (
             <div key={i} className="reveal group">
                <span className="text-6xl font-black italic tracking-tighter text-gold group-hover:text-black transition-colors">{stat.val}</span>
                <h4 className="text-[10px] font-black uppercase tracking-widest mt-4 mb-2">{stat.label}</h4>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest">{stat.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gold text-white text-center">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <span className="text-black text-[10px] font-black tracking-[0.5em] uppercase mb-8 block">Ready for the challenge?</span>
          <h2 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter mb-12 leading-none">VIVE EL TEAM <br/> BUILDING DE <br/> CAMPEONES</h2>
          <a href="#contacto" className="inline-flex items-center gap-6 bg-black text-white px-16 py-8 rounded-full text-sm font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-2xl">
            SOLICITAR PRESUPUESTO
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-60 text-black">
             <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest">Email</span>
                <span className="text-lg font-black italic">info@theembassytc.com</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest">Teléfono</span>
                <span className="text-lg font-black italic">+34 640 232 212</span>
             </div>
          </div>
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

export default TeamBuildingPage;
