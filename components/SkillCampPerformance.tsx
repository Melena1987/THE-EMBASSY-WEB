
import React from 'react';

const SkillCampPerformance: React.FC = () => {
  return (
    <section className="py-32 bg-neutral-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">PREPARACIÓN <span className="text-orange-600">360º</span></h2>
          <p className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Físico • Nutrición • Prevención • Técnica</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="reveal">
            <div className="w-32 h-32 rounded-full border-4 border-orange-600 mx-auto flex items-center justify-center mb-8 bg-black/40">
              <span className="text-3xl">🔋</span>
            </div>
            <h4 className="text-xl font-black uppercase italic mb-4">Rendimiento</h4>
            <p className="text-white/30 text-[10px] uppercase tracking-widest leading-loose">Optimización física dirigida por Adriana Rodríguez, especialista en baloncesto élite.</p>
          </div>
          <div className="reveal delay-100">
            <div className="w-32 h-32 rounded-full border-4 border-white/10 mx-auto flex items-center justify-center mb-8 bg-black/40">
              <span className="text-3xl">🧘</span>
            </div>
            <h4 className="text-xl font-black uppercase italic mb-4">Control</h4>
            <p className="text-white/30 text-[10px] uppercase tracking-widest leading-loose">Pilates y control postural con Begoña Pedraza para la prevención de lesiones.</p>
          </div>
          <div className="reveal delay-200">
            <div className="w-32 h-32 rounded-full border-4 border-white/10 mx-auto flex items-center justify-center mb-8 bg-black/40">
              <span className="text-3xl">🍎</span>
            </div>
            <h4 className="text-xl font-black uppercase italic mb-4">Nutrición</h4>
            <p className="text-white/30 text-[10px] uppercase tracking-widest leading-loose">Pautas de alimentación deportiva con Noe Masiá para maximizar la energía en pista.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCampPerformance;
