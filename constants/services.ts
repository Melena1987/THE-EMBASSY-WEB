
import { Service } from '../types';

export const SERVICES: Service[] = [
  { 
    title: 'Instalaciones', 
    description: '2 CANCHAS FIBA/NBA, SALA FISIOTERAPIA EQUIPADA, VESTUARIOS PREMIUM Y SALA AUDIOVISUAL PARA SCOUTING.', 
    icon: '🏟️',
    path: '#instalaciones',
    buttonLabel: 'VER INSTALACIONES'
  },
  { 
    title: 'Transporte & Seguridad', 
    description: 'Traslados privados y protocolo VIP para garantizar la máxima discreción y confort de los atletas.', 
    icon: '🛡️',
    buttonLabel: 'SERVICIO PREMIUM'
    // Sin path, redirigirá a #servicios
  },
  { 
    title: 'Formación Técnica', 
    description: 'STAFF ESPECIALIZADO Y FORMACIÓN PREMIUM PARA TODOS LOS NIVELES, DESDE BASE HASTA PROFESIONAL.', 
    icon: '🏀',
    path: '#contacto',
    buttonLabel: 'RESERVAR ENTRENAMIENTO'
  },
  { 
    title: 'Experiencias VIP', 
    description: 'Excursiones exclusivas por la Costa del Sol y entradas VIP a los eventos más destacados.', 
    icon: '🌟',
    buttonLabel: 'SERVICIO PREMIUM'
    // Sin path, redirigirá a #servicios
  },
  { 
    title: 'Alojamiento & VIP', 
    description: 'ALOJAMIENTOS ESTÁNDAR Y VIP CON ACCESO A SERVICIOS DE RESTAURACIÓN, OCIO Y BIENESTAR.', 
    icon: '🏨',
    externalLink: 'https://higueronresort.com/en/hotel/',
    buttonLabel: 'VISITAR HOTEL'
  },
  { 
    title: 'Eventos Corporativos', 
    description: 'Masterclasses, Team Building, charlas de estrellas y eventos deportivos de alto nivel.', 
    icon: '🤝',
    path: '/team-building',
    buttonLabel: 'SERVICIO PREMIUM'
  },
  { 
    title: 'Salud y Fisioterapia', 
    description: 'SERVICIO DE URGENCIAS PREFERENTE EN HOSPITAL QUIRÓNSALUD Y SERVICIO DE FISIOTERAPIA DE ÉLITE.', 
    icon: '🏥',
    path: '/performance-lab',
    buttonLabel: 'PERFORMANCE LAB'
  }
];
