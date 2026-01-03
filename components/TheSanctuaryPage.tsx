
import React from 'react';

const TheSanctuaryPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em] group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver a Eventos
        </button>

        <header className="mb-20">
          <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block italic">The Performance Hub</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8">THE <br/> <span className="text-gold">SANCTUARY</span></h1>
          <p className="text-white/40 text-xl font-light uppercase tracking-widest max-w-3xl leading-relaxed">
            Experiencia deportiva y cultural de élite que reúne a estrellas NBA y potencia Andalucía como referente internacional.
          </p>
        </header>

        <div className="aspect-video w-full rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/5 relative group">
           <img 
            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_image_edited.png?alt=media&token=ccf90cd0-a791-4071-b083-85b7cf6cf358" 
            className="w-full h-full object-contain p-20 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            alt="The Sanctuary"
           />
           <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-gold text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest shadow-2xl">PÁGINA EN DESARROLLO</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TheSanctuaryPage;
