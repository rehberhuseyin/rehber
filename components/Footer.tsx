import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bosphorus-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="flex flex-col items-start">
             <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                 <div className="w-8 h-8 bg-byzantine-500 rounded-full flex items-center justify-center text-white font-bold font-display shadow-lg">H</div>
                 <span className="font-display font-bold text-lg text-white">Hüseyin Hizmetçi</span>
             </div>
             <p className="text-sm opacity-80 max-w-xs">
               Your gateway to the history, culture, and beauty of Istanbul and the Marmara region.
             </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-byzantine-500 transition-colors">{t.nav.home}</a></li>
              <li><a href="#services" className="hover:text-byzantine-500 transition-colors">{t.nav.services}</a></li>
              <li><a href="#gallery" className="hover:text-byzantine-500 transition-colors">{t.nav.gallery}</a></li>
              <li><a href="#contact" className="hover:text-byzantine-500 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 rtl:space-x-reverse mb-4">
              <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-byzantine-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <Phone size={20} />
              </a>
            </div>
            <div className="flex items-center text-sm opacity-80">
                <Mail size={16} className="mr-2 rtl:ml-2" />
                <span>contact@huseyinhizmetci.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs opacity-60">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;