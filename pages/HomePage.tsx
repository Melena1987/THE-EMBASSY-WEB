
import React, { useEffect } from 'react';
import Hero from '../components/Hero.tsx';
import Vision from '../components/Vision.tsx';
import Stats from '../components/Stats.tsx';
import Services from '../components/Services.tsx';
import Team from '../components/Team.tsx';
import InstallationsSection from '../components/InstallationsSection.tsx';
import StarsSection from '../components/StarsSection.tsx';
import Partners from '../components/Partners.tsx';
import SocialImpact from '../components/SocialImpact.tsx';
import ContactForm from '../components/ContactForm.tsx';

interface HomePageProps {
  scrollToSection: (hash: string) => void;
  navigateToClub: () => void;
  preselectedSubject?: string;
}

const HomePage: React.FC<HomePageProps> = ({ scrollToSection, navigateToClub, preselectedSubject }) => {
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
  }, []);

  return (
    <main>
      <Hero onExplore={() => scrollToSection('#instalaciones')} />
      <Vision />
      <Stats />
      <InstallationsSection />
      <Services />
      <Team />
      <StarsSection />
      <Partners onSponsorshipClick={navigateToClub} />
      <SocialImpact />
      <ContactForm initialSubject={preselectedSubject} />
    </main>
  );
};

export default HomePage;
