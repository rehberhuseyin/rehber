import React from 'react';
import { useLanguage } from '../LanguageContext';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseMe: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-bosphorus-900 text-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-1/2">
             <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
               {t.whyChoose.title}
             </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
               {t.whyChoose.items.map((item, index) => (
                 <div key={index} className="flex items-start gap-3">
                   <CheckCircle2 className="text-byzantine-500 flex-shrink-0 mt-1" size={24} />
                   <div>
                     <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                     <p className="text-slate-400 text-sm">{item.description}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=1000" 
                alt="Istanbul Galata Tower" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bosphorus-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-light italic">"Experience the magic of the East meeting the West."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;