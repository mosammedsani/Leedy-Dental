import { Heart, ShieldAlert, CheckCircle, Award, Volume2, Calendar } from 'lucide-react';
import { PageId } from '../types';

interface ConditionsProps {
  subPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Conditions({ subPage, onNavigate }: ConditionsProps) {

  return (
    <div className="bg-white text-slate-800 min-h-[85vh] py-16 px-4 md:px-8 selection:bg-brand-teal selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="border-b border-brand-navy/10 pb-8 space-y-3">
          <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block font-bold">
            Focused Diagnostic Assessments
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            {subPage === 'condition-gum-disease' && 'Are You Struggling With Gum Disease?'}
            {subPage === 'missing-teeth' && 'Addressing One or More Missing Teeth'}
            {subPage === 'loose-dentures' && 'Freedom From Loose or Painful Dentures'}
          </h1>
          <p className="text-sm text-slate-600 font-sans max-w-3xl leading-relaxed">
            {subPage === 'condition-gum-disease' && 'Chronic bleeding, offensive breath, or loose roots indicate active periodontitis. Disinfect your gum beds to secure deep underlying bone anchorage.'}
            {subPage === 'missing-teeth' && 'Leaving missing gaps untreated causes adjacent teeth to drift, compromises your bite alignment, and accelerates jaw bone resorption.'}
            {subPage === 'loose-dentures' && 'Generic removable dentures can slip and cause painful sores, severely limiting your chewing capacity and impacting speech.'}
          </p>
        </div>

        {/* Modular elements */}
        {subPage === 'condition-gum-disease' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Banish Periodontitis Early</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  Gum disease starts as mild inflammation (gingivitis), but can quickly evolve into full periodontitis. Bacteria construct hard plaque colonies beneath the gum line, releasing waste that erodes the bone anchors holding your teeth in place.
                </p>
                <p>
                  Our advanced laser therapies vaporize bacteria deposits and sterilize soft tissues with zero scalpel cutting or post-operative stitches, supporting rapid tissue healing and protecting your dental health.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 text-xs shadow-sm shadow-slate-100/20">
                <span className="text-brand-teal uppercase tracking-widest block font-mono font-bold">Recommended Treatment Pathways</span>
                <div className="flex gap-4">
                  <button onClick={() => onNavigate('gum-disease-treatment')} className="text-brand-navy hover:text-brand-teal font-sans font-bold underline">
                    Laser Gum Therapy →
                  </button>
                  <button onClick={() => onNavigate('laser-dentistry')} className="text-brand-navy hover:text-brand-teal font-sans font-bold underline">
                    Laser Dentistry Options →
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 p-6 rounded-3xl space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <ShieldAlert className="text-rose-500 w-10 h-10" />
                <h3 className="font-serif text-base text-brand-navy font-bold">Gum Disease Danger</h3>
                <p className="text-2xs text-slate-600 font-sans leading-relaxed">
                  Chronic gum infections can enter the bloodstream, directly increasing the risk of cardiovascular disease, respiratory challenges, and pancreatic strain. Safe periodontal hygiene protects your entire body's wellness.
                </p>
              </div>
            </div>
          </div>
        )}

        {subPage === 'missing-teeth' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-1 border-slate-100" />

            <div className="lg:col-span-4">
              <div className="bg-white border border-slate-100 p-6 rounded-3xl space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <h3 className="font-serif text-base text-brand-navy font-bold">Dental Bone Erosion</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Within the first year of losing a tooth, you can lose up to 25% of the surrounding jawbone width due to a lack of chewing stimulation.
                </p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                  <span className="text-brand-teal block font-mono text-xs uppercase font-extrabold">SOLUTIONS RANGE</span>
                  <ul className="text-2xs text-slate-550 space-y-1.5 mt-2 font-sans font-semibold">
                    <li>• Biocompatible Single Implants</li>
                    <li>• Solid Multi-unit Ceramic Bridges</li>
                    <li>• Full Arch Implant Restorations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Prevent Dental Drifting Completely</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  A single missing tooth can disrupt your entire bite alignment. Without a neighbor to rest against, adjacent teeth begin to drift and tip into the gap, causing irregular force distribution and enamel wear.
                </p>
                <p>
                  Our dental implants replace both the functional tooth root and the visible tooth surface. This stimulates bone density, protects your facial profile, and restores 100% of your native chewing capacity.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 shadow-sm font-sans">
                <span className="text-2xs font-mono text-brand-teal uppercase tracking-wider block font-bold">Recommended Treatment Pathway</span>
                <div className="flex gap-4">
                  <button onClick={() => onNavigate('single-implants')} className="text-xs text-brand-navy hover:text-brand-teal font-bold underline">
                    View Single Dental Implants →
                  </button>
                  <button onClick={() => onNavigate('full-mouth-implants')} className="text-xs text-brand-navy hover:text-brand-teal font-bold underline">
                    View Full Arch Restorations →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {subPage === 'loose-dentures' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Say Goodbye to Slipping Dentures</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  Many patients tolerate slipping dentures for years, accepting pain and speech challenges because they are unaware of more comfortable options. Flat acrylic plates resting on delicate gum ridges will always shift and rub, causing discomfort over time.
                </p>
                <p>
                  Our modern implant-supported overdentures lock securely onto titanium anchors placed in the jaw. This prevents slippage, restores normal chewing force, and allows you to enjoy meals in total relief.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 shadow-sm font-sans">
                <span className="text-2xs font-mono text-brand-teal uppercase tracking-wider block font-bold">Recommended Treatment Pathway</span>
                <div className="flex gap-4">
                  <button onClick={() => onNavigate('full-mouth-implants')} className="text-xs text-brand-navy hover:text-brand-teal font-bold underline">
                    View Implant-Supported Dentures →
                  </button>
                  <button onClick={() => onNavigate('dentures')} className="text-xs text-brand-navy hover:text-brand-teal font-bold underline">
                    View Handcrafted Premium Dentures →
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1" />

            <div className="lg:col-span-4">
              <div className="bg-white border border-slate-100 p-6 rounded-3xl space-y-4 text-center shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mx-auto">
                  ❖
                </div>
                <h3 className="font-serif text-base text-brand-navy font-bold">Banish Glues Forever</h3>
                <p className="text-2xs text-slate-600 leading-relaxed font-sans">
                  Implant overdentures eliminate the need for sticky adhesive glues, allowing you to speak, smile, and eat with complete confidence.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Nav */}
        <div className="pt-8 border-t border-slate-100 flex justify-between items-center text-xs font-mono">
          <button
            onClick={() => onNavigate('home')}
            className="text-slate-500 hover:text-brand-navy transition-colors font-medium"
          >
            ← Back To Home page
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-brand-teal hover:text-brand-navy font-bold transition-colors"
          >
            Book An Assessment Appointment →
          </button>
        </div>

      </div>
    </div>
  );
}
