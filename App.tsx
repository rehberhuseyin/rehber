import React from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const AppContent: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className={`min-h-screen bg-slate-50 font-sans text-slate-800 ${language === 'ar' ? 'font-ar' : ''}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseMe />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;