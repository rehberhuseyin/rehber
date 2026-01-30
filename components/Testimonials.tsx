import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % t.testimonials.reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [t.testimonials.reviews.length]);

  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
           <h2 className="font-display text-3xl font-bold text-bosphorus-900">{t.testimonials.title}</h2>
        </div>

        <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 min-h-[300px] flex flex-col justify-center items-center text-center">
          <div className="absolute top-0 transform -translate-y-1/2 bg-byzantine-500 text-white p-4 rounded-full shadow-lg">
            <Quote size={24} fill="currentColor" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="flex justify-center mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-byzantine-500" fill="currentColor" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-slate-700 italic mb-8 leading-relaxed font-light">
                "{t.testimonials.reviews[activeIndex].comment}"
              </p>
              
              <div>
                <h4 className="font-bold text-bosphorus-900 text-lg">{t.testimonials.reviews[activeIndex].name}</h4>
                <span className="text-sm text-slate-500 uppercase tracking-wider">{t.testimonials.reviews[activeIndex].location}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8 absolute bottom-6">
            {t.testimonials.reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === activeIndex ? 'bg-byzantine-500' : 'bg-slate-300'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;