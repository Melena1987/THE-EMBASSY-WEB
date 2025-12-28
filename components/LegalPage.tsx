
import React from 'react';
import { LOGOS } from '../constants';

const LegalPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-colors uppercase text-xs font-black tracking-widest group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver al Inicio
        </button>

        <header className="mb-20">
          <img src={LOGOS.main} alt="THE EMBASSY" className="h-12 w-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">Información Legal</h1>
          <p className="text-white/40 text-sm uppercase tracking-widest">Última actualización: 15 de Julio de 2025</p>
        </header>

        <div className="space-y-24 prose prose-invert max-w-none">
          {/* AVISO LEGAL */}
          <section>
            <h2 className="text-gold text-2xl font-black italic uppercase tracking-tight mb-8 border-b border-gold/20 pb-4">1. Aviso Legal y Términos de Uso</h2>
            <div className="text-white/70 space-y-6 text-sm leading-relaxed uppercase tracking-wide">
              <p><strong className="text-white">IDENTIFICACIÓN:</strong> THE EMBASSY | Basketball Premium Training Center. URL: https://www.theembassytc.com. Contacto: comunicacion@theembassytc.com – Tel. 623 990 444. Domicilio: Fuengirola (Málaga, España).</p>
              <p><strong className="text-white">OBJETO:</strong> Estas condiciones regulan el acceso y uso del sitio web THE EMBASSY. El acceso implica la aceptación sin reservas del presente Aviso Legal.</p>
              <p><strong className="text-white">PROPIEDAD INTELECTUAL:</strong> Todos los contenidos (textos, imágenes, logos, vídeos, diseños, código fuente, etc.) son titularidad de THE EMBASSY o de terceros con licencia. Queda prohibida su reproducción sin autorización expresa.</p>
            </div>
          </section>

          {/* POLÍTICA DE PRIVACIDAD */}
          <section>
            <h2 className="text-gold text-2xl font-black italic uppercase tracking-tight mb-8 border-b border-gold/20 pb-4">2. Política de Privacidad (RGPD)</h2>
            <div className="text-white/70 space-y-6 text-sm leading-relaxed uppercase tracking-wide">
              <p><strong className="text-white">RESPONSABLE:</strong> THE EMBASSY | Basketball Premium Training Center. Email: comunicacion@theembassytc.com.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-white font-black mb-3">FINALIDAD</h4>
                  <p className="text-xs">Gestionar reservas, responder consultas, envío de comunicaciones comerciales y facturación de servicios.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-white font-black mb-3">LEGITIMACIÓN</h4>
                  <p className="text-xs">Consentimiento del interesado (art. 6.1.a) y ejecución de contrato o medidas precontractuales (art. 6.1.b).</p>
                </div>
              </div>
              <p><strong className="text-white">DERECHOS:</strong> Puedes acceder, rectificar y suprimir tus datos enviando un email a comunicacion@theembassytc.com indicando "Protección de Datos".</p>
            </div>
          </section>

          {/* DERECHOS DE IMAGEN */}
          <section>
            <h2 className="text-gold text-2xl font-black italic uppercase tracking-tight mb-8 border-b border-gold/20 pb-4">3. Autorización y Cesión de Derechos de Imagen</h2>
            <div className="text-white/70 space-y-6 text-sm leading-relaxed uppercase tracking-wide">
              <p>Al aceptar nuestros servicios, el usuario autoriza expresamente a THE EMBASSY a la captación, uso y difusión de su imagen o la del menor que representa en:</p>
              <ul className="list-disc pl-5 space-y-2 text-xs">
                <li>Web oficial y perfiles en redes sociales.</li>
                <li>Material promocional, folletos y cartelería.</li>
                <li>Medios de comunicación y retransmisión de eventos.</li>
              </ul>
              <p className="text-xs italic">Esta cesión se realiza de forma gratuita y con fines exclusivos de promoción de las actividades del Training Center, respetando siempre el honor y la intimidad personal conforme a la Ley Orgánica 1/82.</p>
            </div>
          </section>

          {/* COOKIES */}
          <section>
            <h2 className="text-gold text-2xl font-black italic uppercase tracking-tight mb-8 border-b border-gold/20 pb-4">4. Política de Cookies</h2>
            <div className="text-white/70 text-sm leading-relaxed uppercase tracking-wide">
              <p>Utilizamos cookies propias y de terceros para mejorar la experiencia de navegación y analizar el tráfico de forma anónima. Puedes gestionar tus preferencias a través del banner de configuración inicial.</p>
            </div>
          </section>
        </div>

        <div className="mt-32 pt-12 border-t border-white/10 text-center">
          <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} THE EMBASSY TRAINING CENTER</p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
