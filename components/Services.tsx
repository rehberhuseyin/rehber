import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SERVICE_ICONS } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-byzantine-600 font-bold uppercase tracking-widest text-sm">{t.services.title}</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bosphorus-900 mt-2">{t.services.subtitle}</h2>
          <div className="w-24 h-1 bg-byzantine-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((item, index) => {
            const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-byzantine-500 transition-all hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-bosphorus-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-byzantine-50 transition-colors">
                  <Icon className="text-bosphorus-900 group-hover:text-byzantine-600 transition-colors" size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-bosphorus-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;