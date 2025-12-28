
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="equipo" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl reveal">
            <span className="text-gold text-xs font-black tracking-[0.4em] uppercase mb-6 block italic">Elite Performance Staff</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-8 tracking-tighter leading-none">NUESTRO <br/> EQUIPO</h2>
            <p className="text-white/40 text-lg font-light uppercase tracking-widest leading-loose">
              Liderado por campeones del mundo y especialistas de élite, uniendo la visión global de la NBA con el rigor táctico europeo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24">
          {TEAM.map((member, idx) => (
            <div key={idx} className="reveal group">
              <div className="relative overflow-hidden rounded-[2.5rem] mb-8 aspect-[3/4] bg-neutral-900 border border-white/5 group-hover:border-gold/30 transition-all duration-700">
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                
                {/* Social overlay - Minimalist */}
                <div className="absolute top-6 right-6 flex flex-col space-y-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} className="w-11 h-11 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="w-11 h-11 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  )}
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                   <span className="text-gold text-[10px] font-black tracking-[0.3em] uppercase mb-3 block italic">{member.role}</span>
                   <h3 className="text-4xl font-black uppercase italic tracking-tighter text-white leading-none">{member.name}</h3>
                </div>
              </div>
              
              <div className="px-2">
                <p className="text-white/40 font-medium text-sm leading-[1.8] uppercase tracking-[0.05em] mb-8 transition-all duration-500">
                  {member.description}
                </p>
                <div className="h-[2px] w-12 bg-gold group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
