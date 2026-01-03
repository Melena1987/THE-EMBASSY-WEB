
import React, { useState, useEffect } from 'react';
import { LOGOS, SERVICES, EVENTS } from '../constants.tsx';

interface NavbarProps {
  onNavigateClub?: () => void;
  onNavigateHome?: () => void;
  onNavigateEvents?: () => void;
  onNavigateToSection?: (hash: string) => void;
  currentPath?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onNavigateClub, 
  onNavigateHome, 
  onNavigateEvents, 
  onNavigateToSection,
  currentPath 
}) => {
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

  const handleLinkClick = (e: React.MouseEvent, link: any) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Fallback logic: if no specific path or external link is provided, go to #servicios
    const targetPath = link.path || link.link || (link.externalLink ? null : '#servicios');

    if (link.action) {
      link.action();
    } else if (link.externalLink) {
      window.open(link.externalLink, '_blank', 'noopener,noreferrer');
    } else if (targetPath) {
      // If the target path is an absolute URL, open it in a new tab
      if (targetPath.startsWith('http')) {
        window.open(targetPath, '_blank', 'noopener,noreferrer');
        return;
      }

      if (targetPath.startsWith('#')) {
        if (currentPath !== '/') {
          onNavigateHome?.();
          setTimeout(() => onNavigateToSection?.(targetPath), 150);
        } else {
          onNavigateToSection?.(targetPath);
          window.history.pushState({}, '', targetPath);
        }
      } else {
        window.history.pushState({}, '', targetPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  };

  const NextEventPill = ({ isMobile = false }) => (
    <a 
      href="https://avanceglobalcup.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group block ${isMobile ? 'max-w-[85vw] mx-auto mt-4' : 'flex-shrink-0'}`}
    >
      <div className={`moving-gold-border flex items-center gap-2 lg:gap-1.5 xl:gap-3 bg-black/60 backdrop-blur-2xl p-1 pr-4 lg:pr-3 xl:pr-6 rounded-full transition-all duration-500 hover:bg-black/80 hover:scale-105 shadow-xl`}>
        <div className="w-8 h-8 lg:w-7 lg:h-7 xl:w-10 xl:h-10 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-full p-1">
          <img 
            src={LOGOS.nextEvent} 
            alt="Avance Global Cup" 
            className="w-full h-full object-contain" 
          />
        </div>
        
        <div className="text-left overflow-hidden">
          <div className="flex items-center gap-1.5 lg:gap-1 mb-0.5 whitespace-nowrap">
            <span className="text-gold text-[7px] lg:text-[6px] xl:text-[8px] font-black uppercase tracking-[0.2em] xl:tracking-[0.3em]">PRÓXIMO EVENTO</span>
            <span className="w-1 h-1 bg-gold rounded-full animate-pulse flex-shrink-0 lg:hidden xl:block"></span>
          </div>
          <p className="text-white text-[8px] lg:text-[7px] xl:text-[10px] font-black uppercase tracking-tighter italic leading-none truncate lg:max-w-[80px] xl:max-w-none">
            AVANCE GLOBAL CUP
          </p>
        </div>
      </div>
    </a>
  );

  const navBackgroundStyles = isMenuOpen 
    ? 'bg-black py-4 border-b border-white/10' 
    : isScrolled 
      ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-white/10' 
      : 'bg-transparent py-6';

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${navBackgroundStyles}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-6 xl:px-12 flex justify-between items-center relative z-[110]">
        <a 
          href="/" 
          onClick={(e) => { 
            e.preventDefault(); 
            onNavigateHome?.(); 
            setIsMenuOpen(false); 
          }}
          className="flex items-center group flex-shrink-0"
        >
          <img 
            src={LOGOS.main} 
            alt="THE EMBASSY" 
            className={`transition-all duration-500 w-auto object-contain ${isScrolled || isMenuOpen ? 'h-6 lg:h-5 xl:h-7' : 'h-8 lg:h-6 xl:h-10'} brightness-0 invert`}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center lg:space-x-3 xl:space-x-8">
          
          {/* Dropdown Eventos */}
          <div className="relative group py-2">
            <button 
              onClick={onNavigateEvents}
              className="text-[10px] xl:text-[11px] font-bold transition-colors tracking-[0.2em] xl:tracking-[0.25em] uppercase text-white/70 hover:text-gold flex items-center gap-1.5 xl:gap-2"
            >
              Eventos
              <svg className="w-2.5 h-2.5 xl:w-3 xl:h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-2xl z-50">
              <div className="space-y-1">
                {EVENTS.map((event) => (
                  <a 
                    key={event.id}
                    href={event.link}
                    onClick={(e) => handleLinkClick(e, event)}
                    className="block p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                  >
                    <span className="text-[9px] font-black text-gold uppercase tracking-[0.2em] block mb-1">{event.category}</span>
                    <span className="text-xs font-black uppercase text-white group-hover/item:text-gold transition-colors">{event.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Dropdown Servicios */}
          <div className="relative group py-2">
            <button 
              className="text-[10px] xl:text-[11px] font-bold transition-colors tracking-[0.2em] xl:tracking-[0.25em] uppercase text-white/70 hover:text-gold flex items-center gap-1.5 xl:gap-2"
            >
              Servicios
              <svg className="w-2.5 h-2.5 xl:w-3 xl:h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-2xl z-50">
              <div className="space-y-4">
                {SERVICES.map((service, idx) => {
                  const targetHref = service.path || service.externalLink || '#servicios';
                  return (
                    <a 
                      key={idx}
                      href={targetHref}
                      onClick={(e) => handleLinkClick(e, service)}
                      className="block p-2 rounded-xl hover:bg-white/5 transition-all group/item"
                    >
                      <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em] block mb-1">
                        {service.buttonLabel || "SERVICIO PREMIUM"}
                      </span>
                      <span className="text-sm font-black uppercase text-white group-hover/item:text-gold transition-colors block">
                        {service.title}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <a 
            href="#instalaciones" 
            onClick={(e) => handleLinkClick(e, { path: '#instalaciones' })}
            className="text-[10px] xl:text-[11px] font-bold transition-colors tracking-[0.2em] xl:tracking-[0.25em] uppercase text-white/70 hover:text-gold"
          >
            Instalaciones
          </a>

          <a 
            href="#equipo" 
            onClick={(e) => handleLinkClick(e, { path: '#equipo' })}
            className="text-[10px] xl:text-[11px] font-bold transition-colors tracking-[0.2em] xl:tracking-[0.25em] uppercase text-white/70 hover:text-gold"
          >
            Equipo
          </a>

          <div className="flex items-center space-x-2 xl:space-x-4">
            <a 
              href="#contacto" 
              onClick={(e) => handleLinkClick(e, { path: '#contacto' })}
              className="bg-gold text-white px-4 xl:px-8 py-2.5 xl:py-3 rounded-full text-[9px] xl:text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-lg shadow-gold/20 whitespace-nowrap"
            >
              Reservar Ahora
            </a>
            
            <NextEventPill />
          </div>
        </div>

        {/* Mobile toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden text-white p-2 relative z-[120] focus:outline-none" 
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center transition-all duration-500 ease-in-out h-[100dvh] w-full ${isMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center space-y-6 px-6 w-full text-center">
          <a 
            href="/eventos" 
            onClick={(e) => handleLinkClick(e, { path: '/eventos' })}
            className={`text-2xl font-black tracking-[0.25em] uppercase transition-all duration-500 delay-[100ms] transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Eventos
          </a>
          <a 
            href="#servicios" 
            onClick={(e) => handleLinkClick(e, { path: '#servicios' })}
            className={`text-2xl font-black tracking-[0.25em] uppercase transition-all duration-500 delay-[150ms] transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Servicios
          </a>
          <a 
            href="#instalaciones" 
            onClick={(e) => handleLinkClick(e, { path: '#instalaciones' })}
            className={`text-2xl font-black tracking-[0.25em] uppercase transition-all duration-500 delay-[200ms] transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Instalaciones
          </a>
          <a 
            href="#equipo" 
            onClick={(e) => handleLinkClick(e, { path: '#equipo' })}
            className={`text-2xl font-black tracking-[0.25em] uppercase transition-all duration-500 delay-[250ms] transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Equipo
          </a>
          
          <div className={`pt-4 transition-all duration-500 delay-[300ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href="#contacto" 
              onClick={(e) => handleLinkClick(e, { path: '#contacto' })}
              className="bg-gold text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-gold/20 inline-block"
            >
              Reservar Ahora
            </a>
            
            <div className="mt-8 flex justify-center">
              <NextEventPill isMobile={true} />
            </div>
          </div>
        </div>
        
        {/* Background visual flair for mobile menu */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
          <img src={LOGOS.simple} className="h-20 w-auto" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
