
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Vision: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

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

  const points = [
    { id: '01', title: t('vision', 'point1_title'), description: t('vision', 'point1_desc') },
    { id: '02', title: t('vision', 'point2_title'), description: t('vision', 'point2_desc') },
    { id: '03', title: t('vision', 'point3_title'), description: t('vision', 'point3_desc') },
    { id: '04', title: t('vision', 'point4_title'), description: t('vision', 'point4_desc') }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="reveal text-gold text-sm font-black tracking-[0.4em] uppercase mb-6 block italic">{t('vision', 'subtitle')}</span>
          <h2 className="reveal text-4xl md:text-6xl font-black mb-12 uppercase leading-[1.1] italic tracking-tighter text-white">
            {t('vision', 'title').split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {word === 'ENTRENAMIENTO' || word === 'TRAINING' ? <span className="text-gold">{word}</span> : word}{' '}
              </React.Fragment>
            ))}
          </h2>
          
          <div className="space-y-10">
            {points.map((point) => (
              <div key={point.id} className={`reveal group relative pl-20 transition-all`}>
                <span className="absolute left-0 top-0 text-5xl font-black text-gold/30 group-hover:text-gold transition-all duration-700 italic select-none">
                  {point.id}
                </span>
                <div className="h-[1px] w-12 bg-gold/50 mb-4 group-hover:w-full transition-all duration-1000"></div>
                <h3 className="text-xl font-black uppercase tracking-wider group-hover:text-gold transition-colors italic text-white">
                  {point.title}
                </h3>
                <p className="text-white/50 font-light mt-2 uppercase text-xs tracking-[0.15em] leading-loose">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group reveal">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(212,140,0,0.1)] bg-neutral-900">
            <video 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_22_-_Year_four_____The_NBPA_is_in_Andaluc_a_this_week_for_The_Sanctuary__an_offseason_performance_ret.mp4?alt=media&token=ec2114a8-552f-4baf-919d-bfaf9428f481" 
              className="w-full h-full object-cover brightness-90 group-hover:brightness-105 transition-all duration-700 ease-out"
              autoPlay muted loop playsInline
            />
          </div>
          <div className="absolute -top-6 -right-6 w-full h-full border border-gold/30 rounded-[2rem] -z-10 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
