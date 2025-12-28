
import React, { useState, useEffect } from 'react';
import { LOGOS } from '../constants';

interface NavbarProps {
  onNavigateClub?: () => void;
  onNavigateHome?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateClub, onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#', action: onNavigateHome },
    { name: 'The Club', href: '#club', action: onNavigateClub },
    { name: 'Servicios', href: '#servicios' },
    { name: 'The Sanctuary', href: '#instalaciones' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: any) => {
    if (link.action) {
      e.preventDefault();
      link.action();
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigateHome?.(); }}
          className="flex items-center group"
        >
          <img 
            src={LOGOS.main} 
            alt="THE EMBASSY" 
            className={`transition-all duration-500 w-auto ${isScrolled ? 'h-6 md:h-7' : 'h-8 md:h-10'}`}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-[11px] font-bold hover:text-gold transition-colors tracking-[0.25em] uppercase text-white/70 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a href="#contacto" className="bg-gold text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-lg shadow-gold/20">
            Reservar Ahora
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2" aria-label="Menu">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black z-[-1] transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-2xl font-black tracking-widest uppercase transition-all duration-500 delay-${i * 75} ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-gold text-white px-12 py-4 rounded-full text-sm font-black uppercase tracking-[0.2em]"
          >
            Reservar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
