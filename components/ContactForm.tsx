
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext.tsx';

interface ContactFormProps {
  initialSubject?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialSubject }) => {
  const form = useRef<HTMLFormElement>(null);
  const { t, language } = useLanguage();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [subject, setSubject] = useState('Training');

  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      setIsSending(true);
      
      const serviceID = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
      const templateID = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

      emailjs.sendForm(
        serviceID,
        templateID,
        form.current,
        publicKey
      ).then(() => {
        setIsSending(false);
        setStatusMessage(language === 'es' ? '¡Enviado con éxito!' : 'Sent successfully!');
        form.current?.reset();
        setTimeout(() => setStatusMessage(null), 5000);
      }).catch((err) => {
        console.error('EmailJS Error:', err);
        setIsSending(false);
        setStatusMessage(language === 'es' ? 'Error al enviar.' : 'Error sending.');
      });
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-white text-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        {/* Left Side: Information */}
        <div className="reveal relative z-10">
          <span className="text-gold text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mb-6 block italic">
            {t('contact', 'subtitle')}
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-10 tracking-tighter leading-[0.9]">
            {t('contact', 'title').split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {word === 'HABLAR' || word === 'TALK' ? <span className="text-gold block">{word}</span> : word + ' '}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium mb-16 max-w-md uppercase tracking-wider leading-relaxed">
            {t('contact', 'desc')}
          </p>

          <div className="space-y-12">
            {/* Email Block */}
            <div className="group flex items-center gap-6">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center group-hover:bg-gold transition-all duration-500 shadow-xl">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">
                  {t('contact', 'info_email')}
                </span>
                <a href="mailto:comunicacion@theembassytc.com" className="text-lg md:text-2xl font-black italic uppercase tracking-tighter hover:text-gold transition-colors block leading-none">
                  comunicacion@theembassytc.com
                </a>
              </div>
            </div>

            {/* Location Block */}
            <div className="group flex items-center gap-6">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center group-hover:bg-gold transition-all duration-500 shadow-xl">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">
                  {t('contact', 'info_location')}
                </span>
                <span className="text-lg md:text-2xl font-black italic uppercase tracking-tighter block leading-none">
                  {t('contact', 'info_location_val')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="reveal bg-neutral-50 p-10 md:p-16 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-black/5 relative z-10 w-full overflow-hidden">
          <form ref={form} onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('contact', 'form_name')} *</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Tu nombre"
                  className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-bold transition-all placeholder:text-gray-300" 
                  required 
                />
              </div>
              {/* Phone */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('contact', 'form_phone')}</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+34 000 000 000"
                  className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-bold transition-all placeholder:text-gray-300" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('contact', 'form_email')} *</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="email@ejemplo.com"
                  className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-bold transition-all placeholder:text-gray-300" 
                  required 
                />
              </div>
              {/* Subject */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('contact', 'form_subject')}</label>
                <div className="relative">
                  <select 
                    name="subject" 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)} 
                    className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-bold appearance-none cursor-pointer"
                  >
                    <option value="Training">{t('contact', 'subject_training')}</option>
                    <option value="Teams">{t('contact', 'subject_teams')}</option>
                    <option value="Events">{t('contact', 'subject_events')}</option>
                    <option value="VIP">{t('contact', 'subject_vip')}</option>
                    <option value="Sponsorship">{t('contact', 'subject_sponsorship')}</option>
                    <option value="Other">{t('contact', 'subject_other')}</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('contact', 'form_message')} *</label>
              <textarea 
                name="message" 
                rows={4} 
                placeholder="¿Cómo podemos ayudarte?"
                className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-bold transition-all resize-none placeholder:text-gray-300" 
                required 
              />
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start gap-4">
              <input type="checkbox" id="privacy" name="privacy" className="mt-1 w-5 h-5 accent-gold border-gray-300 rounded cursor-pointer" required />
              <label htmlFor="privacy" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 cursor-pointer select-none leading-relaxed">
                {t('contact', 'form_privacy')} *
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSending} 
              className="w-full py-6 rounded-full font-black uppercase tracking-[0.3em] bg-black text-white hover:bg-gold transition-all shadow-xl hover:shadow-gold/20 disabled:opacity-50 flex items-center justify-center gap-4 group overflow-hidden relative"
            >
              {isSending ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('contact', 'sending')}
                </>
              ) : (
                <>
                  {t('contact', 'form_submit')}
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7-7 7M3 12h18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>

            {statusMessage && (
              <p className={`text-center font-black uppercase text-[10px] tracking-[0.3em] ${statusMessage.includes('Error') ? 'text-red-500' : 'text-gold'} animate-fade-in`}>
                {statusMessage}
              </p>
            )}
          </form>

          {/* Hidden Court Lines Decor Inside Form Card */}
          <div className="absolute top-0 right-[-10%] w-[50%] h-full pointer-events-none opacity-[0.03] -z-0">
             <div className="absolute top-[20%] right-0 w-[400px] h-[400px] border-[20px] border-black rounded-full"></div>
             <div className="absolute top-[40%] right-[-100px] w-[600px] h-[300px] border-[20px] border-black rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Decorative large text */}
      <div className="absolute bottom-[-5%] right-[-5%] text-[25vw] font-black text-black/[0.02] pointer-events-none select-none italic -z-0">
        ELITE
      </div>
      
      {/* Background Court Markings */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-4 border-black rounded-[5rem]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] border-4 border-black rounded-full"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-black"></div>
      </div>
    </section>
  );
};

export default ContactForm;
