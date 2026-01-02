import React, { useState, useEffect } from 'react';
import { LOGOS } from '../constants.tsx';

interface NavbarProps {
  onNavigateClub?: () => void;
  onNavigateHome?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateClub, onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
        setIsScrolled(window.scrollY > 20);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

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
    }
    setIsMenuOpen(false);
  };

  const navBackgroundStyles = isMenuOpen 
    ? 'bg-black py-4 border-b border-white/10' 
    : isScrolled 
      ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/10' 
      : 'bg-transparent py-6';

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${navBackgroundStyles}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center relative z-20">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigateHome?.(); setIsMenuOpen(false); }}
          className="flex items-center group"
        >
          <img 
            src={LOGOS.main} 
            alt="THE EMBASSY" 
            className={`transition-all duration-500 w-auto ${isScrolled || isMenuOpen ? 'h-6 md:h-7' : 'h-8 md:h-10'} brightness-0 invert`}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-[11px] font-bold transition-colors tracking-[0.25em] uppercase text-white/70 hover:text-gold"
            >
              {link.name}
            </a>
          ))}
          <a href="#contacto" className="bg-gold text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-lg shadow-gold/20">
            Reservar Ahora
          </a>
        </div>

        {/* Mobile toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden text-white p-2 relative z-50 focus:outline-none" 
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-black z-10 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center space-y-8 px-6 w-full">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-2xl font-black tracking-[0.2em] uppercase transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${isMenuOpen ? i * 75 + 100 : 0}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className={`pt-8 transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${isMenuOpen ? navLinks.length * 75 + 150 : 0}ms` }}>
            <a 
              href="#contacto" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-gold text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-gold/20"
            >
              Reservar Ahora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;