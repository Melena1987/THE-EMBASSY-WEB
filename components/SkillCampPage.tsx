
import React, { useEffect, useState, useRef } from 'react';
import SkillCampHero from './SkillCampHero.tsx';
import SkillCampLogistics from './SkillCampLogistics.tsx';
import SkillCampVenueInfo from './SkillCampVenueInfo.tsx';
import SkillCampStaff from './SkillCampStaff.tsx';
import SkillCampPerformance from './SkillCampPerformance.tsx';
import SkillCampFooterCTA from './SkillCampFooterCTA.tsx';

const SkillCampPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef<number>(0);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      
      // Throttling with requestAnimationFrame for smooth parallax
      if (!requestRef.current) {
        requestRef.current = requestAnimationFrame(() => {
          setScrollY(scrollRef.current);
          requestRef.current = null;
        });
      }
      
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-gold overflow-x-hidden">
      
      <SkillCampHero onBack={onBack} scrollY={scrollY} />
      
      <SkillCampLogistics />

      <SkillCampVenueInfo />
      
      <SkillCampStaff />
      
      <SkillCampPerformance />
      
      <SkillCampFooterCTA onBack={onBack} />

      <style>{`
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .reveal {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
};

export default SkillCampPage;
