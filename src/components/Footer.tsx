import { Mail, MapPin, Phone, ShieldCheck, ExternalLink, Clock, Facebook, Twitter, Instagram, Youtube, MessageSquare } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-brand-navy to-brand-deep text-slate-300 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative subtle ambient soft gold light crown at top of footer */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-luxury-gold/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Pre-footer Appointment Invitation Billboard */}
        <div className="glass-panel-dark rounded-3xl p-8 md:p-12 border border-white/10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 via-transparent to-transparent opacity-50" />
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <span className="text-2xs font-mono text-luxury-gold uppercase tracking-widest font-bold">
              Begin Your Reinvigoration Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-medium mt-2 leading-tight">
              Ready to feel the confidence of a custom restored smile?
            </h2>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed font-sans">
              Schedule your elite cosmetic smile makeover or implant-supported denture consultation with our experienced clinical specialists in Abilene, Texas.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-[#d57a34] hover:bg-[#c26a2a] text-white font-display font-bold px-8 py-4 rounded-full text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#d57a34]/15 text-sm cursor-pointer"
            >
              Book Consultation Now
            </button>
            <a
              href="tel:3252387772"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-display font-semibold hover:bg-white/5 transition-all duration-300 text-center text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-luxury-gold" /> (325) 238-7772
            </a>
          </div>
        </div>

        {/* Brand & Dynamic Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand details & Lab notice */}
          <div className="space-y-6">
            <button onClick={() => handleLinkClick('home')} className="focus:outline-none">
              <img
                src="https://leedystage.wpengine.com/wp-content/uploads/2020/03/leedy-dental-logo.png"
                alt="Leedy Dental Logo"
                className="h-11 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </button>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Leedy Dental is Abilene's premier dental clinic designed to restore any and every kind of smile. Combining over 35 years of experience, a state-of-the-art in-office dental lab, and dedicated surgical suites.
            </p>
            <div className="flex items-center gap-2 text-xs text-luxury-teal font-mono font-medium">
              <ShieldCheck className="w-4.5 h-4.5 text-luxury-teal" />
              <span>Full In-Office CAD/CAM Ceramic Lab</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-sans">
              <Clock className="w-4.5 h-4.5 text-luxury-gold" />
              <span>Mon - Thu: 8:00 AM - 5:00 PM</span>
            </div>
            {/* Custom Interactive Social Media Link Cluster */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="https://www.facebook.com/LeedyDental/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-teal hover:border-brand-teal transition-all duration-300"
                aria-label="Leedy Dental Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/LeedyDentalDDS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-teal hover:border-brand-teal transition-all duration-300"
                aria-label="Leedy Dental X (Twitter) Account"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/leedydental/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-teal hover:border-brand-teal transition-all duration-300"
                aria-label="Leedy Dental Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCzE5o6lV7p-l6lVzAxHdFiA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-teal hover:border-brand-teal transition-all duration-300"
                aria-label="Leedy Dental YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://goo.gl/maps/1ST3mj84rBm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-teal hover:border-brand-teal transition-all duration-300"
                aria-label="Leedy Dental Google Maps Business Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href="https://www.yelp.com/biz/leedy-dental-abilene"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-teal hover:border-brand-teal transition-all duration-300"
                aria-label="Leedy Dental Yelp Reviews Page"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Flagship Implants & Cosmetics */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold text-white tracking-widest uppercase">
              Specialist Services
            </h3>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button
                  onClick={() => handleLinkClick('full-mouth-implants')}
                  className="hover:text-luxury-gold hover:underline transition-colors block text-left"
                >
                  Full Mouth Rehabilitation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('single-implants')}
                  className="hover:text-luxury-gold hover:underline transition-colors block text-left"
                >
                  Single & Multiple Dental Implants
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('smile-makeover')}
                  className="hover:text-luxury-gold hover:underline transition-colors block text-left"
                >
                  Cosmetic Smile Makeover
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('veneers')}
                  className="hover:text-luxury-gold hover:underline transition-colors block text-left"
                >
                  Porcelain Veneers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('invisalign')}
                  className="hover:text-luxury-gold hover:underline transition-colors block text-left"
                >
                  Invisalign® Clear Aligners
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('sedation-dentistry')}
                  className="hover:text-luxury-gold hover:underline transition-colors block text-left"
                >
                  Sedation Dentistry (Anxiety-Free)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Patient Center & About */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold text-white tracking-widest uppercase">
              Patient Center
            </h3>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button
                  onClick={() => handleLinkClick('patient-center')}
                  className="hover:text-luxury-gold hover:underline transition-colors block text-left"
                >
                  Patient Center Resource Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('insurance-financing')}
                  className="hover:text-luxury-gold hover:underline transition-colors block text-left"
                >
                  Insurance & Financing Options
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('meet-doctors')}
                  className="hover:text-luxury-gold hover:underline transition-colors block text-left"
                >
                  Meet Our Doctors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('meet-team')}
                  className="hover:text-luxury-gold hover:underline transition-colors block text-left"
                >
                  Meet Our Dedicated Clinical Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('before-after')}
                  className="hover:text-luxury-gold hover:underline transition-colors block text-left"
                >
                  Smile Restoration Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-luxury-gold hover:underline transition-colors block text-left"
                >
                  Contact & Virtual Office Tour
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold text-white tracking-widest uppercase">
              Abilene Clinic
            </h3>
            <ul className="space-y-3.5 text-xs font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span>
                  2902 S 27th St.
                  <br />
                  Abilene, Texas 79605
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase text-slate-500 font-mono">New Patients Call:</span>
                  <a href="tel:3252387772" className="text-white hover:text-luxury-gold font-medium">
                    (325) 238-7772
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase text-slate-500 font-mono">Current Patients Call:</span>
                  <a href="tel:3256921501" className="text-white hover:text-luxury-gold font-medium">
                    (325) 692-1501
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href="mailto:office@leedydental.com" className="text-slate-300 hover:text-luxury-gold break-all">
                  office@leedydental.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Gilded Horizontal Rule */}
        <div className="h-px bg-white/10 w-full mb-8 relative" />

        {/* Footer Base bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-sans">
          <div>
            <p>© {currentYear} Leedy Dental. All rights preserved. High-End Cosmetic & Implant Dentistry of Texas.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <button onClick={() => handleLinkClick('patient-center')} className="hover:text-luxury-gold hover:underline">
              Accessibility
            </button>
            <span>•</span>
            <button onClick={() => handleLinkClick('insurance-financing')} className="hover:text-luxury-gold hover:underline">
              Financial Disclosures
            </button>
            <span>•</span>
            <button onClick={() => handleLinkClick('contact')} className="hover:text-luxury-gold hover:underline">
              Privacy Policy
            </button>
            <span>•</span>
            <a
              href="https://leedystage.wpengine.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-luxury-gold hover:underline"
            >
              Official WP Link <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
