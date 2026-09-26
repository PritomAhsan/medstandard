export const site = {
  name: "MedStandard",
  tagline: "Training • Compliance • Excellence",
  phone: "+880 1715 631436",
  phoneHref: "tel:+8801715631436",
  email: "info@medstandard-bd.com",
  web: "www.medstandard-bd.com",
  webHref: "https://www.medstandard-bd.com",
  address: "House-1129, Road-11, Avenue-8, Mirpur DOHS, Dhaka-1216",
  mapUrl: "https://maps.app.goo.gl/UN5nFoTrcQUDxzf8A",
  mapEmbed: "https://www.google.com/maps?q=House-1129,+Sardar+Mansion,+Road-11,+Avenue-8,+Mirpur+DOHS,+Dhaka+1216&z=17&output=embed",
  hours: "9:00am – 6:00pm (Sat – Thu)",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/programs", label: "Programs" },
  { href: "/trainings", label: "Trainings" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "40+", label: "Partner Hospitals" },
  { value: "6,500+", label: "Staff Trained" },
  { value: "12", label: "Training Modules" },
  { value: "25+", label: "Expert Trainers" },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  detail: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "ipsg",
    icon: "ShieldPlus",
    title: "IPSG",
    short: "International Patient Safety Goals",
    detail:
      "Hands-on implementation of the six International Patient Safety Goals, from correct patient identification to fall-risk reduction.",
    points: ["Patient identification", "Effective communication", "High-alert medications", "Safe surgery", "Infection risk reduction", "Fall prevention"],
  },
  {
    slug: "ipc",
    icon: "Bug",
    title: "Infection Prevention & Control (IPC)",
    short: "Standard precautions, hand hygiene, PPE",
    detail:
      "Reduce hospital-acquired infections with evidence-based standard precautions, hand hygiene audits and correct PPE practice.",
    points: ["WHO 5 moments of hand hygiene", "PPE donning & doffing", "Biomedical waste management", "Sterilization & disinfection"],
  },
  {
    slug: "medication-safety",
    icon: "Pill",
    title: "Medication Safety",
    short: "Safe use, right patient, right dose",
    detail:
      "Build a medication-use process that prevents errors at prescribing, dispensing and administration.",
    points: ["The rights of medication administration", "Look-alike / sound-alike drugs", "High-alert drug protocols", "Error reporting culture"],
  },
  {
    slug: "emergency-readiness",
    icon: "Siren",
    title: "Emergency Readiness",
    short: "Code Blue, disaster & fire safety",
    detail:
      "Prepare every department to respond to medical emergencies, mass-casualty events and fire with practiced, coded procedures.",
    points: ["Code Blue / Red / Pink drills", "Disaster management plan", "Fire safety & evacuation", "Mock drill evaluation"],
  },
  {
    slug: "hospital-sops",
    icon: "FileText",
    title: "Hospital SOPs",
    short: "Documentation & workflow standardization",
    detail:
      "Turn scattered practice into written, approved, trainable Standard Operating Procedures for every clinical and support area.",
    points: ["SOP drafting & review", "Clinical workflow mapping", "Document control system", "Staff orientation to SOPs"],
  },
  {
    slug: "healthcare-law",
    icon: "Users",
    title: "Healthcare Law & Patient Rights",
    short: "Ethics, communication, professional conduct",
    detail:
      "Protect patients and staff with training on consent, confidentiality, patient rights and professional communication.",
    points: ["Informed consent", "Patient rights & responsibilities", "Medico-legal documentation", "Breaking bad news"],
  },
  {
    slug: "bls-acls",
    icon: "HeartPulse",
    title: "BLS / ACLS",
    short: "Life-saving skills for critical situations",
    detail:
      "Manikin-based Basic and Advanced Cardiac Life Support training aligned with current resuscitation guidelines.",
    points: ["High-quality CPR", "AED use", "Airway management", "Cardiac arrest algorithms"],
  },
  {
    slug: "audit-competency",
    icon: "ClipboardCheck",
    title: "Audit & Competency",
    short: "Assessment, documentation & continuous improvement",
    detail:
      "Measure what matters: competency checklists, clinical audits and improvement plans that close the loop.",
    points: ["Competency checklists", "Clinical & process audits", "KPI dashboards", "Corrective action plans"],
  },
];

export const reasons = [
  { icon: "ShieldAlert", text: "Inconsistent IPSG implementation across hospitals" },
  { icon: "Bug", text: "High burden of hospital-acquired infections" },
  { icon: "Users", text: "Inadequate routine staff training" },
  { icon: "FileWarning", text: "Documentation and communication errors" },
  { icon: "Scale", text: "Rising medico-legal concerns" },
  { icon: "Settings", text: "Lack of standardized SOPs" },
];

export type Program = {
  slug: string;
  no: number;
  title: string;
  audience: string;
  duration: string;
  price: string;
  features: string[];
  motto: string;
  color: string;
  category: "short" | "long";
};

export const programs: Program[] = [
  {
    slug: "starter",
    no: 1,
    title: "Starter Program",
    audience: "For Small & Medium Hospitals",
    duration: "1 Month",
    price: "BDT 75,000 – 120,000",
    features: ["Key patient safety & IPC training", "1 hospital-wide training day", "Pre/post assessment", "Attendance & competency records", "Individual certificates", "Management report"],
    motto: "Start your hospital safety journey with a structured, measurable program.",
    color: "from-sky-500 to-sky-700",
    category: "short",
  },
  {
    slug: "safety-compliance",
    no: 2,
    title: "Safety & Compliance Package",
    audience: "For Medium-sized Hospitals",
    duration: "3 Months",
    price: "BDT 200,000 – 350,000",
    features: ["Baseline assessment", "Comprehensive training (12 modules)", "SOP framework & implementation", "Training calendar", "Emergency-code procedures", "Audit checklist & improvement plan", "Final assessment report"],
    motto: "Identify gaps. Build systems. Improve compliance.",
    color: "from-teal-500 to-teal-700",
    category: "short",
  },
  {
    slug: "annual-safety",
    no: 3,
    title: "Annual Safety Program",
    audience: "For All Hospital Sizes",
    duration: "12 Months",
    price: "BDT 400,000 – 800,000 / year",
    features: ["Regular training & refreshers", "Competency assessment", "Quarterly audits & drills", "Documentation support", "Infection control & medication safety", "Management review"],
    motto: "Ongoing support for long-term safety and excellence.",
    color: "from-blue-700 to-blue-900",
    category: "long",
  },
  {
    slug: "accreditation-readiness",
    no: 4,
    title: "Accreditation Readiness",
    audience: "For NABH / JCI Preparation",
    duration: "6 – 12 Months",
    price: "BDT 600,000 – 1,500,000+",
    features: ["Gap assessment & standards mapping", "SOP development / revision", "Targeted staff training", "Documentation system", "Mock audit & corrective actions", "Final reassessment"],
    motto: "From standards on paper to standards in practice.",
    color: "from-indigo-800 to-slate-900",
    category: "long",
  },
];

export const deliverables = [
  { icon: "Users", label: "Training" },
  { icon: "ClipboardList", label: "Competency Assessment" },
  { icon: "FileText", label: "Documentation" },
  { icon: "Search", label: "Audit" },
  { icon: "TrendingUp", label: "Improvement Plan" },
];

export type Training = {
  title: string;
  date: string;
  duration: string;
  mode: "Onsite" | "Workshop" | "Online";
  fee: string;
  oldFee?: string;
  seats: number;
  status: "upcoming" | "ongoing";
};

export const trainings: Training[] = [
  { title: "BLS Provider Course (Batch 14)", date: "2026-10-04", duration: "8 hours", mode: "Workshop", fee: "BDT 4,500", oldFee: "BDT 6,000", seats: 24, status: "upcoming" },
  { title: "Infection Prevention & Control for Nurses", date: "2026-10-11", duration: "12 hours", mode: "Workshop", fee: "BDT 3,500", seats: 30, status: "upcoming" },
  { title: "ACLS Provider Course (Batch 6)", date: "2026-10-18", duration: "16 hours", mode: "Workshop", fee: "BDT 9,000", oldFee: "BDT 12,000", seats: 18, status: "upcoming" },
  { title: "IPSG Implementation for Quality Officers", date: "2026-10-25", duration: "6 hours", mode: "Online", fee: "BDT 2,500", seats: 50, status: "upcoming" },
  { title: "Medication Safety & High-Alert Drugs", date: "2026-11-01", duration: "6 hours", mode: "Online", fee: "BDT 2,500", seats: 50, status: "upcoming" },
  { title: "Code Blue & Emergency Response Drill", date: "2026-11-08", duration: "4 hours", mode: "Onsite", fee: "On request", seats: 40, status: "upcoming" },
  { title: "SOP Writing Masterclass for Hospital Managers", date: "2026-09-20", duration: "10 hours", mode: "Workshop", fee: "BDT 5,000", seats: 20, status: "ongoing" },
  { title: "Healthcare Law, Consent & Patient Rights", date: "2026-09-13", duration: "8 hours", mode: "Online", fee: "BDT 3,000", seats: 60, status: "ongoing" },
];

export const testimonials = [
  { quote: "Our hand-hygiene compliance went from 48% to 86% within three months of the program.", name: "Nursing Superintendent", org: "Private Hospital, Dhaka" },
  { quote: "The SOP framework finally gave our departments one way of working. Audits are no longer stressful.", name: "Medical Director", org: "Specialized Hospital, Chattogram" },
  { quote: "Best BLS training our staff has attended — practical, manikin-based and well organised.", name: "Head of Emergency", org: "General Hospital, Sylhet" },
  { quote: "MedStandard's mock audit prepared us for accreditation better than any consultant before.", name: "Quality Manager", org: "Multi-disciplinary Hospital, Dhaka" },
  { quote: "Clear, measurable and respectful of our staff's time. The management report was excellent.", name: "CEO", org: "Community Hospital, Rajshahi" },
  { quote: "Our medication error reports dropped significantly after the high-alert drug protocol training.", name: "Chief Pharmacist", org: "Teaching Hospital, Khulna" },
];

export const faqs = [
  { q: "Do you train on-site at our hospital?", a: "Yes. All hospital programs are delivered on-site, scheduled around your shifts. Open workshops are held at our training centre in Dhaka or online." },
  { q: "Will staff receive certificates?", a: "Every participant who completes the training and assessment receives an individual certificate. Hospitals also receive attendance and competency records." },
  { q: "Can the packages be customized?", a: "Absolutely. The price ranges reflect bed size and number of staff. We tailor modules after a short baseline visit." },
  { q: "Do you help with NABH / JCI accreditation?", a: "Yes. Our Accreditation Readiness program covers gap assessment, SOP development, documentation, mock audits and corrective action." },
];
