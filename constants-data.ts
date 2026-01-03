
import { VisionPoint, Stat, Service, Partner } from './types';

export const VISION_POINTS: VisionPoint[] = [
  { id: '01', title: 'Exclusividad y privacidad', description: 'Acceso bajo reserva estricta para deportistas de élite y equipos profesionales.' },
  { id: '02', title: 'Infraestructura NBA/FIBA', description: '2 canchas con parquet homologado y tecnología de vanguardia para scouting.' },
  { id: '03', title: 'Equipamiento Profesional', description: 'Área de rehabilitación de 80m2 y gimnasio de alto rendimiento.' },
  { id: '04', title: 'Experiencia Integral', description: 'Desde formación premium hasta traslados privados y protocolo VIP.' }
];

export const STATS: Stat[] = [
  { value: '1500m2', label: 'EXCELENCIA DEPORTIVA' },
  { value: '2', label: 'CANCHAS FIBA / NBA' },
  { value: '80m2', label: 'REHABILITACIÓN Y FISIO' },
  { value: 'VIP', label: 'ALOJAMIENTO & SERVICIOS' },
  { value: '24h', label: 'SERVICIO DE LAVANDERÍA' },
  { value: '0%', label: 'INTERFERENCIAS EXTERNAS' }
];

export const SERVICES: Service[] = [
  { title: 'Instalaciones', description: '2 canchas FIBA/NBA, sala fisioterapia equipada, vestuarios premium y sala audiovisual.', icon: '🏟️' },
  { title: 'Transporte & Seguridad', description: 'Traslados privados y protocolo VIP para máxima discreción.', icon: '🛡️' },
  { title: 'Formación Técnica', description: 'Staff especializado y formación premium para todos los niveles.', icon: '🏀' },
  { title: 'Experiencias VIP', description: 'Excursiones exclusivas por la Costa del Sol y entradas VIP.', icon: '🌟' },
  { title: 'Alojamiento & VIP', description: 'Alojamientos estándar y VIP con acceso a servicios de restauración.', icon: '🏨' },
  { title: 'Eventos Corporativos', description: 'Masterclasses, Team Building y eventos deportivos de alto nivel.', icon: '🤝' },
  { title: 'Salud y Fisioterapia', description: 'Servicio de urgencias preferente en Hospital Quirónsalud.', icon: '🏥' }
];

export const PARTNERS: Partner[] = [
  { name: 'Olin', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961908083_Olin_edited_400x400.png?alt=media&token=76603818-a412-4ca7-b74b-cd70c6fa5059', url: 'https://olin.es/' },
  { name: 'Hook', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961908083_Hook_Logo_Blanco_sin_fondo_400x400.png?alt=media&token=987b1537-787f-4030-b990-e6728ac54d48', url: 'https://www.restaurantehook.es/' },
  { name: 'Fundación Unicaja', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961908083_Fundacion-Unicaja-2024-Logo_VP_Color_RGB_400x400.png?alt=media&token=6f6ffe0b-615a-4e13-8806-6d1476260a7c', url: 'https://www.fundacionunicaja.com/' },
  { name: 'Quirónsalud', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961908083_Quir_n_salud_400x400.png?alt=media&token=6fd68cb8-083d-409c-97db-84b1faf48a58', url: 'https://www.quironsalud.com/' }
];

export const SOCIAL_PROJECTS = [
  { name: 'Academia 675', url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_Captura_de_pantalla_2025-09-07_210933_edited_400x400.png?alt=media&token=78acf2f8-433f-4b85-ad38-2227080e6f2b', link: 'http://academia675.com/' },
  { name: 'Super Basket Lover', url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_superbasket_lover_400x400.png?alt=media&token=ae330bc0-ce40-40c9-b4d1-f5e26d01773d', link: 'https://superbasketlover.com/' }
];
