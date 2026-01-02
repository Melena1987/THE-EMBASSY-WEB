
import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Vision from './components/Vision.tsx';
import Stats from './components/Stats.tsx';
import Services from './components/Services.tsx';
import Team from './components/Team.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';
import InstallationCarousel from './components/InstallationCarousel.tsx';
import StarsCarousel from './components/StarsCarousel.tsx';
import LegalPage from './components/LegalPage.tsx';
import ClubPage from './components/ClubPage.tsx';
import CookieBanner from './components/CookieBanner.tsx';
import Partners from './components/Partners.tsx';
import SocialImpact from './components/SocialImpact.tsx';
import { LOGOS } from './constants.tsx';

type ViewType = 'home' | 'legal' | 'club';

function App() {
  const [view, setView] = useState<ViewType>('home');

  const scrollToSection = useCallback((hash: string) => {
    if (!hash || hash === '#' || hash === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Pequeño timeout para asegurar que el DOM de 'home' esté listo si venimos de otra vista
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        const offset = 80; // Compensación por el navbar fixed
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash === '#legal') {
        setView('legal');
        window.scrollTo(0, 0);
      } else if (hash === '#club') {
        setView('club');
        window.scrollTo(0, 0);
      } else {
        const isSection = ['#servicios', '#instalaciones', '#equipo', '#contacto'].includes(hash);
        const wasNotHome = view !== 'home';
        
        setView('home');

        if (isSection) {
          scrollToSection(hash);
        } else if (hash === '' || hash === '#' || wasNotHome) {
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Ejecución inicial para detectar la ruta al cargar
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [view, scrollToSection]);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 500);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  const navigateToLegal = () => { window.location.hash = 'legal'; };
  const navigateToClub = () => { window.location.hash = 'club'; };
  const navigateToHome = () => { 
    if (window.location.hash === '' || window.location.hash === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '';
    }
  };

  const renderView = () => {
    switch (view) {
      case 'legal':
        return <LegalPage onBack={navigateToHome} />;
      case 'club':
        return <ClubPage onBack={navigateToHome} />;
      default:
        return (
          <main>
            <Hero />
            <Vision />
            <Stats />
            <section id="instalaciones" className="py-32 bg-white text-black overflow-hidden relative">
              <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className="reveal order-2 lg:order-1 relative group">
                    <div className="aspect-square rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(212,140,0,0.15)] relative z-10">
                      <InstallationCarousel />
                    </div>
                    {/* FIBA Approved Badge overlaying the gallery */}
                    <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] rotate-[4deg] group-hover:rotate-0 transition-all duration-500 hidden md:flex flex-col items-center gap-2 border border-black/5 z-20">
                      <img 
                        src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761953861247_fiba.png?alt=media&token=9bfb33df-5c09-4d97-a105-72d20dad3436" 
                        className="h-14 w-auto object-contain"
                        alt="FIBA Logo"
                      />
                      <div className="h-[2px] w-8 bg-gold mb-1"></div>
                      <p className="text-black font-black uppercase tracking-tighter text-[10px] italic">EQUIPMENT APPROVED</p>
                    </div>
                  </div>
                  <div className="reveal order-1 lg:order-2">
                    <span className="text-gold text-xs font-black tracking-[0.4em] uppercase mb-6 block italic">Infraestructura de Clase Mundial</span>
                    <div className="mb-10">
                      <img src={LOGOS.sanctuary} alt="THE SANCTUARY" className="h-24 md:h-36 w-auto object-contain" />
                    </div>
                    <div className="space-y-10">
                      <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-xl uppercase tracking-tight">
                        Situado en una de las zonas más exclusivas de la <span className="text-black font-black">Costa del Sol</span>, THE EMBASSY es el referente europeo homologado por la FIBA para el máximo rendimiento profesional.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                        {[
                          { title: 'Canchas FIBA/NBA', desc: '2 pistas con parquet profesional y scouting audiovisual.' },
                          { title: 'Zona de Salud', desc: 'Sala fisioterapia equipada, máquina de hielo y crioterapia.' },
                          { title: 'Análisis Táctico', desc: 'Sala audiovisual ideal para entrenadores y estrategias.' },
                          { title: 'Logística Pro', desc: 'Vestuarios premium y servicio de lavandería 24h.' }
                        ].map((item, i) => (
                          <div key={i} className="group">
                            <div className="w-12 h-[3px] bg-black mb-5 group-hover:bg-gold group-hover:w-full transition-all duration-700"></div>
                            <h4 className="text-sm font-black uppercase tracking-widest mb-2 group-hover:text-gold transition-colors italic">{item.title}</h4>
                            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Services />
            <Team />
            <section className="py-32 bg-black overflow-hidden">
              <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-20 reveal">
                <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-10 block italic">Global Basketball Hub</span>
                <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-[1.1] max-w-5xl mx-auto mb-12">
                  Hay lugares que se definen por las personas que los habitan. Nos sentimos orgullosos de haber sido el campo de entrenamiento para algunos de los rostros más reconocidos del baloncesto mundial.
                </h2>
              </div>
              <div className="reveal active">
                <StarsCarousel />
              </div>
            </section>
            <Partners onSponsorshipClick={navigateToClub} />
            <SocialImpact />
            <ContactForm />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black selection:bg-gold selection:text-white">
      <Navbar onNavigateClub={navigateToClub} onNavigateHome={navigateToHome} />
      {renderView()}
      <Footer onNavigateLegal={navigateToLegal} onNavigateClub={navigateToClub} />
      <CookieBanner />
    </div>
  );
}

export default App;
