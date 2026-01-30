import { ContentData, LanguageCode } from './types';
import { Landmark, Crown, UserCheck, Coffee, Ship } from 'lucide-react';

export const LANGUAGES: { code: LanguageCode; label: string; flag: string }[] = [
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

export const CONTENT: Record<LanguageCode, ContentData> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      services: 'Turlar',
      gallery: 'Galeri',
      testimonials: 'Yorumlar',
      contact: 'İletişim',
    },
    hero: {
      title: 'İstanbul\'u Uzman Rehberle Keşfedin',
      subtitle: '15 Yıllık Profesyonel Tecrübe',
      ctaPrimary: 'Tur Rezervasyonu',
      ctaSecondary: 'İletişime Geçin',
    },
    about: {
      title: 'Hakkımda',
      name: 'Hüseyin Hizmetçi',
      role: 'Lisanslı Turist Rehberi',
      description: '15 yıllık profesyonel deneyimim ile başta İstanbul olmak üzere tüm Marmara Bölgesi\'nde rehberlik hizmeti vermekteyim. Türkçe ve Arapça dillerinde kişiye özel turlar düzenleyerek, tarihi ve kültürü misafirlerime yaşatıyorum.',
      badges: ['İstanbul Uzmanı', 'Marmara Bölgesi', 'Arapça & Türkçe'],
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'Size özel hazırlanmış unutulmaz deneyimler',
      items: [
        { title: 'Tarihi İstanbul Turları', description: 'Ayasofya, Sultanahmet Camii ve Topkapı Sarayı gibi ikonik eserleri keşfedin.' },
        { title: 'Boğaz & Haliç Turları', description: 'İki kıtayı birleştiren eşsiz İstanbul Boğazı\'nda tekne turu keyfi.' },
        { title: 'Osmanlı Mirası', description: 'İmparatorluğun izinde saraylar, camiler ve gizli kalmış hazineler.' },
        { title: 'Özel VIP Turlar', description: 'Size ve ailenize özel planlanmış, esnek ve konforlu gezi programları.' },
        { title: 'Kültür & Lezzet', description: 'İstanbul\'un sokak lezzetlerini ve zengin mutfağını yerel bir uzmanla tadın.' },
      ],
    },
    whyChoose: {
      title: 'Neden Ben?',
      items: [
        { title: '15+ Yıl Tecrübe', description: 'Sektörde güvenilir ve köklü geçmiş.' },
        { title: 'Lisanslı Rehber', description: 'Kültür ve Turizm Bakanlığı kokartlı profesyonel.' },
        { title: 'Çift Dilli Hizmet', description: 'Ana dil seviyesinde Türkçe ve Arapça anlatım.' },
        { title: 'Yerel Uzmanlık', description: 'Şehrin bilinmeyen hikayelerine hakimiyet.' },
        { title: 'Kişiye Özel', description: 'İlgi alanlarınıza göre şekillenen esnek rotalar.' },
        { title: 'Esnek Planlama', description: 'Zamanınıza uygun program oluşturma.' },
      ],
    },
    gallery: {
      title: 'İstanbul Hatıraları',
    },
    testimonials: {
      title: 'Misafir Yorumları',
      reviews: [
        { name: 'Ahmed Al-Sayed', comment: 'Hüseyin Bey ile İstanbul gezimiz harikaydı. Tarih bilgisi muazzam.', location: 'Riyad, Suudi Arabistan' },
        { name: 'Fatima Yılmaz', comment: 'Ailemiz için çok konforlu ve güvenilir bir tur oldu. Teşekkürler.', location: 'Bursa, Türkiye' },
        { name: 'John Smith', comment: 'An amazing guide who knows every corner of the city. Highly recommended!', location: 'London, UK' },
      ],
    },
    contact: {
      title: 'İletişime Geçin',
      subtitle: 'Hayalinizdeki İstanbul turunu planlayalım',
      form: {
        name: 'Adınız Soyadınız',
        email: 'E-posta Adresiniz',
        phone: 'Telefon Numaranız',
        date: 'Planlanan Tarih',
        message: 'Mesajınız',
        submit: 'Gönder',
      },
      info: {
        phone: 'Telefon',
        instagram: 'Instagram',
      },
    },
    footer: {
      rights: '© 2026 Hüseyin Hizmetçi - Lisanslı Turist Rehberi. Tüm hakları saklıdır.',
      quickLinks: 'Hızlı Bağlantılar',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من أنا',
      services: 'الجولات',
      gallery: 'المعرض',
      testimonials: 'آراء العملاء',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'اكتشف إسطنبول مع مرشد خبير',
      subtitle: '15 عاماً من الخبرة المهنية',
      ctaPrimary: 'احجز جولة',
      ctaSecondary: 'تواصل معي',
    },
    about: {
      title: 'من أنا',
      name: 'حسين خدمتجي',
      role: 'مرشد سياحي مرخص',
      description: 'مع 15 عاماً من الخبرة المهنية، أتخصص في تنظيم الجولات في منطقة مرمرة، وخاصة في إسطنبول. أقدم جولات شخصية باللغتين التركية والعربية، مما يعيد الحياة للتاريخ والثقافة.',
      badges: ['خبير إسطنبول', 'منطقة مرمرة', 'يتحدث العربية والتركية'],
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'تجارب لا تُنسى مصممة خصيصاً لك',
      items: [
        { title: 'جولات إسطنبول التاريخية', description: 'اكتشف المعالم الأيقونية مثل آيا صوفيا والجامع الأزرق وقصر توبكابي.' },
        { title: 'جولات البوسفور والقرن الذهبي', description: 'رحلة بحرية في مضيق البوسفور الفريد الذي يربط بين قارتين.' },
        { title: 'التراث العثماني', description: 'قصور، مساجد وكنوز خفية على خطى الإمبراطورية.' },
        { title: 'جولات خاصة VIP', description: 'برامج سياحية مرنة ومريحة مصممة خصيصاً لك ولعائلتك.' },
        { title: 'تجارب ثقافية ومأكولات', description: 'تذوق مأكولات الشوارع والمطبخ الغني في إسطنبول مع خبير محلي.' },
      ],
    },
    whyChoose: {
      title: 'لماذا تختارني؟',
      items: [
        { title: '+15 عاماً من الخبرة', description: 'تاريخ موثوق وعريق في القطاع.' },
        { title: 'مرشد مرخص', description: 'محترف معتمد من وزارة الثقافة والسياحة.' },
        { title: 'ثنائي اللغة', description: 'شرح باللغتين العربية والتركية بمستوى اللغة الأم.' },
        { title: 'خبرة محلية', description: 'معرفة عميقة بالقصص الخفية للمدينة.' },
        { title: 'خدمة شخصية', description: 'مسارات مرنة تتشكل حسب اهتماماتك.' },
        { title: 'جدولة مرنة', description: 'إنشاء برنامج يناسب وقتك.' },
      ],
    },
    gallery: {
      title: 'ذكريات إسطنبول',
    },
    testimonials: {
      title: 'آراء الضيوف',
      reviews: [
        { name: 'أحمد السيد', comment: 'كانت جولتنا في إسطنبول مع السيد حسين رائعة. معرفته بالتاريخ هائلة.', location: 'الرياض، السعودية' },
        { name: 'فاطمة يلماز', comment: 'كانت جولة مريحة وآمنة جداً لعائلتنا. شكراً جزيلاً.', location: 'بورصة، تركيا' },
        { name: 'جون سميث', comment: 'مرشد مذهل يعرف كل ركن في المدينة. ينصح به بشدة!', location: 'لندن، المملكة المتحدة' },
      ],
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'لنخطط لجولة أحلامك في إسطنبول',
      form: {
        name: 'الاسم واللقب',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        date: 'التاريخ المخطط',
        message: 'رسالتك',
        submit: 'إرسال',
      },
      info: {
        phone: 'الهاتف',
        instagram: 'إنستغرام',
      },
    },
    footer: {
      rights: '© 2026 حسين خدمتجي - مرشد سياحي مرخص. جميع الحقوق محفوظة.',
      quickLinks: 'روابط سريعة',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      testimonials: 'Reviews',
      contact: 'Contact',
    },
    hero: {
      title: 'Discover Istanbul with an Expert Guide',
      subtitle: '15 Years of Professional Experience',
      ctaPrimary: 'Book a Tour',
      ctaSecondary: 'Contact Me',
    },
    about: {
      title: 'About Me',
      name: 'Hüseyin Hizmetçi',
      role: 'Licensed Tourist Guide',
      description: 'With 15 years of professional experience, I specialize in guiding tours throughout the Marmara Region, with particular expertise in Istanbul. I offer personalized tours in Turkish and Arabic, bringing history and culture to life.',
      badges: ['Istanbul Expert', 'Marmara Region', 'Arabic & Turkish Speaking'],
    },
    services: {
      title: 'My Services',
      subtitle: 'Unforgettable experiences tailored for you',
      items: [
        { title: 'Historical Istanbul Tours', description: 'Explore iconic landmarks like Hagia Sophia, Blue Mosque, and Topkapi Palace.' },
        { title: 'Bosphorus & Golden Horn', description: 'Enjoy a boat tour on the unique Bosphorus connecting two continents.' },
        { title: 'Ottoman Heritage', description: 'Palaces, mosques, and hidden treasures in the footsteps of the Empire.' },
        { title: 'Customized Private Tours', description: 'Flexible and comfortable tour programs planned specifically for you and your family.' },
        { title: 'Cultural & Culinary', description: 'Taste Istanbul\'s street food and rich cuisine with a local expert.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Me?',
      items: [
        { title: '15+ Years Experience', description: 'Reliable and established background in the industry.' },
        { title: 'Licensed & Certified', description: 'Professional certified by the Ministry of Culture and Tourism.' },
        { title: 'Bilingual Service', description: 'Native-level fluency in Turkish and Arabic.' },
        { title: 'Local Expertise', description: 'Deep knowledge of the city\'s hidden stories.' },
        { title: 'Personalized Service', description: 'Flexible routes shaped by your interests.' },
        { title: 'Flexible Scheduling', description: 'Creating a schedule that fits your time.' },
      ],
    },
    gallery: {
      title: 'Istanbul Memories',
    },
    testimonials: {
      title: 'Guest Reviews',
      reviews: [
        { name: 'Ahmed Al-Sayed', comment: 'Our tour in Istanbul with Mr. Hüseyin was wonderful. His historical knowledge is immense.', location: 'Riyadh, Saudi Arabia' },
        { name: 'Fatima Yılmaz', comment: 'It was a very comfortable and safe tour for our family. Thank you.', location: 'Bursa, Turkey' },
        { name: 'John Smith', comment: 'An amazing guide who knows every corner of the city. Highly recommended!', location: 'London, UK' },
      ],
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Let\'s plan your dream Istanbul tour',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        date: 'Preferred Date',
        message: 'Your Message',
        submit: 'Send Message',
      },
      info: {
        phone: 'Phone',
        instagram: 'Instagram',
      },
    },
    footer: {
      rights: '© 2026 Hüseyin Hizmetçi - Licensed Tourist Guide. All rights reserved.',
      quickLinks: 'Quick Links',
    },
  },
};

export const CONTACT_INFO = {
  phone: '+905556370046',
  displayPhone: '+90 555 637 00 46',
  instagramUrl: 'https://www.instagram.com/bir_an_istanbul/',
  // Placeholder for profile if external link fails, but we use the provided one in About component
  profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
};

export const SERVICE_ICONS = [Landmark, Ship, Crown, UserCheck, Coffee];