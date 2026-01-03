
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
    services_items: {
      'Instalaciones': 'Instalaciones',
      'Instalaciones_desc': '2 CANCHAS FIBA/NBA, SALA FISIOTERAPIA EQUIPADA, VESTUARIOS PREMIUM Y SALA AUDIOVISUAL PARA SCOUTING.',
      'Transporte & Seguridad': 'Transporte & Seguridad',
      'Transporte & Seguridad_desc': 'Traslados privados y protocolo VIP para garantizar la máxima discreción y confort de los atletas.',
      'Formación Técnica': 'Formación Técnica',
      'Formación Técnica_desc': 'STAFF ESPECIALIZADO Y FORMACIÓN PREMIUM PARA TODOS LOS NIVELES, DESDE BASE HASTA PROFESIONAL.',
      'Experiencias VIP': 'Experiencias VIP',
      'Experiencias VIP_desc': 'Excursiones exclusivas por la Costa del Sol y entradas VIP a los eventos más destacados.',
      'Alojamiento & VIP': 'Alojamiento & VIP',
      'Alojamiento & VIP_desc': 'ALOJAMIENTOS ESTÁNDAR Y VIP CON ACCESO A SERVICIOS DE RESTAURACIÓN, OCIO Y BIENESTAR.',
      'Eventos Corporativos': 'Eventos Corporativos',
      'Eventos Corporativos_desc': 'Masterclasses, Team Building, charlas de estrellas y eventos deportivos de alto nivel.',
      'Salud y Fisioterapia': 'Salud y Fisioterapia',
      'Salud y Fisioterapia_desc': 'SERVICIO DE URGENCIAS PREFERENTE EN HOSPITAL QUIRÓNSALUD Y SERVICIO DE FISIOTERAPIA DE ÉLITE.'
    },
    team: {
      subtitle: 'Elite Performance Staff',
      title: 'NUESTRO EQUIPO',
      desc: 'Liderado por campeones del mundo y especialistas de élite, uniendo la visión global de la NBA con el rigor táctico europeo.'
    },
    team_members: {
      'Berni Rodríguez': 'Berni Rodríguez',
      'Berni Rodríguez_role': 'Co-Fundador',
      'Berni Rodríguez_desc': 'Exjugador profesional con amplia experiencia en gestión deportiva y desarrollo de proyectos de baloncesto a nivel internacional. Medallista olímpico y referente en el baloncesto español.',
      'Jose M. Calderón': 'Jose M. Calderón',
      'Jose M. Calderón_role': 'Co-Fundador',
      'Jose M. Calderón_desc': 'Exjugador NBA con una destacada carrera internacional. Aporta su visión global y contactos en el más alto nivel del baloncesto mundial para crear experiencias únicas.',
      'Manuel Escobar': 'Manuel Escobar',
      'Manuel Escobar_role': 'CEO',
      'Manuel Escobar_desc': 'Especialista en gestión deportiva y desarrollo de eventos. Su experiencia en la organización de competiciones de alto nivel garantiza la excelencia en cada proyecto.',
      'Manuel Elena': 'Manuel Elena',
      'Manuel Elena_role': 'Manager & Digital',
      'Manuel Elena_desc': 'Intersección entre tecnología y negocio. Desarrollador informático y marketing, gestión de la comunicación y el desarrollo digital, con especial énfasis en el sector de eventos deportivos. Gerente de las instalaciones de THE EMBASSY.',
      'Adriana Rodríguez': 'Adriana Rodríguez',
      'Adriana Rodríguez_role': 'Especialista en rendimiento deportivo',
      'Adriana Rodríguez_desc': 'Especialista en rendimiento deportivo. Aplica su experiencia profesional en el baloncesto élite para optimizar la salud física del jugador/a y su actuación en la pista.',
      'Alfonso Sánchez': 'Alfonso Sánchez',
      'Alfonso Sánchez_role': 'Entrenador de desarrollo',
      'Alfonso Sánchez_desc': 'Exjugador profesional con una destacada trayectoria en 5 clubes ACB. Actualmente, desempeña el rol de entrenador de desarrollo de jugadores y técnica individual en el Training Center.'
    },
    stars: {
      subtitle: 'Global Basketball Hub',
      title: 'PERSONAS QUE NOS DEFINEN',
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
      desc: 'Creemos que el baloncesto es una herramienta para formar a la próxima generación y crear un impacto positivo en la sociedad. Estos proyectos definen nuestra visión fuera de la pista.'
    },
    contact: {
      subtitle: 'JOIN THE ELITE',
      title: 'VAMOS A HABLAR',
      desc: 'NUESTRO EQUIPO DE ÉLITE ESTÁ LISTO PARA ASESORARTE. RESERVA TU PLAZA EN EL TRAINING CENTER MÁS EXCLUSIVO DE EUROPA.',
      info_email: 'EMAIL DIRECTO',
      info_location: 'UBICACIÓN',
      info_location_val: 'LA COSTA DEL SOL, ESPAÑA',
      form_name: 'Nombre Completo',
      form_email: 'Email Corporativo',
      form_subject: 'Asunto / Servicio',
      form_phone: 'Teléfono',
      form_message: 'Mensaje',
      form_privacy: 'Acepto la política de privacidad',
      form_submit: 'Enviar Solicitud',
      sending: 'Enviando...',
      subject_training: 'Entrenamiento Individual / Pro',
      subject_teams: 'Equipos Profesionales',
      subject_events: 'Eventos y Campus',
      subject_vip: 'Experiencias VIP',
      subject_sponsorship: 'Patrocinio / Partners',
      subject_other: 'Otros asuntos'
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
    services_items: {
      'Instalaciones': 'Facilities',
      'Instalaciones_desc': '2 FIBA/NBA COURTS, EQUIPPED PHYSIO ROOM, PREMIUM LOCKER ROOMS AND AUDIOVISUAL ROOM FOR SCOUTING.',
      'Transporte & Seguridad': 'Transport & Security',
      'Transporte & Seguridad_desc': 'Private transfers and VIP protocol to guarantee maximum discretion and comfort for athletes.',
      'Formación Técnica': 'Technical Training',
      'Formación Técnica_desc': 'SPECIALIZED STAFF AND PREMIUM TRAINING FOR ALL LEVELS, FROM YOUTH TO PROFESSIONAL.',
      'Experiencias VIP': 'VIP Experiences',
      'Experiencias VIP_desc': 'Exclusive excursions around the Costa del Sol and VIP tickets to the most prominent events.',
      'Alojamiento & VIP': 'Accommodation & VIP',
      'Alojamiento & VIP_desc': 'STANDARD AND VIP ACCOMMODATION WITH ACCESS TO CATERING, LEISURE, AND WELLNESS SERVICES.',
      'Eventos Corporativos': 'Corporate Events',
      'Eventos Corporativos_desc': 'Masterclasses, Team Building, star talks, and high-level sporting events.',
      'Salud y Fisioterapia': 'Health & Physiotherapy',
      'Salud y Fisioterapia_desc': 'PREFERRED EMERGENCY SERVICE AT QUIRÓNSALUD HOSPITAL AND ELITE PHYSIOTHERAPY SERVICE.'
    },
    team: {
      subtitle: 'Elite Performance Staff',
      title: 'OUR TEAM',
      desc: 'Led by world champions and elite specialists, uniting NBA global vision with European tactical rigor.'
    },
    team_members: {
      'Berni Rodríguez': 'Berni Rodríguez',
      'Berni Rodríguez_role': 'Co-Founder',
      'Berni Rodríguez_desc': 'Former professional player with extensive experience in sports management and international basketball project development. Olympic medalist and key figure in Spanish basketball.',
      'Jose M. Calderón': 'Jose M. Calderón',
      'Jose M. Calderón_role': 'Co-Founder',
      'Jose M. Calderón_desc': 'Former NBA player with a distinguished international career. He brings his global vision and high-level contacts to create unique basketball experiences.',
      'Manuel Escobar': 'Manuel Escobar',
      'Manuel Escobar_role': 'CEO',
      'Manuel Escobar_desc': 'Specialist in sports management and event development. His experience in organizing high-level competitions guarantees excellence in every project.',
      'Manuel Elena': 'Manuel Elena',
      'Manuel Elena_role': 'Manager & Digital',
      'Manuel Elena_desc': 'Intersection between technology and business. Developer and marketer, managing communication and digital development, focusing on the sports events sector. General Manager of THE EMBASSY.',
      'Adriana Rodríguez': 'Adriana Rodríguez',
      'Adriana Rodríguez_role': 'Sport Performance Specialist',
      'Adriana Rodríguez_desc': 'Sports performance specialist. She applies her professional experience in elite basketball to optimize physical health and on-court performance.',
      'Alfonso Sánchez': 'Alfonso Sánchez',
      'Alfonso Sánchez_role': 'Development Coach',
      'Alfonso Sánchez_desc': 'Former professional player with a notable career in 5 ACB clubs. Currently serves as a player development and individual technique coach at the Training Center.'
    },
    stars: {
      subtitle: 'Global Basketball Hub',
      title: 'PEOPLE WHO DEFINE US',
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
      desc: 'We believe basketball is a tool to shape the next generation and create a positive impact on society. These projects define our vision off the court.'
    },
    contact: {
      subtitle: 'JOIN THE ELITE',
      title: "LET'S TALK",
      desc: 'OUR ELITE TEAM IS READY TO ASSIST YOU. BOOK YOUR SPOT AT EUROPE\'S MOST EXCLUSIVE TRAINING CENTER.',
      info_email: 'DIRECT EMAIL',
      info_location: 'LOCATION',
      info_location_val: 'THE COSTA DEL SOL, SPAIN',
      form_name: 'Full Name',
      form_email: 'Corporate Email',
      form_subject: 'Subject / Service',
      form_phone: 'Phone',
      form_message: 'Message',
      form_privacy: 'I accept the privacy policy',
      form_submit: 'Send Request',
      sending: 'Sending...',
      subject_training: 'Individual / Pro Training',
      subject_teams: 'Professional Teams',
      subject_events: 'Events & Camps',
      subject_vip: 'VIP Experiences',
      subject_sponsorship: 'Sponsorship / Partners',
      subject_other: 'Other inquiries'
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
    }
  }
};
