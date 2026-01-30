import React from 'react';
import { useLanguage } from '../LanguageContext';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=2000"
          alt="Istanbul Bosphorus View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bosphorus-900/70 via-bosphorus-900/50 to-bosphorus-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 border border-byzantine-500 rounded-full text-byzantine-500 text-sm font-semibold tracking-wider mb-4 bg-black/30 backdrop-blur-sm">
             EST. 2010
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
            {t.hero.title}
          </h1>
          <p className="font-light text-lg md:text-2xl mb-10 max-w-3xl mx-auto text-slate-200">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-byzantine-600 hover:bg-byzantine-500 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-all"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10"
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={40} className="opacity-80 hover:opacity-100" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;