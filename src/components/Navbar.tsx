import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, ShieldCheck, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

interface NavDropdownItem {
  label: string;
  pageId: PageId;
}

interface NavMenuItem {
  label: string;
  dropdownItems?: NavDropdownItem[];
  pageId?: PageId;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: NavMenuItem[] = [
    { label: 'Home', pageId: 'home' },
    {
      label: 'Dental Implants',
      dropdownItems: [
        { label: 'Single Dental Implants', pageId: 'single-implants' },
        { label: 'Multiple Dental Implants', pageId: 'multiple-implants' },
        { label: 'Full Mouth Dental Implants', pageId: 'full-mouth-implants' },
        { label: 'Learn About Pricing & Financing', pageId: 'implant-pricing' },
      ],
    },
    {
      label: 'Cosmetic Dentistry',
      dropdownItems: [
        { label: 'Smile Makeover', pageId: 'smile-makeover' },
        { label: 'Invisalign®', pageId: 'invisalign' },
        { label: 'Dental Crowns & Bridges', pageId: 'crowns-bridges' },
        { label: 'Porcelain Veneers', pageId: 'veneers' },
        { label: 'Teeth Whitening', pageId: 'teeth-whitening' },
      ],
    },
    {
      label: 'Services',
      dropdownItems: [
        { label: 'General Dentistry', pageId: 'general-dentistry' },
        { label: 'Sedation Dentistry', pageId: 'sedation-dentistry' },
        { label: 'Gum Disease Treatment', pageId: 'gum-disease-treatment' },
        { label: 'Laser Dentistry', pageId: 'laser-dentistry' },
        { label: 'Dentures', pageId: 'dentures' },
        { label: 'Tooth Extraction', pageId: 'tooth-extraction' },
        { label: 'Root Canal', pageId: 'root-canal' },
      ],
    },
    {
      label: 'Conditions We Treat',
      dropdownItems: [
        { label: 'Gum Disease', pageId: 'condition-gum-disease' },
        { label: 'Missing Teeth', pageId: 'missing-teeth' },
        { label: 'Loose or Painful Dentures', pageId: 'loose-dentures' },
      ],
    },
    {
      label: 'Patient Center',
      dropdownItems: [
        { label: 'Patient Center Overview', pageId: 'patient-center' },
        { label: 'Insurance & Financing Options', pageId: 'insurance-financing' },
        { label: 'Advanced Technology', pageId: 'advanced-technology' },
      ],
    },
    {
      label: 'About Us',
      dropdownItems: [
        { label: 'About Our Practice', pageId: 'about-us' },
        { label: 'Meet Our Doctors', pageId: 'meet-doctors' },
        { label: 'Meet The Team', pageId: 'meet-team' },
        { label: 'Before & After Results', pageId: 'before-after' },
        { label: 'Patient Video Testimonials', pageId: 'video-testimonials' },
        { label: 'Our Facility Tour', pageId: 'our-facility' },
        { label: 'Educational Videos', pageId: 'educational-videos' },
        { label: 'Community Smiles', pageId: 'community-smiles' },
      ],
    },
    { label: 'Blog', pageId: 'blog' },
    { label: 'Contact', pageId: 'contact' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Accent */}
      <div className="bg-brand-deep text-brand-white/90 text-xs py-2 px-4 border-b border-brand-navy/10 relative z-50 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-sans font-normal tracking-wide">
              <Phone className="w-3.5 h-3.5 text-luxury-gold" /> New Patients:{' '}
              <a href="tel:3252387772" className="text-luxury-gold font-medium hover:underline">
                (325) 238-7772
              </a>
            </span>
            <span className="flex items-center gap-1.5 font-sans font-normal tracking-wide">
              <Phone className="w-3.5 h-3.5 text-slate-300" /> Current Patients:{' '}
              <a href="tel:3256921501" className="text-brand-white font-medium hover:underline">
                (325) 692-1501
              </a>
            </span>
          </div>
          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-luxury-gold" /> Mon - Thu: 8:00 AM - 5:00 PM
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> In-Office Dental Lab
            </span>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header
        className={`sticky top-0 left-0 w-full z-45 transition-all duration-350 ${
          isScrolled
            ? 'bg-brand-deep/98 backdrop-blur-md shadow-xl border-b border-brand-teal/20 py-2.5'
            : 'bg-brand-deep/92 border-b border-brand-teal/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 xl:px-6 flex items-center justify-between gap-1 xl:gap-4">
          
          {/* Logo Brand Treatment */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 group focus:outline-none shrink-0"
            aria-label="Leedy Dental Home"
          >
            <img
              src="https://leedystage.wpengine.com/wp-content/uploads/2020/03/leedy-dental-logo.png"
              alt="Leedy Dental Logo"
              className="h-9 xl:h-11 w-auto object-contain transition-transform duration-500 group-hover:scale-103"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Desktop Navigation Link Cluster with Single Baseline, Auto Scale layout */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2.5 flex-nowrap">
            {menuItems.map((item) => {
              const isDropdown = !!item.dropdownItems;
              const isActive =
                currentPage === item.pageId ||
                (item.dropdownItems?.some((sub) => sub.pageId === currentPage));

              return (
                <div
                  key={item.label}
                  className="relative group py-1.5"
                  onMouseEnter={() => isDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => isDropdown && setActiveDropdown(null)}
                >
                  <button
                    onClick={() => !isDropdown && item.pageId && handleLinkClick(item.pageId)}
                    className={`px-1.5 xl:px-2.5 py-1.5 font-display text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold tracking-tight xl:tracking-normal rounded-lg flex items-center gap-0.5 transition-all duration-300 focus:outline-none whitespace-nowrap ${
                      isActive
                        ? 'text-luxury-gold'
                        : 'text-slate-100 hover:text-luxury-gold hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180 text-luxury-gold' : 'text-slate-400'
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu Portal */}
                  <AnimatePresence>
                    {isDropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-64 bg-brand-deep border border-brand-teal/20 rounded-2xl shadow-2xl backdrop-blur-2xl p-1.5 z-50 overflow-hidden text-white"
                      >
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-luxury-gold" />
                        <div className="py-2 px-3 border-b border-white/5 bg-brand-navy/30">
                          <span className="text-[9px] font-mono text-luxury-gold uppercase tracking-widest font-bold block">
                            Explore Care Options
                          </span>
                        </div>
                        <ul className="py-1 space-y-0.5 max-h-[350px] overflow-y-auto">
                          {item.dropdownItems?.map((subItem) => (
                            <li key={subItem.label}>
                              <button
                                onClick={() => handleLinkClick(subItem.pageId)}
                                className={`w-full text-left px-3 py-2 text-xs font-sans tracking-wide rounded-xl transition-all duration-200 flex items-center justify-between group/sub ${
                                  currentPage === subItem.pageId
                                    ? 'bg-brand-navy text-luxury-gold font-semibold'
                                    : 'text-slate-200 hover:bg-brand-navy hover:text-luxury-gold'
                                  }`}
                              >
                                <span>{subItem.label}</span>
                                <span className="opacity-0 group-hover/sub:opacity-100 transition-opacity duration-200 text-luxury-gold text-xs font-bold font-mono">
                                  →
                                </span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Luxury CTA Button Area with responsive padding */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-[#d57a34] hover:bg-[#c26a2a] text-white font-display font-bold text-xs xl:text-sm px-4 xl:px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              Request Consultation
            </button>
          </div>

          {/* Hamburger Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-luxury-gold p-1.5 rounded-xl border border-white/10 bg-white/5 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Fullscreen Mobile Navigation Overlay wrapper */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-[65px] lg:hidden bg-brand-deep overflow-y-auto z-40 pb-20 text-white"
            >
              <div className="p-4 space-y-3">
                
                {/* Urgent Call Accents for Mobile */}
                <div className="bg-brand-navy/85 p-4 rounded-2xl border border-white/5 space-y-2 mb-4">
                  <p className="text-2xs font-mono text-luxury-gold uppercase tracking-widest font-semibold">
                    Concierge Patient Help
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:3252387772"
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                    >
                      <Phone className="w-4 h-4 text-luxury-gold" /> New Patients:{' '}
                      <span className="text-luxury-gold font-semibold">(325) 238-7772</span>
                    </a>
                    <a
                      href="tel:3256921501"
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                    >
                      <Phone className="w-4 h-4 text-slate-400" /> Current Patients:{' '}
                      <span className="font-semibold">(325) 692-1501</span>
                    </a>
                  </div>
                </div>

                {/* Mobile Dropdowns or Flat list */}
                {menuItems.map((item) => {
                  const isDropdown = !!item.dropdownItems;
                  const [dropdownOpen, setDropdownOpen] = useState(false);

                  return (
                    <div key={item.label} className="border-b border-white/5 pb-2">
                      {isDropdown ? (
                        <div>
                          <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="w-full text-left py-3 px-2 flex justify-between items-center text-slate-200 font-display text-[16px] font-medium"
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                dropdownOpen ? 'rotate-180 text-luxury-gold' : 'text-slate-500'
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {dropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 space-y-1 bg-white/2 rounded-xl mt-1 py-1"
                              >
                                {item.dropdownItems?.map((subItem) => (
                                  <button
                                    key={subItem.label}
                                    onClick={() => handleLinkClick(subItem.pageId)}
                                    className="w-full text-left py-2.5 px-3 text-sm text-slate-400 hover:text-white font-sans transition-colors block"
                                  >
                                    {subItem.label}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button
                          onClick={() => item.pageId && handleLinkClick(item.pageId)}
                          className="w-full text-left py-3 px-2 text-slate-200 font-display text-[16px] font-medium"
                        >
                          {item.label}
                        </button>
                      )}
                    </div>
                  );
                })}

                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full mt-6 bg-[#d57a34] hover:bg-[#c26a2a] text-white font-display font-semibold py-4 rounded-xl text-center shadow-lg block focus:outline-none active:scale-95 transition-transform"
                >
                  Request Consultation Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
