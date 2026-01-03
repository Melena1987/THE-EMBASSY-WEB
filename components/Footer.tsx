
import React from 'react';
import { LOGOS } from '../constants';

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/trainingcentertheembassy/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'X',
    url: 'https://x.com/TheEmbassyTCH',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/the-embassy/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

interface FooterProps {
  onNavigateLegal: () => void;
  onNavigateClub: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateLegal, onNavigateClub }) => {
  return (
    <footer className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 items-start">
          <div className="flex flex-col items-start">
            <img src={LOGOS.main} alt="THE EMBASSY" className="h-12 w-auto object-contain mb-8" />
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] leading-loose max-w-xs">
              El santuario del baloncesto profesional en la Costa del Sol. Rendimiento, exclusividad y excelencia técnica.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-8 italic">Contacto</h4>
            <div className="space-y-4">
              <a href="mailto:comunicacion@theembassytc.com" className="block text-xl font-black italic hover:text-gold transition-colors tracking-tight">comunicacion@theembassytc.com</a>
              <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest">Fuengirola, Málaga (Spain)</p>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h4 className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-8 italic">FOLLOW US</h4>
            <div className="flex gap-8 items-center">
              {SOCIAL_LINKS.map(social => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/40 hover:text-gold transition-all hover:scale-125 duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal & Credits */}
        <div className="border-t border-white/5 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start space-y-3">
              <p className="text-[9px] text-white/20 uppercase tracking-[0.25em] font-black text-center md:text-left">
                © {new Date().getFullYear()} THE EMBASSY TRAINING CENTER. ALL RIGHTS RESERVED.
              </p>
              
              {/* Developer Credit - Forzado a una sola línea con whitespace-nowrap */}
              <a 
                href="https://melenamarketing.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-nowrap items-center gap-1 md:gap-2 text-[7px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-black transition-all duration-500 whitespace-nowrap"
              >
                <span className="text-white/10">Digital Experience by</span>
                <span className="text-white/30 group-hover:text-gold transition-colors">Melena Marketing</span>
              </a>
            </div>

            <div className="flex space-x-6 md:space-x-10 text-[9px] text-white/20 uppercase tracking-[0.25em] font-black">
              <button onClick={onNavigateLegal} className="hover:text-gold transition-colors">Privacidad</button>
              <button onClick={onNavigateLegal} className="hover:text-gold transition-colors">Aviso Legal</button>
              <button onClick={onNavigateClub} className="hover:text-gold transition-colors">The Club</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
