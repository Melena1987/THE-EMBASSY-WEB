
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
  const [isSent, setIsSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [subject, setSubject] = useState('Training Individual');

  useEffect(() => {
    if (initialSubject) setSubject(initialSubject);
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      setIsSending(true);
      emailjs.sendForm(
        (import.meta as any).env.VITE_EMAILJS_SERVICE_ID,
        (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY
      ).then(() => {
        setIsSending(false); setIsSent(true);
        setStatusMessage(language === 'es' ? '¡Enviado con éxito!' : 'Sent successfully!');
        form.current?.reset();
      }).catch(() => {
        setIsSending(false);
        setStatusMessage(language === 'es' ? 'Error al enviar.' : 'Error sending.');
      });
    }
  };

  return (
    <section id="contacto" className="py-32 bg-white text-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="reveal">
          <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-6 block italic">{t('contact', 'subtitle')}</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-10 tracking-tighter leading-none">{t('contact', 'title')}</h2>
          <p className="text-gray-500 text-lg mb-12 font-medium max-w-md uppercase tracking-wider leading-relaxed">{t('contact', 'desc')}</p>
        </div>

        <div className="reveal bg-neutral-50 p-10 md:p-16 rounded-[3rem] shadow-2xl border border-black/5 relative z-10">
          <form ref={form} onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('contact', 'form_name')} *</label>
                <input type="text" name="name" className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-bold" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('contact', 'form_subject')}</label>
                <select name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-bold">
                  <option value="Training">Training</option>
                  <option value="Events">Events</option>
                  <option value="VIP">VIP Experiences</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('contact', 'form_message')} *</label>
              <textarea name="message" rows={4} className="w-full bg-transparent border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-bold" required />
            </div>
            <button type="submit" disabled={isSending} className="w-full py-6 rounded-full font-black uppercase bg-black text-white hover:bg-gold transition-all">
              {isSending ? t('contact', 'sending') : t('contact', 'form_submit')}
            </button>
            {statusMessage && <p className="text-center font-bold text-gold">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
