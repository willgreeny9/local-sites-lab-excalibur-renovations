/**
 * Verified public facts for Excalibur Renovations Ltd.
 * Claims labelled "stated-on-current-site" come from the live brochure only.
 * Do not invent ratings, prices, staff beyond published names, or credentials.
 */

export const business = {
  name: "Excalibur Renovations Ltd",
  shortName: "Excalibur Renovations",
  slug: "excalibur-renovations",
  legalName: "EXCALIBUR RENOVATIONS LTD",
  companyNumber: "06748553",
  established: "2008",
  founder: "Matthew Petchey",
  teamSizeClaim: "ten",
  sourceUrl: "https://www.excalibur-renovations.co.uk/",
  aboutUrl: "https://excalibur-renovations.co.uk/aboutus.html",
  servicesUrl: "https://www.excalibur-renovations.co.uk/whatwedo.html",
  companiesHouseUrl:
    "https://find-and-update.company-information.service.gov.uk/company/06748553",
  address: {
    line1: "12 Stane Close",
    locality: "Bishop's Stortford",
    region: "Hertfordshire",
    postcode: "CM23 2HU",
    country: "GB",
  },
  /** Published on About page */
  phoneMobileDisplay: "07989 556816",
  phoneMobileTel: "07989556816",
  /** Cited on homepage form success / office message */
  phoneOfficeDisplay: "01279 817 902",
  phoneOfficeTel: "01279817902",
  /** Spelling as published on the current site */
  email: "Enquires@excalibur-renovations.co.uk",
  whatsappE164: "+447989556816",
  areasSummary:
    "Bishop's Stortford and surrounding areas in Hertfordshire and Essex (stated on current site)",
  areas: [
    "Bishop's Stortford",
    "East Hertfordshire",
    "Essex (carpentry page states Bishop's Stortford and Essex)",
  ],
  primaryCta: "Request a free quotation",
  logoSourceUrl:
    "http://www.excalibur-renovations.co.uk/assets/images/excalibur-renovations-logo-white-256x77.png",
  brand: {
    teal: "#39847a",
    cyan: "#40b0bf",
    sand: "#e5ddd5",
    deep: "#0f2a26",
    ink: "#12201e",
  },
} as const;

export const credentials = [
  {
    label: "Gas Safe registered",
    detail: "Stated on the current About and Plumbing pages",
    status: "stated-on-current-site" as const,
    source: "https://excalibur-renovations.co.uk/aboutus.html",
  },
  {
    label: "Oftec registered",
    detail: "Stated on the current About and Plumbing pages",
    status: "stated-on-current-site" as const,
    source: "https://excalibur-renovations.co.uk/aboutus.html",
  },
  {
    label: "Companies House active",
    detail: "Company 06748553 — Active private limited company",
    status: "verified" as const,
    source:
      "https://find-and-update.company-information.service.gov.uk/company/06748553",
  },
  {
    label: "Team of ten",
    detail: "Stated on the current homepage and About page",
    status: "stated-on-current-site" as const,
    source: "https://www.excalibur-renovations.co.uk/",
  },
  {
    label: "Established 2008",
    detail: "Incorporated 13 November 2008; formerly M Petchey Plumbing and Heating Limited",
    status: "verified" as const,
    source:
      "https://find-and-update.company-information.service.gov.uk/company/06748553",
  },
] as const;

export const services = [
  {
    slug: "building",
    title: "Building services",
    href: "/building",
    summary:
      "Residential and commercial building work — from renovations and extensions to new construction — delivered by the Bishop's Stortford team.",
    image: "/images/service-building.jpg",
    imageAlt: "Building work by Excalibur Renovations",
  },
  {
    slug: "plumbing-heating",
    title: "Plumbing and heating",
    href: "/plumbing-heating",
    summary:
      "Plumbing and heating for domestic and commercial clients — repairs, bathroom refurbs, boiler replacements and full system installations. Gas Safe and Oftec compliance stated on the current site.",
    image: "/images/service-heating.jpg",
    imageAlt: "Plumbing and heating services",
  },
  {
    slug: "extensions-conversions",
    title: "Extensions and conversions",
    href: "/extensions-conversions",
    summary:
      "Home extensions and conversions listed among the firm's core building services.",
    image: "/images/project-build-a.jpg",
    imageAlt: "Extension and conversion building work",
  },
  {
    slug: "kitchens-bathrooms",
    title: "Kitchens and bathrooms",
    href: "/kitchens-bathrooms",
    summary:
      "Kitchen and bathroom installations, supported by tiling, decorating and related finishes.",
    image: "/images/project-kitchen.jpg",
    imageAlt: "Kitchen installation project photography",
  },
  {
    slug: "carpentry",
    title: "Carpentry and roofing",
    href: "/carpentry",
    summary:
      "Carpentry for commercial and domestic projects in Bishop's Stortford and Essex — including kitchen installations, flooring and decking — plus roofing listed in the service set.",
    image: "/images/project-portfolio.jpg",
    imageAlt: "Carpentry and finished interior work",
  },
  {
    slug: "groundworks-gardens",
    title: "Ground works and gardens",
    href: "/services#groundworks",
    summary:
      "Ground works and gardens listed on the About and services pages.",
    image: "/images/project-driveway.jpg",
    imageAlt: "External ground works and driveway photography",
  },
] as const;

export const serviceCatalogue = [
  "New build homes",
  "Extensions and conversions",
  "Plumbing and heating",
  "Ground works and gardens",
  "Carpentry and roofing",
  "Kitchen and bathroom installations",
  "Tiling and decorating",
  "Electrical work",
  "Air source heating",
] as const;

export const projectShowcase = [
  {
    id: "kitchen",
    title: "Kitchen installations",
    caption: "Finished kitchen photography from the current Excalibur site.",
    src: "/images/project-kitchen.jpg",
    alt: "Kitchen renovation project",
  },
  {
    id: "bathroom",
    title: "Bathroom installations",
    caption: "Bathroom project photography published on the current site.",
    src: "/images/project-bathroom.jpg",
    alt: "Bathroom renovation project",
  },
  {
    id: "driveway",
    title: "External works",
    caption: "Driveway and external finishes from the current project imagery.",
    src: "/images/project-driveway.jpg",
    alt: "Driveway and ground works",
  },
  {
    id: "build",
    title: "Building projects",
    caption: "On-site building photography from the current brochure.",
    src: "/images/project-build-b.jpg",
    alt: "Building renovation project",
  },
] as const;

export const sourceLedger = [
  {
    fact: "Trading name Excalibur Renovations Ltd / EXCALIBUR RENOVATIONS LTD",
    source: "https://www.excalibur-renovations.co.uk/",
    status: "verified-on-current-site",
  },
  {
    fact: "Registered office 12 Stane Close, Bishop's Stortford, CM23 2HU",
    source:
      "https://find-and-update.company-information.service.gov.uk/company/06748553",
    status: "verified",
  },
  {
    fact: "Company 06748553 Active; incorporated 13 Nov 2008; formerly M Petchey Plumbing and Heating Limited",
    source:
      "https://find-and-update.company-information.service.gov.uk/company/06748553",
    status: "verified",
  },
  {
    fact: "Founded by Matthew Petchey; team of ten professionals stated",
    source: "https://excalibur-renovations.co.uk/aboutus.html",
    status: "stated-on-current-site",
  },
  {
    fact: "Gas Safe and Oftec registered (current-site claim)",
    source: "https://excalibur-renovations.co.uk/aboutus.html",
    status: "stated-on-current-site",
  },
  {
    fact: "Mobile 07989 556816; office line 01279 817 902; email Enquires@…",
    source: "https://excalibur-renovations.co.uk/aboutus.html",
    status: "stated-on-current-site",
  },
  {
    fact: "Free quotations offered; WhatsApp chat button on current site",
    source: "https://www.excalibur-renovations.co.uk/",
    status: "stated-on-current-site",
  },
  {
    fact: "No verified public Google/Checkatrade star rating found at build time",
    source: "research/design-brief.md",
    status: "gap",
  },
] as const;
