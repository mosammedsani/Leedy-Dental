import { useState, useEffect } from 'react';
import { Phone, ArrowUp, Calendar, ShieldCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Implants from './pages/Implants';
import Cosmetic from './pages/Cosmetic';
import Services from './pages/Services';
import Conditions from './pages/Conditions';
import PatientCenter from './pages/PatientCenter';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import { PageId } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scrolling to trigger back-to-top button
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleNavigate = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switcher to output correct sub-page components
  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;

      // Dental Implants Page Group
      case 'single-implants':
      case 'multiple-implants':
      case 'full-mouth-implants':
      case 'implant-pricing':
        return <Implants subPage={currentPage} onNavigate={handleNavigate} />;

      // Cosmetic Dentistry Page Group
      case 'smile-makeover':
      case 'invisalign':
      case 'crowns-bridges':
      case 'veneers':
      case 'teeth-whitening':
        return <Cosmetic subPage={currentPage} onNavigate={handleNavigate} />;

      // Services Page Group
      case 'general-dentistry':
      case 'sedation-dentistry':
      case 'gum-disease-treatment':
      case 'laser-dentistry':
      case 'dentures':
      case 'tooth-extraction':
      case 'root-canal':
        return <Services subPage={currentPage} onNavigate={handleNavigate} />;

      // Conditions We Treat Page Group
      case 'condition-gum-disease':
      case 'missing-teeth':
      case 'loose-dentures':
        return <Conditions subPage={currentPage} onNavigate={handleNavigate} />;

      // Patient Center Page Group
      case 'patient-center':
      case 'insurance-financing':
      case 'advanced-technology':
        return <PatientCenter subPage={currentPage} onNavigate={handleNavigate} />;

      // About Us Page Group
      case 'about-us':
      case 'meet-doctors':
      case 'meet-team':
      case 'before-after':
      case 'video-testimonials':
      case 'our-facility':
      case 'educational-videos':
      case 'community-smiles':
      case 'blog':
        return <AboutUs subPage={currentPage} onNavigate={handleNavigate} />;

      // Contact Page
      case 'contact':
        return <Contact />;

      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-white font-sans text-slate-800">
      
      {/* Absolute background accent line decoration */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Sticky Mobile Call & Booking CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-brand-deep/95 backdrop-blur-md border-t border-brand-navy/10 py-3 px-4 flex items-center justify-between z-30 lg:hidden shadow-2xl">
        <a
          href="tel:3252387772"
          className="flex items-center gap-2 text-xs font-mono font-bold text-luxury-gold uppercase px-3 py-2 bg-white/5 rounded-xl border border-white/5 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-luxury-gold" /> Call Concierge
        </a>
        <button
          onClick={() => handleNavigate('contact')}
          className="flex items-center gap-2 text-xs bg-[#d57a34] text-white font-display font-medium px-4 py-2 rounded-xl border border-transparent shadow shadow-brand-orange/25 active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 text-white" /> Request consultation
        </button>
      </div>

      {/* Back to top float widget */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-6 md:bottom-8 md:right-8 z-35 p-3 rounded-full bg-brand-deep hover:bg-[#d57a34] border border-brand-navy/10 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group focus:outline-none focus:ring-2 focus:ring-[#d57a34]"
          aria-label="Back To Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}

    </div>
  );
}
