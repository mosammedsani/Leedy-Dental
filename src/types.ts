export type PageId =
  | 'home'
  // Dental Implants
  | 'single-implants'
  | 'multiple-implants'
  | 'full-mouth-implants'
  | 'implant-pricing'
  // Cosmetic Dentistry
  | 'smile-makeover'
  | 'invisalign'
  | 'crowns-bridges'
  | 'veneers'
  | 'teeth-whitening'
  // Services
  | 'general-dentistry'
  | 'sedation-dentistry'
  | 'gum-disease-treatment'
  | 'laser-dentistry'
  | 'dentures'
  | 'tooth-extraction'
  | 'root-canal'
  // Conditions We Treat
  | 'condition-gum-disease'
  | 'missing-teeth'
  | 'loose-dentures'
  // Patient Center
  | 'patient-center'
  | 'insurance-financing'
  | 'advanced-technology'
  // About Us
  | 'about-us'
  | 'meet-doctors'
  | 'meet-team'
  | 'before-after'
  | 'video-testimonials'
  | 'our-facility'
  | 'educational-videos'
  | 'community-smiles'
  | 'blog'
  // Contact
  | 'contact';

export interface Doctor {
  name: string;
  title: string;
  image: string;
  bio: string;
  credentials: string[];
  memberships: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  quote?: string;
}

export interface Testimonial {
  name: string;
  type: string;
  quote: string;
  treatment: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
