
import React from 'react';
import { PARTNERS } from '../constants';

interface PartnersProps {
  onSponsorshipClick: () => void;
}

const Partners: React.FC<PartnersProps> = ({ onSponsorshipClick }) => {
  return (
    <section className="py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Text Content */}
          <div className="lg:w-1/3 reveal">
            <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-4 block italic">GLOBAL NETWORK</span>
            <h2 className="text-5xl font-black uppercase italic mb-8 tracking-tighter leading-none">NUESTROS <br/> PARTNERS</h2>
            <p className="text-white/40 font-medium mb-12 text-sm tracking-widest uppercase leading-loose max-w-sm">
              Colaboramos con instituciones y marcas de prestigio que comparten nuestra visión de excelencia y compromiso con el baloncesto.
            </p>
            <button 
              onClick={onSponsorshipClick}
              className="inline-flex items-center gap-6 border border-white/20 px-10 py-4 rounded-full hover:bg-gold hover:border-gold hover:text-white transition-all group"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Sponsorship Info</span>
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7-7 7M3 12h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Logos Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 reveal">
            {PARTNERS.map((partner) => {
              const isQuiron = partner.name === 'Quirónsalud';
              return (
                <a 
                  key={partner.name} 
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-32 md:h-40 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white/5 hover:border-gold/30 transition-all cursor-pointer group overflow-hidden ${isQuiron ? 'p-2' : 'p-6'}`}
                >
                  <img 
                    src={partner.logoUrl} 
                    alt={partner.name} 
                    className={`max-h-full max-w-full object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 transform ${isQuiron ? 'scale-[2.1] group-hover:scale-[2.3]' : 'group-hover:scale-110'}`} 
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
