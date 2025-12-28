
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Stats from './components/Stats';
import Services from './components/Services';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import InstallationCarousel from './components/InstallationCarousel';
import StarsCarousel from './components/StarsCarousel';
import LegalPage from './components/LegalPage';
import ClubPage from './components/ClubPage';
import CookieBanner from './components/CookieBanner';
import Partners from './components/Partners';
import SocialImpact from './components/SocialImpact';
import { LOGOS } from './constants';

type ViewType = 'home' | 'legal' | 'club';

function App() {
  const [view, setView] = useState<ViewType>(() => {
    const hash = window.location.hash;
    if (hash === '#legal') return 'legal';
    if (hash === '#club') return 'club';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#legal') {
        setView('legal');
      } else if (hash === '#club') {
        setView('club');
      } else {
        setView('home');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 80;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [view]);

  const navigateToLegal = () => { window.location.hash = 'legal'; };
  const navigateToClub = () => { window.location.hash = 'club'; };
  const navigateToHome = () => { 
    window.location.hash = '';
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
    setView('home');
    window.scrollTo(0, 0);
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
                    <div className="aspect-square rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(212,140,0,0.15)]">
                      <InstallationCarousel />
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
