import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { LANGUAGES } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

const Header: React.FC = () => {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.testimonials, href: '#testimonials' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bosphorus-900 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
             <div className="w-10 h-10 bg-byzantine-500 rounded-full flex items-center justify-center text-white font-bold font-display text-xl shadow-lg border-2 border-white">
                H
             </div>
             <div className={`flex flex-col ${isScrolled ? 'text-white' : 'text-white'}`}>
                <span className="font-display font-bold text-lg leading-tight">Hüseyin Hizmetçi</span>
                <span className="text-xs font-light opacity-90">Licensed Guide</span>
             </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-byzantine-500 transition-colors font-medium text-sm lg:text-base drop-shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="flex items-center space-x-1 text-white hover:text-byzantine-500 transition-colors bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm"
              >
                <Globe size={18} />
                <span className="uppercase font-semibold text-sm">{language}</span>
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute mt-2 w-32 bg-white rounded-md shadow-xl overflow-hidden py-1 ${isRTL ? 'left-0' : 'right-0'}`}
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`block w-full text-left rtl:text-right px-4 py-2 text-sm hover:bg-slate-100 ${
                          language === lang.code ? 'font-bold text-bosphorus-800' : 'text-slate-600'
                        }`}
                      >
                        <span className="mr-2 rtl:ml-2">{lang.flag}</span>
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-byzantine-500 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bosphorus-900 border-t border-slate-700"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-byzantine-500 font-medium text-lg border-b border-slate-800 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;