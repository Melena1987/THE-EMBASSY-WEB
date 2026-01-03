
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app-language');
    return (saved as Language) || 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app-language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (section: string, key: string): string => {
    try {
      return translations[language][section][key] || key;
    } catch (e) {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

const translations: any = {
  es: {
    common: {
      backHome: 'Volver al Inicio',
      backEvents: 'Volver a Eventos',
      backHub: 'Volver al Hub',
      readMore: 'Ver Detalles',
      visit: 'Visitar',
      soon: 'PRÓXIMAMENTE',
      private: 'PRIVADO',
      finished: 'FINALIZADO',
      contactUs: 'Contactar',
      send: 'Enviar',
      details: 'Ver Detalles'
    },
    nav: {
      events: 'Eventos',
      services: 'Servicios',
      installations: 'Instalaciones',
      team: 'Equipo',
      booking: 'Reservar Ahora',
      nextEvent: 'PRÓXIMO EVENTO'
    },
    hero: {
      badge: 'EL SANTUARIO DEL RENDIMIENTO',
      description: 'Diseñado por Berni Rodríguez y José Manuel Calderón. 1500m2 de alto rendimiento FIBA/NBA en la Costa del Sol.',
      cta: 'Reservar Pista',
      explore: 'Explora el Training Center'
    },
    vision: {
      subtitle: 'Filosofía de Élite',
      title: 'REDEFINIENDO EL ENTRENAMIENTO PROFESIONAL',
      point1_title: 'Exclusividad y privacidad',
      point1_desc: 'Acceso bajo reserva estricta para deportistas de élite y equipos profesionales.',
      point2_title: 'Infraestructura NBA/FIBA',
      point2_desc: '2 canchas con parquet homologado y tecnología de vanguardia para scouting.',
      point3_title: 'Equipamiento Profesional',
      point3_desc: 'Área de rehabilitación de 80m2 y gimnasio de alto rendimiento.',
      point4_title: 'Experiencia Integral',
      point4_desc: 'Desde formación premium hasta traslados privados y protocolo VIP.'
    },
    stats: {
      subtitle: 'The Numbers',
      title: 'THE EMBASSY EN DATOS',
      fiba_desc: 'Equipamiento homologado por la FIBA y diseñado bajo los estándares de la NBA para el máximo rendimiento profesional.',
      excellence: 'EXCELENCIA DEPORTIVA',
      courts: 'CANCHAS FIBA / NBA',
      rehab: 'REHABILITACIÓN Y FISIO',
      accommodation: 'ALOJAMIENTO & SERVICIOS',
      laundry: 'SERVICIO DE LAVANDERÍA',
      interference: 'INTERFERENCIAS EXTERNAS'
    },
    installations: {
      subtitle: 'Infraestructura de Clase Mundial',
      desc: 'Situado en una de las zonas más exclusivas de la Costa del Sol, THE EMBASSY es el referente europeo homologado por la FIBA para el máximo rendimiento profesional.',
      point1_title: 'Canchas FIBA/NBA',
      point1_desc: '2 pistas con parquet profesional y scouting audiovisual.',
      point2_title: 'Zona de Salud',
      point2_desc: 'Sala fisioterapia equipada, máquina de hielo y crioterapia.',
      point3_title: 'Análisis Táctico',
      point3_desc: 'Sala audiovisual ideal para entrenadores y estrategias.',
      point4_title: 'Logística Pro',
      point4_desc: 'Vestuarios premium y servicio de lavandería 24h.',
      fibaBadge: 'EQUIPAMIENTO HOMOLOGADO'
    },
    services: {
      subtitle: 'Premium Approach',
      title: 'NUESTROS SERVICIOS',
      desc: 'Un ecosistema integral diseñado para cubrir todas las dimensiones del éxito deportivo y profesional.',
      hotelBtn: 'Visitar Hotel',
      detailsBtn: 'Ver Detalles',
      premiumBtn: 'Servicio Premium',
      performanceBtn: 'Performance Lab'
    },
    team: {
      subtitle: 'Elite Performance Staff',
      title: 'NUESTRO EQUIPO',
      desc: 'Liderado por campeones del mundo y especialistas de élite, uniendo la visión global de la NBA con el rigor táctico europeo.'
    },
    stars: {
      subtitle: 'Global Basketball Hub',
      desc: 'Hay lugares que se definen por las personas que los habitan. Nos sentimos orgullosos de haber sido el campo de entrenamiento para algunos de los rostros más reconocidos del baloncesto mundial.'
    },
    partners: {
      subtitle: 'GLOBAL NETWORK',
      title: 'NUESTROS PARTNERS',
      desc: 'Colaboramos con instituciones y marcas de prestigio que comparten nuestra visión de excelencia y compromiso con el baloncesto.',
      cta: 'Info Patrocinio'
    },
    social: {
      subtitle: 'Impacto en la Comunidad',
      title: 'COMPROMISO SOCIAL',
      desc: 'Creemos que el baloncesto es una herramienta para formar a la próxima generación y crear un impacto positivo en la sociedad.'
    },
    contact: {
      subtitle: 'Join the Elite',
      title: 'VAMOS A HABLAR',
      desc: 'Nuestro equipo de élite está listo para asesorarte. Reserva tu plaza en el Training Center más exclusivo de Europa.',
      form_name: 'Nombre Completo',
      form_email: 'Email Corporativo',
      form_subject: 'Asunto / Servicio',
      form_phone: 'Teléfono',
      form_message: 'Mensaje',
      form_privacy: 'Acepto la política de privacidad',
      form_submit: 'Enviar Solicitud',
      sending: 'Enviando...'
    },
    footer: {
      desc: 'El santuario del baloncesto profesional en la Costa del Sol. Rendimiento, exclusividad y excelencia técnica.',
      contact: 'Contacto',
      follow: 'SÍGUENOS',
      rights: '© THE EMBASSY TRAINING CENTER. TODOS LOS DERECHOS RESERVADOS.',
      dev: 'Experiencia Digital por',
      legal: 'Aviso Legal',
      privacy: 'Privacidad',
      club: 'The Club'
    },
    cookie: {
      desc: 'Utilizamos cookies para optimizar tu experiencia en el Training Center digital. Al continuar navegando, aceptas nuestra política de cookies.',
      accept: 'Aceptar'
    },
    club: {
      subtitle: 'Elite Networking',
      title: 'CLUB DE EMPRESAS',
      intro: 'Bienvenidos a nuestra propuesta exclusiva para formar parte del selecto grupo de empresas que conformarán The Embassy Club.',
      benefitsTitle: 'Beneficios',
      statsTitle: 'Impacto',
      membersTitle: 'DATOS GENERALES',
      obj: 'Objeto',
      objVal: 'Generar un Club exclusivo para empresas, forjando alianzas sólidas.',
      fees: 'Aportación',
      feesVal: '7.000 € (+ IVA) en concepto de miembro de THE EMBASSY CLUB.',
      duration: 'Duración',
      durationVal: 'Bianual, renovable.'
    },
    events: {
      subtitle: 'Elite Calendar',
      title: 'CALENDARIO DE EVENTOS',
      desc: 'Desde experiencias exclusivas NBA hasta programas de tecnificación de alto rendimiento. El epicentro del baloncesto profesional en Europa.'
    },
    performanceLab: {
      title: 'PERFORMANCE LAB',
      subtitle: 'UNDER CONSTRUCTION',
      desc: 'ESTAMOS PREPARANDO EL ESPACIO DE ANÁLISIS BIOMECÁNICO MÁS AVANZADO DE EUROPA.',
      biometry: 'Biometría',
      recovery: 'Recuperación',
      optimization: 'Optimización'
    }
  },
  en: {
    common: {
      backHome: 'Back to Home',
      backEvents: 'Back to Events',
      backHub: 'Back to Hub',
      readMore: 'Read More',
      visit: 'Visit',
      soon: 'COMING SOON',
      private: 'PRIVATE',
      finished: 'FINISHED',
      contactUs: 'Contact Us',
      send: 'Send',
      details: 'View Details'
    },
    nav: {
      events: 'Events',
      services: 'Services',
      installations: 'Facilities',
      team: 'Team',
      booking: 'Book Now',
      nextEvent: 'NEXT EVENT'
    },
    hero: {
      badge: 'THE SANCTUARY FOR PERFORMANCE',
      description: 'Designed by Berni Rodríguez and José Manuel Calderón. 1500m2 of FIBA/NBA high performance in Costa del Sol.',
      cta: 'Book Court',
      explore: 'Explore Training Center'
    },
    vision: {
      subtitle: 'Elite Philosophy',
      title: 'REDEFINING PROFESSIONAL TRAINING',
      point1_title: 'Exclusivity & Privacy',
      point1_desc: 'Strict booking-only access for elite athletes and professional teams.',
      point2_title: 'NBA/FIBA Infrastructure',
      point2_desc: '2 courts with approved parquet and cutting-edge scouting technology.',
      point3_title: 'Professional Equipment',
      point3_desc: '80m2 rehabilitation area and high-performance gym.',
      point4_title: 'Holistic Experience',
      point4_desc: 'From premium training to private transfers and VIP protocols.'
    },
    stats: {
      subtitle: 'The Numbers',
      title: 'THE EMBASSY DATA',
      fiba_desc: 'FIBA-approved equipment designed under NBA standards for maximum professional performance.',
      excellence: 'ATHLETIC EXCELLENCE',
      courts: 'FIBA / NBA COURTS',
      rehab: 'REHAB & PHYSIO',
      accommodation: 'ACCOMMODATION & SERVICES',
      laundry: 'LAUNDRY SERVICE',
      interference: 'EXTERNAL INTERFERENCE'
    },
    installations: {
      subtitle: 'World Class Infrastructure',
      desc: 'Located in one of the most exclusive areas of Costa del Sol, THE EMBASSY is the FIBA-approved European reference for professional high performance.',
      point1_title: 'FIBA/NBA Courts',
      point1_desc: '2 courts with professional parquet and audiovisual scouting.',
      point2_title: 'Health Zone',
      point2_desc: 'Equipped physio room, ice machine, and cryotherapy.',
      point3_title: 'Tactical Analysis',
      point3_desc: 'Audiovisual room ideal for coaches and strategies.',
      point4_title: 'Pro Logistics',
      point4_desc: 'Premium locker rooms and 24h laundry service.',
      fibaBadge: 'APPROVED EQUIPMENT'
    },
    services: {
      subtitle: 'Premium Approach',
      title: 'OUR SERVICES',
      desc: 'A holistic ecosystem designed to cover all dimensions of athletic and professional success.',
      hotelBtn: 'Visit Hotel',
      detailsBtn: 'View Details',
      premiumBtn: 'Premium Service',
      performanceBtn: 'Performance Lab'
    },
    team: {
      subtitle: 'Elite Performance Staff',
      title: 'OUR TEAM',
      desc: 'Led by world champions and elite specialists, uniting NBA global vision with European tactical rigor.'
    },
    stars: {
      subtitle: 'Global Basketball Hub',
      desc: 'There are places defined by the people who inhabit them. We are proud to have been the training ground for some of the world’s most recognized basketball faces.'
    },
    partners: {
      subtitle: 'GLOBAL NETWORK',
      title: 'OUR PARTNERS',
      desc: 'We collaborate with prestigious institutions and brands that share our vision of excellence and commitment to basketball.',
      cta: 'Sponsorship Info'
    },
    social: {
      subtitle: 'Community Impact',
      title: 'SOCIAL COMMITMENT',
      desc: 'We believe basketball is a tool to shape the next generation and create a positive impact on society.'
    },
    contact: {
      subtitle: 'Join the Elite',
      title: "LET'S TALK",
      desc: 'Our elite team is ready to assist you. Book your spot at Europe\'s most exclusive Training Center.',
      form_name: 'Full Name',
      form_email: 'Corporate Email',
      form_subject: 'Subject / Service',
      form_phone: 'Phone',
      form_message: 'Message',
      form_privacy: 'I accept the privacy policy',
      form_submit: 'Send Request',
      sending: 'Sending...'
    },
    footer: {
      desc: 'The sanctuary for professional basketball on the Costa del Sol. Performance, exclusivity, and technical excellence.',
      contact: 'Contact',
      follow: 'FOLLOW US',
      rights: '© THE EMBASSY TRAINING CENTER. ALL RIGHTS RESERVED.',
      dev: 'Digital Experience by',
      legal: 'Legal Notice',
      privacy: 'Privacy',
      club: 'The Club'
    },
    cookie: {
      desc: 'We use cookies to optimize your experience in the digital Training Center. By continuing to browse, you accept our cookie policy.',
      accept: 'Accept'
    },
    club: {
      subtitle: 'Elite Networking',
      title: 'BUSINESS CLUB',
      intro: 'Welcome to our exclusive proposal to join the select group of companies that will form The Embassy Club.',
      benefitsTitle: 'Benefits',
      statsTitle: 'Impact',
      membersTitle: 'GENERAL DATA',
      obj: 'Objective',
      objVal: 'Create an exclusive club for companies, forging strong alliances.',
      fees: 'Contribution',
      feesVal: '€7,000 (+ VAT) as a member of THE EMBASSY CLUB.',
      duration: 'Duration',
      durationVal: 'Biannual, renewable.'
    },
    events: {
      subtitle: 'Elite Calendar',
      title: 'EVENTS CALENDAR',
      desc: 'From exclusive NBA experiences to high-performance technical programs. The epicenter of professional basketball in Europe.'
    },
    performanceLab: {
      title: 'PERFORMANCE LAB',
      subtitle: 'UNDER CONSTRUCTION',
      desc: 'WE ARE PREPARING EUROPE\'S MOST ADVANCED BIOMECHANICAL ANALYSIS SPACE.',
      biometry: 'Biometry',
      recovery: 'Recovery',
      optimization: 'Optimization'
    }
  }
};
