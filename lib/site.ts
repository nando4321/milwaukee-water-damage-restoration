export const site = {
  name: "Milwaukee Water Damage Restoration",
  shortName: "MWDR",
  url: "https://milwaukeewaterdamagerestoration.org",
  tagline: "Greater Milwaukee’s water damage restoration team",
  phoneLabel: "Phone coming soon",
  address: {
    street: "205 Bishops Way #4",
    city: "Brookfield",
    state: "WI",
    zip: "53005",
    line: "205 Bishops Way #4, Brookfield, WI 53005",
  },
  hours: "24/7 emergency positioning — request help anytime through the form",
  counties: ["Milwaukee County", "Waukesha County"] as const,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/water-damage", label: "Water Damage Restoration" },
      { href: "/services/mold-remediation", label: "Mold Remediation" },
      { href: "/services/rebuilding", label: "Rebuilding" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "water-damage",
    title: "Water Damage Restoration",
    href: "/services/water-damage",
    image: "/images/water-extraction.jpg",
    imageAlt: "Placeholder photo for water extraction work",
    summary:
      "Extraction, structural drying, moisture tracking, and material removal when water has already entered the building.",
    blurb:
      "Standing water and saturated materials need a documented plan, not a wait-and-see approach.",
  },
  {
    slug: "rebuilding",
    title: "Rebuilding",
    href: "/services/rebuilding",
    image: "/images/rebuild.jpg",
    imageAlt: "Placeholder photo for reconstruction after water damage",
    summary:
      "Drywall, flooring, framing, and finish work after water mitigation so rooms can be used again.",
    blurb:
      "Once the structure is dry, we rebuild what water took out — without expanding the job past the documented scope.",
  },
  {
    slug: "mold-remediation",
    title: "Mold Remediation",
    href: "/services/mold-remediation",
    image: "/images/mold-remediation.jpg",
    imageAlt: "Placeholder photo for mold remediation after water damage",
    summary:
      "Water-related mold inspection, containment, removal, and moisture verification so growth does not return.",
    blurb:
      "Mold after a leak is a moisture problem first. We find the source, contain the area, and remove what cannot be saved.",
  },
] as const;

export const milwaukeeCities = [
  "Milwaukee",
  "West Allis",
  "Wauwatosa",
  "Greenfield",
  "Oak Creek",
  "South Milwaukee",
  "Cudahy",
  "St. Francis",
  "Franklin",
  "Shorewood",
  "Whitefish Bay",
  "Glendale",
  "Brown Deer",
  "Fox Point",
  "Bayside",
  "Hales Corners",
] as const;

export const waukeshaCities = [
  "Waukesha",
  "Brookfield",
  "New Berlin",
  "Menomonee Falls",
  "Muskego",
  "Oconomowoc",
  "Pewaukee",
  "Hartland",
  "Delafield",
  "Sussex",
  "Mukwonago",
  "Elm Grove",
] as const;

export const coreValues = [
  { title: "Fast response", body: "Water keeps moving. We treat every request as time-sensitive." },
  { title: "Clear communication", body: "Owners get a straight scope, photo updates, and next steps in writing." },
  { title: "Honest scope", body: "We document what is wet, what can dry, and what has to come out." },
  { title: "Jobsite safety", body: "Containment, power, and walk paths are set before demolition starts." },
  { title: "Licensed crews", body: "Restoration and rebuild work is handled by licensed, insured teams." },
  { title: "Local service", body: "Milwaukee County and Waukesha County only — no distant dispatch." },
] as const;

export const faqs = [
  {
    q: "What restoration services do you provide?",
    a: "Water damage restoration (extraction, drying, moisture tracking, and material removal), water-related mold remediation, and rebuilding after the structure is dry.",
  },
  {
    q: "Do you offer emergency response?",
    a: "Yes. Water emergencies are positioned as 24/7. A phone number is coming soon; until then, send the estimate form and we will follow up as quickly as possible.",
  },
  {
    q: "How fast can you respond?",
    a: "Our target is a same-day on-site assessment in Milwaukee County and Waukesha County whenever a crew is available. Response time depends on location and current job load.",
  },
  {
    q: "Are your technicians licensed?",
    a: "Crews are licensed and insured for restoration and reconstruction work in Wisconsin. Certifications and insurance certificates are available on request.",
  },
  {
    q: "Do you work with insurance companies?",
    a: "Yes. We photograph moisture readings, document the scope, and can coordinate with the carrier or adjuster when you ask us to.",
  },
  {
    q: "Do you handle repairs after mitigation?",
    a: "Yes. Rebuilding covers drywall, flooring, insulation, framing repairs, and finish work once drying is complete.",
  },
  {
    q: "Do you work on homes and businesses?",
    a: "Yes. We take residential and commercial water jobs throughout Milwaukee County and Waukesha County.",
  },
] as const;

export const galleryItems = [
  { src: "/images/gallery-1.jpg", alt: "Project gallery photo 1" },
  { src: "/images/gallery-2.jpg", alt: "Project gallery photo 2" },
  { src: "/images/gallery-3.jpg", alt: "Project gallery photo 3" },
  { src: "/images/gallery-4.jpg", alt: "Project gallery photo 4" },
] as const;
