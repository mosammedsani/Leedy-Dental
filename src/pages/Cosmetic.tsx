import { Sparkles, Award, Star, CheckSquare, Heart, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';

interface CosmeticProps {
  subPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Cosmetic({ subPage, onNavigate }: CosmeticProps) {

  return (
    <div className="bg-white text-slate-800 min-h-[85vh] py-16 px-4 md:px-8 selection:bg-brand-teal selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Title Block */}
        <div className="border-b border-brand-navy/10 pb-8 space-y-3">
          <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block font-bold">
            Masterly Handweighted Cosmetic Design
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            {subPage === 'smile-makeover' && 'The Elite Custom Smile Makeover'}
            {subPage === 'invisalign' && 'Invisalign® Platinum Clear Aligners'}
            {subPage === 'crowns-bridges' && 'Custom Handdesigned Crowns & Bridges'}
            {subPage === 'veneers' && 'Porcelain Veneers Placement'}
            {subPage === 'teeth-whitening' && 'Ultimate Laser Teeth Whitening'}
          </h1>
          <p className="text-sm text-slate-600 font-sans max-w-3xl leading-relaxed">
            {subPage === 'smile-makeover' && 'Combine the finest disciplines of biological and cosmetic restoration. A bespoke aesthetic overhaul customized to your unique eye color, face symmetry, lip lines, and skin undertone.'}
            {subPage === 'invisalign' && 'Straighten your teeth with complete invisibility. Utilizing custom-milled medical clear aligners that reposition your arch without metal wires or mouth abrasions.'}
            {subPage === 'crowns-bridges' && 'Restore tooth integrity and replace empty gaps beautifully. Our on-site lab hand-molds premium ceramic structures that match the translucency and structure of real teeth.'}
            {subPage === 'veneers' && 'The absolute secret to hollywood-grade smile aesthetics. Micro-thin custom-shaded porcelain casings permanently bonded to the forward-facing enamel of your teeth.'}
            {subPage === 'teeth-whitening' && 'Banish years of age, coffee, wine, or tobacco discoloration in a single luxurious visit. Utilizing laser-activated aesthetic gels for deep, uniform enamel brightening.'}
          </p>
        </div>

        {/* Dynamic subpage sections */}
        {subPage === 'smile-makeover' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Bespoke Aesthetic Engineering</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  A real smile makeover is a customized artistic masterpiece. Dr. Nikki Green and our cosmetic dentists study your entire facial profile, from the slope of your jaw to how your lower lip curves when you laugh. We then design a personalized combination of porcelain veneers, ceramic crowns, and teeth whitening.
                </p>
                <p>
                  By producing all restorative materials right inside our Abilene clinic, we can adjust the translucent properties, color-density, and physical textures within minutes to ensure a flawlessly natural outcome.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl space-y-4 shadow-sm">
                <h3 className="font-serif text-base text-brand-teal font-bold">Selected Makeover Protocols Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-slate-600">
                  <div className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Aesthetic facial profiling</div>
                  <div className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Translucency gradient map</div>
                  <div className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Biological arch balance</div>
                  <div className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> In-house technician review</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop"
                  alt="Aesthetic layout tools"
                  className="w-full h-48 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-brand-teal uppercase block font-bold">Hand-made Craft</span>
                  <h4 className="font-serif text-base text-brand-navy font-bold">Custom Clay Modeling Available</h4>
                  <p className="text-2xs text-slate-650 font-sans leading-relaxed">
                    Patients can preview their ultimate smile designs using temporary medical acrylic models before we proceed with the final porcelain work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {subPage === 'invisalign' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop"
                  alt="Clear Aligners Orthodontics"
                  className="w-full h-48 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <h3 className="font-serif text-base text-brand-navy font-bold">Invisalign® Fast Track Benefits</h3>
                <ul className="space-y-2 text-2xs text-slate-600 font-sans font-medium">
                  <li className="flex items-center gap-1.5"><span className="text-brand-teal font-extrabold">✓</span> SmartTrack® flexible active material</li>
                  <li className="flex items-center gap-1.5"><span className="text-brand-teal font-extrabold">✓</span> Removable for simple eating and flossing</li>
                  <li className="flex items-center gap-1.5"><span className="text-brand-teal font-extrabold">✓</span> No lacerations from sharp steel wires</li>
                  <li className="flex items-center gap-1.5"><span className="text-brand-teal font-extrabold">✓</span> Comprehensive virtual 3D pathing</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Clear Orthodontic Discretion</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  No adult wants to wear metal brackets and wires. Invisalign® clear aligners offer a highly effective orthodontic solution. Using our 3D digital oral scanners, we capture thousands of data points to map your teeth, showing the exact trajectory of tooth alignment.
                </p>
                <p>
                  We compile customized sets of aligners representing gradual shifts. Simply wear them 22 hours a day and watch your smile straighten comfortably and invisibly.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4 items-center shadow-sm">
                <Award className="text-brand-teal w-8 h-8 shrink-0" />
                <div>
                  <span className="text-xs text-brand-navy uppercase tracking-wider block font-bold font-sans">Platinum Aligners Care</span>
                  <span className="text-2xs text-slate-500 block pt-0.5 font-medium">Our clinic holds extensive advanced training credentials inside Invisalign® clinical align system.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {subPage === 'crowns-bridges' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Bespoke Solid Ceramic Restoration</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  For cracked, decayed, or eroded teeth, our crowns return total dental function. We utilize solid, metal-free restoration ceramics that are incredibly bio-friendly. By using computerized CAD/CAM milling setups inside our in-office lab, we can often craft and fuse your new crown in a single diagnostic window.
                </p>
                <p>
                  When replacing missing teeth, custom dental bridges can safely span the space by binding to crowns on either side of the empty slot, stabilizing your occlusion completely.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-brand-teal block font-mono text-sm uppercase font-bold">100% Metal-Free</span>
                  <span className="text-[10px] text-slate-500 block mt-1">No gray gum borders</span>
                </div>
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-brand-teal block font-mono text-sm uppercase font-bold">On-Site Custom Shade</span>
                  <span className="text-[10px] text-slate-500 block mt-1">Matches surrounding teeth</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=600&auto=format&fit=crop"
                  alt="Precision dental ceramics"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                  referrerPolicy="no-referrer"
                />
                <h3 className="font-serif text-base text-brand-navy font-bold">Our Ceramic Standards</h3>
                <p className="text-2xs text-slate-605 font-sans leading-relaxed mt-1">
                  We refuse cheap materials. All crowns incorporate lithium disilicate (IPS e.max) or layered high-translucency zirconia for deep life-long strength and natural enamel reflection.
                </p>
              </div>
            </div>
          </div>
        )}

        {subPage === 'veneers' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop"
                  alt="High end clinical tools and beauty"
                  className="w-full h-48 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <h3 className="font-serif text-base text-brand-navy font-bold">Porcelain Veneers Process</h3>
                <ul className="space-y-1.5 text-2xs text-slate-600 font-sans font-medium">
                  <li className="flex items-center gap-1">✓ Requires minimal conservative preparation of enamel</li>
                  <li className="flex items-center gap-1">✓ High resistance to wine, tea, coffee, and nicotine</li>
                  <li className="flex items-center gap-1">✓ Hand-layering by lab artists duplicates raw translucency</li>
                  <li className="flex items-center gap-1">✓ Instantly improves spacing, alignments, and chips</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Micro-Thin Luxury Enamel Shells</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  Porcelain veneers represent the pinnacle of cosmetic dental artistry. These wafer-thin shells are hand-shaped and custom-colored by our clinical ceramists. By adhering them seamlessly to the prepared surface of your natural teeth, we can instantly correct discoloration, severe spacing gaps, chips, and irregular lengths.
                </p>
                <p>
                  Veneers act identically to your natural tooth enamel. Because they are hand-crafted right inside our on-site laboratory, we ensure your cosmetic transformation looks sophisticated, bright, and uniquely yours.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex gap-4 items-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold font-sans">
                  ★
                </div>
                <div>
                  <span className="text-xs text-brand-navy block uppercase tracking-wide font-bold font-display">Aesthetic Enamel Preservation</span>
                  <span className="text-2xs text-slate-500 block mt-1 font-medium">
                    We practice conservative preparation methods to preserve as much of your natural physical tooth structure as possible.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {subPage === 'teeth-whitening' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Advanced Laser Teeth Whitening</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  Drugstore whitening strips and dynamic home remedies often irritate delicate gum margins or fail to break down deep-set stains inside the tooth matrix. Our in-office laser whitening protocols offer a safe, clinically supervised option for uniform smile whitening.
                </p>
                <p>
                  We apply a clinical-strength brightening agent and activate it utilizing target-wavelength laser lighting. This safe energy releases deep stains from the tooth prisms within single treatment cycles, brightening your enamel by up to 8 full shades.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-brand-teal block font-mono text-sm font-bold">UP TO 8 SHADES</span>
                  <span className="text-2xs text-slate-500 block mt-1 font-medium font-sans">In a single 60-minute visit</span>
                </div>
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-brand-teal block font-mono text-sm font-bold">GUM BOUND PROTECTION</span>
                  <span className="text-2xs text-slate-500 block mt-1 font-medium font-sans">Fully guarded gum barriers prevent sensitivity</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop"
                  alt="Teeth whitening light"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                  referrerPolicy="no-referrer"
                />
                <h3 className="font-serif text-base text-brand-navy font-bold">Uniform Brightness</h3>
                <p className="text-2xs text-slate-605 font-sans leading-relaxed mt-1">
                  We finish with an advanced clinical fluoride treatment to re-mineralize your teeth enamel and eliminate any post-whitening discomfort.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Global Bottom Navigation Options */}
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
            Request Cosmetic Assessment →
          </button>
        </div>

      </div>
    </div>
  );
}
