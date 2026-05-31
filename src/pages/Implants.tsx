import { ShieldCheck, CheckCircle, Smartphone, Award, DollarSign, Calendar, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import receptionImg from '../assets/images/luxury_dental_reception_1780233969583.png';

interface ImplantsProps {
  subPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Implants({ subPage, onNavigate }: ImplantsProps) {
  
  return (
    <div className="bg-white text-slate-800 min-h-[85vh] py-16 px-4 md:px-8 selection:bg-brand-teal selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Editorial Subpage Title Area */}
        <div className="border-b border-brand-navy/10 pb-8 space-y-3">
          <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block font-bold">
            Gold Standard Restoration Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            {subPage === 'single-implants' && 'Single Dental Implants Placement'}
            {subPage === 'multiple-implants' && 'Multiple Dental Implants Restorations'}
            {subPage === 'full-mouth-implants' && 'Full Mouth Dental Implants & Bridges'}
            {subPage === 'implant-pricing' && 'Dental Implants Pricing & Custom Financing'}
          </h1>
          <p className="text-sm text-slate-600 font-sans max-w-3xl leading-relaxed">
            {subPage === 'single-implants' && 'Replace an individual tooth without compromising adjacent teeth. A biological biocompatible titanium post binds directly with your bone, topped with a custom digital ceramic crown.'}
            {subPage === 'multiple-implants' && 'Banish spaces and restore multi-teeth gaps. Multi-implant bridges anchor contiguous porcelain teeth, restoring 100% of standard bite force and physical strength.'}
            {subPage === 'full-mouth-implants' && 'The premium solution to severe tooth loss or loose dentures. Utilizing multiple dental implants to lock custom digital zirconia hybrid arches permanently onto your jaw.'}
            {subPage === 'implant-pricing' && 'We are dedicated to fit premier implant dentistry into any budget. Review our direct clear pricing range, flexible payment schedules, and custom external financial partners.'}
          </p>
        </div>

        {/* Content Modules Switcher */}
        {subPage === 'single-implants' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Why Choose an Individual Implant?</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  Traditional crowns and bridges require filing down the healthy enamel of adjacent teeth to serve as supports. A single dental implant functions independently. It is placed right inside the socket of the missing tooth root, stimulating bone preservation.
                </p>
                <p>
                  Once fused with your jaw bone through osseointegration, we crown it with a custom-milled medical ceramic tooth manufactured inside our in-office lab, ensuring a perfect color match to your existing teeth.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-xl text-brand-teal block font-mono font-bold">100%</span>
                  <span className="text-2xs text-slate-500 font-mono block uppercase mt-1">Biocompatible Titanium</span>
                </div>
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-xl text-brand-teal block font-mono font-bold">Same-Day</span>
                  <span className="text-2xs text-slate-500 font-mono block uppercase mt-1">Temporary Teeth Milled</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all relative overflow-hidden">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop"
                    alt="Advanced dental implantology high-precision model clinical placement"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif text-lg text-brand-navy font-bold mb-3">Core Single Implant Specifications</h3>
                <ul className="space-y-2 text-xs text-slate-600 font-medium">
                  <li className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> No damage or scraping of surrounding healthy teeth</li>
                  <li className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Prevents localized bone shrinkage and gum recessions</li>
                  <li className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Floss and brush identically to natural teeth</li>
                  <li className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Beautiful translucent ceramic crowns made on-site</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {subPage === 'multiple-implants' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop"
                    alt="Multiple dental implants structure"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif text-lg text-brand-navy font-bold mb-3">Multi-Implant Core Advantages</h3>
                <ul className="space-y-2 text-xs text-slate-600 font-medium">
                  <li className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Bridges large gaps without partial dentures support</li>
                  <li className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Restores comfortable bite distribution</li>
                  <li className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Customized multi-tooth crowns represent custom alignments</li>
                  <li className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Protects remaining facial muscle outlines</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Banish Large Tooth Gaps Permanently</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  When you have three or four missing teeth in a series, placing separate single implants for every single missing tooth is often unnecessary. Our clinical specialists can safely place two dental implants on either side of the gap to anchor a durable multi-unit porcelain bridge.
                </p>
                <p>
                  This saves bone structure, minimizes treatment healing time, and is highly economical while providing an exceedingly stable, natural-looking tooth bridge that does not slip.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 shadow-sm">
                <div className="flex gap-2 items-center">
                  <Award className="text-brand-teal w-5 h-5" />
                  <span className="text-xs text-brand-navy uppercase font-sans font-bold tracking-wide">Elite Material Grade</span>
                </div>
                <p className="text-2xs text-slate-600">
                  Our implant abutments and multi-unit dental bridges utilize titanium alloys and high-purity medical zirconia designed to withstand maximum chewing force for decades.
                </p>
              </div>
            </div>
          </div>
        )}

        {subPage === 'full-mouth-implants' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-serif text-3xl font-bold text-brand-navy">Full Arch Restorations & Implant Options</h2>
                <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                  <p>
                    For long-time denture wearers or patients dealing with comprehensive dental breakdown, our full-mouth reconstructive process is revolutionary. We place four, five, or six implants strategically inside the arch. This system permanently supports a custom fixed zirconia teeth bridge.
                  </p>
                  <p>
                    This is often referred to as All-on-4® or All-on-6. Unlike dentures, this fixed bridge leaves the palate uncovered, preserving full taste and thermal sensation while eating.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                    <span className="text-xs text-brand-teal font-mono uppercase block font-bold">All-On-4®</span>
                    <span className="text-2xs text-slate-500 mt-1 block">Simple 4 Post Placement</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                    <span className="text-xs text-brand-teal font-mono uppercase block font-bold">Palateless</span>
                    <span className="text-2xs text-slate-500 mt-1 block">Full taste and heat feel</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                    <span className="text-xs text-brand-teal font-mono uppercase block font-bold">On-Site Lab</span>
                    <span className="text-2xs text-slate-500 mt-1 block">Custom zirconia arches</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white border border-slate-100 rounded-3xl p-6 space-y-4 shadow-lg shadow-slate-100/50">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-150 shadow-sm bg-[#f1f5f9] bg-gradient-to-br from-slate-100 to-slate-200/50">
                    <img
                      src={receptionImg}
                      alt="Luxury Clinic Environment"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block font-bold">
                      Hospital-Grade Sterility
                    </span>
                    <h3 className="font-serif text-base text-brand-navy font-bold mt-1">Dedicated Implant Surgical Suite</h3>
                    <p className="text-[11px] text-slate-650 font-sans mt-1 leading-relaxed">
                      We operate our own fully sterile implant surgical suites in Abilene, guaranteeing maximum safety throughout the placement process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom comparisons */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-center text-brand-navy">Traditional Removable Dentures vs. Permanent Implants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans">
                <div className="space-y-3 bg-red-50 p-5 rounded-2xl border border-red-100">
                  <span className="font-bold text-red-800 block font-serif text-base">Traditional Flat Dentures</span>
                  <ul className="space-y-2 text-red-950 font-medium">
                    <li className="flex items-center gap-2">✕ Slipping, rubbing, and painful soft tissue sores</li>
                    <li className="flex items-center gap-2">✕ Requires messy adhesive pastes and daily removals</li>
                    <li className="flex items-center gap-2">✕ Accelerates bone resorption and facial collapsing</li>
                    <li className="flex items-center gap-2">✕ Minimizes chewing and biting capability to only 20%</li>
                  </ul>
                </div>
                <div className="space-y-3 bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                  <span className="font-bold text-emerald-800 block font-serif text-base">Permanent Implant-Supported Arches</span>
                  <ul className="space-y-2 text-emerald-950 font-medium">
                    <li className="flex items-center gap-2">✓ Locked permanently onto jawbone for total security</li>
                    <li className="flex items-center gap-2">✓ Simply brush and rinse like standard teeth</li>
                    <li className="flex items-center gap-2">✓ Actively stimulates and preserves bone density</li>
                    <li className="flex items-center gap-2">✓ Restores over 95% of native natural chewing power</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {subPage === 'implant-pricing' && (
          <div className="space-y-12">
            
            {/* Value statement card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white border border-slate-100 rounded-3xl p-8 space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <DollarSign className="w-8 h-8 text-brand-teal" />
                <h3 className="font-serif text-xl font-bold text-brand-navy">Clear, Transparent Financial Structure</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  The long-term cost of dental implants is often more affordable than continuously repairing failing bridges or repeatedly replacing slipping dentures. We provide detailed pricing estimates encompassing diagnostic sweeps, bone health evaluations, post installations, and final crown restorations.
                </p>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-2xs font-mono space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Diagnostics (CBCT 3D Scan)</span>
                    <span className="text-brand-teal font-extrabold">Comp. during consultation</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2">
                    <span className="text-slate-500">Biological Sedation Options</span>
                    <span className="text-slate-700">Tier-adjusted</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2">
                    <span className="text-slate-500">In-Office Premium Lab Crafting</span>
                    <span className="text-slate-700">Included in Quote</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-3xl p-8 space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <Smartphone className="w-8 h-8 text-brand-teal" />
                <h3 className="font-serif text-xl font-bold text-brand-navy">Elite Financial Partners</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  We integrate with the nation's leading medical and dental financial providers to secure low-interest or interest-free installments, fitting world-class care cleanly into your budget.
                </p>
                <div className="space-y-3 font-sans">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-xs text-brand-navy font-bold">Proceed Finance</span>
                      <span className="text-[10px] text-slate-500 block">Up to 84-month terms, low interest rates</span>
                    </div>
                    <span className="text-2xs font-mono text-brand-teal font-bold block">Available →</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-xs text-brand-navy font-bold">CareCredit Dental</span>
                      <span className="text-[10px] text-slate-500 block">0% interest plans for qualified patients</span>
                    </div>
                    <span className="text-2xs font-mono text-brand-teal font-bold block">Available →</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA action */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div>
                <span className="text-[9px] font-mono text-brand-teal uppercase block font-bold">Complimentary Consultation</span>
                <h4 className="font-serif text-lg text-brand-navy font-bold mt-1">Get Your Exact Implant Cost Assessment</h4>
                <p className="text-xs text-slate-500 font-sans mt-1">
                  We take 3D diagnostic images and review your anatomical data with zero financial obligation.
                </p>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#d57a34] hover:bg-[#c26a2a] text-white font-display font-semibold text-xs px-6 py-3 rounded-full hover:scale-105 transition-all w-full md:w-auto text-center cursor-pointer shadow-md"
              >
                Schedule Consultation Now
              </button>
            </div>

          </div>
        )}

        {/* Global Bottom Navigation Back Options */}
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
            Request Instant Pricing Assessment →
          </button>
        </div>

      </div>
    </div>
  );
}
