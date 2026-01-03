
import React, { useEffect, useRef, useState } from 'react';
import { LOGOS } from '../constants';

const ClubPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.children[0].clientWidth + 32; // width + gap
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].clientWidth + 32;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const benefits = [
    { title: 'Exclusividad', desc: 'Club limitado a solo 5 empresas seleccionadas, garantizando un trato personalizado y exclusivo para cada miembro.', icon: '🏆' },
    { title: 'Networking', desc: 'Posibilidad de networking premium con otras marcas líderes y profesionales del sector deportivo en un entorno exclusivo y privado.', icon: '🤝' },
    { title: 'Visibilidad', desc: 'Presencia de marca en todos nuestros eventos y plataformas digitales, generando impacto mediático continuo.', icon: '✨' },
    { title: 'Experiencias VIP', desc: 'Acceso a vivencias únicas relacionadas con el entorno NBA, entrenamientos privados y hospitality premium.', icon: '🌟' }
  ];

  const stats = [
    { value: '120+', label: 'JUGADORES NBA', desc: 'Han participado en nuestros eventos y entrenamientos en los últimos tres años.' },
    { value: '30+', label: 'EQUIPOS PROFESIONALES', desc: 'Colaboraciones con franquicias NBA y equipos de élite internacional.' },
    { value: '50+', label: 'EVENTOS EXCLUSIVOS', desc: 'Organizados con éxito para jugadores y equipos de máximo nivel.' }
  ];

  const mediaMetrics = [
    { platform: 'Instagram', reach: '250,000 alcance', engagement: '45,000 engagement' },
    { platform: 'Twitter', reach: '180,000 alcance', engagement: '32,000 engagement' },
    { platform: 'Facebook', reach: '120,000 alcance', engagement: '28,000 engagement' },
    { platform: 'LinkedIn', reach: '75,000 alcance', engagement: '15,000 engagement' }
  ];

  return (
    <div ref={sectionRef} className="bg-[#080808] text-white min-h-screen">
      {/* Club Hero */}
      <section className="relative h-[80svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_015.jpg?alt=media&token=2d4244b8-f480-4ff3-adc1-dfc165edaa3a" 
            className="w-full h-full object-cover opacity-30"
            alt="Club Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#080808]"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <button onClick={onBack} className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em] group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Volver al Inicio
          </button>
          <img src={LOGOS.main} alt="THE EMBASSY" className="h-16 md:h-24 mx-auto mb-10 brightness-0 invert" />
          <h1 className="reveal active text-5xl md:text-9xl font-black uppercase italic tracking-tighter mb-6">THE EMBASSY <span className="text-gold">CLUB</span></h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-6 block italic">Elite Networking</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">CLUB DE <br/> EMPRESAS</h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10 uppercase tracking-tight">Bienvenidos a nuestra propuesta exclusiva para formar parte del selecto grupo de empresas que conformarán The Embassy Club.</p>
          </div>
        </div>
      </section>

      {/* Benefits Grid/Carousel */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar pb-4 md:pb-0"
            >
              {benefits.map((b, i) => (
                <div key={i} className="reveal flex-none w-[85vw] md:w-auto snap-center group p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-gold/30 transition-all duration-500">
                  <div className="text-4xl mb-8 group-hover:scale-110 transition-transform block">{b.icon}</div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tight text-gold mb-6">{b.title}</h3>
                  <p className="text-white/40 text-sm uppercase tracking-wider leading-loose font-medium">{b.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col md:hidden items-center gap-6 mt-8">
              <div className="flex justify-center gap-2">
                {benefits.map((_, i) => (
                  <button key={i} onClick={() => scrollToIndex(i)} className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-gold' : 'w-2 bg-white/20'}`} />
                ))}
              </div>
              <div className="flex gap-4">
                <button onClick={() => scrollToIndex(activeIndex - 1)} disabled={activeIndex === 0} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 text-gold">
                  <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button onClick={() => scrollToIndex(activeIndex + 1)} disabled={activeIndex === benefits.length - 1} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 text-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Details */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="reveal mb-20">
            <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-6 block italic">Membership Details</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8">DATOS GENERALES</h2>
          </div>
          <div className="reveal space-y-0 border border-black/10 rounded-[3rem] overflow-hidden bg-neutral-50 shadow-2xl">
            {[
              { label: 'Objeto', val: 'Generar un Club exclusivo para empresas, forjando alianzas sólidas.' },
              { label: 'Aportación', val: '7.000 € (+ IVA) en concepto de miembro de THE EMBASSY CLUB.' },
              { label: 'Duración', val: 'Bianual, renovable.' }
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 border-b border-black/5 last:border-0 hover:bg-gold/5 transition-colors">
                <div className="p-10 border-r border-black/5 flex items-center justify-center md:justify-end">
                   <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">{item.label}</span>
                </div>
                <div className="p-10 md:col-span-2 text-left flex items-center">
                   <span className="text-xl font-black italic uppercase tracking-tight">{item.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubPage;