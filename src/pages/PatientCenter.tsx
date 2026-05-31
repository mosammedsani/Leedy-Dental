import { Calendar, ShieldCheck, DollarSign, Smartphone, Heart, Zap, FileText } from 'lucide-react';
import { PageId } from '../types';

interface PatientCenterProps {
  subPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function PatientCenter({ subPage, onNavigate }: PatientCenterProps) {

  return (
    <div className="bg-white text-slate-800 min-h-[85vh] py-16 px-4 md:px-8 selection:bg-brand-teal selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Title area */}
        <div className="border-b border-brand-navy/10 pb-8 space-y-3">
          <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block font-bold">
            Concierge Patient Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            {subPage === 'patient-center' && 'Patient Center & Resource Hub'}
            {subPage === 'insurance-financing' && 'Insurance Maximize & Financing Options'}
            {subPage === 'advanced-technology' && 'State-of-the-Art Diagnostic Technology'}
          </h1>
          <p className="text-sm text-slate-600 font-sans max-w-3xl leading-relaxed">
            {subPage === 'patient-center' && 'Access clinical forms, prepare for your first visit, download surgical aftercare plans, and review details designed to keep your dental journey perfectly clear.'}
            {subPage === 'insurance-financing' && 'We fit world-class restorations into standard budgets. Explore dental insurance coordination and leading healthcare credit platforms with quick application portals.'}
            {subPage === 'advanced-technology' && 'We have heavily invested in the leading edge of clinical medicine. From low-dose 3D Cone Beam computed tomography to our premium on-site custom CAD/CAM dental lab.'}
          </p>
        </div>

        {/* Subpage sections */}
        {subPage === 'patient-center' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Streamlined Guest Care</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  To make your first visit as smooth as possible, we coordinate all paperwork digitally. You can fill out your patient intake forms and submit insurance details through our secure online link prior to arriving at our Abilene clinic.
                </p>
                <p>
                  During your initial comprehensive examination, our treatment coordinators will walk you through your diagnostic images step-by-step, explaining your clinical options and building a transparent, clear cost estimate.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex gap-3 text-xs items-center shadow-sm">
                  <FileText className="text-brand-teal shrink-0" />
                  <div>
                    <span className="text-brand-navy block font-bold">New Patient Forms</span>
                    <span className="text-slate-500 text-[10px] block font-medium mt-0.5">Fill out digitally in under 10 minutes</span>
                  </div>
                </div>
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex gap-3 text-xs items-center shadow-sm">
                  <ShieldCheck className="text-brand-teal shrink-0" />
                  <div>
                    <span className="text-brand-navy block font-bold">First Exam Guidelines</span>
                    <span className="text-slate-500 text-[10px] block font-medium mt-0.5">No-radiation checkup details</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1" />

            <div className="lg:col-span-4">
              <div className="bg-white border border-slate-100 p-6 rounded-3xl space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <h3 className="font-serif text-base text-brand-navy font-bold">Your First Appointment Checklist</h3>
                <ul className="space-y-3 text-2xs text-slate-600 font-sans font-medium">
                  <li className="flex items-center gap-2">✓ Photo identification and active insurance card</li>
                  <li className="flex items-center gap-2">✓ List of current physical prescriptions you take</li>
                  <li className="flex items-center gap-2">✓ Previous dental x-ray files if captured recently</li>
                  <li className="flex items-center gap-2">✓ Your desired cosmetic or implant goals</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {subPage === 'insurance-financing' && (
          <div className="space-y-12">
            
            {/* Split billing details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white border border-slate-100 p-8 rounded-3xl space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
                  <ShieldCheck className="text-brand-teal w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-navy">Dental Insurance Optimization</h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  We maximize your benefits. Our expert insurance specialist coordinates with popular dental insurance providers. We handle the paperwork, submit clinical evidence, and verify what is covered to minimize your out-of-pocket expenses.
                </p>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-2xs text-slate-500 font-medium leading-relaxed">
                  ⚠ Note: Standard medical or dental insurance can often cover elements of surgical extractions, periodontal treatments, or crown setups. Contact us to verify your specific plan.
                </div>
              </div>

              <div className="bg-white border border-slate-100 p-8 rounded-3xl space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
                  <DollarSign className="text-brand-teal w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-navy">Flexible Patient Financing</h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Elite cosmetic and implant dentistry is a long-term investment in your physical well-being. We work with leading healthcare financial partners to secure manageable monthly installment plans, making treatment affordable.
                </p>

                <div className="space-y-3 font-sans">
                  <a
                    href="https://www.carecredit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-teal/50 transition-colors shadow-sm"
                  >
                    <div>
                      <span className="text-xs text-brand-navy block font-bold">CareCredit® Healthcare Finance</span>
                      <span className="text-[10px] text-slate-500 block pt-0.5">0% interest plans for qualified applicants</span>
                    </div>
                    <span className="text-2xs text-brand-teal block font-mono font-bold">Apply Now →</span>
                  </a>

                  <a
                    href="https://www.proceedfinance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-teal/50 transition-colors shadow-sm"
                  >
                    <div>
                      <span className="text-xs text-brand-navy block font-bold">Proceed Finance®</span>
                      <span className="text-[10px] text-slate-500 block pt-0.5">Extended terms up to 84 months with low fixed rates</span>
                    </div>
                    <span className="text-2xs text-brand-teal block font-mono font-bold">Apply Now →</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        )}

        {subPage === 'advanced-technology' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2.5xl font-bold text-brand-navy">Medical Leadership in Dental Technology</h2>
              <div className="space-y-4 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  Deploying cutting-edge technology leads to safer, faster, and more comfortable treatments. Our high-resolution 3D Cone Beam CBCT scanner captures detailed anatomical data of your jaw structure, nerve pathways, and nasal sinuses, ensuring safe implant surgery.
                </p>
                <p>
                  Additionally, our in-office CAD/CAM digital lab utilizes advanced ceramic milling units to hand-shade and produce porcelain teeth in hours rather than weeks, guaranteeing absolute aesthetic control.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-brand-teal block font-mono text-xs uppercase font-extrabold">3D CBCT DIAGNOSTICS</span>
                  <span className="text-2xs text-slate-500 mt-1 block font-sans font-medium">Low-dose, comprehensive imaging</span>
                </div>
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-brand-teal block font-mono text-xs uppercase font-extrabold">CAD/CAM Milling Precision</span>
                  <span className="text-2xs text-slate-500 mt-1 block font-sans font-medium">Custom-designed teeth in hours</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1" />

            <div className="lg:col-span-4">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 relative overflow-hidden text-center space-y-4 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-brand-teal mx-auto">
                  ⌬
                </div>
                <h3 className="font-serif text-lg text-brand-navy font-bold">Technology Stack</h3>
                <p className="text-2xs text-slate-600 font-sans mt-2 leading-relaxed">
                  We use special digital oral scanners (such as Trios) to eliminate uncomfortable plaster impressions.
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
            Request Diagnostic Consultation →
          </button>
        </div>

      </div>
    </div>
  );
}
