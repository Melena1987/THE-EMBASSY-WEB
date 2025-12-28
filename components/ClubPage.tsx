
import React, { useEffect, useRef } from 'react';
import { LOGOS } from '../constants';

const ClubPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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
          <button 
            onClick={onBack}
            className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em] group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver al Inicio
          </button>
          <img src={LOGOS.main} alt="THE EMBASSY" className="h-16 md:h-24 mx-auto mb-10 brightness-0 invert" />
          <h1 className="reveal active text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-6">THE EMBASSY <span className="text-gold">CLUB</span></h1>
          <p className="reveal active text-xl md:text-2xl font-light uppercase tracking-widest max-w-4xl mx-auto text-white/60">
            Una propuesta exclusiva para formar parte del selecto grupo de empresas que redefinen la excelencia a través del baloncesto.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-6 block italic">Elite Networking</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">CLUB DE <br/> EMPRESAS</h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10 uppercase tracking-tight">
              Bienvenidos a nuestra propuesta exclusiva para formar parte del selecto grupo de empresas que conformarán The Embassy Club. Una oportunidad única para vincular su marca con experiencias de élite en el mundo del baloncesto.
            </p>
            <div className="p-8 bg-black rounded-3xl text-white border-l-8 border-gold">
               <p className="text-sm font-black uppercase tracking-widest leading-loose">
                 Limitado a solo <span className="text-gold text-2xl mx-1">5</span> empresas seleccionadas.
               </p>
            </div>
          </div>
          <div className="reveal relative group">
             <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
               <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_031.jpg?alt=media&token=1484f778-a8dd-4cff-9e23-780295ae2092" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt="Court" />
             </div>
             <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/20 rounded-[3rem] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="reveal group p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-gold/30 transition-all duration-500">
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform block">{b.icon}</div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight text-gold mb-6">{b.title}</h3>
                <p className="text-white/40 text-sm uppercase tracking-wider leading-loose font-medium">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white text-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="reveal text-center text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-24">IMPACTO GLOBAL</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {stats.map((s, i) => (
              <div key={i} className="reveal text-center group">
                <span className="text-7xl md:text-9xl font-black italic tracking-tighter text-gold group-hover:text-black transition-colors duration-500">{s.value}</span>
                <h4 className="text-xl font-black uppercase tracking-widest mt-4 mb-4">{s.label}</h4>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Impact */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 items-center">
          <div className="reveal lg:w-1/2">
             <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-6 block italic">Digital Reach</span>
             <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8">ALCANCE DIGITAL</h2>
             <p className="text-white/40 text-lg font-light uppercase tracking-widest leading-loose mb-10">
               Nuestros eventos y actividades generan un impacto mediático significativo. La visibilidad de las marcas asociadas se beneficia de nuestra comunidad activa y comprometida.
             </p>
             <div className="space-y-6">
                {mediaMetrics.map((m, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4 group">
                    <div>
                       <span className="text-white font-black uppercase italic tracking-widest group-hover:text-gold transition-colors">{m.platform}</span>
                       <p className="text-[10px] text-white/30 uppercase tracking-widest">{m.reach}</p>
                    </div>
                    <span className="text-gold font-black uppercase tracking-tighter italic">{m.engagement}</span>
                  </div>
                ))}
             </div>
          </div>
          <div className="reveal lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="aspect-[3/4] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_13_400x400.jpg?alt=media&token=47aeffdb-a5b2-4be0-a4ba-4d11d1263796" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-[3/4] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 mt-12">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_12_400x400.jpg?alt=media&token=288f1036-9064-414a-959c-4d2f860bbc77" className="w-full h-full object-cover" />
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

          <div className="reveal mt-24">
             <a href="#contacto" className="inline-flex items-center gap-6 bg-black text-white px-16 py-8 rounded-full text-sm font-black uppercase tracking-[0.4em] hover:bg-gold transition-all shadow-2xl">
                ¡Únete al Club!
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </a>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal order-2 lg:order-1">
             <div className="aspect-square rounded-[3rem] overflow-hidden grayscale opacity-50">
                <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80" className="w-full h-full object-cover" />
             </div>
          </div>
          <div className="reveal order-1 lg:order-2">
             <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-6 block italic">Social Impact</span>
             <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">RESPONSABILIDAD SOCIAL</h2>
             <p className="text-white/40 text-lg font-light uppercase tracking-widest leading-loose mb-10">
               La Experiencia SUPERBASKETLOVER es nuestro evento anual dedicado a personas con discapacidad intelectual. Con más de 800 participantes, nos hemos convertido en el referente mundial en Superbasket.
             </p>
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl">🧩</div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Colaboración directa con la Experiencia SUPERBASKET (anual, diciembre).</p>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section className="py-32 bg-gold text-white text-center">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-10 leading-none">VINCULA TU <br/> MARCA</h2>
          <p className="text-xl font-bold uppercase tracking-widest mb-12 italic opacity-80">Solicite una reunión personalizada para discutir cómo podemos adaptar nuestra propuesta.</p>
          <div className="flex flex-col md:flex-row justify-center gap-10">
             <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">Teléfono</span>
                <span className="text-2xl font-black italic">+34 640 23 22 12</span>
             </div>
             <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">Email</span>
                <span className="text-2xl font-black italic">mescobar@theembassytc.com</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubPage;
