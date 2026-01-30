import { Content, Language } from './types';

export const PROFILE_IMAGE = "https://i.ibb.co/gF9XMMzN/Gemini-Generated-mage-xc72aixc72aixc72.png"; 
export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800";

export const PHONE_NUMBER = "+90 555 637 00 46";
export const PHONE_LINK = "tel:+905556370046";
export const INSTAGRAM_LINK = "https://www.instagram.com/bir_an_istanbul/";
export const WHATSAPP_LINK = "https://wa.me/905556370046";

export const translations: Record<Language, Content> = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      services: "Turlar",
      gallery: "Galeri",
      contact: "İletişim"
    },
    hero: {
      title: "İstanbul'un Kalbini Uzman Rehberle Keşfedin",
      subtitle: "15 yıllık profesyonel tecrübe ile tarihin, kültürün ve lezzetin izinde unutulmaz bir yolculuk.",
      ctaPrimary: "Turu Planla",
      ctaSecondary: "Bana Ulaşın"
    },
    about: {
      title: "Hakkımda",
      name: "Hüseyin Hizmetçi",
      role: "Profesyonel Turist Rehberi",
      bio: "15 yılı aşkın süredir, Marmara Bölgesi'nin her köşesini ve özellikle İstanbul'un kadim tarihini misafirlerimle paylaşıyorum. Lisanslı bir rehber olarak; Türkçe ve Arapça dillerinde, sadece yerleri değil, o taşların fısıldadığı hikayeleri de anlatıyorum. Amacım, size sadece bir şehir turu değil, hafızanızdan silinmeyecek bir yaşam deneyimi sunmak.",
      badges: ["İstanbul Uzmanı", "15+ Yıl Deneyim", "Lisanslı Rehber", "Arapça & Türkçe"]
    },
    services: {
      title: "Deneyimler",
      subtitle: "Sizin İçin Özel Olarak Hazırlanmış Rotalar",
      items: [
        { icon: "landmark", title: "Tarihi Yarımada Klasikleri", description: "Ayasofya'nın ihtişamından Topkapı'nın gizemine, tarihin sıfır noktasında zaman yolculuğu." },
        { icon: "ship", title: "Boğaziçi Rüyası", description: "İki kıtayı birleştiren eşsiz İstanbul Boğazı'nda, yalıların gölgesinde tekne keyfi." },
        { icon: "crown", title: "Osmanlı'nın İzinde", description: "İmparatorluğun görkemli sarayları, köşkleri ve harem hikayeleriyle dolu bir gün." },
        { icon: "coffee", title: "Lezzet ve Kültür", description: "Tarihi çarşılar, gizli kalmış lezzet durakları ve Türk mutfağının en seçkin tatları." },
        { icon: "user", title: "Size Özel VIP Tur", description: "Tamamen sizin ilgi alanlarınıza, zamanınıza ve temponuza göre kurgulanmış özel program." }
      ]
    },
    whyMe: {
      title: "Neden Ben?",
      features: [
        { title: "15 Yıllık Tecrübe", description: "Binlerce misafir, sayısız anı ve derin birikim." },
        { title: "Resmi Lisanslı", description: "Kültür ve Turizm Bakanlığı onaylı profesyonel rehber." },
        { title: "İki Dilde Uzmanlık", description: "Hem Türkçe hem Arapça dillerinde ana dil seviyesinde anlatım." },
        { title: "Yerel Sırlar", description: "Turistik rotaların ötesinde, şehrin bilinmeyenlerini keşfedin." },
        { title: "Kişiselleştirilmiş", description: "Siz neyi merak ediyorsanız, rotamız oraya döner." },
        { title: "Esnek Program", description: "Zamanınızı en verimli ve keyifli şekilde yönetiyoruz." }
      ]
    },
    gallery: {
      title: "Galeri",
      subtitle: "İstanbul Hatıraları"
    },
    testimonials: {
      title: "Misafir Görüşleri",
      items: [
        { name: "Ahmet Y.", location: "Bursa", comment: "İstanbul'u bildiğimi sanırdım, Hüseyin Bey ile gezene kadar. Anlatımıyla taşlar dile geldi resmen.", rating: 5 },
        { name: "Fatima Al-Zahra", location: "Dubai", comment: "Ailemiz için harika bir deneyimdi. Çocuklarla iletişimi, bilgisi ve nezaketiyle mükemmel bir rehber.", rating: 5 },
        { name: "Mehmet K.", location: "İstanbul", comment: "Yurt dışından gelen misafirlerimi gönül rahatlığıyla emanet ettim, hepsi hayran kaldı.", rating: 5 }
      ]
    },
    contact: {
      title: "İletişim",
      subtitle: "Hayalinizdeki İstanbul Turunu Planlayalım",
      form: {
        name: "Adınız Soyadınız",
        email: "E-posta Adresiniz",
        phone: "Telefon Numaranız",
        date: "Planlanan Tarih",
        message: "Mesajınız / Talepleriniz",
        submit: "Gönder"
      },
      info: {
        phone: "Telefon & WhatsApp",
        instagram: "Instagram",
        address: "Hizmet Bölgesi: İstanbul & Marmara"
      }
    },
    footer: {
      copyright: "© 2026 Hüseyin Hizmetçi - Profesyonel Turist Rehberi",
      links: {
        services: "Turlar",
        about: "Hakkımda",
        contact: "İletişim"
      }
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Tours",
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      title: "Discover the Heart of Istanbul",
      subtitle: "An unforgettable journey through history, culture, and taste with 15 years of expert experience.",
      ctaPrimary: "Plan Your Tour",
      ctaSecondary: "Contact Me"
    },
    about: {
      title: "About Me",
      name: "Hüseyin Hizmetçi",
      role: "Professional Tourist Guide",
      bio: "For over 15 years, I have been sharing every corner of the Marmara Region and especially the ancient history of Istanbul with my guests. As a licensed guide offering tours in Turkish and Arabic, I tell not just the locations, but the stories whispered by the stones. My goal is to offer you not just a city tour, but a life experience you will never forget.",
      badges: ["Istanbul Expert", "15+ Years Exp.", "Licensed Guide", "Arabic & Turkish"]
    },
    services: {
      title: "Experiences",
      subtitle: "Routes Tailored Just For You",
      items: [
        { icon: "landmark", title: "Old City Classics", description: "Time travel at the zero point of history, from the majesty of Hagia Sophia to the mysteries of Topkapi." },
        { icon: "ship", title: "Bosphorus Dream", description: "Enjoying a boat ride in the shadow of mansions on the unique Bosphorus connecting two continents." },
        { icon: "crown", title: "Ottoman Footsteps", description: "A day full of magnificent palaces, pavilions, and harem stories of the Empire." },
        { icon: "coffee", title: "Taste & Culture", description: "Historical bazaars, hidden culinary stops, and the most exquisite tastes of Turkish cuisine." },
        { icon: "user", title: "VIP Private Tour", description: "A special program designed entirely according to your interests, time, and pace." }
      ]
    },
    whyMe: {
      title: "Why Me?",
      features: [
        { title: "15 Years Experience", description: "Thousands of guests, countless memories, and deep knowledge." },
        { title: "Officially Licensed", description: "Professional guide certified by the Ministry of Culture and Tourism." },
        { title: "Bilingual Expert", description: "Native-level fluency in both Turkish and Arabic." },
        { title: "Local Secrets", description: "Discover the city's unknowns beyond tourist routes." },
        { title: "Personalized", description: "Wherever your curiosity leads, our route turns there." },
        { title: "Flexible Schedule", description: "We manage your time in the most efficient and enjoyable way." }
      ]
    },
    gallery: {
      title: "Gallery",
      subtitle: "Memories of Istanbul"
    },
    testimonials: {
      title: "Guest Reviews",
      items: [
        { name: "John D.", location: "London", comment: "I thought I knew Istanbul until I toured with Mr. Huseyin. The stones literally spoke with his narration.", rating: 5 },
        { name: "Fatima Al-Zahra", location: "Dubai", comment: "A wonderful experience for our family. An excellent guide with his communication with children and knowledge.", rating: 5 },
        { name: "Sarah M.", location: "USA", comment: "I entrusted my foreign guests with peace of mind, they were all amazed.", rating: 5 }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Let's Plan Your Dream Istanbul Tour",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        date: "Tour Date",
        message: "Message / Requests",
        submit: "Send"
      },
      info: {
        phone: "Phone & WhatsApp",
        instagram: "Instagram",
        address: "Service Area: Istanbul & Marmara"
      }
    },
    footer: {
      copyright: "© 2026 Hüseyin Hizmetçi - Professional Tourist Guide",
      links: {
        services: "Tours",
        about: "About",
        contact: "Contact"
      }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      services: "الجولات",
      gallery: "المعرض",
      contact: "اتصل بي"
    },
    hero: {
      title: "اكتشف قلب إسطنبول مع خبير",
      subtitle: "رحلة لا تُنسى عبر التاريخ والثقافة والمذاق مع 15 عامًا من الخبرة المهنية.",
      ctaPrimary: "خطط جولتك",
      ctaSecondary: "تواصل معي"
    },
    about: {
      title: "من أنا",
      name: "حسين خدمتجي",
      role: "مرشد سياحي محترف",
      bio: "لأكثر من 15 عامًا، أشارك كل زاوية من منطقة مرمرة وتاريخ إسطنبول العريق مع ضيوفي. كمرشد مرخص يقدم جولات باللغتين التركية والعربية، لا أحكي فقط عن الأماكن، بل عن القصص التي تهمس بها الحجارة. هدفي ليس مجرد جولة في المدينة، بل تجربة حياة لن تنساها أبدًا.",
      badges: ["خبير إسطنبول", "خبرة +15 سنة", "مرشد مرخص", "عربي وتركي"]
    },
    services: {
      title: "التجارب",
      subtitle: "مسارات مصممة خصيصًا لك",
      items: [
        { icon: "landmark", title: "كلاسيكيات المدينة القديمة", description: "سفر عبر الزمن في نقطة الصفر للتاريخ، من عظمة آيا صوفيا إلى أسرار توبكابي." },
        { icon: "ship", title: "حلم البوسفور", description: "الاستمتاع برحلة قارب في ظل القصور على البوسفور الفريد الذي يربط بين قارتين." },
        { icon: "crown", title: "على خطى العثمانيين", description: "يوم مليء بالقصور الرائعة والأجنحة وقصص الحريم في الإمبراطورية." },
        { icon: "coffee", title: "المذاق والثقافة", description: "الأسواق التاريخية، ومحطات التذوق الخفية، وأشهى أطباق المطبخ التركي." },
        { icon: "user", title: "جولة VIP خاصة", description: "برنامج خاص مصمم بالكامل وفقًا لاهتماماتك ووقتك وسرعتك." }
      ]
    },
    whyMe: {
      title: "لماذا أنا؟",
      features: [
        { title: "15 عامًا من الخبرة", description: "آلاف الضيوف، ذكريات لا تحصى، ومعرفة عميقة." },
        { title: "مرخص رسميًا", description: "مرشد محترف معتمد من وزارة الثقافة والسياحة." },
        { title: "خبير ثنائي اللغة", description: "طلاقة بمستوى اللغة الأم في كل من التركية والعربية." },
        { title: "أسرار محلية", description: "اكتشف خبايا المدينة خارج المسارات السياحية المعتادة." },
        { title: "شخصية", description: "أينما يقودك فضولك، يتحول مسارنا إلى هناك." },
        { title: "جدول مرن", description: "ندير وقتك بأكثر الطرق كفاءة ومتعة." }
      ]
    },
    gallery: {
      title: "المعرض",
      subtitle: "ذكريات إسطنبول"
    },
    testimonials: {
      title: "آراء الضيوف",
      items: [
        { name: "عبدالله م.", location: "الرياض", comment: "كنت أظن أنني أعرف إسطنبول حتى تجولت مع السيد حسين. نطقت الحجارة بفضل شرحه.", rating: 5 },
        { name: "فاطمة الزهراء", location: "دبي", comment: "تجربة رائعة لعائلتنا. مرشد ممتاز بتواصله مع الأطفال ومعلوماته.", rating: 5 },
        { name: "محمد ك.", location: "الكويت", comment: "لقد ائتمنت ضيوفي الأجانب وأنا مرتاح البال، وقد ذهلوا جميعًا.", rating: 5 }
      ]
    },
    contact: {
      title: "اتصل بي",
      subtitle: "دعنا نخطط لجولة أحلامك في إسطنبول",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        date: "تاريخ الجولة",
        message: "الرسالة / الطلبات",
        submit: "إرسال"
      },
      info: {
        phone: "الهاتف واتساب",
        instagram: "انستغرام",
        address: "منطقة الخدمة: إسطنبول ومرمرة"
      }
    },
    footer: {
      copyright: "© 2026 حسين خدمتجي - مرشد سياحي محترف",
      links: {
        services: "الجولات",
        about: "من أنا",
        contact: "اتصل"
      }
    }
  }
};