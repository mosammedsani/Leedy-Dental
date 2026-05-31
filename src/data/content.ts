import { Doctor, TeamMember, Testimonial, FAQItem } from '../types';

export const DOCTORS: Doctor[] = [
  {
    name: 'Dr. Robert W. Leedy',
    title: 'Founder & Master Implantologist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop',
    bio: 'With over 35 years of dedicated clinical experience, Dr. Robert W. Leedy is widely recognized as a pioneer in full-mouth reconstruction and surgical dental implant placements. He combines a master artisan’s eye for aesthetics with the highest levels of clinical precision, enabling him to successfully restore even the most complex dental cases. Dr. Leedy is deeply committed to state-of-the-art techniques and operates our in-office dental lab to oversee custom restorations from start to finish.',
    credentials: [
      'Doctor of Dental Surgery (DDS)',
      'Fellow of the International Congress of Oral Implantologists (FICOI)',
      'Mastership, Las Vegas Institute for Advanced Dental Studies (LVI)',
      'Over 35 Years of Combined Surgical & Restorative Experience'
    ],
    memberships: [
      'American Dental Association (ADA)',
      'Texas Dental Association (TDA)',
      'Academy of General Dentistry (AGD)',
      'International Congress of Oral Implantologists (ICOI)'
    ]
  },
  {
    name: 'Dr. Nikki Green',
    title: 'Lead Cosmetic & Restorative Dentist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    bio: 'Dr. Nikki Green is an acclaimed cosmetic dentist specializing in life-changing Smile Makeovers, full-mouth porcelain veneers, and invisalign restorations. Her clinical philosophy focuses on the intersection of biological health, pristine structure, and individualized natural beauty. She believes that a smile makeover is not just structural work, but an emotional renewal that boosts life-long confidence.',
    credentials: [
      'Doctor of Dental Surgery (DDS)',
      'Advanced Aesthetic Reconstruction Certification',
      'Invisalign® Preferred Provider',
      'Expert in Computer-Aided SMILE Design (CAD/CAM)'
    ],
    memberships: [
      'American Academy of Cosmetic Dentistry (AACD)',
      'American Dental Association (ADA)',
      'Texas Dental Association (TDA)'
    ]
  },
  {
    name: 'Dr. Justina Boles',
    title: 'Family & Advanced Restorative Dentist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
    bio: 'Dr. Justina Boles provides compassionate, advanced general and restorative dental care with specialized training in treating nervous patients through modern sedation dentistry. She leverages early-detection laser technologies and state-of-the-art conservative therapies to protect natural tooth structures while creating incredibly comfortable patient experiences.',
    credentials: [
      'Doctor of Dental Surgery (DDS)',
      'Certified Moderate Parenteral Conscious Sedation Provider',
      'Laser Dentistry Certified Specialist',
      'Comprehensive Biomimetic Restorations Specialist'
    ],
    memberships: [
      'American Dental Association (ADA)',
      'Academy of General Dentistry (AGD)',
      'Texas Dental Association (TDA)'
    ]
  },
  {
    name: 'Dr. Tanner Hutchinson',
    title: 'Clinical Oral Surgery & Implant Specialist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop',
    bio: 'Dr. Tanner Hutchinson focuses on advanced digital workflows in implant placements and complex oral surgeries. He manages complex bone grafting, sinus lifts, and surgical teeth extractions inside our dedicated sterile surgical suites. By incorporating 3D cone-beam computed tomography (CBCT) and virtual guided-surgery software, Dr. Hutchinson ensures optimal, high-precision results.',
    credentials: [
      'Doctor of Dental Surgery (DDS)',
      'Advanced Bone Grafting & Sinus Lift Specialist',
      'Precision Guided Implant Surgery Expert',
      'Advanced IV Sedation Certified'
    ],
    memberships: [
      'American Dental Association (ADA)',
      'International Congress of Oral Implantologists (ICOI)',
      'Texas Dental Association (TDA)'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Ticia', role: 'Practice Administrator', quote: 'I am honored to welcome patients into our state-of-the-art home and guide them through their transformative care plan.' },
  { name: 'Rickie', role: 'Patient Coordinator', quote: 'Helping our patients feel comfortable and informed is the highlight of my day.' },
  { name: 'Rachael', role: 'Registered Dental Hygienist', quote: 'Preventative care is the foundation of long-term biological health and vibrant smiles.' },
  { name: 'Lacey', role: 'Lead Dental Assistant', quote: 'Working alongside our world-class doctors in our surgical suites to witness life-changing smile reveals is incredible.' },
  { name: 'Misty', role: 'In-Office Lab Technician', quote: 'Hand-crafting individual teeth in our on-site laboratory guarantees absolute custom perfection for every patient.' },
  { name: 'Chelsi', role: 'Insurance Specialist', quote: 'My goal is to help patients maximize their benefits so they can comfortably access elite dental care.' },
  { name: 'Patty', role: 'Surgical Assistant', quote: 'Ensuring absolute sterile safety and total patient relaxation during surgical procedures is my key priority.' },
  { name: 'Kaci', role: 'Hygiene Coordinator', quote: 'I love keeping our patients smiling and keeping their routine oral wellness perfectly on track.' },
  { name: 'Taylor', role: 'Marketing Director', quote: 'Sharing our patients’ deep, emotional transformation videos reminds me why Leedy Dental is so unique.' },
  { name: 'Noah', role: 'Clinical Assistant', quote: 'I am proud to assist with our state-of-the-art laser and digital imaging systems.' },
  { name: 'Cheyenne', role: 'Registered Dental Hygienist', quote: 'Building long-term personal relationships while maintaining clinical hygiene and health is my passion.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Cecilia',
    type: 'Dental Implants Patient',
    quote: 'The care and support I received at Leedy Dental were unlike anything I’ve ever experienced in healthcare. My brand new full-mouth dental implants have changed my life completely—I can smile with supreme confidence and eat anything I want without pain.',
    treatment: 'Full Mouth Dental Implants'
  },
  {
    name: 'Danny',
    type: 'Smile Makeover Patient',
    quote: 'I used to hide my teeth in photos and in public. Dr. Green and the team custom-designed my custom porcelain veneers inside their on-site lab, and the results are incredibly natural. People tell me I look ten years younger, and the confidence boost is massive.',
    treatment: 'Smile Makeover'
  },
  {
    name: 'Don',
    type: 'Missing Teeth Patient',
    quote: 'I had multiple missing teeth on my lower jaw and my food choices were extremely limited. The team placed individual dental implants in a seamless, pain-free surgery under light sedation. I can’t tell the difference between the implants and my natural teeth. Amazing job!',
    treatment: 'Multiple Implants'
  },
  {
    name: 'George',
    type: 'Loose Dentures Patient',
    quote: 'My old dentures were always slipping and hurting. Coming to Leedy Dental for in-office implant-supported dentures was the best investment I’ve ever made. They lock firmly into place and look absolutely outstanding. Exceptional practice!',
    treatment: 'Implant-Supported Dentures'
  },
  {
    name: 'Kirby',
    type: 'Cosmetic Dentistry Patient',
    quote: 'From teeth whitening to a beautiful crown replacement, the meticulous attention to detail is world-class. The luxury environment with champagne accents and frosted glass made me feel like I was in a high-end wellness resort rather than a dental chair.',
    treatment: 'Teeth Whitening & Crowns'
  },
  {
    name: 'Kristy',
    type: 'Sedation Patient',
    quote: 'I had severe dental anxiety for over two decades. The doctors at Leedy Dental listened to my fears with pure compassion and explained my sedation options, customized for my comfort. The treatment was 100% painless, and I felt completely relaxed.',
    treatment: 'Sedation Dentistry'
  },
  {
    name: 'Tammy',
    type: 'Laser Dentistry Patient',
    quote: 'The advanced laser gum disease treatment was quick, comfortable, and didn’t require any sutures or scalpels. My gums are completely healthy now. This clinic utilizes incredible technology!',
    treatment: 'Gum Disease Treatment'
  },
  {
    name: 'Rick',
    type: 'Full Mouth Implants Patient',
    quote: 'Over 35 years of experience really shows. Dr. Leedy is a master surgical artist. The dedicated surgical suites, the in-office digital CAD/CAM dental lab, and the wonderful staff combined to make my full-mouth rehabilitation a smooth, world-class experience.',
    treatment: 'Full Mouth Rehabilitation'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Dental Implants',
    question: 'What are the primary benefits of dental implants compared to traditional dentures?',
    answer: 'Dental implants are surgically anchored directly into the jawbone, acting as artificial tooth roots. Unlike traditional dentures which can shift, slide, cause painful sores, and lead to jawbone deterioration over time, dental implants stimulate the bone, permanent secure restorations, restore 95% of chewing capacity, and prevent facial collapsing.'
  },
  {
    category: 'Dental Implants',
    question: 'How long does the dental implant placement and restoration process take?',
    answer: 'The standard timeline ranges from 3 to 6 months depending on bone density, healing rate, and whether bone grafting or sinus lifts are required. However, using our modern virtual-guided surgical software and on-site CAD/CAM laboratory, we often provide temporary cosmetic teeth on the exact same day as your implant surgery, so you never go without a beautiful smile.'
  },
  {
    category: 'Cosmetic Dentistry',
    question: 'What is a custom Smile Makeover, and how are the treatments selected?',
    answer: 'A Smile Makeover is a bespoke combination of cosmetic procedures tailored to your unique facial features, skin tone, lip alignment, and individual desires. The custom aesthetic treatment plan may combine porcelain veneers, teeth whitening, invisalign clear aligners, and dental porcelain crowns or bridges to correct alignment, shape, color, and size.'
  },
  {
    category: 'Cosmetic Dentistry',
    question: 'Will porcelain veneers look natural, and do they stain easily?',
    answer: 'Yes, our on-site dental laboratory hand-crafts veneers using ultra-premium grade, ultra-thin medical porcelain. Standard porcelain matches the glass-like translucent properties of natural tooth enamel, reflecting light identically. Medical-grade dental porcelain is highly stain-resistant; it will not discolor from coffee, red wine, or tobacco.'
  },
  {
    category: 'Services',
    question: 'What are my sedation options if I suffer from dental anxiety?',
    answer: 'At Leedy Dental, your emotional comfort is a top clinical priority. We offer customized sedation dentistry protocols including: mild oral conscious sedation (a pill that induces calm relaxation), laughing gas (nitrous oxide), and moderate intravenous (IV) sedation administered safely in our surgical suite, allowing you to sleep through your appointment.'
  },
  {
    category: 'Services',
    question: 'What is the advantage of using Laser Dentistry for gum disease?',
    answer: 'Laser gum therapies use directed energy wavelengths to vaporize diseased tissue and target deep-seated bacteria, leaving healthy periodontal tissues unharmed. This advanced method eliminates the need for scalpel cutting and tissue stitching, resulting in minimal bleeding, little to no post-operative swelling, and exceptionally fast tissue recovery.'
  },
  {
    category: 'Patient Center',
    question: 'Do you offer dental insurance compatibility and flexible financing plans?',
    answer: 'Absolutely. We fit high-end dental restorations into standard budgets by working closely with popular dental insurance providers to help maximize your benefits. We also provide interest-free and low-interest flexible financing plans through CareCredit and Proceed Finance, with quick secure online application links.'
  }
];
