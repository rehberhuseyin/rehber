export type LanguageCode = 'tr' | 'en' | 'ar';

export interface ContentData {
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    name: string;
    role: string;
    description: string;
    badges: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  whyChoose: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  gallery: {
    title: string;
  };
  testimonials: {
    title: string;
    reviews: {
      name: string;
      comment: string;
      location: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      date: string;
      message: string;
      submit: string;
    };
    info: {
      phone: string;
      instagram: string;
    };
  };
  footer: {
    rights: string;
    quickLinks: string;
  };
}