
import { Service, TeamMember, Stat, VisionPoint, Partner } from './types';

export const VISION_POINTS: VisionPoint[] = [
  { id: '01', title: 'Exclusividad y privacidad', description: 'Acceso bajo reserva estricta para deportistas de élite y equipos profesionales.' },
  { id: '02', title: 'Infraestructura NBA/FIBA', description: '2 canchas con parquet homologado y tecnología de vanguardia para scouting.' },
  { id: '03', title: 'Equipamiento Profesional', description: 'Área de rehabilitación de 80m2 y gimnasio de alto rendimiento para optimización física.' },
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
  { 
    title: 'Instalaciones', 
    description: '2 canchas FIBA/NBA, sala fisioterapia equipada, vestuarios premium y sala audiovisual para scouting.', 
    icon: '🏟️' 
  },
  { 
    title: 'Transporte & Seguridad', 
    description: 'Traslados privados y protocolo VIP para garantizar la máxima discreción y confort de los atletas.', 
    icon: '🛡️' 
  },
  { 
    title: 'Formación Técnica', 
    description: 'Staff especializado y formación premium para todos los niveles, desde base hasta profesional.', 
    icon: '🏀' 
  },
  { 
    title: 'Experiencias VIP', 
    description: 'Excursiones exclusivas por la Costa del Sol y entradas VIP a los eventos más destacados.', 
    icon: '🌟' 
  },
  { 
    title: 'Alojamiento & VIP', 
    description: 'Alojamientos estándar y VIP con acceso a servicios de restauración, ocio y bienestar.', 
    icon: '🏨' 
  },
  { 
    title: 'Eventos Corporativos', 
    description: 'Masterclasses, Team Building, charlas de estrellas y eventos deportivos de alto nivel.', 
    icon: '🤝' 
  },
  { 
    title: 'Salud y Fisioterapia', 
    description: 'Servicio de urgencias preferente en Hospital Quirónsalud y servicio de fisioterapia de élite.', 
    icon: '🏥' 
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Berni Rodríguez',
    role: 'Co-Fundador',
    description: 'Exjugador profesional con amplia experiencia en gestión deportiva y desarrollo de proyectos de baloncesto a nivel internacional. Medallista olímpico y referente en el baloncesto español.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892425_Berni_Rodr_guez_THE_EMBASSY_400x400.jpg?alt=media&token=839e65db-8149-4bf4-89ec-b4e595fa33ba',
    socials: { 
      instagram: 'https://www.instagram.com/bernirodriguez5/', 
      twitter: 'https://x.com/bernirodriguez5' 
    }
  },
  {
    name: 'Jose M. Calderón',
    role: 'Co-Fundador',
    description: 'Exjugador NBA con una destacada carrera internacional. Aporta su visión global y contactos en el más alto nivel del baloncesto mundial para crear experiencias únicas.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892425_Jose_Manuel_Calder_n_-_THE_EMBASSY_400x400.jpg?alt=media&token=f8d4bff7-61ec-4fa2-a3c8-3c6a0b49ca89',
    socials: { 
      instagram: 'https://www.instagram.com/jmcalderon8/', 
      twitter: 'https://x.com/JmCalderon' 
    }
  },
  {
    name: 'Adriana Rodríguez',
    role: 'Especialista en rendimiento deportivo',
    description: 'Especialista en rendimiento deportivo. Aplica su experiencia profesional en el baloncesto élite para optimizar la salud física del jugador/a y su actuación en la pista.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892425_Adriana_THE_EMBASSY__2__400x400.jpg?alt=media&token=851f872c-f868-4493-9503-70ab89bd09a4',
    socials: { 
      instagram: 'https://www.instagram.com/adrileslie/' 
    }
  },
  {
    name: 'Manuel Elena',
    role: 'Gerente de Instalaciones',
    description: 'Intersección entre tecnología y negocio. Desarrollador informático y marketing, gestión de la comunicación y el desarrollo digital, con especial énfasis en el sector de eventos deportivos. Gerente de las instalaciones de THE EMBASSY.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892425_Manu_-_melenamarketing_400x400.png?alt=media&token=d4b2e8ab-f99d-424a-87a4-ebcaae89ef29',
    socials: { 
      instagram: 'https://www.instagram.com/manu.melenamarketing/', 
      twitter: 'https://x.com/Manolo_Ele' 
    }
  },
  {
    name: 'Manuel Escobar',
    role: 'CEO',
    description: 'Especialista en gestión deportiva y desarrollo de eventos. Su experiencia en la organización de competiciones de alto nivel garantiza la excelencia en cada proyecto.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892426_Manuel_Escobar_400x400.jpeg?alt=media&token=db9e49a1-7b8b-4ee7-8afd-2dfd0f79391b',
    socials: { 
      instagram: 'https://www.instagram.com/manuelcarlosel/' 
    }
  },
  {
    name: 'Alfonso Sánchez',
    role: 'Entrenador de desarrollo',
    description: 'Exjugador profesional con una destacada trayectoria en 5 clubes ACB. Actualmente, desempeña el rol de entrenador de desarrollo de jugadores y técnica individual en el Training Center.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892425_Alfonso_S_nchez_THE_EMBASSY_400x400.jpg?alt=media&token=89499cfd-ad20-441a-95ca-16e16cdbf709',
    socials: { 
      instagram: 'https://www.instagram.com/23asanchez/', 
      twitter: 'https://x.com/23ASanchez' 
    }
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Olin', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961908083_Olin_edited_400x400.png?alt=media&token=76603818-a412-4ca7-b74b-cd70c6fa5059', url: 'https://olin.es/' },
  { name: 'Hook', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961908083_Hook_Logo_Blanco_sin_fondo_400x400.png?alt=media&token=987b1537-787f-4030-b990-e6728ac54d48', url: 'https://www.restaurantehook.es/' },
  { name: 'Fundación Unicaja', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961908083_Fundacion-Unicaja-2024-Logo_VP_Color_RGB_400x400.png?alt=media&token=6f6ffe0b-615a-4e13-8806-6d1476260a7c', url: 'https://www.fundacionunicaja.com/' },
  { name: 'Quirónsalud', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961908083_Quir_n_salud_400x400.png?alt=media&token=6fd68cb8-083d-409c-97db-84b1faf48a58', url: 'https://www.quironsalud.com/' },
  { name: 'Higuerón Resort', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961908083_Higuer_n_textil_400x400.png?alt=media&token=3c292c72-06bc-4600-9103-30d82efe04b8', url: 'https://higueronhotel.com/' },
  { name: 'Endesa', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961908083_Endesa_Logo_Blancos_lido_1_400x400.png?alt=media&token=e0716e50-5137-4ec2-809c-bbf77c0a55c2', url: 'https://www.endesa.com/esp' },
  { name: 'Sanamar', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961908083_logo_sanamar_blanco_400x400.png?alt=media&token=5ff8eff7-1524-4160-a5e1-405b1022da39', url: 'https://sanamar.es/' },
  { name: 'Cleardent', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_Cleardent_400x400.png?alt=media&token=49edbe7c-d28a-4c59-b476-80ab96f6e658', url: 'https://www.cleardent.es/' },
  { name: 'Gioya', logoUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_Gioya_400x400.png?alt=media&token=7ff092e7-2d52-4022-aed9-7a5b8c71c495', url: 'https://gioya.edu.mt/' }
];

export const LOGOS = {
  main: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762685212137_logo_THE_EMBASSY.png?alt=media&token=8ebc6425-e3ce-4eb3-8a14-1799ca68b869',
  simple: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762686328016_LOGO_simple_blanco.png?alt=media&token=e096f7cc-678d-48b8-9e93-d937b0e3612b',
  heroBg: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_WhatsApp-Image-2021-12-13-at-10.15.51-AM.jpeg?alt=media&token=147a429f-4059-47c3-8b1a-cb8782f922b0',
  sanctuary: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_image_edited.png?alt=media&token=ccf90cd0-a791-4071-b083-85b7cf6cf358'
};

export const INSTALLATION_IMAGES = [
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_015.jpg?alt=media&token=2d4244b8-f480-4ff3-adc1-dfc165edaa3a',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_025.jpg?alt=media&token=0734f083-4749-4a46-9f88-f6ee7bfd0f53',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_019.jpg?alt=media&token=6bf0b512-e239-4863-af3c-3455d7c77f7a',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_036.jpg?alt=media&token=e35e2655-a8cb-4db4-b527-54e76095b763',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_031.jpg?alt=media&token=1484f778-a8dd-4cff-9e23-780295ae2092',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_050.jpg?alt=media&token=91bbf74f-6cad-4f7c-9bfb-8c020278973a'
];

export const STAR_VISITORS = [
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_13_400x400.jpg?alt=media&token=47aeffdb-a5b2-4be0-a4ba-4d11d1263796',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458743_THE_EMBASSY_FUENGIROLA_NBA_12_400x400.jpg?alt=media&token=288f1036-9064-414a-959c-4d2f860bbc77',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_20_400x400.JPG?alt=media&token=7dd994b1-2feb-4ddb-93ec-f2032ee53d34',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_15_400x400.jpg?alt=media&token=4b7eb880-1c3c-4ebb-90ad-e88f2c67d8ce',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458743_THE_EMBASSY_FUENGIROLA_NBA_14_400x400.jpg?alt=media&token=c95f43f0-9789-4c3a-8c83-d2cd9bdeb1ea',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_18_400x400.jpg?alt=media&token=2b4d0a50-a3a0-4fed-b67b-0c5080cd9c82',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_10_400x400.jpg?alt=media&token=7e1ae78b-cff8-40c6-b943-841101bf1ed0',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_3_400x400.jpg?alt=media&token=2ecca952-fceb-4361-8df7-0c11ce4fdfce',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_17_400x400.jpg?alt=media&token=0d3eb2f2-cd14-4556-b34b-26d74e0fb9b5',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_9_400x400.jpg?alt=media&token=4829a1cc-28ca-4d2f-8d50-7f7863d2f947',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_11_400x400.jpg?alt=media&token=a8551539-61ab-49f6-819e-d44b1c62a66e',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_16_400x400.jpg?alt=media&token=8fd063b3-62ef-48c1-8aef-965ad678d3ca',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_2_400x400.jpg?alt=media&token=b778b075-0e9d-4570-90c0-305816fb9013',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_1_400x400.jpg?alt=media&token=41a8229a-907d-42c5-9652-608fbba59b73',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_21_400x400.jpg?alt=media&token=ad67e2f2-8251-4243-9fab-60128c08f638',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_8_400x400.jpg?alt=media&token=99c6d5be-eb4d-44df-b53a-23e82f94d2c7',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_7_400x400.jpg?alt=media&token=4b14dd46-2afb-442d-a587-268ec616f7b1',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_4_400x400.jpg?alt=media&token=1e6ca064-2dcd-4e2f-829a-1d43af0be3db',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_5_400x400.jpg?alt=media&token=981772f4-a9e7-4d52-ab38-811224ca1157',
  'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_6_400x400.jpg?alt=media&token=8d895be0-7f9e-4d48-9dc0-eb985e4f1e9d'
];

export const SOCIAL_PROJECTS = [
  { 
    name: 'Academia 675', 
    url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_Captura_de_pantalla_2025-09-07_210933_edited_400x400.png?alt=media&token=78acf2f8-433f-4b85-ad38-2227080e6f2b',
    link: 'http://academia675.com/'
  },
  { 
    name: 'Super Basket Lover', 
    url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_superbasket_lover_400x400.png?alt=media&token=ae330bc0-ce40-40c9-b4d1-f5e26d01773d',
    link: 'https://superbasketlover.com/'
  },
  { 
    name: 'Proyecto 675', 
    url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_proyecto_675_400x400.png?alt=media&token=0839f99a-f3f1-4dc0-9768-274dcfae8924',
    link: 'https://proyecto675.com/'
  },
  { 
    name: 'Fundación J.M. Calderón', 
    url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961925716_Fundaci_n_Jose_Manuel_Calder_n_400x400.png?alt=media&token=53a3ecf4-5369-4cea-ac6b-a4d23fe7bbeb',
    link: 'https://fundacionjosemanuelcalderon.org/'
  }
];
