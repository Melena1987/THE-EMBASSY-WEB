import React, { useState, useEffect } from 'react';
import { LOGOS } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

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
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
        setIsScrolled(window.scrollY > 20);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent, link: any) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetPath = link.path || link.link || (link.externalLink ? null : '#servicios');
    
    if (link.action) {
      link.action();
    } else if (link.externalLink) {
      window.open(link.externalLink, '_blank', 'noopener,noreferrer');
    } else if (targetPath) {
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
        }
      } else if (targetPath === '/eventos') {
        onNavigateEvents?.();
      } else {
        window.history.pushState({}, '', targetPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  };

  const navBackgroundStyles = isMenuOpen 
    ? 'bg-black py-4' 
    : isScrolled 
      ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-white/10' 
      : 'bg-transparent py-6';

  const openAvanceGlobal = () => {
    setIsMenuOpen(false);
    window.open('https://avanceglobalcup.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${navBackgroundStyles}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-6 xl:px-12 flex justify-between items-center relative z-[110]">
        
        {/* Logo and Home Link */}
        <div className="flex items-center gap-4 lg:gap-8">
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigateHome?.(); setIsMenuOpen(false); }}
            className="flex items-center group flex-shrink-0"
          >
            <img 
              src={LOGOS.main} 
              alt="THE EMBASSY" 
              className={`transition-all duration-500 w-auto object-contain ${isScrolled || isMenuOpen ? 'h-6 lg:h-5 xl:h-7' : 'h-8 lg:h-6 xl:h-10'} brightness-0 invert`}
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center lg:space-x-3 xl:space-x-6">
          <button onClick={onNavigateEvents} className="text-[10px] xl:text-[11px] font-bold transition-colors tracking-[0.2em] xl:tracking-[0.25em] uppercase text-white/70 hover:text-gold">
            {t('nav', 'events')}
          </button>

          <a href="#servicios" onClick={(e) => handleLinkClick(e, { path: '#servicios' })} className="text-[10px] xl:text-[11px] font-bold transition-colors tracking-[0.2em] xl:tracking-[0.25em] uppercase text-white/70 hover:text-gold">
            {t('nav', 'services')}
          </a>

          <a href="#instalaciones" onClick={(e) => handleLinkClick(e, { path: '#instalaciones' })} className="text-[10px] xl:text-[11px] font-bold transition-colors tracking-[0.2em] xl:tracking-[0.25em] uppercase text-white/70 hover:text-gold">
            {t('nav', 'installations')}
          </a>

          <a href="#equipo" onClick={(e) => handleLinkClick(e, { path: '#equipo' })} className="text-[10px] xl:text-[11px] font-bold transition-colors tracking-[0.2em] xl:tracking-[0.25em] uppercase text-white/70 hover:text-gold">
            {t('nav', 'team')}
          </a>

          {/* Language Switcher */}
          <div className="relative group/lang">
            <button 
              onMouseEnter={() => setIsLangOpen(true)}
              className="flex items-center gap-2 text-[10px] xl:text-[11px] font-black tracking-widest uppercase text-white/50 hover:text-gold transition-colors"
            >
              <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[7px] leading-none">{language.toUpperCase()}</span>
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div 
              onMouseLeave={() => setIsLangOpen(false)}
              className={`absolute top-full right-0 mt-2 w-24 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-xl p-2 transition-all duration-300 shadow-2xl ${isLangOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
            >
              <button onClick={() => {setLanguage('es'); setIsLangOpen(false);}} className={`w-full text-left px-3 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-colors ${language === 'es' ? 'text-gold bg-white/5' : 'text-white/40 hover:text-white'}`}>ESPAÑOL</button>
              <button onClick={() => {setLanguage('en'); setIsLangOpen(false);}} className={`w-full text-left px-3 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-colors ${language === 'en' ? 'text-gold bg-white/5' : 'text-white/40 hover:text-white'}`}>ENGLISH</button>
            </div>
          </div>

          <a href="#contacto" onClick={(e) => handleLinkClick(e, { path: '#contacto' })} className="bg-gold text-white px-6 py-2.5 rounded-full text-[9px] xl:text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-lg shadow-gold/20 flex-shrink-0">
            {t('nav', 'booking')}
          </a>

          {/* AVANCE GLOBAL CUP PILL */}
          <button 
            onClick={openAvanceGlobal}
            className={`flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full moving-gold-border transition-all duration-500 group/event ${isScrolled ? 'scale-90' : 'scale-100'}`}
          >
            <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center p-1.5 overflow-hidden flex-shrink-0">
              <img src={LOGOS.nextEvent} alt="Next Event" className="w-full h-full object-contain group-hover/event:scale-110 transition-transform duration-500" />
            </div>
            <div className="text-left pr-1">
              <p className="text-[6px] xl:text-[7px] font-black text-gold uppercase tracking-[0.3em] leading-none mb-1">
                {t('nav', 'nextEvent')} <span className="inline-block w-1 h-1 rounded-full bg-gold ml-0.5 animate-pulse"></span>
              </p>
              <p className="text-[8px] xl:text-[9px] font-black text-white uppercase italic tracking-tighter leading-none whitespace-nowrap">
                AVANCE GLOBAL CUP
              </p>
            </div>
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2 relative z-[120]" aria-label="Menu Toggle">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-black z-[100] transition-all duration-500 flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-4'}`}>
        
        {/* Menu Content Wrapper */}
        <div className="flex flex-col items-center w-full max-w-sm px-8 space-y-10 text-center">
          
          {/* Mobile Next Event Banner (Featured at top) */}
          <button 
             onClick={openAvanceGlobal}
             className="w-full flex items-center gap-4 bg-white/5 px-6 py-5 rounded-[2rem] border border-gold/30 moving-gold-border mb-4 transform transition-all active:scale-95"
          >
              <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center p-2.5 overflow-hidden">
                <img src={LOGOS.nextEvent} alt="Next Event" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-black text-gold uppercase tracking-[0.3em] mb-1">{t('nav', 'nextEvent')}</p>
                <p className="text-base font-black text-white uppercase italic tracking-tighter">AVANCE GLOBAL CUP</p>
              </div>
          </button>

          {/* Navigation Links List */}
          <div className="flex flex-col space-y-8 w-full">
            <button onClick={(e) => handleLinkClick(e, { path: '/eventos' })} className="text-3xl font-black uppercase italic tracking-tighter text-white hover:text-gold transition-colors">{t('nav', 'events')}</button>
            <button onClick={(e) => handleLinkClick(e, { path: '#servicios' })} className="text-3xl font-black uppercase italic tracking-tighter text-white hover:text-gold transition-colors">{t('nav', 'services')}</button>
            <button onClick={(e) => handleLinkClick(e, { path: '#instalaciones' })} className="text-3xl font-black uppercase italic tracking-tighter text-white hover:text-gold transition-colors">{t('nav', 'installations')}</button>
            <button onClick={(e) => handleLinkClick(e, { path: '#equipo' })} className="text-3xl font-black uppercase italic tracking-tighter text-white hover:text-gold transition-colors">{t('nav', 'team')}</button>
          </div>

          {/* Language Selection */}
          <div className="flex items-center gap-12 pt-6">
            <button onClick={() => setLanguage('es')} className={`text-base font-black tracking-[0.3em] transition-all ${language === 'es' ? 'text-gold scale-110' : 'text-white/20'}`}>ES</button>
            <div className="w-[1px] h-4 bg-white/10"></div>
            <button onClick={() => setLanguage('en')} className={`text-base font-black tracking-[0.3em] transition-all ${language === 'en' ? 'text-gold scale-110' : 'text-white/20'}`}>EN</button>
          </div>

          {/* Primary CTA */}
          <button 
            onClick={(e) => handleLinkClick(e, { path: '#contacto' })} 
            className="w-full bg-gold text-white py-6 rounded-full text-xs font-black uppercase tracking-[0.4em] shadow-[0_20px_40px_-10px_rgba(212,140,0,0.3)] transform transition-all active:scale-95"
          >
            {t('nav', 'booking')}
          </button>
        </div>

        {/* Decorative Background for Mobile Menu */}
        <div className="absolute top-[20%] left-[-10%] text-[40vw] font-black text-white/[0.02] italic pointer-events-none select-none z-[-1]">EMBASSY</div>
      </div>
    </nav>
  );
};

export default Navbar;