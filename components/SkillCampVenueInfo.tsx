
import React, { useState } from 'react';

const SkillCampVenueInfo: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const bgImage = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_015.jpg?alt=media&token=2d4244b8-f480-4ff3-adc1-dfc165edaa3a";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 bg-black">
      {/* Background with Depth */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        <img 
          src={bgImage} 
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover brightness-[0.3] scale-110 transition-opacity duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          alt="The Embassy Training Center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        {/* Decorative court lines overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.1" />
            <rect x="20" y="0" width="60" height="100" fill="none" stroke="white" strokeWidth="0.1" />
          </svg>
        </div>
      </div>

      {/* The "Tactical Card" */}
      <div className="relative z-10 w-full max-w-6xl mx-6 reveal">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Side: Visual Branding */}
          <div className="lg:w-1/3 bg-gold p-12 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-60">Location</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 leading-none">THE <br/> SANCTUARY</h2>
            </div>
            
            <div className="relative z-10 mt-20">
              <p className="text-xs font-black uppercase tracking-[0.3em] leading-loose">
                FUENGIROLA <br/> MÁLAGA, ESPAÑA
              </p>
              <div className="w-12 h-[2px] bg-white mt-4"></div>
            </div>

            {/* Large background number */}
            <div className="absolute -bottom-10 -right-10 text-[15rem] font-black opacity-10 italic leading-none select-none">
              TC
            </div>
          </div>

          {/* Right Side: Technical Specs */}
          <div className="lg:w-2/3 p-10 md:p-20 text-white space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase">Status: Official</span>
                <p className="text-xl md:text-2xl font-light uppercase tracking-tight leading-relaxed text-white/80">
                  Entrena como los profesionales en un centro de <span className="text-white font-black">vanguardia con estándares NBA</span>.
                </p>
              </div>

              <div className="flex flex-col justify-end">
                <div className="h-[1px] w-full bg-white/10 mb-6"></div>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-white/40 text-[9px] font-black uppercase tracking-widest block mb-1">Schedule</span>
                    <p className="text-2xl font-black italic text-gold uppercase tracking-tighter">15:30 — 19:30</p>
                  </div>
                  <div className="text-right">
                    <span className="text-white/40 text-[9px] font-black uppercase tracking-widest block mb-1">Dates</span>
                    <p className="text-2xl font-black italic text-white uppercase tracking-tighter">26-30 DIC</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 border border-white/5 group hover:border-gold/30 transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
                <div>
                  <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-2 block">Target Audience</span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">
                    CADETE, JUNIOR Y SUB 22
                  </h3>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">Generaciones: 2003 a 2011</p>
                </div>
                <a 
                  href="#contacto"
                  className="bg-white text-black px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-gold hover:text-white transition-all shadow-xl shrink-0"
                >
                  RESERVAR PLAZA
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technical Footer Details */}
        <div className="mt-12 flex flex-wrap justify-center gap-10 md:gap-24 opacity-30 text-white">
          <div className="text-center">
            <span className="block text-2xl font-black tracking-tighter">1500m²</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]">High Performance Area</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-black tracking-tighter">NBA/FIBA</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Homologated Court</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-black tracking-tighter">PRO STAFF</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Coaching Team</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCampVenueInfo;
