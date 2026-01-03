
import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import CookieBanner from './components/CookieBanner.tsx';

// Pages
import HomePage from './pages/HomePage.tsx';
import LegalPage from './components/LegalPage.tsx';
import ClubPage from './components/ClubPage.tsx';
import EventsPage from './components/EventsPage.tsx';
import SkillCampPage from './components/SkillCampPage.tsx';
import MVPPage from './components/MVPPage.tsx';
import CIBAPage from './components/CIBAPage.tsx';
import TheSanctuaryPage from './components/TheSanctuaryPage.tsx';

type ViewType = 'home' | 'legal' | 'club' | 'events' | 'skillcamp' | 'mvp' | 'ciba' | 'sanctuary';

function App() {
  const [view, setView] = useState<ViewType>('home');

  const scrollToSection = useCallback((hash: string) => {
    if (!hash) return;
    
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id) || document.querySelector(hash);
      if (element) {
        const offset = 80; 
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

  const handleRoute = useCallback(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (path === '/legal') {
      setView('legal');
      window.scrollTo(0, 0);
    } else if (path === '/club') {
      setView('club');
      window.scrollTo(0, 0);
    } else if (path === '/eventos') {
      setView('events');
      window.scrollTo(0, 0);
    } else if (path === '/skillcamp') {
      setView('skillcamp');
      window.scrollTo(0, 0);
    } else if (path === '/experiencia-mvp') {
      setView('mvp');
      window.scrollTo(0, 0);
    } else if (path === '/ciba-basketball') {
      setView('ciba');
      window.scrollTo(0, 0);
    } else if (path === '/the-sanctuary') {
      setView('sanctuary');
      window.scrollTo(0, 0);
    } else {
      setView('home');
      if (hash) {
        scrollToSection(hash);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [scrollToSection]);

  useEffect(() => {
    window.addEventListener('popstate', handleRoute);
    handleRoute();
    return () => window.removeEventListener('popstate', handleRoute);
  }, [handleRoute]);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    handleRoute();
  };

  const navigateToLegal = () => navigateTo('/legal');
  const navigateToClub = () => navigateTo('/club');
  const navigateToEvents = () => navigateTo('/eventos');
  const navigateToHome = () => navigateTo('/');

  const renderView = () => {
    switch (view) {
      case 'legal':
        return <LegalPage onBack={navigateToHome} />;
      case 'club':
        return <ClubPage onBack={navigateToHome} />;
      case 'events':
        return <EventsPage onBack={navigateToHome} />;
      case 'skillcamp':
        return <SkillCampPage onBack={navigateToEvents} />;
      case 'mvp':
        return <MVPPage onBack={navigateToEvents} />;
      case 'ciba':
        return <CIBAPage onBack={navigateToEvents} />;
      case 'sanctuary':
        return <TheSanctuaryPage onBack={navigateToEvents} />;
      default:
        return <HomePage scrollToSection={scrollToSection} navigateToClub={navigateToClub} />;
    }
  };

  return (
    <div className="min-h-screen bg-black selection:bg-gold selection:text-white">
      <Navbar 
        onNavigateClub={navigateToClub} 
        onNavigateHome={navigateToHome} 
        onNavigateEvents={navigateToEvents} 
        onNavigateToSection={scrollToSection}
        currentPath={window.location.pathname}
      />
      {renderView()}
      <Footer onNavigateLegal={navigateToLegal} onNavigateClub={navigateToClub} />
      <CookieBanner />
    </div>
  );
}

export default App;
