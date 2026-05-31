import { useState } from 'react';
import { Award, ShieldCheck, Heart, User, CheckCircle, Clock } from 'lucide-react';
import { DOCTORS, TEAM_MEMBERS, TESTIMONIALS } from '../data/content';
import { PageId } from '../types';

interface AboutUsProps {
  subPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function AboutUs({ subPage, onNavigate }: AboutUsProps) {

  return (
    <div className="bg-white text-slate-800 min-h-[85vh] py-16 px-4 md:px-8 selection:bg-brand-teal selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Title Block */}
        <div className="border-b border-brand-navy/10 pb-8 space-y-3">
          <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block font-bold">
            The Leedy Dental Practice Legacy
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            {subPage === 'about-us' && 'About Our Historic Practice'}
            {subPage === 'meet-doctors' && 'Meet Our Board-Certified Clinicians'}
            {subPage === 'meet-team' && 'Meet Our Wonderful Dental Team'}
            {subPage === 'before-after' && 'Smile Restoration Results Gallery'}
            {subPage === 'video-testimonials' && 'Patient Video Testimonials'}
            {subPage === 'our-facility' && 'Our Master Surgical & Lab Facility'}
            {subPage === 'educational-videos' && 'Clinical Educational Video Series'}
            {subPage === 'community-smiles' && 'Community Smiles & Local Outreach'}
            {subPage === 'blog' && 'Our Advanced Dental Journal & Blog'}
          </h1>
          <p className="text-sm text-slate-600 font-sans max-w-3xl leading-relaxed">
            {subPage === 'about-us' && 'Serving Abilene, Texas for over three decades. Leedy Dental delivers a rare tier of cosmetic, surgical, and implant excellence by operating as a biological specialty hub.'}
            {subPage === 'meet-doctors' && 'Our team of physical and biomimetic dental surgeons hold extensive postgraduate academic credentials inside dental implantology, cosmetic reconstruction, and gentle sedation safety.'}
            {subPage === 'meet-team' && 'From our practice coordinator to our in-house dental lab master technician, our staff is dedicated to ensuring a secure and comfortable clinical experience.'}
            {subPage === 'before-after' && 'View real physical smile makeovers, tooth reconstructions, and implant-supported denture restorations designed right inside our Abilene clinic.'}
            {subPage === 'video-testimonials' && 'Watch authentic, heartfelt interviews of our patients outlining how full-mouth dental implants or smile makeovers restored their confidence, health, and comfort.'}
            {subPage === 'our-facility' && 'Explore our space featuring hospital-grade sterile surgical suites, dynamic low-radiation 3D imaging setups, and our own on-site CAD/CAM dental craft lab.'}
            {subPage === 'educational-videos' && 'Review structured digital videos created to explain periodontal health, bone-scaffold healing, dental implant placement safety, and ceramic care.'}
            {subPage === 'community-smiles' && 'We are deeply rooted in Abilene. Learn about our local charitable outreach, clinical sponsorships, and free dental clinics provided to those in need.'}
            {subPage === 'blog' && 'Our clinical journal outlines the latest guidelines on oral health, nutritional biology, smile chemistry, and advanced tooth restorative science.'}
          </p>
        </div>

        {/* Modular elements */}
        {subPage === 'about-us' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-medium text-brand-navy">Over 35 Years of Combined Restorations</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  At Leedy Dental, we believe that restoring a smile is more than just standard mechanical work. It is an act of deep empathy, physical healing, and aesthetic art. Founded over three decades ago by Dr. Robert Leedy, our practice has grown into Abilene's premiere center for complex full-mouth reconstructions and cosmetic smile makeovers.
                </p>
                <p>
                  By grouping certified implant surgeons, aesthetic designers, registered dental hygienists, and a master ceramist under single guidance, we protect your health while providing an exceptionally peaceful, comfortable journey.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-xl text-brand-teal block font-mono font-bold">15,000+</span>
                  <span className="text-[10px] text-slate-500 block font-sans font-medium uppercase tracking-wide">Dental Implaced Restorations</span>
                </div>
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-xl text-brand-teal block font-mono font-bold">Abilene Local</span>
                  <span className="text-[10px] text-slate-500 block font-sans font-medium uppercase tracking-wide">In-Office Premium Art Lab</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-md">
                <img
                  src="/src/assets/images/luxury_dental_reception_1780233969583.png"
                  alt="Elite Lobby Setup"
                  className="w-full h-48 object-cover rounded-2xl mb-4 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <h3 className="font-serif text-base text-brand-navy font-semibold">Full-Arch Specialty Hub</h3>
                <p className="text-2xs text-slate-600 font-sans leading-relaxed mt-1">
                  We are engineered to resolve high-complexity cases. For individuals with substantial bone loss or failed restorations, we coordinate diagnostic, surgical, and prosthetic steps in-house.
                </p>
              </div>
            </div>
          </div>
        )}

        {subPage === 'meet-doctors' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {DOCTORS.map((doc) => (
                <div
                  key={doc.name}
                  className="bg-white border border-slate-100 rounded-3xl p-6 space-y-6 shadow-lg shadow-slate-100/80 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full sm:w-40 h-48 object-cover rounded-2xl shrink-0 shadow-sm border border-slate-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-brand-teal uppercase tracking-wider font-bold">
                        Abilene Certified Expert
                      </span>
                      <h3 className="font-serif text-lg text-brand-navy font-bold block">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-brand-teal font-sans font-semibold">
                        {doc.title}
                      </p>
                      <p className="text-2xs text-slate-600 leading-relaxed font-sans font-normal">
                        {doc.bio}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4 text-2xs font-sans">
                    <div>
                      <strong className="text-brand-navy block font-bold mb-1 uppercase tracking-wider">Academic Honors</strong>
                      <ul className="space-y-1 text-slate-600">
                        {doc.credentials.map((cred) => (
                          <li key={cred} className="flex items-start gap-1">
                            <span className="text-brand-teal">✓</span>
                            <span>{cred}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong className="text-brand-navy block font-bold mb-1 uppercase tracking-wider">Board Memberships</strong>
                      <ul className="space-y-1 text-slate-600">
                        {doc.memberships.map((mem) => (
                          <li key={mem} className="flex items-start gap-1">
                            <span className="text-brand-teal">✓</span>
                            <span>{mem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {subPage === 'meet-team' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEAM_MEMBERS.map((team) => (
                <div
                  key={team.name}
                  className="bg-white border border-slate-100 rounded-2xl p-5 space-y-3 shadow-md shadow-slate-100/50 hover:border-brand-teal/20 transition-all duration-200"
                >
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="font-serif text-base text-brand-navy font-bold">{team.name}</span>
                    <span className="text-[10px] font-mono text-brand-teal block bg-brand-teal/5 px-2.5 py-0.5 rounded-full uppercase font-bold">
                      {team.role}
                    </span>
                  </div>
                  {team.quote && (
                    <p className="text-2xs text-slate-600 font-sans italic leading-relaxed">
                      “ {team.quote} ”
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {subPage === 'before-after' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: 'case1',
                  title: 'Full Arch Ceramic Implants Restoration',
                  category: 'Dental Implants Reconstructive',
                  quote: 'Danny can eat and smile with total biological security.'
                },
                {
                  id: 'case2',
                  title: 'Hollywood-Grade Porcelain Veneers Makeover',
                  category: 'Cosmetic Veneers Alignment',
                  quote: 'Cecilia restored natural tooth outlines with zero gray lines.'
                },
                {
                  id: 'case3',
                  title: 'Implant-Supported Overdentures Fit',
                  category: 'Denture Secure Anchorage',
                  quote: 'George bid goodbye to loose, painful sliding plates.'
                }
              ].map((c) => (
                <div key={c.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden p-5 space-y-4 text-center shadow-md shadow-slate-100/50 hover:shadow-lg transition-all">
                  <div className="aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center relative">
                    <div className="text-center p-6 space-y-2">
                      <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mx-auto">
                        ★
                      </div>
                      <span className="text-xs text-brand-navy uppercase tracking-wider block font-bold">{c.title}</span>
                      <span className="text-2xs text-slate-550 block font-sans">{c.category}</span>
                    </div>
                  </div>
                  <p className="text-2xs text-slate-600 font-sans italic leading-snug">
                    “ {c.quote} ”
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {subPage === 'video-testimonials' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 'Dkaf_Tt_yw4', name: 'Cecilia’s Transformation' },
                { id: '3tOPQvNwEW4', name: 'Danny’s Smile Reveal' },
                { id: 'jPeIeNKOgB4', name: 'George’s Denture Relief' },
                { id: 'wISlwcmvxkA', name: 'Kristy’s Relief from Anxiety' },
                { id: 'xPx7mpYSkYY', name: 'Don’s Multiple Implants' }
              ].map((video) => (
                <div key={video.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden p-3 relative text-center shadow-md hover:shadow-lg transition-all">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.name}
                      className="w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/20" />
                  </div>
                  <span className="font-serif text-sm text-brand-navy font-bold block">{video.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {subPage === 'our-facility' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-100 p-6 rounded-3xl space-y-3 text-center shadow-md hover:shadow-lg transition-all">
                <span className="text-xl text-brand-teal font-extrabold">✙</span>
                <h3 className="font-serif text-base text-brand-navy font-bold">Sterile Surgical Suites</h3>
                <p className="text-2xs text-slate-600 leading-relaxed font-sans">
                  Designed specifically to host surgical dental implant placement and deep bone graft processes under rigorous hospital-grade sanitization standards.
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-6 rounded-3xl space-y-3 text-center shadow-md hover:shadow-lg transition-all">
                <span className="text-xl text-brand-teal font-extrabold">⌬</span>
                <h3 className="font-serif text-base text-brand-navy font-bold">In-Office CAD/CAM Lab</h3>
                <p className="text-2xs text-slate-600 leading-relaxed font-sans">
                  Manned by our certified technologist, crafting solid zirconia or lithium disilicate crowns and bridges inside Abilene, Texas.
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-6 rounded-3xl space-y-3 text-center shadow-md hover:shadow-lg transition-all">
                <span className="text-xl text-brand-teal font-extrabold">❖</span>
                <h3 className="font-serif text-base text-brand-navy font-bold">Immersive Virtual Tour</h3>
                <p className="text-2xs text-slate-600 leading-relaxed font-sans">
                  From luxurious champagne tones in the reception area to our high-tech diagnostics, we keep patient rooms peaceful and beautifully clean.
                </p>
              </div>
            </div>
          </div>
        )}

        {subPage === 'educational-videos' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans text-slate-600">
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 shadow-sm">
                <h3 className="font-serif text-base text-brand-navy font-bold">Dental Implants Bone Healing Journey</h3>
                <p>
                  Explore how a medical titanium post integrates directly with natural bone structure over three to six months through a biological process called osseointegration.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 shadow-sm">
                <h3 className="font-serif text-base text-brand-navy font-bold">Porcelain Veneers Preparation Safety</h3>
                <p>
                  Understand our biomimetic approach as we remove minimal surface enamel to securely bond micro-thin, hand-shaped ceramic shells.
                </p>
              </div>
            </div>
          </div>
        )}

        {subPage === 'community-smiles' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-sans">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Deeply Rooted in Abilene, Texas</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Leedy Dental believes that wellness should radiate throughout our home community. Dr. Robert Leedy, Dr. Nikki Green, and our clinical team regularly sponsor community school athletic organizations and provide free screening clinics.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                We take proud participation in West Texas philanthropy to safeguard biological smiles for those who need access.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl text-center space-y-3 shadow-sm">
                <em className="font-serif text-sm text-brand-teal font-semibold">"Restoring Abilene's health, one smile at a time."</em>
              </div>
            </div>
          </div>
        )}

        {subPage === 'blog' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans">
              <div className="bg-white border border-slate-100 p-6 rounded-2xl space-y-3 shadow-md hover:shadow-lg transition-all">
                <span className="text-[10px] text-brand-teal uppercase font-mono block font-bold">Clinical Biology</span>
                <h3 className="font-serif text-base text-brand-navy font-bold">The Critical Link Between Oral Health and Cardiac Well-being</h3>
                <p className="text-slate-600">
                   periodontal disease pathogens can enter tissue capillaries, creating inflammation throughout heart arterial networks. Proper gum care helps safeguard systemic cardiovascular health.
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-6 rounded-2xl space-y-3 shadow-md hover:shadow-lg transition-all">
                <span className="text-[10px] text-brand-teal uppercase font-mono block font-bold">Aesthetics</span>
                <h3 className="font-serif text-base text-brand-navy font-bold">Zirconia vs. High-Purity E-max Porcelains</h3>
                <p className="text-slate-600">
                  Discover how our in-office lab ceramist selects IPS e.max lithium silicate for high-translucency canine and incisor veneers while saving durable medical zirconia for heavy molars.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Home option */}
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
            Book A Consultation Guest Visit →
          </button>
        </div>

      </div>
    </div>
  );
}
