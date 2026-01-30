import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Award, Globe2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useLanguage();

  const profileImage = "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop"; 

  const icons = [Award, MapPin, Globe2];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-byzantine-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10 relative">
                <img 
                  src={profileImage}
                  alt={t.about.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-byzantine-500 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-terracotta-500/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-byzantine-500"></div>
              <span className="text-byzantine-600 font-bold uppercase tracking-widest text-sm">{t.about.title}</span>
            </div>
            
            <h2 className="font-display text-4xl font-bold text-bosphorus-900 mb-2">{t.about.name}</h2>
            <h3 className="text-xl text-terracotta-700 font-medium mb-6">{t.about.role}</h3>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              {t.about.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.about.badges.map((badge, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div key={index} className="flex flex-col items-center p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
                    <Icon className="text-byzantine-500 mb-2" size={24} />
                    <span className="font-semibold text-bosphorus-900 text-sm">{badge}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;