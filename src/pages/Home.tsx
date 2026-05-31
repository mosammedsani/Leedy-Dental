import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Award,
  Sparkles,
  ShieldCheck,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Play,
  Volume2,
  Calendar,
  CheckCircle,
  HelpCircle,
  ArrowUpRight,
  ArrowRight,
  Compass,
  Search,
  ExternalLink,
} from 'lucide-react';
import { TESTIMONIALS, FAQS, DOCTORS } from '../data/content';
import { PageId } from '../types';
import CandidateQuiz from '../components/CandidateQuiz';
import heroSmileImg from '../assets/images/radiant_smile_success_1780233988998.png';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // Video Lightbox state
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Testimonials state
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Before-After Slider State
  const [beforeAfterPos, setBeforeAfterPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isSliding, setIsSliding] = useState(false);

  // FAQ Search State
  const [faqSearch, setFaqSearch] = useState('');
  const [faqOpenIdx, setFaqOpenIdx] = useState<number | null>(0);

  // Appointment simple form state
  const [appointmentName, setAppointmentName] = useState('');
  const [appointmentPhone, setAppointmentPhone] = useState('');
  const [appointmentService, setAppointmentService] = useState('smile-makeover');
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);

  const handleBeforeAfterMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setBeforeAfterPos(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches[0]) {
      handleBeforeAfterMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleBeforeAfterMove(e.clientX);
  };

  const startSliding = () => setIsSliding(true);
  const stopSliding = () => setIsSliding(false);

  useEffect(() => {
    const handleUp = () => stopSliding();
    const handleMove = (e: MouseEvent) => {
      if (isSliding) {
        handleBeforeAfterMove(e.clientX);
      }
    };

    window.addEventListener('mouseup', handleUp);
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('mousemove', handleMove);
    };
  }, [isSliding]);

  // Handle Form Submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (appointmentName && appointmentPhone) {
      setAppointmentSubmitted(true);
    }
  };

  return (
    <div className="relative overflow-hidden bg-white text-slate-800 selection:bg-brand-orange selection:text-white">
      
      {/* Lightbox Video Modal */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setActiveVideoId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideoId(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 border border-white/10 hover:bg-[#d57a34] hover:text-white transition-colors cursor-pointer"
                aria-label="Close Video"
              >
                ✕
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="Leedy Dental Showcase Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-[#ffffff] overflow-hidden text-slate-800">
        
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d57a34]/5 blur-[125px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#02638b]/3 blur-[125px] rounded-full animate-pulse-slow" />

        {/* Elegant geometric line trace */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(11,50,78,0.08)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-mono text-[#d57a34] tracking-widest uppercase">
              <Sparkles className="w-4.5 h-4.5 text-[#d57a34] animate-spin-slow" />
              <span>Elite Reconstructive & Cosmetic Surgery Hub</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-semibold leading-none tracking-tight text-slate-900">
              There’s No Smile <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d57a34] via-amber-600 to-amber-700 font-normal italic">
                We Can't Fix.
              </span>
            </h1>

            <p className="text-slate-650 font-sans text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Welcome to the most comprehensive dental practice designed to restore any & every kind of smile. Our class-leading clinical specialists in Abilene, Texas combine state-of-the-art diagnostics and our on-site dental lab to reconstruct your confidence.
            </p>

            {/* Quick Metrics Badge Cluster */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pt-2">
              <div className="bg-white border border-slate-200 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border border-slate-100 bg-orange-50 flex items-center justify-center text-[10px] font-bold text-[#d57a34] font-sans">
                      ★
                    </div>
                  ))}
                </div>
                <div>
                  <span className="text-[14px] text-slate-900 font-bold block leading-none">500+ Local 5-Star Reviews</span>
                  <span className="text-[10px] text-slate-500 block font-mono">ON Google & Healthgrades</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200 px-5 py-3 rounded-2xl flex items-center gap-2 shadow-sm">
                <Award className="w-5 h-5 text-[#d57a34]" />
                <div>
                  <span className="text-[14px] text-slate-900 font-bold block leading-none">35+ Years Mastery</span>
                  <span className="text-[10px] text-slate-500 block font-mono font-normal">COMBINED EXPERIENCE</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto bg-[#d57a34] hover:bg-[#c26a2a] text-white font-display font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#d57a34]/15 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('insurance-financing')}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-300 text-slate-800 font-display font-semibold hover:bg-slate-50 transition-all duration-300 text-center cursor-pointer"
              >
                Patient Financing Options
              </button>
            </div>
            
            {/* Quick highlight bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-slate-200 max-w-2xl mx-auto lg:mx-0">
              <div>
                <dt className="text-[10px] font-mono text-[#d57a34] uppercase tracking-wider block">Diagnostics</dt>
                <dd className="text-xs text-slate-600 font-sans mt-0.5">3D Cone-Beam CBCT</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono text-[#d57a34] uppercase tracking-wider block">Lab Speed</dt>
                <dd className="text-xs text-slate-600 font-sans mt-0.5">Same-Day Restorations</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono text-[#d57a34] uppercase tracking-wider block">Aesthetics</dt>
                <dd className="text-xs text-slate-600 font-sans mt-0.5">Custom Color-Match</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono text-[#d57a34] uppercase tracking-wider block">Surgical Suite</dt>
                <dd className="text-xs text-slate-650 font-sans mt-0.5">Full-In-Office Hospital Spec</dd>
              </div>
            </div>

          </div>

          {/* Right Floating Stack Panel */}
          <div className="lg:col-span-12 xl:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md">
              
              {/* Back ambient frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#d57a34] to-[#02638b] rounded-[36px] opacity-15 blur-lg" />

              {/* Central high-end booking dashboard / Image component */}
              <div className="relative bg-white rounded-[32px] p-6 border border-slate-200/80 overflow-hidden shadow-xl">
                
                {/* Embedded Beautiful generated portrait */}
                <div className="h-64 rounded-2xl overflow-hidden relative mb-6 border border-slate-100 group bg-[#f1f5f9] bg-gradient-to-br from-slate-100 to-slate-200/50">
                  <img
                    src={heroSmileImg}
                    alt="Radiant cosmetic dental smile success"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                  
                  {/* Overlay text detail */}
                  <div className="absolute bottom-4 inset-x-4 flex justify-between items-center bg-slate-900/95 backdrop-blur-md rounded-xl p-3 border border-white/10 text-white">
                    <div>
                      <span className="text-[10px] text-[#d57a34] font-mono uppercase font-bold block">Patient Showcase</span>
                      <span className="text-xs text-white font-serif tracking-wide block">Restored by Dr. Robert Leedy</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 text-[#d57a34] fill-[#d57a34]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glassmorphism Appointment Booking Form */}
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="text-center pb-2 border-b border-slate-150">
                    <p className="text-xs text-slate-500 font-sans">
                      Submit request to our concierge team instantly
                    </p>
                  </div>

                  {appointmentSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center text-slate-700"
                    >
                      <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                      <h4 className="font-display font-semibold text-sm text-emerald-800">Appointment Request Sent!</h4>
                      <p className="text-2xs text-slate-500 mt-2">
                        Thank you. One of our clinical coordinators will reach out immediately during business hours.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={appointmentName}
                          onChange={(e) => setAppointmentName(e.target.value)}
                          placeholder="e.g. Eleanor Vance"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:border-[#d57a34] focus:outline-none focus:ring-1 focus:ring-[#d57a34] font-sans placeholder-slate-400 transition"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Direct Callback Phone</label>
                        <input
                          type="tel"
                          required
                          value={appointmentPhone}
                          onChange={(e) => setAppointmentPhone(e.target.value)}
                          placeholder="e.g. (325) 555-0192"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:border-[#d57a34] focus:outline-none focus:ring-1 focus:ring-[#d57a34] font-sans placeholder-slate-400 transition"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Desired Clinical Field</label>
                        <select
                          value={appointmentService}
                          onChange={(e) => setAppointmentService(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:border-[#d57a34] focus:outline-none focus:ring-1 focus:ring-[#d57a34] font-sans transition"
                        >
                          <option value="full-mouth-implant">Full Mouth Rehabilitation</option>
                          <option value="single-dental-implant">Dental Implants (Single/Multiple)</option>
                          <option value="smile-makeover">Cosmetic Smile Makeover</option>
                          <option value="sedation-care">Sedation Dentistry (Anxiety Support)</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#d57a34] hover:bg-[#c26a2a] text-white py-3.5 rounded-xl font-display font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow shadow-brand-orange/10 focus:outline-none active:scale-95 cursor-pointer"
                      >
                        Submit Consultation Request
                      </button>
                    </>
                  )}

                </form>

              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 1st Video Showcase: About Our Practice */}
      <section className="py-24 px-4 md:px-8 bg-slate-50 border-t border-b border-slate-100 relative">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#d57a34]/3 blur-[100px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono text-[#d57a34] uppercase tracking-widest block font-bold">
              Immersive Practice Tour
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-semibold">
              About Our Practice
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Watch our immersive practice videos to explore our state-of-the-art facility, our in-office custom dental laboratory, and our compassionate surgical approach.
            </p>
          </div>

          {/* Premium multi-video grid featuring cinematic glassmorphism play containers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'RIy9paHK8C8',
                title: 'High-End Reconstructive Experience',
                desc: 'See how we combine over 35 years of clinical surgical expertise with patient comfort.',
                length: '2:15'
              },
              {
                id: 'kEOjjNtgGM4',
                title: 'The In-Office Lab Difference',
                desc: 'Understand how our custom hand-crafted crowns and full mouth restorations are made.',
                length: '1:48'
              },
              {
                id: 'zAtZ1IDHNUs',
                title: 'Sedation & Comprehensive Care',
                desc: 'Learn about our absolute commitment to a peaceful, pain-free patient experience.',
                length: '3:05'
              }
            ].map((video, idx) => (
              <div
                key={video.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:border-[#d57a34]/50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {/* Custom Overlay Thumbnail Container */}
                <div
                  onClick={() => setActiveVideoId(video.id)}
                  className="relative aspect-video overflow-hidden cursor-pointer bg-slate-100 group animate-pulse-slow"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-55 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/15" />

                  {/* Play circle trigger overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-slate-900/90 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#d57a34] group-hover:text-white group-hover:scale-110 shadow-lg group-hover:shadow-[#d57a34]/30 transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Time Badge */}
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono bg-black/70 px-2 py-0.5 rounded text-slate-300 border border-white/5">
                    {video.length}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-[9px] font-mono text-[#d57a34] uppercase tracking-wider font-semibold">
                    Feature Film 0{idx + 1}
                  </span>
                  <h3 className="text-base text-slate-900 font-serif group-hover:text-[#d57a34] transition-colors font-medium">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* The Leedy Dental Advantage (Trust & Differentiation) */}
      <section className="py-24 px-4 md:px-8 bg-[#f8fafc] border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#d57a34] uppercase tracking-widest block font-bold">
                Exemplary Standards of Practice
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-semibold leading-none">
                The Leedy Dental Advantage
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed font-sans">
              We transcend generic dentistry. Every aspect of our treatment is calibrated to deliver ultra-secure, permanent, and spectacularly confident smile designs with maximum physiological precision.
            </p>
          </div>

          {/* Floating trust cards, animated metrics, interactive hover response */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Over 35 Years of Combined Experience',
                desc: 'Our surgical and cosmetic dental experts have spent decades performing advanced implant placement, tissue management, and state-of-the-art aesthetic alignments.',
                icon: '★'
              },
              {
                title: 'Comprehensive Implant Care',
                desc: 'From initial interactive 3D CBCT bone scans and surgical planning to placement and final crown teeth restoration—everything is completed in-house under single clinical oversight.',
                icon: '❖'
              },
              {
                title: 'In-Office Dental Lab',
                desc: 'We operate our own fully equipped CAD/CAM digital ceramic lab. Our certified technician hand-shades and models your porcelain crowns, veneers, or arches for an absolute custom fit.',
                icon: '⚙'
              },
              {
                title: 'State-of-the-Art Technology',
                desc: 'We feature low-radiation 3D CBCT digital imaging, precise laser diagnostics, digital bite analysis, and dental microscopes to secure superior biological outcomes.',
                icon: '⌬'
              },
              {
                title: 'Dedicated Surgical Suites',
                desc: 'Our surgical theater mirrors high-end medical clinics, built to maintain sterile dental implant placements and bone reconstructions under high-standard infection controls.',
                icon: '✙'
              },
              {
                title: 'Sedation Dentistry Options',
                desc: 'Never let dental worry deter you. We offer multiple tiers of biological sedation (Pill Conscious or IV sedation) to keep your treatment entirely calm and 100% pain-free.',
                icon: '⚛'
              }
            ].map((adv, idx) => (
              <div
                key={adv.title}
                className="group relative bg-white hover:bg-slate-50/50 border border-slate-200 hover:border-[#d57a34]/30 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                {/* Absolute background accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d57a34]/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#d57a34] font-mono text-xl group-hover:bg-[#d57a34] group-hover:text-white transition-all duration-300 mb-6">
                  {adv.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg text-slate-900 font-serif tracking-wide group-hover:text-[#d57a34] transition-colors font-medium">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick inline navigation action */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => onNavigate('about-us')}
              className="px-6 py-3.5 rounded-full bg-[#d57a34]/10 hover:bg-[#d57a34]/15 text-[#d57a34] hover:text-[#c26a2a] font-display text-xs tracking-wider uppercase border border-[#d57a34]/20 flex items-center gap-2 cursor-pointer"
            >
              Learn More About Our Clinical Philosophy <ArrowRight className="w-4 h-4 text-[#d57a34]" />
            </button>
          </div>

        </div>
      </section>

      {/* Luxury Multi-Step Lead Generation Quiz / Candidate Assessment */}
      <CandidateQuiz />

      {/* Flagship Treatment Section (Clinical Experiences) */}
      <section className="py-24 px-4 md:px-8 bg-white text-slate-800 relative border-b border-slate-100">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d57a34]/3 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-mono text-[#d57a34] uppercase tracking-widest block font-bold">
              Flagship Clinical Artistry
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-semibold">
              Full-Mouth Smile Transformations
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-sans mt-2">
              For people with substantial tooth loss, severe decay, periodontal infections, or loose, painful dentures—our flagship dental implant treatments provide dynamic, permanent restorations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Interactive Before-After comparison slider */}
            <div className="lg:col-span-6 relative flex flex-col items-center">
              <span className="text-xs font-mono text-slate-500 mb-3 block self-start">
                Drag the center slider left or right to reveal transformation
              </span>

              <div
                ref={sliderRef}
                className="relative w-full aspect-4/3 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl cursor-ew-resize select-none"
                onMouseDown={startSliding}
                onTouchStart={startSliding}
                onMouseMove={(e) => isSliding && handleBeforeAfterMove(e.clientX)}
                onTouchMove={(e) => {
                  if (isSliding && e.touches[0]) {
                    handleBeforeAfterMove(e.touches[0].clientX);
                  }
                }}
              >
                {/* BEFORE IMAGE (Full-width base) */}
                <div className="absolute inset-0 bg-slate-50 flex flex-col justify-end p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
                  
                  {/* Visual Simulation Representation for Before */}
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="text-center bg-white/95 p-6 rounded-2xl border border-rose-500/15 max-w-md shadow-md animate-pulse-slow">
                      <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-600 flex items-center justify-center mx-auto mb-3 font-semibold text-lg">
                        ⚠
                      </div>
                      <h4 className="text-sm font-semibold font-serif text-slate-900">Severely Lost / Damaged Arches</h4>
                      <p className="text-2xs text-slate-500 mt-1 font-sans">
                        Slipping, painful plastic dentures, multiple missing teeth, severe bone shrinkage, and facial collapsing.
                      </p>
                    </div>
                  </div>

                  <span className="relative z-10 bg-rose-500/10 text-rose-650 border border-rose-500/20 text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full self-start font-semibold">
                    Original Smile
                  </span>
                </div>

                {/* AFTER IMAGE (Sliding crop overlay) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden bg-slate-50 flex flex-col justify-end p-6"
                  style={{ width: `${beforeAfterPos}%` }}
                >
                  {/* Constrain width to parent width to secure correct pixel align */}
                  <div className="absolute inset-y-0 left-0 w-[600px] h-full object-cover">
                    
                    {/* Visual Simulation Representation for After */}
                    <div className="absolute inset-0 flex items-center justify-center p-12" style={{ width: sliderRef.current?.getBoundingClientRect().width }}>
                      <div className="text-center bg-white/95 p-6 rounded-2xl border border-[#d57a34]/20 max-w-md shadow-md">
                        <div className="w-12 h-12 rounded-full bg-orange-50 text-[#d57a34] flex items-center justify-center mx-auto mb-3 font-semibold text-lg">
                          ★
                        </div>
                        <h4 className="text-sm font-semibold font-serif text-[#d57a34]">Restored Smile Restoration</h4>
                        <p className="text-2xs text-slate-500 mt-1 font-sans">
                          Permanent dental implants, strong titanium roots, and customized digital porcelain ceramic teeth.
                        </p>
                      </div>
                    </div>

                  </div>

                  <span className="relative z-10 bg-orange-50 text-[#d57a34] border border-[#d57a34]/20 text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full self-start font-semibold whitespace-nowrap">
                    Luxury Dental Restorations
                  </span>
                </div>

                {/* SLIDE CONTROL SPLITTER HANDLE BAR */}
                <div
                  className="absolute inset-y-0 w-1 bg-[#d57a34] hover:bg-[#c26a2a] cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${beforeAfterPos}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#d57a34] text-white flex items-center justify-center text-xs font-bold font-sans shadow-lg select-none">
                    ↔
                  </div>
                </div>

              </div>

              <div className="mt-4 flex gap-6 text-2xs font-mono tracking-wider uppercase text-slate-500">
                <span>← Standard Bone Erosion</span>
                <span>Elite Restructured Integrity →</span>
              </div>
            </div>

            {/* Right Information Treatment Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-[#d57a34] uppercase tracking-wider font-semibold">
                Clinical Highlight Journey
              </span>
              <h3 className="text-2xl md:text-3xl text-slate-900 font-serif font-semibold leading-tight">
                Our Advanced Implant-Supported Restoration Journey
              </h3>
              
              <ul className="space-y-4 font-sans text-slate-600">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-50 text-[#d57a34] flex items-center justify-center text-xs font-semibold shrink-0">1</div>
                  <div>
                    <strong className="text-slate-900 font-medium block text-sm">Comprehensive Diagnostics & Simulation</strong>
                    <span className="text-xs text-slate-500 block pt-0.5">
                      We model your bone anatomy in real-time using low-dose 3D Cone Beam CT scans to safely map dental implant insertion lines.
                    </span>
                  </div>
                </li>

                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-50 text-[#d57a34] flex items-center justify-center text-xs font-semibold shrink-0">2</div>
                  <div>
                    <strong className="text-slate-900 font-medium block text-sm">Computer-Guided Gentle Placement</strong>
                    <span className="text-xs text-slate-500 block pt-0.5">
                      Virtual planning software allows our clinic to secure micro-precision placements in a sterile surgical suite under peaceful sedation.
                    </span>
                  </div>
                </li>

                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-50 text-[#d57a34] flex items-center justify-center text-xs font-semibold shrink-0">3</div>
                  <div>
                    <strong className="text-slate-900 font-medium block text-sm">On-Site Lab Custom CAD/CAM Arches</strong>
                    <span className="text-xs text-slate-500 block pt-0.5">
                      Our in-office dental technician custom hand-crafts high-strength zirconia teeth that look exquisite and match your biological features.
                    </span>
                  </div>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/85 space-y-3">
                <p className="text-xs text-slate-650 italic leading-relaxed">
                  "Investing in implant restorations is a life-long biological improvement. Teeth implants stimulate bone density and protect facial outline."
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => onNavigate('full-mouth-implants')}
                    className="text-xs font-display font-semibold text-[#d57a34] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Explore Dental Implants Options <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate('implant-pricing')}
                    className="text-xs font-display font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                  >
                    Pricing & Financing Info <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2nd Video Showcase: Testimonials (Our Patients tell the story best) */}
      <section className="py-24 px-4 md:px-8 bg-[#f8fafc] border-b border-slate-150 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d57a34]/3 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#d57a34] uppercase tracking-widest block font-bold">
                Emotional Transformations
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-semibold leading-none">
                Our Patients Tell the Story Best
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed font-sans">
              Watch real patient interviews discussing how their restorative or cosmetic teeth makeovers changed their dental health, speech, chewing, and everyday lives.
            </p>
          </div>

          {/* Video review carousel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                id: 'Dkaf_Tt_yw4',
                patient: 'Cecilia',
                summary: 'New mouth comfort and chewing power with implants.'
              },
              {
                id: '3tOPQvNwEW4',
                patient: 'Danny',
                summary: 'Cosmetic smile transformation with custom veneers.'
              },
              {
                id: 'jPeIeNKOgB4',
                patient: 'George',
                summary: 'Saying goodbye to loose dentures pain.'
              },
              {
                id: 'wISlwcmvxkA',
                patient: 'Kristy',
                summary: 'Overcoming 20+ years of severe dental anxiety.'
              },
              {
                id: 'xPx7mpYSkYY',
                patient: 'Don',
                summary: 'Replacing missing teeth with durable modern implants.'
              }
            ].map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideoId(video.id)}
                className="bg-white border border-slate-200 p-4 rounded-2xl hover:border-[#d57a34]/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center space-y-4 group shadow-sm hover:shadow-md"
              >
                <div className="relative aspect-[3/4] bg-slate-900 rounded-xl overflow-hidden shadow-md">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={`${video.patient}'s Dental Success Story`}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Play visual element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-slate-900/90 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#d57a34] shadow-lg transition-colors">
                      <Play className="w-4.5 h-4.5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <span className="absolute bottom-3 inset-x-3 text-center text-xs text-white font-serif tracking-wide block">
                    {video.patient}’s Film
                  </span>
                </div>

                <div className="px-1 text-left">
                  <h4 className="text-xs text-slate-900 font-serif leading-tight group-hover:text-[#d57a34] font-semibold">
                    {video.patient}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-sans mt-1 leading-snug">
                    {video.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Written Testimonials Carousel */}
      <section className="py-24 px-4 md:px-8 bg-white border-t border-b border-slate-150 relative">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-mono text-[#d57a34] uppercase tracking-widest block font-bold">
              Written Patient Success Journals
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-semibold">
              Loved By Families in Abilene
            </h2>
          </div>

          {/* Carousel Body */}
          <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-8 md:p-12 relative shadow-md">
            <div className="absolute top-6 left-6 text-6xl text-[#d57a34]/10 font-serif leading-none select-none">
              “
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonialIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 text-center"
              >
                <p className="font-serif text-lg md:text-xl text-slate-800 italic leading-relaxed max-w-3xl mx-auto">
                  {TESTIMONIALS[activeTestimonialIdx].quote}
                </p>

                <div>
                  <h4 className="text-base font-serif text-[#d57a34] font-bold">
                    {TESTIMONIALS[activeTestimonialIdx].name}
                  </h4>
                  <span className="text-2xs font-mono text-slate-500 uppercase tracking-widest block mt-1">
                    {TESTIMONIALS[activeTestimonialIdx].type} | Recommended Procedure: <strong className="text-slate-800 font-bold">{TESTIMONIALS[activeTestimonialIdx].treatment}</strong>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider navigators */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={() =>
                  setActiveTestimonialIdx((prev) =>
                    prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
                  )
                }
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-[#d57a34] flex items-center justify-center text-slate-600 hover:text-[#d57a34] shadow-sm transition-all cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveTestimonialIdx(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeTestimonialIdx === dotIdx ? 'w-6 bg-[#d57a34]' : 'w-2 bg-slate-200'
                    }`}
                    aria-label={`Go to Testimonial ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setActiveTestimonialIdx((prev) =>
                    prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-[#d57a34] flex items-center justify-center text-slate-600 hover:text-[#d57a34] shadow-sm transition-all cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Meet Our Doctors Preview Panel */}
      <section className="py-24 px-4 md:px-8 bg-[#f8fafc] border-b border-slate-150 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono text-[#d57a34] uppercase tracking-widest block font-bold">
              Board-Certified Clinical Care
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-semibold">
              Meet Our Doctors
            </h2>
            <p className="text-sm text-slate-600 font-sans leading-relaxed">
              Our Abilene-based clinicians hold extensive certifications and academic honors in implant surgery, aesthetic cosmetic tooth architecture, and gentle biological sedation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DOCTORS.map((doc) => (
              <div
                key={doc.name}
                className="bg-white border border-slate-200 rounded-3xl p-5 hover:border-[#d57a34]/40 transition-all duration-350 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  
                  {/* Photo with golden halo frame */}
                  <div className="aspect-[4/5] rounded-2.5xl overflow-hidden relative border border-slate-100 bg-[#f1f5f9] bg-gradient-to-br from-slate-100 to-slate-200/50">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  </div>

                  <div>
                    <h3 className="font-serif text-lg text-slate-900 font-medium block">
                      {doc.name}
                    </h3>
                    <span className="text-xs font-sans text-[#d57a34] font-semibold block mt-1">
                      {doc.title}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans line-clamp-3">
                    {doc.bio}
                  </p>

                </div>

                <div className="pt-6 border-t border-slate-100 mt-4">
                  <button
                    onClick={() => onNavigate('meet-doctors')}
                    className="w-full text-center py-2 text-[11px] font-mono text-slate-500 hover:text-[#d57a34] tracking-widest uppercase transition-colors cursor-pointer font-bold"
                  >
                    View Biography & Credentials
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('meet-doctors')}
              className="bg-transparent text-slate-650 hover:text-slate-900 border border-slate-300 hover:border-[#d57a34] px-8 py-3.5 rounded-full font-display text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer font-medium"
            >
              Learn About Clinicians <ArrowRight className="w-4 h-4 text-[#d57a34]" />
            </button>
            <button
              onClick={() => onNavigate('meet-team')}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 px-8 py-3.5 rounded-full font-display text-xs tracking-wider uppercase text-center cursor-pointer font-medium"
            >
              Meet Our Wonderful Staff
            </button>
          </div>

        </div>
      </section>

      {/* Comprehensive FAQ Accordion System */}
      <section className="py-24 px-4 md:px-8 bg-white border-t border-slate-150 relative">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#d57a34]/3 blur-[100px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-[10px] font-mono text-[#d57a34] uppercase tracking-widest block font-bold">
              Patient Resource Hub
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-semibold">
              Frequently Answered Concerns
            </h2>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Find instant, clear clinical explanations regarding cosmetic porcelain veneers, dental implant integrity, recovery timelines, and biological comfort options.
            </p>
          </div>

          {/* Custom Search bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search clinical topics (e.g. implants, laser, insurance, veneers)..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-xs text-slate-800 focus:border-[#d57a34] focus:outline-none placeholder-slate-400 transition font-sans"
            />
          </div>

          {/* Accordion container */}
          <div className="space-y-4">
            {FAQS.filter(
              (faq) =>
                faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
                faq.answer.toLowerCase().includes(faqSearch.toLowerCase()) ||
                faq.category.toLowerCase().includes(faqSearch.toLowerCase())
            ).map((faq, idx) => {
              const isOpen = faqOpenIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#f8fafc] border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setFaqOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-100/40 transition-colors font-serif text-[15px] md:text-base font-medium tracking-wide text-slate-900 focus:outline-none cursor-pointer"
                  >
                    <span className="text-slate-800 font-semibold pr-4">{faq.question}</span>
                    <span className={`text-[#d57a34] text-lg shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-[#f1f5f9]/20"
                      >
                        <div className="px-6 pb-6 pt-2 font-sans text-xs text-slate-600 leading-relaxed border-t border-slate-150 space-y-3">
                          <p>{faq.answer}</p>
                          <span className="inline-block bg-orange-50 px-2.5 py-0.5 rounded text-[9px] font-mono text-[#d57a34] border border-orange-100">
                            Field: {faq.category}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
