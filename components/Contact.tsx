import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Phone, Instagram, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (Demo only)");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info & Form */}
          <div>
            <span className="text-byzantine-600 font-bold uppercase tracking-widest text-sm">{t.contact.title}</span>
            <h2 className="font-display text-4xl font-bold text-bosphorus-900 mt-2 mb-6">{t.contact.subtitle}</h2>
            
            <div className="flex flex-col space-y-4 mb-8">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center space-x-4 rtl:space-x-reverse group p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="w-12 h-12 bg-bosphorus-900 text-white rounded-full flex items-center justify-center group-hover:bg-byzantine-500 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{t.contact.info.phone}</p>
                  <p className="font-bold text-lg text-bosphorus-900">{CONTACT_INFO.displayPhone}</p>
                </div>
              </a>

              <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center space-x-4 rtl:space-x-reverse group p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white rounded-full flex items-center justify-center">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{t.contact.info.instagram}</p>
                  <p className="font-bold text-lg text-bosphorus-900">@bir_an_istanbul</p>
                </div>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder={t.contact.form.name} 
                  required
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-byzantine-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder={t.contact.form.email} 
                  required
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-byzantine-500 transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="tel" 
                  placeholder={t.contact.form.phone} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-byzantine-500 transition-colors"
                />
                <input 
                  type="date" 
                  placeholder={t.contact.form.date} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-byzantine-500 transition-colors text-slate-500"
                />
              </div>
              <textarea 
                placeholder={t.contact.form.message} 
                rows={4}
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-byzantine-500 transition-colors"
              ></textarea>
              
              <button 
                type="submit" 
                className="w-full py-4 bg-bosphorus-900 hover:bg-bosphorus-800 text-white font-bold rounded-lg shadow-lg transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{t.contact.form.submit}</span>
                <Send size={18} className={isRTL ? 'transform rotate-180' : ''} />
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-full min-h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-lg border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.55214068574!2d28.872097025828775!3d41.00532149867554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5ef7d5aca81%3A0x250849605598680e!2zSXN0YW5idWwsIFTDvHJraXll!5e0!3m2!1sen!2sus!4v1689123456789!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Istanbul Map"
            ></iframe>
            {/* Map overlay hint */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md max-w-xs">
                <p className="text-xs text-slate-600 font-semibold">Base: Istanbul, Turkey</p>
                <p className="text-[10px] text-slate-500">Marmara Region Specialist</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;