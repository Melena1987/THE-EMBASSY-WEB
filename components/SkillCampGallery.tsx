
import React from 'react';

const SkillCampGallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block italic">Official Documentation</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">
            GALERÍA <span className="text-gold">SKILL CAMP</span> 2025
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.2em] leading-relaxed">
            Revive los mejores momentos de la edición Winter 2025. Un resumen visual del esfuerzo, la técnica y la pasión por el juego.
          </p>
        </div>

        <div className="reveal relative w-full rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_0_80px_rgba(212,140,0,0.05)]">
          <iframe
            src="https://galeriaoficial.app/?embed=true#/public/album/ROBsOYyGJTHkrbfVz5UR"
            width="100%"
            height="700"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Galería: Skill Camp 2025"
            className="w-full grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

        <div className="mt-12 flex justify-center opacity-30">
          <div className="w-16 h-[1px] bg-gold"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillCampGallery;
