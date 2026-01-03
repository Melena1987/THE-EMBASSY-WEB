
import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[200] p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <p className="text-[10px] md:text-xs text-white/60 font-medium uppercase tracking-widest leading-relaxed text-center md:text-left">
          Utilizamos cookies para optimizar tu experiencia en el Training Center digital. Al continuar navegando, aceptas nuestra <span className="text-gold cursor-pointer border-b border-gold/30">política de cookies</span>.
        </p>
        <div className="flex gap-4 shrink-0">
          <button 
            onClick={handleAccept}
            className="bg-gold text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            Aceptar
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;
