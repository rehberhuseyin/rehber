import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1545459720-aacaf5090834?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1596316213708-3a1378f40756?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1572535067280-97300445d364?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&q=80&w=600"
];

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-bosphorus-900 mb-12">
          {t.gallery.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-square group"
              onClick={() => setSelectedImg(src)}
            >
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-4 right-4 text-white hover:text-byzantine-500">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImg} 
              alt="Full size" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;