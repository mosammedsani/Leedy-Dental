import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send, ShieldCheck, CheckSquare, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'implant-reconstruction',
    message: '',
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-white text-slate-800 min-h-[85vh] py-16 px-4 md:px-8 selection:bg-brand-teal selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Editorial Subpage Title Area */}
        <div className="border-b border-brand-navy/10 pb-8 space-y-3">
          <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block font-bold">
            Patient Concierge Care Active Network
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            Connect With Leedy Dental
          </h1>
          <p className="text-sm text-slate-600 font-sans max-w-3xl leading-relaxed">
            Ready to experience world-class luxury dental care in Abilene, Texas? Connect with our dedicated patient coordinators directly via telephone, or fill out our priority digital callback form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Coordinates & Interactive simulation map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Coordinate Cards */}
            <div className="space-y-6">
              
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-brand-teal uppercase tracking-wider block font-bold">
                    Clinic Location
                  </span>
                  <a
                    href="https://maps.google.com/?q=2902+S+27th+St,+Abilene,+TX+79605"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-navy hover:text-brand-teal hover:underline font-serif text-[15px] font-bold block leading-tight"
                  >
                    2902 S 27th St. <br />
                    Abilene, Texas 79605
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1 w-full">
                  <span className="text-[10px] font-mono text-brand-teal uppercase tracking-wider block font-bold">
                    Callback Direct Lines
                  </span>
                  <div className="space-y-1.5 font-sans mt-1">
                    <div className="text-xs text-slate-600 font-medium">
                      New Patients Call:{' '}
                      <a href="tel:3252387772" className="text-brand-navy hover:text-brand-teal font-extrabold underline block text-sm mt-0.5">
                        (325) 238-7772
                      </a>
                    </div>
                    <div className="text-xs text-slate-550 border-t border-slate-205 pt-1.5 mt-1.5">
                      Current Patients Call:{' '}
                      <a href="tel:3256921501" className="text-brand-navy hover:text-brand-teal font-extrabold block text-sm mt-0.5">
                        (325) 692-1501
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-brand-teal uppercase tracking-wider block font-bold">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:office@leedydental.com"
                    className="text-brand-navy hover:text-brand-teal hover:underline font-serif text-sm font-bold block leading-tight mt-1"
                  >
                    office@leedydental.com
                  </a>
                  <span className="text-[10px] text-slate-500 block font-sans font-medium mt-1">
                    Expect responses within 24 business hours.
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                    Clinic Operating Hours
                  </span>
                  <p className="text-xs text-slate-600 font-sans font-medium mt-1">
                    Mon - Thu: <strong className="text-brand-navy font-bold">8:00 AM - 5:00 PM</strong> <br />
                    Fri - Sun: Closed
                  </p>
                </div>
              </div>

            </div>

            {/* Immersive interactive map simulation */}
            <div className="bg-white border border-slate-105 rounded-3xl p-5 space-y-3 relative overflow-hidden shadow-md">
              <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block font-bold">
                Abilene, Texas Clinic Map
              </span>
              <div className="aspect-[16/10] bg-slate-50 rounded-2xl border border-slate-100 relative flex items-center justify-center overflow-hidden shadow-inner">
                {/* Visual stylized roadmap vector lines placeholder */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10%" y1="0%" x2="10%" y2="100%" stroke="#02638b" strokeWidth="2" />
                    <line x1="40%" y1="0%" x2="40%" y2="100%" stroke="#02638b" strokeWidth="1" />
                    <line x1="80%" y1="0%" x2="80%" y2="100%" stroke="#02638b" strokeWidth="3" />
                    <line x1="0%" y1="30%" x2="100%" y2="30%" stroke="#02638b" strokeWidth="2.5" />
                    <line x1="0%" y1="70%" x2="100%" y2="70%" stroke="#02638b" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="text-center p-6 space-y-2 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center mx-auto shadow-md shadow-rose-500/20 animate-bounce">
                    📍
                  </div>
                  <h4 className="text-xs font-serif text-brand-navy font-bold block">Leedy Dental Abilene Clinic</h4>
                  <p className="text-[10px] text-slate-500 font-sans font-medium max-w-xs">
                    Located on S 27th St., easily reachable from everywhere in central West Texas.
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=2902+S+27th+St,+Abilene,+TX+79605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 text-[10px] font-mono bg-brand-navy/90 hover:bg-brand-teal text-white px-2.5 py-1.5 rounded font-bold transition-all"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Callback request form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-105 rounded-3xl p-8 space-y-6 relative overflow-hidden shadow-xl shadow-slate-100/60">
              
              <div className="space-y-2 pb-4 border-b border-slate-100">
                <h3 className="font-serif text-xl font-bold text-brand-navy">Priority Callback Request Form</h3>
                <p className="text-xs text-slate-500 font-sans">
                  Submit details to our clinical patient concierge. We secure callback times that align with your schedule.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-lg font-bold">
                    ✓
                  </div>
                  <h4 className="font-serif text-lg text-emerald-800 font-bold">Thank You. Your Request is Received.</h4>
                  <p className="text-xs text-slate-600 font-sans max-w-sm mx-auto leading-relaxed">
                    Our intake coordinators have registered your priority timeline. One of our staff experts will call your mobile number shortly to setup your dental consultation.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-2xs font-mono text-brand-teal uppercase tracking-wider font-extrabold hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs font-sans">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Johnathan Vance"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:border-brand-teal focus:outline-none placeholder-slate-400 font-sans transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Callback Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (325) 555-0182"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:border-brand-teal focus:outline-none placeholder-slate-400 font-sans transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. email@domain.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:border-brand-teal focus:outline-none placeholder-slate-400 font-sans transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Desired Diagnostic Scope</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:border-brand-teal focus:outline-none font-sans"
                    >
                      <option value="implant-reconstruction">Full-Mouth Implant Rehabilitation</option>
                      <option value="single-posts">Individual/Multiple Dental Implants</option>
                      <option value="smile-makeover">Cosmetic Smile Makeover (Veneers)</option>
                      <option value="sedation-anxiety">Sedation Dental Care Consultation</option>
                      <option value="preventive-general">Family Preventive Dental Checkup</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Specific Clinical Conditions / Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly state your dental restoration goals or clinical conditions..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:border-brand-teal focus:outline-none placeholder-slate-400 font-sans resize-none transition-all"
                    />
                  </div>

                  {/* HIPPA warning agreement */}
                  <div className="flex gap-3">
                    <input
                      type="checkbox"
                      required
                      id="agreed-hippa"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-200 bg-slate-50 text-brand-teal accent-brand-teal"
                    />
                    <label htmlFor="agreed-hippa" className="text-[10px] text-slate-500 leading-snug cursor-pointer select-none font-medium">
                      I authorize Leedy Dental to communicate priority therapy callbacks via telephone or email. I understand that submitting medical data digitally falls under high-privacy HIPAA standard regulations. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#d57a34] hover:bg-[#c26a2a] text-white font-display font-bold py-4 rounded-xl text-center shadow-md transition-all duration-300 flex items-center justify-center gap-2 group border border-transparent disabled:opacity-50 pointer-events-auto cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Sending Request...' : 'Submit Priority Consultation'}</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
