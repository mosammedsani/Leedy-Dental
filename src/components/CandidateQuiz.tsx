import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ShieldCheck,
  Sparkles,
  Lock,
  Activity,
  Smile,
  Dna,
  Heart,
  Layers,
  Award
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  category: string;
  options: {
    label: string;
    sublabel: string;
    value: string;
    diagramType: 'implant' | 'veneer' | 'sedation' | 'financing';
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'What is your primary clinical or aesthetic dental goal?',
    category: 'Clinical Focus',
    options: [
      {
        label: 'Replace Missing or Severe Broken Teeth',
        sublabel: 'Requires titanium roots or solid cosmetic arches',
        value: 'implants',
        diagramType: 'implant'
      },
      {
        label: 'Full Cosmetic Veneers & Styling',
        sublabel: 'Align, whiten, and shape chipped or discolored teeth',
        value: 'cosmetic',
        diagramType: 'veneer'
      },
      {
        label: 'Stabilize Slipping, Painful Dentures',
        sublabel: 'In-office implant lock-in for 95% bite recovery',
        value: 'dentures',
        diagramType: 'implant'
      },
      {
        label: 'Routine Care & Conservative Therapy',
        sublabel: 'Laser cleaning, gum rejuvenation, and general restoration',
        value: 'general',
        diagramType: 'sedation'
      }
    ]
  },
  {
    id: 2,
    question: 'Which statement accurately describes your current tooth condition?',
    category: 'Anatomy Status',
    options: [
      {
        label: 'Missing multiple teeth or facing direct extractions',
        sublabel: 'Seeking immediate permanent bone-supported alternatives',
        value: 'severe_loss',
        diagramType: 'implant'
      },
      {
        label: 'Healthy teeth with cosmetic flaws (skewed, dark, worn)',
        sublabel: 'Desiring custom CAD/CAM veneers or crowns matching face shape',
        value: 'cosmetic_flaws',
        diagramType: 'veneer'
      },
      {
        label: 'Wearing removable dentures but struggling with speech/chewing',
        sublabel: 'Desiring solid implant hybrid bridges (All-On-4)',
        value: 'denture_struggle',
        diagramType: 'implant'
      },
      {
        label: 'Slight tooth wear and overall gum inflammation',
        sublabel: 'Requires gentle biological laser treatment and deep rejuvenation',
        value: 'minor_wear',
        diagramType: 'sedation'
      }
    ]
  },
  {
    id: 3,
    question: 'What are your comfort preferences regarding clinical anxiety?',
    category: 'Sedation Choice',
    options: [
      {
        label: 'I desire IV Sedation (Sleep peacefully through treatment)',
        sublabel: 'Highly recommended for complete surgical relaxation',
        value: 'iv_sedation',
        diagramType: 'sedation'
      },
      {
        label: 'I prefer light Oral Pill or Nitrous Gas (Relaxed conscious)',
        sublabel: 'Optimal balance of biological peace and quick recovery',
        value: 'light_sedation',
        diagramType: 'sedation'
      },
      {
        label: 'No sedation required (Completely relaxed with local numbing)',
        sublabel: 'Standard premium clinical procedures',
        value: 'none',
        diagramType: 'sedation'
      }
    ]
  },
  {
    id: 4,
    question: 'How do you plan to manage your custom smile investment?',
    category: 'Financing Plan',
    options: [
      {
        label: 'Check PPO Dental Insurance Benefit Compatibility',
        sublabel: 'Maximize co-pay assistance and in-house coordinator mapping',
        value: 'insurance',
        diagramType: 'financing'
      },
      {
        label: 'Low monthly payment interest-free plans',
        sublabel: 'Flexible medical lending via CareCredit or Proceed Finance',
        value: 'financing_plans',
        diagramType: 'financing'
      },
      {
        label: 'Direct credit card, HSA/FSA, or self-secure resources',
        sublabel: 'Premium customized clinical strategies and timelines',
        value: 'cash_fsa',
        diagramType: 'financing'
      }
    ]
  }
];

export default function CandidateQuiz() {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 to QUESTIONS.length - 1: Questions, QUESTIONS.length: Formulation/Lead, QUESTIONS.length + 1: Results
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [activeDiagram, setActiveDiagram] = useState<'implant' | 'veneer' | 'sedation' | 'financing'>('implant');

  // Contact Info states
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isFormulating, setIsFormulating] = useState(false);

  // Handle choice selection
  const handleSelectOption = (questionId: number, value: string, diagramType: 'implant' | 'veneer' | 'sedation' | 'financing') => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    setActiveDiagram(diagramType);
  };

  // Progress calculation
  const totalSteps = QUESTIONS.length + 1; // plus Lead Gen step
  const progressPercentage = Math.round(((Object.keys(answers).length) / QUESTIONS.length) * 100);

  // Navigation handlers
  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
      // set active diagram based on next question's already selected option or default
      const nextQuestion = QUESTIONS[currentStep + 1];
      const selectedVal = answers[nextQuestion.id];
      if (selectedVal) {
        const option = nextQuestion.options.find(o => o.value === selectedVal);
        if (option) setActiveDiagram(option.diagramType);
      } else {
        setActiveDiagram(nextQuestion.options[0].diagramType);
      }
    } else if (currentStep === QUESTIONS.length - 1) {
      // Transition to Lead Form
      setIsFormulating(true);
      setTimeout(() => {
        setIsFormulating(false);
        setCurrentStep(QUESTIONS.length);
      }, 1500); // Sleek transitional formulation wait
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      const prevQuestion = QUESTIONS[currentStep - 1];
      const selectedVal = answers[prevQuestion.id];
      if (selectedVal) {
        const option = prevQuestion.options.find(o => o.value === selectedVal);
        if (option) setActiveDiagram(option.diagramType);
      }
    }
  };

  // Submit Lead Form
  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setHasSubmitted(true);
      setCurrentStep(QUESTIONS.length + 1); // Show candidate summary
    }, 1800);
  };

  // Compute candidacy outcome
  const computeOutcome = () => {
    const goalsList = Object.values(answers);
    if (goalsList.includes('implants') || goalsList.includes('severe_loss') || goalsList.includes('denture_struggle')) {
      return {
        title: 'Excellent Dental Implant Candidate',
        score: '96% Match Potential',
        class: 'Implant-Supported Rehabilitation',
        desc: 'Based on your indications of tooth loss, deterioration, or denture movement, you possess optimal biological variables to benefit from stable, permanent computer-guided implant restorations.',
        steps: [
          '3D Cone Beam Bone Mapping (assess dense bone integrity)',
          'Virtual Guided Simulation (map risk-free insertion paths)',
          'On-site CAD/CAM laboratory custom hand-shaded crowning'
        ]
      };
    } else if (goalsList.includes('cosmetic') || goalsList.includes('cosmetic_flaws')) {
      return {
        title: 'Ideal Custom Veneers / Makeover Candidate',
        score: '98% Aesthetic Potential',
        class: 'Elite Custom Smile Artistry',
        desc: 'Your profile is highly suited for customized, biological ceramic styling. Utilizing our in-office lab, our master dentists model high-translucency porcelain veneers that completely match your natural facial symmetry.',
        steps: [
          'Digital Smile Design (visualize exact outcomes on-screen)',
          'Biological mockups (preview shape and tracking before placement)',
          'Micro-thin hand-layered porcelain custom color matching'
        ]
      };
    } else {
      return {
        title: 'Ideal Restorative & Preventive Care Candidate',
        score: '94% Conservation Score',
        class: 'Conservative Laser & Biological Therapy',
        desc: 'Your priorities center on preserving and revitalizing your natural health. We recommend our medical-grade dental lasers to cleanse periodontal tissues harmlessly and strengthen biological alignment.',
        steps: [
          'Therapeutic laser biological scanning',
          'Sedation consultation (guaranteeing 100% serene comfort)',
          'Consolidated bite modeling and structural health optimization'
        ]
      };
    }
  };

  const outcome = computeOutcome();

  return (
    <section id="candidacy-quiz" className="py-24 px-4 md:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Visual background ambient details */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#d57a34]/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#02638b]/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Modern high-end heading layout matching home page style */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-[10px] font-mono text-[#d57a34] uppercase tracking-widest block font-bold">
            Interactive Diagnostic Assessment
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-semibold leading-tight">
            Calculate Your Candidate Index
          </h2>
          <p className="text-sm text-slate-650 max-w-lg mx-auto leading-relaxed">
            Take our custom clinical assessment to evaluate if you qualify for Dental Implants, biological Smile Makeovers, or custom in-office CAD/CAM restorations. Includes complimentary diagnosis voucher.
          </p>
        </div>

        {/* Diagnostic Bento Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          
          {/* L. VISUAL CAD/CAM DEMO PANEL (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950 rounded-3xl p-6 md:p-8 text-white relative shadow-2xl overflow-hidden border border-slate-800">
            {/* Fine laboratory grids */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="lab-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#lab-grid)" />
              </svg>
            </div>

            {/* Glowing top element */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d57a34]/15 blur-3xl pointer-events-none rounded-full" />

            {/* Title / Technical Status bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d57a34] animate-ping" />
                <span className="w-2 h-2 rounded-full absolute bg-[#d57a34]" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  CAD/CAM Simulation Viewport
                </span>
              </div>
              <div className="text-[9px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[#d57a34]">
                3D-ORTHO-L26
              </div>
            </div>

            {/* DIAGRAM INTERACTIVE VISUAL CANVAS */}
            <div className="relative z-10 my-8 flex items-center justify-center min-h-[260px] md:min-h-[300px]">
              
              <AnimatePresence mode="wait">
                {activeDiagram === 'implant' && (
                  <motion.div
                    key="implant-diag"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex flex-col items-center"
                  >
                    {/* IMPLANT BLUEPRINT GRAPHIC */}
                    <svg viewBox="0 0 200 240" className="w-48 h-56 text-[#d57a34]" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {/* Biological Crown Representation */}
                      <path d="M 60,60 C 60,40 70,30 100,30 C 130,30 140,40 140,60 C 140,75 130,85 100,85 C 70,85 60,75 60,60 Z" className="stroke-white opacity-85" strokeWidth="2" />
                      <line x1="100" y1="30" x2="100" y2="85" className="stroke-white/30" strokeDasharray="3,3" />
                      
                      {/* Abutment Connector Block */}
                      <rect x="85" y="85" width="30" height="20" rx="3" fill="#d57a34" className="fill-opacity-20" />
                      <line x1="85" y1="95" x2="115" y2="95" />
                      
                      {/* Screw Thread Roots */}
                      <path d="M 90,105 L 110,105 L 108,120 L 92,120 Z" />
                      <path d="M 92,120 L 108,120 L 106,135 L 94,135 Z" />
                      <path d="M 94,135 L 106,135 L 104,150 L 96,150 Z" />
                      <path d="M 96,150 L 104,150 L 102,165 L 98,165 Z" />
                      <path d="M 98,165 L 102,165 L 100,180 Z" />
                      
                      {/* Micro screw lines */}
                      <path d="M 88,110 L 112,110" className="opacity-70" />
                      <path d="M 90,125 L 110,125" className="opacity-70" />
                      <path d="M 92,140 L 108,140" className="opacity-70" />
                      <path d="M 94,155 L 106,155" className="opacity-70" />
                      
                      {/* Anatomical Bone line guide */}
                      <path d="M 30,120 C 60,110 80,112 100,112 C 120,112 140,110 170,120" stroke="#02638b" strokeWidth="2" strokeDasharray="4,4" className="opacity-80" />
                      
                      {/* Technical Labels */}
                      <text x="145" y="55" className="fill-white font-mono text-[9px]">Custom Crown</text>
                      <text x="145" y="100" className="fill-[#d57a34] font-mono text-[9px] font-bold">Base Abutment</text>
                      <text x="145" y="145" className="fill-slate-400 font-mono text-[9px]">Titanium Root</text>
                      <text x="145" y="175" className="fill-[#02638b] font-mono text-[9px]">Bone Remodeling</text>
                    </svg>

                    <div className="text-center mt-3 space-y-1">
                      <span className="text-xs font-serif font-semibold text-slate-200">Dental Implant Integration</span>
                      <p className="text-[10px] text-slate-400 font-sans max-w-[240px]">
                        Strong biocompatible medical titanium root fuses perfectly with jaw cells to stimulate bone retention.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeDiagram === 'veneer' && (
                  <motion.div
                    key="veneer-diag"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex flex-col items-center"
                  >
                    {/* PORCELAIN VENEER GOLD RATIO BLUEPRINT */}
                    <svg viewBox="0 0 200 240" className="w-48 h-56 text-[#d57a34]" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {/* Symmetry guides */}
                      <circle cx="100" cy="110" r="80" stroke="rgba(255,255,255,0.05)" />
                      <line x1="20" y1="110" x2="180" y2="110" className="stroke-white/10" />
                      <line x1="100" y1="30" x2="100" y2="190" className="stroke-white/10" />
                      
                      {/* Gold Ratio grids */}
                      <rect x="50" y="55" width="100" height="110" rx="8" className="stroke-[#02638b]/40" />
                      
                      {/* Beautiful tooth outlines matching face mapping */}
                      <path d="M 65,95 C 65,70 82,70 82,95 L 82,130 C 82,140 65,140 65,130 Z" className="stroke-white opacity-85" />
                      <path d="M 85,90 C 85,60 115,60 115,90 L 115,135 C 115,148 85,148 85,135 Z" className="stroke-[#d57a34] opacity-95" strokeWidth="2.5" />
                      <path d="M 118,95 C 118,70 135,70 135,95 L 135,130 C 135,140 118,140 118,130 Z" className="stroke-white opacity-85" />
                      
                      {/* Golden grid measurements overlay */}
                      <line x1="85" y1="65" x2="85" y2="155" className="stroke-[#d57a34]/40" strokeDasharray="2,2" />
                      <line x1="115" y1="65" x2="115" y2="155" className="stroke-[#d57a34]/40" strokeDasharray="2,2" />
                      
                      {/* Dimensions tags */}
                      <text x="100" y="50" textAnchor="middle" className="fill-[#d57a34] font-mono text-[9px] font-bold">Golden Proportion W:H 1.618</text>
                      <text x="40" y="105" className="fill-slate-400 font-mono text-[8px] -rotate-90">Micro-Thin Edge</text>
                      <text x="145" y="115" className="fill-slate-400 font-mono text-[8px] rotate-90">Translucent Pearl</text>
                    </svg>

                    <div className="text-center mt-3 space-y-1">
                      <span className="text-xs font-serif font-semibold text-slate-200">Porcelain Veneers Grid Geometry</span>
                      <p className="text-[10px] text-slate-400 font-sans max-w-[240px]">
                        Digitally customized veneer thickness (0.3mm) perfectly conforms to biological lip alignment and eye tracking symmetry.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeDiagram === 'sedation' && (
                  <motion.div
                    key="sedation-diag"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex flex-col items-center"
                  >
                    {/* SEDATION MONITOR BIOMETRIC PULSE */}
                    <svg viewBox="0 0 200 240" className="w-48 h-56 text-[#d57a34]" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {/* Serene pulsing sound/calm waves */}
                      <path d="M 20,110 Q 50,110 65,110 T 80,70 T 95,150 T 110,110 T 135,110 T 180,110" className="stroke-[#02638b]" strokeWidth="2" />
                      
                      {/* Secondary breathing wave overlay */}
                      <path d="M 20,140 C 40,150 60,130 80,145 C 100,160 120,140 140,150 C 160,160 170,140 180,145" className="stroke-white/20" strokeWidth="1.5" />
                      <path d="M 20,80 C 40,70 60,95 80,80 C 100,65 120,85 140,75 C 160,65 170,85 180,80" className="stroke-white/20" strokeWidth="1.5" />

                      {/* Bio-sync target marker */}
                      <circle cx="100" cy="110" r="6" fill="#d57a34" className="animate-ping" />
                      <circle cx="100" cy="110" r="4.5" fill="#d57a34" />
                      
                      {/* Heartbeat & oxygen levels indicator */}
                      <rect x="35" y="180" width="130" height="40" rx="6" className="stroke-white/10" fill="rgba(255,255,255,0.02)" />
                      <text x="45" y="196" className="fill-white font-mono text-[8px]">ECO_CO2 MODE: NORMAL</text>
                      <text x="45" y="209" className="fill-[#d57a34] font-mono text-[9px] font-bold">SEDATION SYNC: ACTIVE (62 BPM)</text>
                      
                      {/* Icon overlay */}
                      <path d="M 100,10 L 105,25 L 120,25" className="stroke-white/10" />
                    </svg>

                    <div className="text-center mt-3 space-y-1">
                      <span className="text-xs font-serif font-semibold text-slate-200">Biological Calmness Monitoring</span>
                      <p className="text-[10px] text-slate-400 font-sans max-w-[240px]">
                        Intelligent conscious IV sedation ensures that anxious patients rest entirely pain-free with regulated vital rhythms.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeDiagram === 'financing' && (
                  <motion.div
                    key="financing-diag"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex flex-col items-center"
                  >
                    {/* FINANCIAL ANALYSIS MODEL */}
                    <svg viewBox="0 0 200 240" className="w-48 h-56 text-[#d57a34]" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {/* Grid analysis circles */}
                      <circle cx="100" cy="110" r="75" className="stroke-white/5" />
                      <circle cx="100" cy="110" r="50" className="stroke-white/5" />
                      
                      {/* Bar charts or analytical graph representing affordability splits */}
                      <rect x="60" y="130" width="16" height="40" rx="3" fill="#02638b" className="fill-opacity-40" />
                      <rect x="92" y="90" width="16" height="80" rx="3" fill="#d57a34" className="fill-opacity-50" />
                      <rect x="124" y="60" width="16" height="110" rx="3" fill="rgba(255,255,255,0.1)" />
                      
                      {/* Connected trendline */}
                      <path d="M 68,130 L 100,90 L 132,60" stroke="#d57a34" strokeWidth="2.5" />
                      <circle cx="68" cy="130" r="4" fill="#ffffff" />
                      <circle cx="100" cy="90" r="4" fill="#d57a34" />
                      <circle cx="132" cy="60" r="4" fill="#ffffff" />

                      {/* Technical markings */}
                      <text x="68" y="185" textAnchor="middle" className="fill-slate-400 font-mono text-[7px]">Co-Pay</text>
                      <text x="100" y="185" textAnchor="middle" className="fill-[#d57a34] font-mono text-[7px] font-bold">Lending</text>
                      <text x="132" y="185" textAnchor="middle" className="fill-slate-400 font-mono text-[7px]">Savings</text>
                    </svg>

                    <div className="text-center mt-3 space-y-1">
                      <span className="text-xs font-serif font-semibold text-slate-200">Maximize Smile Accessibility</span>
                      <p className="text-[10px] text-slate-400 font-sans max-w-[240px]">
                        We co-develop customized plans utilizing PPO insurance benefits combined with interest-free medical lending down to $199/month.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Bottom trust footer on left side */}
            <div className="relative z-10 border-t border-white/5 pt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#d57a34]/15 border border-[#d57a34]/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4.5 h-4.5 text-[#d57a34]" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold leading-none">Biological Precision Guarantee</span>
                <span className="text-[9px] text-slate-500 font-sans block pt-0.5 leading-tight">Approved under Dr. Robert Leedy guidelines, Founder.</span>
              </div>
            </div>

          </div>

          {/* R. INTERACTIVE QUESTION CAROUSEL PANEL (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xl relative min-h-[460px] md:min-h-[500px]">
            
            {/* Smooth transition viewport container */}
            <div className="flex-1">
              
              <AnimatePresence mode="wait">
                
                {/* Formulating Transitional State */}
                {isFormulating ? (
                  <motion.div
                    key="formulating"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-[#d57a34] animate-spin" />
                      <Activity className="w-6 h-6 text-[#d57a34] absolute inset-0 m-auto animate-pulse" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-lg font-semibold text-slate-900">Formulating Scientific Outcome Profile</h3>
                      <p className="text-xs text-slate-500 font-mono">
                        CROSS-REFERENCING HYPOTHETICAL CLINICAL GUIDELINES v2.9...
                      </p>
                    </div>
                  </motion.div>
                ) : currentStep < QUESTIONS.length ? (
                  
                  /* CORE QUESTION STEPS */
                  <motion.div
                    key={`step-${currentStep}`}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Question Header */}
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-orange-50 border border-orange-100 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#d57a34] uppercase tracking-wider">
                        Topic: {QUESTIONS[currentStep].category}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 font-semibold">
                        {currentStep + 1} of {QUESTIONS.length}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                      {QUESTIONS[currentStep].question}
                    </h3>

                    {/* Interactive Radio/Card options list */}
                    <div className="space-y-3 pt-2">
                      {QUESTIONS[currentStep].options.map((opt) => {
                        const isSelected = answers[QUESTIONS[currentStep].id] === opt.value;
                        return (
                          <div
                            key={opt.value}
                            onClick={() => handleSelectOption(QUESTIONS[currentStep].id, opt.value, opt.diagramType)}
                            className={`group border rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 select-none ${
                              isSelected
                                ? 'bg-orange-50/40 border-[#d57a34] shadow-sm shadow-[#d57a34]/5'
                                : 'bg-slate-50/50 hover:bg-slate-50 border-slate-200 hover:border-slate-350'
                            }`}
                          >
                            <div className="space-y-1 pr-4">
                              <span className={`block font-serif text-sm font-semibold transition-colors ${isSelected ? 'text-[#d57a34]' : 'text-slate-800'}`}>
                                {opt.label}
                              </span>
                              <span className="block text-2xs text-slate-500 leading-normal font-sans">
                                {opt.sublabel}
                              </span>
                            </div>
                            
                            {/* Premium Custom Radio Selector circle */}
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                              isSelected ? 'border-[#d57a34] bg-[#d57a34]' : 'border-slate-350 bg-white group-hover:border-slate-400'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>

                ) : currentStep === QUESTIONS.length ? (

                  /* LEAD FORM STEP (Dynamic Submission) */
                  <motion.div
                    key="lead-generation-step"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div className="text-left space-y-2 border-b border-slate-100 pb-4">
                      <span className="inline-flex items-center gap-1.5 text-[9px] font-mono text-[#d57a34] uppercase tracking-widest font-bold">
                        <Sparkles className="w-3.5 h-3.5" /> Assessment Completed Successfully
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                        Secure Your Candidate Report & Free Consultation Voucher
                      </h3>
                      <p className="text-xs text-slate-600 font-sans leading-relaxed">
                        To compute your personalized surgical matching score, claim a free 3D Bone Imaging check, and secure a $250 examination credit, please finalize your details below:
                      </p>
                    </div>

                    <form onSubmit={handleSubmitLead} className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                          First & Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder="e.g. Richard Hendricks"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:border-[#d57a34] focus:outline-none focus:ring-1 focus:ring-[#d57a34] transition font-sans placeholder-slate-400"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                            Direct Callback Phone
                          </label>
                          <input
                            type="tel"
                            required
                            value={leadPhone}
                            onChange={(e) => setLeadPhone(e.target.value)}
                            placeholder="e.g. (325) 555-0100"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:border-[#d57a34] focus:outline-none focus:ring-1 focus:ring-[#d57a34] transition font-sans placeholder-slate-400"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                            Secured Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={leadEmail}
                            onChange={(e) => setLeadEmail(e.target.value)}
                            placeholder="e.g. richard@piedpiper.com"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:border-[#d57a34] focus:outline-none focus:ring-1 focus:ring-[#d57a34] transition font-sans placeholder-slate-400"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-center py-4 bg-[#d57a34] hover:bg-[#c26a2a] disabled:opacity-50 text-white font-display font-bold text-xs tracking-widest uppercase rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2 mt-2"
                      >
                        {isSubmitting ? (
                          <span>PROCESSING SECURE REPORT...</span>
                        ) : (
                          <>
                            <span>GENERATE CANDIDACY ASSESSMENT NOW</span>
                            <ArrowRight className="w-4 h-4 shrink-0" />
                          </>
                        )}
                      </button>

                      {/* Security notice element */}
                      <div className="flex items-center justify-center gap-2 pt-1 border-t border-slate-100 mt-2">
                        <Lock className="w-3.5 h-3.5 text-slate-405 shrink-0" />
                        <span className="text-[10px] font-mono text-slate-400">
                          ✦ HIPAA COMPLIANT DATABASE SECURITY SEALS ACTIVE
                        </span>
                      </div>
                    </form>
                  </motion.div>

                ) : (

                  /* FINAL RESULTS REPORT DISPLAY (Step QUESTIONS.length + 1) */
                  <motion.div
                    key="results-step"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5 text-left"
                  >
                    <div className="bg-emerald-50 border border-emerald-150 rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <Check className="w-5 h-5 stroke-[3px]" />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-slate-800 leading-none">Medical Credentials Secured</h4>
                        <p className="text-[10px] text-slate-500 font-sans mt-0.5">Complimentary voucher code generated: <strong>LEEDY-VIP-IMPLANT</strong></p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-baseline border-b border-slate-100 pb-2">
                        <span className="text-2xs font-mono text-slate-400 uppercase font-semibold">Diagnostic Candidacy Persona</span>
                        <span className="text-sm font-mono text-[#d57a34] font-bold">{outcome.score}</span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900">
                        {outcome.title}
                      </h3>
                      <p className="text-xs text-slate-650 leading-relaxed font-sans">
                        {outcome.desc}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                        Calculated Ideal Clinical Timeline:
                      </span>
                      <ul className="space-y-2 font-sans text-slate-700 text-xs">
                        {outcome.steps.map((st, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start">
                            <span className="w-5 h-5 rounded-full bg-slate-100 text-[#d57a34] flex items-center justify-center text-[10px] font-mono shrink-0 font-bold mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="pt-0.5 font-medium leading-tight">
                              {st}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/85 text-xs text-slate-500 space-y-1">
                      <strong className="text-slate-800 font-serif block">What happens next?</strong>
                      <p className="font-sans leading-normal">
                        Our clinical lead (Rickie) has received your secure diagnostic score. We will reach you at <strong>{leadPhone}</strong> within 2 business hours to review your virtual 3D simulation planning.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        // Reset form
                        setAnswers({});
                        setLeadName('');
                        setLeadPhone('');
                        setLeadEmail('');
                        setHasSubmitted(false);
                        setCurrentStep(0);
                        setActiveDiagram('implant');
                      }}
                      className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-display text-[10px] tracking-wider uppercase border border-slate-200 hover:border-slate-300 cursor-pointer w-full text-center font-medium"
                    >
                      Restart Candidacy Assessment
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* SLEEK PROGRESS METRICS PANEL (At Bottom) */}
            {currentStep < QUESTIONS.length && (
              <div className="border-t border-slate-150 pt-5 mt-8 space-y-3 relative z-10">
                <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span className="font-bold">ASSESSMENT INDEX CALCULATION COMPLETED:</span>
                  <span className="text-[#d57a34] font-bold">{progressPercentage}%</span>
                </div>
                
                {/* Visual Progress Bar track */}
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#d57a34]"
                    initial={{ width: '7%' }}
                    animate={{ width: `${Math.max(7, progressPercentage)}%` }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />
                </div>

                {/* Back / Next Nav controls */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    {currentStep > 0 && (
                      <button
                        onClick={handleBack}
                        className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 hover:text-slate-800 transition uppercase font-bold cursor-pointer select-none"
                      >
                        <ArrowLeft className="w-4 h-4" /> PREV QUESTION
                      </button>
                    )}
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={!answers[QUESTIONS[currentStep].id]}
                    className="flex items-center gap-1.5 text-[10px] font-mono text-[#d57a34] hover:text-[#c26a2a] disabled:opacity-30 disabled:pointer-events-none transition uppercase font-bold cursor-pointer select-none ml-auto"
                  >
                    <span>
                      {currentStep === QUESTIONS.length - 1 ? 'FORMULATE EVALUATION' : 'NEXT STEP'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
