import { ShieldAlert, Users, Award, ShieldCheck, Zap, Activity } from 'lucide-react';
import { PageId } from '../types';

interface ServicesProps {
  subPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Services({ subPage, onNavigate }: ServicesProps) {

  return (
    <div className="bg-white text-slate-800 min-h-[85vh] py-16 px-4 md:px-8 selection:bg-brand-teal selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Title Area */}
        <div className="border-b border-brand-navy/10 pb-8 space-y-3">
          <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block font-bold">
            Elite Clinical Care & Recovery
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            {subPage === 'general-dentistry' && 'Comprehensive General & Preventive Dentistry'}
            {subPage === 'sedation-dentistry' && 'Comfortable Sedation Dentistry Options'}
            {subPage === 'gum-disease-treatment' && 'Advanced Periodontal Gum Disease Therapy'}
            {subPage === 'laser-dentistry' && 'State-of-the-Art Laser Clinical Therapy'}
            {subPage === 'dentures' && 'Custom Hand-Crafted Premium Dentures'}
            {subPage === 'tooth-extraction' && 'Gentle Surgical Tooth Extractions'}
            {subPage === 'root-canal' && 'Comfortable, Painless Root Canal Restorations'}
          </h1>
          <p className="text-sm text-slate-600 font-sans max-w-3xl leading-relaxed">
            {subPage === 'general-dentistry' && 'Preventive checkups, custom cleanings, and digital cavity diagnostics designed to keep your biological teeth healthy, clean, and strong for a lifetime.'}
            {subPage === 'sedation-dentistry' && 'Our elite clinical priority is absolute comfort. Sleep peacefully or drift into complete relaxation through custom oral-conscious or intravenous (IV) sedation.'}
            {subPage === 'gum-disease-treatment' && 'Eliminate harmful pathogentic bacteria beneath your gum lines to secure the critical bone foundations that hold your natural teeth securely in place.'}
            {subPage === 'laser-dentistry' && 'Enjoy tissue therapies with zero scalpels, zero stitches, and zero post-operative pain. Our specialized lasers provide micro-targeted surgical precision.'}
            {subPage === 'dentures' && 'Ditch loose, generic plastic plates. Our in-house dental laboratory designs individual full or partial dentures that lock securely and look gorgeous.'}
            {subPage === 'tooth-extraction' && 'Surgical extraction of compromised, infected, or wisdom teeth handled gently using precise guides in our clean surgical suites.'}
            {subPage === 'root-canal' && 'Save an infected natural tooth root and banish localized dental pain. Our micro-endodontic protocols are quick, quiet, and exceptionally comfortable.'}
          </p>
        </div>

        {/* Modular Content Display */}
        {subPage === 'general-dentistry' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">The Foundation of Biological Health</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  Preventive general dentistry is the most critical element of life-long systemic wellness. Our registered dental hygienists perform ultra-gentle micro-cleanings using advanced scaler setups, clearing calculus and plaque deposits that harbor harmful bacteria.
                </p>
                <p>
                  We incorporate low-radiation digital x-rays and laser-assisted decay sensors to identify structural weaknesses long before they become painful cavities, prioritizing preservation of your natural enamel.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex gap-3 text-xs shadow-sm shadow-slate-100/30">
                <ShieldCheck className="text-brand-teal shrink-0 w-6 h-6" />
                <div>
                  <strong className="text-brand-navy block font-bold">Preventive Protocol Focus</strong>
                  <span className="text-slate-500 block pt-0.5">Custom cancer screens, comprehensive structural checkups, laser tartar sensors, and enamel remineralization.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop"
                  alt="Dental hygienist clinical work"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                  referrerPolicy="no-referrer"
                />
                <h3 className="font-serif text-base text-brand-navy font-bold">Systemic Biological Connection</h3>
                <p className="text-2xs text-slate-600 font-sans mt-1">
                  Did you know that chronic dental decay and plaque build-up directly correlates with heart strain, diabetes, and joint inflammation? Keeping your mouth clean protects your entire body's health.
                </p>
              </div>
            </div>
          </div>
        )}

        {subPage === 'sedation-dentistry' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop"
                  alt="Comfortable anesthesia setup"
                  className="w-full h-48 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <h3 className="font-serif text-base text-brand-navy font-bold">Custom Relaxing Tiers</h3>
                <ul className="space-y-2.5 text-2xs text-slate-600 font-sans font-medium leading-relaxed">
                  <li><strong>• Tier 1: Nitrous Oxide (Laughing Gas)</strong> - Mild relaxation that wears off instantly, allowing you to safely drive home.</li>
                  <li><strong>• Tier 2: Oral Conscious Sedation</strong> - A prescription pill taken prior to therapy that induces a sleepy, deeply relaxed dental state.</li>
                  <li><strong>• Tier 3: Intravenous (IV) Sedation</strong> - Secure twilight conscious sedation administered directly in our surgical suite.</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Banish Dental anxiety Forever</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  At Leedy Dental, we reject the notion that visiting the dentist has to be stressful or uncomfortable. If you hold deep anxiety or fear arising from a negative childhood experience, we provide compassionate, state-of-the-art sedation dentistry.
                </p>
                <p>
                  Under sedation, complex implant placements, deep cleanings, or bone grafting can be finished seamlessly under one diagnostic window, with minimal post-treatment memory or tension.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 shadow-sm font-sans">
                <span className="text-2xs font-mono text-brand-teal uppercase tracking-wider block font-bold">Specialist Certification Required</span>
                <p className="text-[11px] text-slate-550 leading-relaxed">
                  Our doctors hold prestigious certifications in conscious intravenous and oral enteral sedation, monitoring pulse, respirations, and blood oxygen to guarantee absolute safety.
                </p>
              </div>
            </div>
          </div>
        )}

        {subPage === 'gum-disease-treatment' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Protect the Critical Bone Anchorage</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  Periodontitis is a chronic biological infection that erodes the soft gums and underlying bone matrix that keep teeth anchored. Left unmanaged, healthy teeth loosen, move, and ultimately fall out.
                </p>
                <p>
                  Our advanced periodontal solutions leverage ultrasonic deep-scaling to sweep away calculus deposits, target pathogenic colonies with microscopic diagnostics, and utilize local antibiotics to restore firm physical gum attachment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                  <strong className="text-brand-navy text-xs block font-serif font-bold">Symptoms of Gum Infection</strong>
                  <span className="text-2xs text-rose-700 block mt-1 font-medium font-sans">Bleeding gums, receding tooth borders, chronic bad breath, teeth movement.</span>
                </div>
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                  <strong className="text-brand-navy text-xs block font-serif font-bold">Microbe Targeted Care</strong>
                  <span className="text-2xs text-emerald-700 block mt-1 font-medium font-sans">Advanced diagnostic mapping isolates bacteria classes to select targeted treatments.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <h3 className="font-serif text-base text-brand-navy font-bold">Advanced Periodontal Care</h3>
                <p className="text-2xs text-slate-605 font-sans leading-relaxed mt-2 font-medium">
                  We use special antibiotic micro-powders (such as Arestin) placed directly inside deep periodontal pockets to destroy remaining pathogenic cells over time, supporting fast gum healing.
                </p>
              </div>
            </div>
          </div>
        )}

        {subPage === 'laser-dentistry' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <div className="w-10 h-10 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="font-serif text-base text-brand-navy font-bold">Precision Dental Lasers</h3>
                <p className="text-2xs text-slate-600 font-sans mt-2 leading-relaxed">
                  We incorporate targeted lasers to decontaminate microscopic surfaces, vaporize diseased soft tissues, and stimulate healthy cellular regrowth with absolute precision.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Banish Scalpels and Sutures</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  Laser dentistry is one of the most exciting advancements in modern patient care. By concentrating energy into microscopic beams, we target infected gum pockets or reshape your gum line with zero physical blade contact.
                </p>
                <p>
                  As the laser works, it instantly cauterizes nerve endings and blood vessels, resulting in an exceptionally comfortable procedure with minimal swelling, no bleeding, and incredibly rapid tissue healing.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs font-sans text-slate-600 font-medium">
                <li className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Beautifully reshapes asymmetrical gummy smiles within minutes</li>
                <li className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Vaporizes deep periodontal bacteria with zero scraping pain</li>
                <li className="flex items-center gap-2"><span className="text-brand-teal font-extrabold">✓</span> Minimizes post-operative swelling and requires no stitches</li>
              </ul>
            </div>
          </div>
        )}

        {subPage === 'dentures' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Hand-Crafted In-Office Laboratory Dentures</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  Generic mass-manufactured dentures look flat, artificial, and often rub persistently. Our in-house dental laboratory specializes in designing bespoke full or partial dentures crafted to fit your unique bone anatomy.
                </p>
                <p>
                  Our lab technician places every ceramic tooth individually, adjusting the rotations, colors, and physical borders to match your facial profile. We also design implant-supported dentures that anchor securely onto post anchors, preventing slippage.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-2 shadow-sm shadow-slate-150/20">
                <span className="text-xs text-brand-teal font-mono uppercase block font-bold">The Implant supported update</span>
                <p className="text-2xs text-slate-600 leading-relaxed font-sans mt-1">
                  By placing just two or four implants, we can design custom overdentures that snap on and off secure gold locators. Say goodbye to messy adhesive pastes!
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
                  alt="High quality custom dental mold"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                  referrerPolicy="no-referrer"
                />
                <h3 className="font-serif text-base text-brand-navy font-bold">Our In-Office Tech Difference</h3>
                <p className="text-2xs text-slate-600 font-sans mt-1">
                  Because our laboratory is under our Abilene roof, we can inspect, adjust, and re-glaze your dentures in real-time, eliminating week-long wait times.
                </p>
              </div>
            </div>
          </div>
        )}

        {subPage === 'tooth-extraction' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <h3 className="font-serif text-base text-brand-navy font-bold">Gentle Extraction Protections</h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  We prioritize gentle bone-preservative extraction methods to keep surgical sites clean and prepare the area for a future dental implant.
                </p>
                <ul className="space-y-1.5 text-2xs text-slate-500 font-sans font-medium">
                  <li>• Safe surgical removal of wisdom teeth</li>
                  <li>• In-house socket preservation & bone-graft overlays</li>
                  <li>• Safe biological sterile equipment setups</li>
                  <li>• Custom sedation tiers to drift away peacefully</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Gentle Surgical Root extraction</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  While our primary objective is always to preserve your biological teeth, massive decay, deep structural fractures, or advanced periodontal bone loss can render a tooth unsalvageable. Leaving an infected tooth in place can spread bacteria to other parts of your body.
                </p>
                <p>
                  Our gentle oral extraction therapies prioritize tissue preservation. We gently loosen the tooth within its socket to prevent bone damage and place specialized matrix scaffolds to support fast healing.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-2xs font-sans text-slate-600 italic shadow-sm">
                "Following extraction, we provide detailed biological recovery plans and custom prescription options to guarantee your comfort at home."
              </div>
            </div>
          </div>
        )}

        {subPage === 'root-canal' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Save Your Compromised Natural Tooth</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  Root canal therapy is often misunderstood as painful. In reality, it is a highly effective procedure designed to *eliminate* the intense pain caused by an infected or abscessed tooth pulp.
                </p>
                <p>
                  Using specialized micro-endodontic rotary systems, we access the inner canals, flush out diseased pulp tissues and bacteria, seal the space with sterile bio-fillings, and protect the tooth structure with a custom ceramic crown made on-site.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 text-xs shadow-sm">
                <span className="text-brand-teal uppercase tracking-wider block font-bold font-sans">Painless micro-rotary instruments</span>
                <p className="text-slate-605">
                  Older mechanical hand-drills caused long vibrational soreness. Our precise nickel-titanium motorized rotors are incredibly quiet and clean the canals in minutes, with zero soreness.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop"
                  alt="Cinematic Root Canal Clinical comfort therapy"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                  referrerPolicy="no-referrer"
                />
                <h3 className="font-serif text-base text-brand-navy font-bold">Restoring Lifetime Function</h3>
                <p className="text-2xs text-slate-605 font-sans leading-relaxed mt-1 font-medium">
                  Once protected by one of our custom porcelain crowns, your treated tooth will function perfectly and masticate identically to native healthy teeth for a lifetime.
                </p>
              </div>
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
            Request Restorative Booking →
          </button>
        </div>

      </div>
    </div>
  );
}
