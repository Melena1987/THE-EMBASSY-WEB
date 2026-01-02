
import React from 'react';

interface SkillCampFooterCTAProps {
  onBack: () => void;
}

const SkillCampFooterCTA: React.FC<SkillCampFooterCTAProps> = ({ onBack }) => {
  return (
    <section className="py-32 bg-black text-center reveal">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-12 leading-none">ÚNETE AL <br/> <span className="text-gold">CAMPUS</span></h2>
        <p className="text-white/40 text-lg uppercase tracking-widest mb-16 italic font-medium">Pronto anunciaremos las fechas para la próxima convocatoria.</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="bg-white/5 border border-white/10 text-white/50 px-16 py-8 rounded-full text-xs font-black uppercase tracking-[0.4em] italic cursor-default opacity-80">
            PRÓXIMAMENTE NUEVA EDICIÓN
          </div>
          <button 
            onClick={onBack}
            className="text-white/50 hover:text-white px-10 py-6 text-[10px] font-black uppercase tracking-[0.4em] transition-all"
          >
            VOLVER A EVENTOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillCampFooterCTA;
