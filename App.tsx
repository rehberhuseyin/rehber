import React, { useState, useEffect, createContext, useContext, ReactNode, useRef } from 'react';
import { 
  Menu, X, Phone, Mail, Instagram, MapPin, 
  ChevronRight, Star, Globe, Calendar, User, 
  Landmark, Ship, Crown, Coffee, MessageCircle, 
  CheckCircle, ArrowUp, ArrowRight
} from 'lucide-react';
import { translations, PROFILE_IMAGE, FALLBACK_IMAGE, PHONE_NUMBER, PHONE_LINK, INSTAGRAM_LINK, WHATSAPP_LINK } from './constants';
import { Language, Content } from './types';

// --- Context ---
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Content;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

// --- Animations Helper ---
const useRevealOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const Reveal: React.FC<{ children: ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const { ref, isVisible } = useRevealOnScroll();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Components ---

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const selectLang = (l: Language) => {
    setLang(l);
    setIsOpen(false);
  };

  const labels: Record<Language, string> = {
    tr: 'Türkçe',
    en: 'English',
    ar: 'العربية'
  };

  const flags: Record<Language, string> = {
    tr: '🇹🇷',
    en: '🇬🇧',
    ar: '🇸🇦'
  };

  return (
    <div className="relative z-50">
      <button 
        onClick={toggleOpen}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-byzantine-500/50"
      >
        <span className="text-lg">{flags[lang]}</span>
        <span className="hidden md:inline">{labels[lang]}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl py-2 overflow-hidden animate-fade-in text-slate-800 border border-slate-100 ring-1 ring-black/5">
          {(Object.keys(labels) as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => selectLang(l)}
              className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 hover:bg-slate-50 transition-colors ${
                lang === l ? 'bg-slate-50 font-semibold text-byzantine-600' : 'text-slate-600'
              }`}
            >
              <span className="text-lg shadow-sm rounded-sm overflow-hidden">{flags[l]}</span>
              {labels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { t, lang, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-bosphorus-900/95 backdrop-blur-lg shadow-xl py-3 border-b border-white/5' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="text-white font-heading font-bold text-2xl tracking-tight z-50 flex items-center gap-2">
          <span>Hüseyin</span>
          <span className="text-byzantine-500">Hizmetçi</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-white/90 hover:text-white font-medium text-sm transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-byzantine-500 transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="w-px h-6 bg-white/20"></div>
          <LanguageSwitcher />
          <a 
            href={PHONE_LINK} 
            className="flex items-center gap-2 bg-byzantine-500 hover:bg-byzantine-600 text-white px-5 py-2.5 rounded-full transition-all text-sm font-semibold shadow-lg shadow-byzantine-500/20 hover:scale-105 active:scale-95"
          >
            <Phone size={16} />
            <span dir="ltr">{PHONE_NUMBER}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
           <LanguageSwitcher />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-bosphorus-900 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-3xl font-heading font-light hover:text-byzantine-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
           <a 
            href={PHONE_LINK} 
            className="flex items-center gap-2 bg-byzantine-500 text-white px-8 py-4 rounded-full text-xl font-semibold mt-8 shadow-xl shadow-byzantine-500/20"
          >
            <Phone size={24} />
            <span dir="ltr">{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { t, lang, dir } = useLanguage();

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" dir={dir}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&q=80&w=2500" 
          alt="Istanbul Bosphorus" 
          className="w-full h-full object-cover object-center animate-ken-burns"
        />
        {/* Stronger overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-bosphorus-900/60 via-bosphorus-900/50 to-bosphorus-900/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white w-full flex flex-col items-center">
        {/* Badge - always visible with CSS animation */}
        <div className="opacity-0 animate-fade-in-up [animation-delay:0.1s] inline-flex items-center gap-2 mb-6 px-5 py-2 border border-byzantine-500/50 rounded-full bg-bosphorus-900/60 backdrop-blur-md text-byzantine-400 text-sm font-bold tracking-widest uppercase shadow-lg">
          <Star size={14} className="fill-byzantine-400" />
          {t.hero.subtitle.includes('15') ? '15+ ' + (lang === 'ar' ? 'سنة خبرة' : 'Years Experience') : 'Professional Guide'}
        </div>
        
        {/* Title */}
        <h1 className="opacity-0 animate-fade-in-up [animation-delay:0.3s] font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/90">
          {t.hero.title}
        </h1>
        
        {/* Subtitle */}
        <p className="opacity-0 animate-fade-in-up [animation-delay:0.5s] text-xl md:text-2xl text-slate-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
          {t.hero.subtitle}
        </p>
        
        {/* Buttons - Critical FIX: No Reveal wrapper, high z-index, specific styling */}
        <div className="opacity-0 animate-fade-in-up [animation-delay:0.7s] flex flex-col sm:flex-row gap-5 justify-center items-center w-full z-20">
          <a 
            href="#contact" 
            className="group px-8 py-5 bg-byzantine-500 hover:bg-byzantine-600 text-white rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] w-full sm:w-auto flex items-center justify-center gap-3 text-lg border-2 border-transparent"
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#about" 
            className="px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-bold transition-all w-full sm:w-auto hover:border-white/60 text-lg flex items-center justify-center"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 hidden md:block cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
        <ArrowUp className="rotate-180" size={36} />
      </div>
    </section>
  );
};

const About = () => {
  const { t, dir } = useLanguage();
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 relative">
            <Reveal>
              <div className="relative z-10">
                {/* Frame effect */}
                <div className="absolute -inset-4 border-2 border-byzantine-100 rounded-[2rem] transform rotate-3 hidden md:block"></div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-bosphorus-900/20 aspect-[3/4] max-w-md mx-auto transform hover:scale-[1.01] transition-transform duration-700">
                  <img 
                    src={imageError ? FALLBACK_IMAGE : PROFILE_IMAGE} 
                    onError={() => setImageError(true)}
                    alt={t.about.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bosphorus-900/90 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="font-heading font-bold text-3xl mb-1">{t.about.name}</h3>
                    <p className="text-byzantine-400 font-medium text-lg tracking-wide">{t.about.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-byzantine-50 to-transparent opacity-50 z-0 pointer-events-none"></div>
            </Reveal>
          </div>

          <div className="w-full lg:w-1/2">
            <Reveal delay={200}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-12 bg-byzantine-500"></div>
                <h2 className="text-byzantine-600 font-bold uppercase tracking-widest text-sm">{t.about.title}</h2>
              </div>
              
              <h3 className="font-heading font-bold text-4xl md:text-5xl text-bosphorus-900 mb-8 leading-tight">
                 {t.hero.title.split(' ').slice(0, 3).join(' ')}...
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-10 text-justify">
                {t.about.bio}
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {t.about.badges.map((badge, idx) => (
                  <span key={idx} className="px-5 py-2.5 bg-slate-50 border border-slate-100 text-bosphorus-800 rounded-full text-sm font-semibold flex items-center gap-2 shadow-sm">
                    <CheckCircle size={16} className="text-byzantine-500" />
                    {badge}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                 {t.whyMe.features.slice(0, 4).map((feature, idx) => (
                   <div key={idx} className="flex gap-4 group">
                     <div className="w-14 h-14 rounded-2xl bg-byzantine-50 flex items-center justify-center flex-shrink-0 text-byzantine-600 group-hover:bg-byzantine-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                        {idx === 0 && <Star size={24} />}
                        {idx === 1 && <Crown size={24} />}
                        {idx === 2 && <Globe size={24} />}
                        {idx === 3 && <MapPin size={24} />}
                     </div>
                     <div>
                       <h4 className="font-bold text-lg text-bosphorus-900 mb-1">{feature.title}</h4>
                       <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { t, lang, dir } = useLanguage();

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'landmark': return <Landmark size={32} />;
      case 'ship': return <Ship size={32} />;
      case 'crown': return <Crown size={32} />;
      case 'user': return <User size={32} />;
      case 'coffee': return <Coffee size={32} />;
      default: return <Globe size={32} />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <h2 className="text-byzantine-600 font-bold uppercase tracking-widest text-sm mb-3">{t.services.title}</h2>
            <h3 className="font-heading font-bold text-4xl md:text-5xl text-bosphorus-900 mb-6">{t.services.subtitle}</h3>
            <div className="h-1.5 w-24 bg-byzantine-500 mx-auto rounded-full"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, idx) => (
            <Reveal key={idx} delay={idx * 100} className="h-full">
              <div className="bg-white p-10 rounded-3xl shadow-[0_5px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 h-full border border-slate-100 group flex flex-col items-start hover:-translate-y-2 relative overflow-hidden">
                
                {/* Hover Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-byzantine-50 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150 group-hover:bg-byzantine-100/50"></div>

                <div className="w-16 h-16 bg-bosphorus-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-byzantine-500 transition-colors duration-300 shadow-lg relative z-10">
                  {getIcon(service.icon)}
                </div>
                
                <h4 className="font-heading font-bold text-2xl text-bosphorus-900 mb-4 group-hover:text-byzantine-600 transition-colors relative z-10">
                  {service.title}
                </h4>
                
                <p className="text-slate-600 leading-relaxed relative z-10">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 flex items-center text-byzantine-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 relative z-10">
                  <span className="mr-2">{lang === 'ar' ? 'التفاصيل' : 'Details'}</span>
                  <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const { t, dir } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using specific high quality visuals from Unsplash
  const images = [
    "https://images.unsplash.com/photo-1545459720-aac3f94783a4?auto=format&fit=crop&q=80&w=800", // Blue Mosque interior
    "https://images.unsplash.com/photo-1596316218764-28b33538c645?auto=format&fit=crop&q=80&w=800", // Galata Tower
    "https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?auto=format&fit=crop&q=80&w=800", // Hagia Sophia
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=800", // Grand Bazaar
    "https://images.unsplash.com/photo-1634914757273-0305ca775c74?auto=format&fit=crop&q=80&w=800", // Tea
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800", // Ortakoy
  ];

  return (
    <section id="gallery" className="py-24 bg-bosphorus-900 text-white relative" dir={dir}>
      {/* Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-byzantine-500 font-bold uppercase tracking-widest text-sm mb-3">{t.gallery.title}</h2>
            <h3 className="font-heading font-bold text-4xl md:text-5xl leading-tight">{t.gallery.subtitle}</h3>
          </div>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-byzantine-500 transition-colors px-6 py-3 border border-white/20 rounded-full hover:bg-white/5">
            <Instagram size={20} />
            <span className="font-medium">@bir_an_istanbul</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
          {images.map((src, idx) => (
            <Reveal key={idx} delay={idx * 50} className={`${(idx === 0 || idx === 3) ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`}>
              <div 
                className="relative overflow-hidden rounded-2xl cursor-pointer group h-full shadow-2xl"
                onClick={() => setSelectedImage(src)}
              >
                <img 
                  src={src} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <span className="text-2xl font-light">+</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full">
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-w-5xl max-h-[85vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

const Testimonials = () => {
  const { t, dir } = useLanguage();
  const [current, setCurrent] = useState(0);

  // Auto rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % t.testimonials.items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [t.testimonials.items.length]);

  return (
    <section className="py-24 bg-white overflow-hidden" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-byzantine-600 font-bold uppercase tracking-widest text-sm mb-3">{t.testimonials.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden py-10"> {/* Added padding for shadows */}
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: dir === 'ltr' ? `translateX(-${current * 100}%)` : `translateX(${current * 100}%)` }}
            >
              {t.testimonials.items.map((item, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-10 md:p-14 rounded-[2.5rem] text-center relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-50">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-byzantine-500 text-white flex items-center justify-center rounded-full shadow-lg">
                      <span className="text-3xl font-serif">"</span>
                    </div>
                    
                    <div className="text-byzantine-400 flex justify-center gap-1.5 mb-8">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="font-heading text-xl md:text-2xl text-bosphorus-900 italic mb-10 leading-relaxed max-w-2xl mx-auto">
                      {item.comment}
                    </p>
                    <div>
                      <h4 className="font-bold text-lg text-bosphorus-900">{item.name}</h4>
                      <p className="text-slate-500 text-sm font-medium uppercase tracking-wide mt-1">{item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-3 mt-4">
            {t.testimonials.items.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === idx ? 'bg-byzantine-500 w-10' : 'bg-slate-200 w-2.5 hover:bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t, lang, dir } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden" dir={dir}>
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Form Side */}
          <div className="w-full lg:w-3/5 p-10 md:p-16">
            <div className="mb-10">
              <h2 className="text-byzantine-600 font-bold uppercase tracking-widest text-sm mb-3">{t.contact.title}</h2>
              <h3 className="font-heading font-bold text-4xl text-bosphorus-900">{t.contact.subtitle}</h3>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input type="text" placeholder=" " className="peer w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-byzantine-500 focus:ring-2 focus:ring-byzantine-200 outline-none transition-all placeholder-transparent" />
                  <label className="absolute left-5 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-byzantine-600 peer-focus:bg-white peer-focus:px-1 pointer-events-none bg-transparent h-fit -mt-0.5 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1">
                    {t.contact.form.name}
                  </label>
                </div>
                <div className="relative">
                  <input type="tel" placeholder=" " className="peer w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-byzantine-500 focus:ring-2 focus:ring-byzantine-200 outline-none transition-all placeholder-transparent" />
                  <label className="absolute left-5 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-byzantine-600 peer-focus:bg-white peer-focus:px-1 pointer-events-none bg-transparent h-fit -mt-0.5 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1">
                    {t.contact.form.phone}
                  </label>
                </div>
              </div>
              <div className="relative">
                <input type="email" placeholder=" " className="peer w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-byzantine-500 focus:ring-2 focus:ring-byzantine-200 outline-none transition-all placeholder-transparent" />
                <label className="absolute left-5 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-byzantine-600 peer-focus:bg-white peer-focus:px-1 pointer-events-none bg-transparent h-fit -mt-0.5 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1">
                  {t.contact.form.email}
                </label>
              </div>
              <div className="relative">
                 <input type="date" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-byzantine-500 focus:ring-2 focus:ring-byzantine-200 outline-none transition-all text-slate-600" />
                 <label className="absolute left-5 -top-2.5 text-xs text-slate-500 bg-white px-1">
                   {t.contact.form.date}
                 </label>
              </div>
              <div className="relative">
                <textarea rows={4} placeholder=" " className="peer w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-byzantine-500 focus:ring-2 focus:ring-byzantine-200 outline-none transition-all placeholder-transparent"></textarea>
                <label className="absolute left-5 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-byzantine-600 peer-focus:bg-white peer-focus:px-1 pointer-events-none bg-transparent h-fit -mt-0.5 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1">
                  {t.contact.form.message}
                </label>
              </div>
              <button className="w-full bg-bosphorus-900 hover:bg-byzantine-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                {t.contact.form.submit}
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="w-full lg:w-2/5 bg-bosphorus-900 text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-byzantine-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h3 className="font-heading font-bold text-2xl mb-10 border-b border-white/10 pb-6">{lang === 'ar' ? 'معلومات الاتصال' : 'Contact Info'}</h3>
              <div className="space-y-8">
                <a href={PHONE_LINK} className="flex items-start gap-5 hover:text-byzantine-400 transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-byzantine-500 group-hover:text-white transition-all shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{t.contact.info.phone}</p>
                    <p className="text-xl font-medium tracking-wide" dir="ltr">{PHONE_NUMBER}</p>
                  </div>
                </a>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 hover:text-byzantine-400 transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-byzantine-500 group-hover:text-white transition-all shrink-0">
                    <Instagram size={22} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{t.contact.info.instagram}</p>
                    <p className="text-xl font-medium tracking-wide">@bir_an_istanbul</p>
                  </div>
                </a>
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-byzantine-500 group-hover:text-white transition-all shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Location</p>
                    <p className="text-lg font-medium leading-relaxed">{t.contact.info.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 h-56 rounded-2xl overflow-hidden bg-slate-800 border border-white/10 shadow-inner relative z-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.6041696238!2d28.85764353406322!3d41.00546324200673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2sus!4v1709900000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t, dir } = useLanguage();

  return (
    <footer className="bg-bosphorus-900 text-white border-t border-white/10" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
             <a href="#" className="inline-block font-heading font-bold text-2xl tracking-tight mb-3">
              Hüseyin <span className="text-byzantine-500">Hizmetçi</span>
            </a>
            <p className="text-white/50 text-sm">{t.footer.copyright}</p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#services" className="text-white/80 hover:text-byzantine-500 transition-colors">{t.footer.links.services}</a>
            <a href="#about" className="text-white/80 hover:text-byzantine-500 transition-colors">{t.footer.links.about}</a>
            <a href="#contact" className="text-white/80 hover:text-byzantine-500 transition-colors">{t.footer.links.contact}</a>
          </div>

          <div className="flex gap-4">
             <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-byzantine-500 transition-all hover:-translate-y-1">
               <Instagram size={20} />
             </a>
             <a href={`mailto:info@example.com`} className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-byzantine-500 transition-all hover:-translate-y-1">
               <Mail size={20} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75"></div>
      <MessageCircle size={32} className="relative z-10" />
    </a>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('tr');

  const value: LanguageContextType = {
    lang,
    setLang,
    t: translations[lang],
    dir: lang === 'ar' ? 'rtl' : 'ltr'
  };

  return (
    <LanguageContext.Provider value={value}>
      <div className="min-h-screen bg-slate-50 font-sans" dir={value.dir}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;