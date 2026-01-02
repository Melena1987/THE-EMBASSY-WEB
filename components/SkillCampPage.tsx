
import React, { useEffect, useRef } from 'react';
import { LOGOS, TEAM, INSTALLATION_IMAGES } from '../constants';

const SkillCampPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen font-sans selection:bg-orange-600">
      
      {/* SECTION 1: HERO - SKILL CAMP 2025 */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center bg-black">
        <div className="reveal active mb-6">
          <p className="text-white text-2xl md:text-3xl font-light tracking-tight uppercase">THE EMBASSY</p>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mt-2">
            SKILL CAMP <span className="text-white">2025</span>
          </h1>
        </div>
        
        <div className="reveal active max-w-4xl mx-auto space-y-8 mt-12">
          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
            Llega el campus de tecnificación de Navidad definitivo. Cinco días de entrenamiento de élite en THE EMBASSY (Fuengirola) diseñados <span className="text-orange-600 font-bold italic">por jugadores para jugadores</span> que buscan la excelencia.
          </p>
          
          <p className="text-lg md:text-xl text-white/90 font-medium">
            Perfecciona tus habilidades, compite al máximo nivel y aprende de tres referentes del baloncesto profesional:<br/>
            <span className="font-black text-white">Adam Waczynski, Alfonso Sánchez y Fran Vázquez.</span>
          </p>

          <div className="pt-8">
            <a href="#contacto" className="bg-orange-600 hover:bg-white hover:text-black text-white px-10 py-4 rounded-none font-black uppercase tracking-widest transition-all duration-300">
              Galería Oficial
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: LOGISTICS BOX (OVERLAPPING COURT) */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={INSTALLATION_IMAGES[0]} 
            className="w-full h-full object-cover brightness-50"
            alt="The Embassy Court"
          />
        </div>
        
        <div className="reveal relative z-10 bg-white text-black p-10 md:p-20 text-center max-w-2xl mx-6 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tighter mb-8">THE EMBASSY</h2>
          <div className="space-y-6 text-sm md:text-base font-medium uppercase tracking-tight">
            <p>Entrena como los profesionales en un centro de vanguardia con estándares NBA en la Costa del Sol.</p>
            <p className="font-black">THE EMBASSY en Fuengirola, Málaga.</p>
            <div className="w-8 h-[1px] bg-black/20 mx-auto my-4"></div>
            <p>Fechas del <span className="font-black">26 al 30 de diciembre</span>.</p>
            <p>Horarios de las sesiones de <span className="font-black">15:30 a 19:30</span>.</p>
            <div className="w-8 h-[1px] bg-black/20 mx-auto my-4"></div>
            <p className="font-black text-lg">Categorías Cadete, Junior y Sub 22, <span className="text-gray-500 font-normal">desde 2003 a 2011</span></p>
          </div>
          
          <div className="mt-12">
            <a href="#equipo" className="bg-orange-700 text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-black transition-colors">
              Descubre el Staff Técnico
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: TECHNICAL STAFF */}
      <section id="equipo" className="py-32 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="reveal text-5xl md:text-7xl font-light tracking-tighter mb-20">Technical Staff</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Alfonso Sánchez */}
            <div className="reveal group">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892425_Alfonso_S_nchez_THE_EMBASSY_400x400.jpg?alt=media&token=89499cfd-ad20-441a-95ca-16e16cdbf709" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Alfonso" />
              </div>
              <p className="text-[10px] text-gray-500 mb-2 uppercase leading-tight font-medium">Aaron Gordon (Jugador de Denver Nuggets) entrenando con Alfonso Sánchez.</p>
              <h3 className="text-2xl font-black uppercase italic">Alfonso Sánchez</h3>
              <p className="text-gray-600 font-bold mb-6">Director y Entrenador</p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-tight">
                Exjugador de baloncesto profesional. Actualmente entrenador de desarrollo de jugadores en The Embassy y Director de técnica individual en Academia 675.
              </p>
            </div>

            {/* Fran Vázquez */}
            <div className="reveal group delay-100">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_13_400x400.jpg?alt=media&token=47aeffdb-a5b2-4be0-a4ba-4d11d1263796" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Fran" />
              </div>
              <p className="text-[10px] text-gray-500 mb-2 uppercase leading-tight font-medium">Fran Vázquez dando indicaciones a Alberto Díaz (concentración selección española).</p>
              <h3 className="text-2xl font-black uppercase italic">Fran Vázquez</h3>
              <p className="text-gray-600 font-bold mb-6">Entrenador</p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-tight">
                Exjugador de baloncesto profesional, máximo taponador histórico de la ACB y campeón de Euroliga. Entrenador de desarrollo de jugadores interiores en Unicaja y Selección Española.
              </p>
            </div>

            {/* Adam Waczynski */}
            <div className="reveal group delay-200">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_15_400x400.jpg?alt=media&token=4b7eb880-1c3c-4ebb-90ad-e88f2c67d8ce" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Adam" />
              </div>
              <p className="text-[10px] text-gray-500 mb-2 uppercase leading-tight font-medium">Adam Waczynski entrenando en su campus en Polonia.</p>
              <h3 className="text-2xl font-black uppercase italic">Adam Waczynski</h3>
              <p className="text-gray-600 font-bold mb-6">Entrenador</p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-tight">
                Exjugador profesional 5x5, actual integrante del equipo The Embassy 3x3. Shooting Skill Coach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HEALTH & PERFORMANCE */}
      <section className="py-32 bg-white text-black px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="reveal text-5xl md:text-7xl font-light tracking-tighter mb-20">Health & Performance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Adriana */}
            <div className="reveal group">
              <div className="aspect-square overflow-hidden mb-6 rounded-none">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766961892425_Adriana_THE_EMBASSY__2__400x400.jpg?alt=media&token=851f872c-f868-4493-9503-70ab89bd09a4" className="w-full h-full object-cover" alt="Adriana" />
              </div>
              <p className="text-[10px] text-gray-500 mb-2 uppercase font-medium">Entrenando con Franz Wagner, jugador de Orlando Magic.</p>
              <h3 className="text-2xl font-black uppercase italic">Adriana Rodríguez</h3>
              <p className="text-gray-600 font-bold mb-6">Fisioterapeuta y Sport Performance Coach</p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-tight">
                Especialista en rendimiento deportivo. Aplica su experiencia profesional en el baloncesto élite para optimizar la salud física del jugador/a y su actuación en la pista.
              </p>
            </div>

            {/* Begoña */}
            <div className="reveal group delay-100">
              <div className="aspect-square overflow-hidden mb-6 bg-black">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_050.jpg?alt=media&token=91bbf74f-6cad-4f7c-9bfb-8c020278973a" className="w-full h-full object-cover opacity-80" alt="Begoña" />
              </div>
              <p className="text-[10px] text-gray-500 mb-2 uppercase font-medium">Internacional Peak Pilates Master Trainer desde 2003.</p>
              <h3 className="text-2xl font-black uppercase italic">Begoña Pedraza</h3>
              <p className="text-gray-600 font-bold mb-6">Pilates & Control</p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-tight">
                Maestra de 2ª generación de Pilates. Más de 30 años de experiencia en Fitness y nuevas tendencias de entrenamiento. Directora de Pilates Studio en Higuerón Resort.
              </p>
            </div>

            {/* Noe Masiá */}
            <div className="reveal group delay-200">
              <div className="aspect-square overflow-hidden mb-6">
                <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_2_400x400.jpg?alt=media&token=b778b075-0e9d-4570-90c0-305816fb9013" className="w-full h-full object-cover" alt="Noe" />
              </div>
              <p className="text-[10px] text-gray-500 mb-2 uppercase font-medium">Noelia Masiá durante una charla de Experiencia MVP.</p>
              <h3 className="text-2xl font-black uppercase italic">Noe Masiá</h3>
              <p className="text-gray-600 font-bold mb-6">Dietista Deportiva</p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-tight">
                Jugadora profesional de baloncesto, actualmente en Liga Femenina Endesa, dietista deportiva. Ayuda a jugadores y jugadoras en su rendimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VISUAL MEDIA */}
      <section className="py-32 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <div className="reveal">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">Visual Media</h2>
              <h3 className="text-2xl font-black uppercase italic mb-2">Raisa Pozo</h3>
              <p className="text-white/60 font-medium uppercase tracking-widest text-sm mb-4">
                Fotógrafa profesional con experiencia en ACB y Euroliga.
              </p>
              <p className="text-white font-black uppercase tracking-widest text-lg">
                &gt;&gt; Incluye pack de fotos profesionales entrenando.
              </p>
            </div>
            <div className="reveal md:w-1/3">
              <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_1_400x400.jpg?alt=media&token=41a8229a-907d-42c5-9652-608fbba59b73" className="w-full rounded-2xl grayscale" alt="Raisa Work" />
            </div>
          </div>
          
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={INSTALLATION_IMAGES[1]} className="aspect-video object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-700" alt="Gallery 1" />
            <img src={INSTALLATION_IMAGES[2]} className="aspect-video object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-700" alt="Gallery 2" />
            <img src={INSTALLATION_IMAGES[3]} className="aspect-video object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-700" alt="Gallery 3" />
          </div>
        </div>
      </section>

      {/* SECTION 6: THE EMBASSY GEAR */}
      <section className="py-32 bg-neutral-100 text-black px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_13_400x400.jpg?alt=media&token=47aeffdb-a5b2-4be0-a4ba-4d11d1263796" className="w-full shadow-2xl" alt="Sandro Gear" />
            <div className="mt-8">
              <p className="text-2xl font-black uppercase italic">Sandro Mamukelashvili</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">San Antonio Spurs</p>
              <p className="text-sm font-black uppercase tracking-widest italic">Camiseta Collection incluida para los participantes.</p>
            </div>
          </div>
          
          <div className="reveal">
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter mb-6">
              The Embassy <span className="text-orange-600 font-black italic">Gear</span>
            </h2>
            <h3 className="text-4xl font-light uppercase tracking-tighter mb-12">Clothing Collection</h3>
            <p className="text-gray-500 text-lg font-medium leading-relaxed uppercase tracking-tight max-w-md">
              Los participantes del campus recibirán la <span className="text-black font-black italic">Camiseta Collection</span> y una <span className="text-black font-black italic">camiseta técnica reversible</span> conmemorativa del Skill Camp.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: DAILY PLAN */}
      <section className="py-32 bg-[#1a3a63] text-white px-6 relative overflow-hidden">
        {/* Abstract basketball court overlay background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img src={LOGOS.heroBg} className="w-full h-full object-cover" alt="Background" />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="reveal text-6xl md:text-9xl font-light tracking-tighter mb-20 text-center">
            Daily <span className="text-orange-500 font-black italic">Plan</span>
          </h2>
          
          <div className="reveal overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-white/20">
                  <th className="py-6 text-xl font-black uppercase italic tracking-widest">Hora</th>
                  <th className="py-6 text-xl font-black uppercase italic tracking-widest">Actividad</th>
                </tr>
              </thead>
              <tbody className="text-lg md:text-xl font-medium uppercase tracking-tight">
                <tr className="border-b border-white/10">
                  <td className="py-8 font-black">15:30 - 16h</td>
                  <td className="py-8">
                    <span className="font-black text-orange-400">Día 1:</span> Presentación.<br/>
                    <span className="font-black text-orange-400">Desde día 2:</span> Pilates/Sesión fotos.
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-8 font-black">16:00 - 16:30</td>
                  <td className="py-8">Warm up.</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-8 font-black">16:30 - 18:45</td>
                  <td className="py-8">Entrenamiento por estaciones + Prep. física.</td>
                </tr>
                <tr>
                  <td className="py-8 font-black">18:45 - 19:30</td>
                  <td className="py-8">Pick up. Competición 4vs4 + Cool down.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="reveal mt-16 text-[10px] md:text-xs text-white/50 uppercase tracking-[0.2em] font-bold space-y-2">
            <p>* Planning orientativo sujeto a cambios.</p>
            <p>* Dos charlas formativas (Jugadores y Padres) sobre prep. física y nutrición.</p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 bg-black text-center reveal">
        <button 
          onClick={onBack}
          className="bg-white text-black px-12 py-6 text-xs font-black uppercase tracking-[0.4em] hover:bg-orange-600 hover:text-white transition-all duration-300"
        >
          Volver a Eventos
        </button>
      </section>

    </div>
  );
};

export default SkillCampPage;
