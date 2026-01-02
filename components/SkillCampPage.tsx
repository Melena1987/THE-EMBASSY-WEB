
import React, { useEffect, useRef } from 'react';
import { LOGOS } from '../constants';

const SkillCampPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <div ref={sectionRef} className="bg-[#050505] text-white min-h-screen">
      {/* Hero Detail */}
      <section className="relative h-[70svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_019.jpg?alt=media&token=6bf0b512-e239-4863-af3c-3455d7c77f7a" 
            className="w-full h-full object-cover opacity-40 scale-110"
            alt="Skill Camp Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#050505]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <button 
            onClick={onBack}
            className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em] group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver a Eventos
          </button>
          
          <span className="reveal active text-gold text-xs font-black tracking-[0.5em] uppercase mb-6 block italic">Performance Experience</span>
          <h1 className="reveal active text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-6">SKILL <span className="text-gold">CAMP</span></h1>
          <p className="reveal active text-xl font-light uppercase tracking-widest max-w-2xl mx-auto text-white/60">
            Perfecciona tu juego con la metodología de los campeones.
          </p>
        </div>
      </section>

      {/* Placeholder Content Section */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="reveal mb-16">
            <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-4 block italic">Coming Soon</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8">INFORMACIÓN <br/> EN DESARROLLO</h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed uppercase tracking-tight">
              Estamos ultimando los detalles para el Skill Camp 2025. Próximamente publicaremos el calendario completo, staff técnico invitado y formularios de inscripción.
            </p>
          </div>
          
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Enfoque', val: 'Técnica Individual' },
              { label: 'Nivel', val: 'Pro & Academy' },
              { label: 'Ubicación', val: 'The Sanctuary' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-neutral-50 rounded-3xl border border-black/5">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">{item.label}</span>
                <span className="text-xl font-black italic uppercase tracking-tight">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Link */}
      <section className="py-24 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-10">¿QUIERES SER EL PRIMERO EN ENTERARTE?</h2>
          <a href="#contacto" className="bg-gold text-white px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
            Solicitar Información Previa
          </a>
        </div>
      </section>
    </div>
  );
};

export default SkillCampPage;
