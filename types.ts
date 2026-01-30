export type Language = 'tr' | 'en' | 'ar';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  comment: string;
  rating: number;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Content {
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
    bio: string;
    badges: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  whyMe: {
    title: string;
    features: Feature[];
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    items: Testimonial[];
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
      address: string;
    }
  };
  footer: {
    copyright: string;
    links: {
      services: string;
      about: string;
      contact: string;
    }
  };
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    contact: string;
  }
}