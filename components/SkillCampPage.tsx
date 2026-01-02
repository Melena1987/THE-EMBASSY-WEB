
import React, { useEffect } from 'react';
import SkillCampHero from './SkillCampHero.tsx';
import SkillCampLogistics from './SkillCampLogistics.tsx';
import SkillCampVenueInfo from './SkillCampVenueInfo.tsx';
import SkillCampStaff from './SkillCampStaff.tsx';
import SkillCampPerformance from './SkillCampPerformance.tsx';
import SkillCampVisualMedia from './SkillCampVisualMedia.tsx';
import SkillCampGallery from './SkillCampGallery.tsx';
import SkillCampFooterCTA from './SkillCampFooterCTA.tsx';

const SkillCampPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-gold overflow-x-hidden">
      
      <SkillCampHero onBack={onBack} />
      
      <SkillCampLogistics />

      <SkillCampVenueInfo />
      
      <SkillCampStaff />
      
      <SkillCampPerformance />

      <SkillCampVisualMedia />

      <SkillCampGallery />
      
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
