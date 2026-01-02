
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      setIsSending(true);
      setStatusMessage(null);

      emailjs.sendForm(
        (import.meta as any).env.VITE_EMAILJS_SERVICE_ID,
        (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
          console.log('Email enviado correctamente');
          setIsSending(false);
          setIsSent(true);
          setStatusMessage('¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.');
          form.current?.reset();
          // Reset status message after 5 seconds
          setTimeout(() => {
            setIsSent(false);
            setStatusMessage(null);
          }, 5000);
      })
      .catch((error) => {
          console.error('Error al enviar email:', error);
          setIsSending(false);
          setStatusMessage('Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.');
      });
    }
  };

  return (
    <section id="contacto" className="py-32 bg-white text-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="reveal">
          <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-6 block italic">Join the Elite</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-10 tracking-tighter leading-none">VAMOS A <br/> HABLAR</h2>
          <p className="text-gray-500 text-lg mb-12 font-medium max-w-md uppercase tracking-wider leading-relaxed">
            Nuestro equipo de élite está listo para asesorarte. Reserva tu plaza en el Training Center más exclusivo de Europa.
          </p>
          
          <div className="space-y-10">
            <div className="group flex items-center space-x-6">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Email Directo</p>
                <span className="text-xl font-black italic tracking-tight">comunicacion@theembassytc.com</span>
              </div>
            </div>
            
            <div className="group flex items-center space-x-6">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Ubicación</p>
                <span className="text-xl font-black italic tracking-tight uppercase">La Costa del Sol, España</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal bg-neutral-50 p-10 md:p-16 rounded-[3rem] shadow-2xl border border-black/5 relative z-10">
          <form ref={form} onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Nombre Completo *</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Tu nombre" 
                  className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 transition-all font-bold placeholder:text-gray-300" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Servicio de Interés</label>
                <select 
                  name="service"
                  className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 transition-all font-bold"
                >
                  <option>Training Individual</option>
                  <option>Eventos Corporativos</option>
                  <option>Experiencias VIP</option>
                  <option>Uso de Instalaciones</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Corporativo / Personal *</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="email@ejemplo.com" 
                  className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 transition-all font-bold placeholder:text-gray-300" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Teléfono</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="+34 ..." 
                  className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 transition-all font-bold placeholder:text-gray-300" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Mensaje *</label>
              <textarea 
                name="message"
                rows={4} 
                placeholder="¿Cómo podemos ayudarte?" 
                className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 transition-all resize-none font-bold placeholder:text-gray-300" 
                required
              ></textarea>
            </div>

            <div className="flex items-start space-x-4">
              <input type="checkbox" className="mt-1 w-5 h-5 accent-gold border-gray-300 rounded" id="privacy" required />
              <label htmlFor="privacy" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-relaxed">
                Acepto la cesión de mis datos a THE EMBASSY TC según la política de privacidad. *
              </label>
            </div>

            {statusMessage && (
              <div className={`text-center font-bold uppercase tracking-widest text-xs p-4 rounded-xl ${isSent ? 'bg-gold/10 text-gold border border-gold/20' : 'bg-red-50 text-red-500 border border-red-100'}`}>
                {statusMessage}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSending}
              className={`group w-full py-6 rounded-full font-black uppercase tracking-[0.3em] transition-all shadow-xl flex items-center justify-center gap-4 ${isSending ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-gold hover:shadow-gold/40'}`}
            >
              {isSending ? 'Enviando...' : 'Enviar Solicitud'}
              {!isSending && (
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7-7 7M3 12h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
            </button>
          </form>
        </div>
      </div>
      
      {/* Decorative court background elements */}
      <div className="absolute top-0 right-[-10%] w-[50%] h-full pointer-events-none opacity-[0.03]">
         <div className="absolute top-[20%] right-0 w-[400px] h-[400px] border-[20px] border-black rounded-full"></div>
         <div className="absolute top-[40%] right-[-100px] w-[600px] h-[300px] border-[20px] border-black rounded-full"></div>
      </div>
    </section>
  );
};

export default ContactForm;
