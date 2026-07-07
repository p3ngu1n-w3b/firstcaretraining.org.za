export type Course = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  seoFocus: string;
  duration: string;
  audience: string;
  outcomes: string[];
  topics: string[];
  accreditation: string;
  image: string;
  alt: string;
};

export const siteMeta = {
  title: "Firstcare Training | Accredited First Aid & Fire Safety Courses - Garden Route",
  description:
    "Professional first aid, fire marshal, wildfire, and snake awareness training in George and the Garden Route. Accredited courses for workplaces, farms, and communities.",
  canonical: "https://firstcaretraining.org.za/",
};

export const contactDetails = {
  phonePrimary: "079 190 9428",
  phoneSecondary: "084 314 4323",
  email: "firstcarewildfire@gmail.com",
  location: "George, Western Cape",
};

export const heroCopy = {
  eyebrow: "Garden Route | Accredited Emergency Training",
  heading: "Train with Confidence. Respond with Skill.",
  subheading:
    "Accredited emergency and safety training for workplaces, farms, and communities across the Garden Route and Western Cape.",
  primaryCta: { label: "Explore Courses", href: "/courses" },
  secondaryCta: { label: "Book a Session", href: "#contact" },
  trustLine: "50+ years combined field experience | George, Western Cape",
};

export const stats = [
  { value: "77+", label: "Training sessions delivered" },
  { value: "5", label: "Accredited course programmes" },
  { value: "100%", label: "Practical, hands-on instruction" },
  { value: "Garden Route", label: "On-site and venue-based delivery" },
];

export const testimonials = [
  {
    quote:
      "Firstcare's first aid training gave our team confidence to handle emergencies on-site. The practical drills were clear, relevant, and professional.",
    author: "Operations Manager, George Logistics Team",
  },
  {
    quote:
      "The fire marshal and extinguisher training was exactly what our venue needed. Our staff now understand both compliance and real incident response.",
    author: "Event Coordinator, Garden Route",
  },
  {
    quote:
      "Their wildfire and snake awareness sessions are practical for farm conditions. We immediately improved our seasonal preparedness plan.",
    author: "Farm Owner, Southern Cape",
  },
];

export const courses: Course[] = [
  {
    id: "first-aid",
    slug: "first-aid",
    title: "Accredited First Aid Level 1-3",
    shortDescription:
      "Workplace first aid training in the Garden Route with CPR, bleeding control, and emergency response protocols for high-risk and general environments.",
    seoFocus: "workplace first aid courses George",
    duration: "1 to 3 days, based on level",
    audience: "Workplaces, schools, events teams, farm staff, and safety representatives",
    outcomes: [
      "Respond confidently during medical emergencies before advanced help arrives",
      "Apply CPR and choking protocols for adults and children",
      "Manage bleeding, fractures, burns, and shock in workplace scenarios",
    ],
    topics: [
      "Scene safety and primary assessment",
      "CPR, AED awareness, and airway support",
      "Bleeding control and wound management",
      "Burn and fracture stabilization",
      "Emergency reporting and handover",
    ],
    accreditation:
      "Aligned to accredited first aid outcomes and workplace readiness requirements in South Africa.",
    image: "/images/course-first-aid.webp",
    alt: "Instructor demonstrating CPR technique during first aid training session",
  },
  {
    id: "fire-marshal",
    slug: "fire-marshal",
    title: "Fire Marshal and Extinguisher Use",
    shortDescription:
      "Fire marshal training in the Western Cape covering evacuation roles, extinguisher selection, and incident leadership for compliant workplaces.",
    seoFocus: "fire marshal training Western Cape",
    duration: "Half day to 1 day",
    audience: "Office teams, industrial staff, hospitality teams, and site safety leads",
    outcomes: [
      "Identify fire risks and preventive controls in daily operations",
      "Select and operate extinguishers for different fire classes",
      "Support evacuation procedures and headcount control",
    ],
    topics: [
      "Fire behavior and workplace hazards",
      "Extinguisher classes and PASS method",
      "Evacuation roles and assembly point control",
      "Communication under pressure",
      "Post-incident reporting basics",
    ],
    accreditation:
      "Supports workplace fire safety compliance and practical fire response preparedness.",
    image: "/images/course-fire-marshal.webp",
    alt: "Fire marshal instructor teaching extinguisher use in safety gear",
  },
  {
    id: "wildfire",
    slug: "wildfire",
    title: "Basic Wildfire Training",
    shortDescription:
      "Wildfire safety training for farms and rural operations, with practical preparedness, seasonal risk planning, and field response fundamentals.",
    seoFocus: "wildfire safety training South Africa",
    duration: "1 day",
    audience: "Landowners, farm teams, community volunteers, and event crews in high-risk zones",
    outcomes: [
      "Recognize fire weather, fuel load, and terrain risk factors",
      "Apply prevention and early response tactics safely",
      "Coordinate with local fire structures during incidents",
    ],
    topics: [
      "Veldfire behavior and spread dynamics",
      "Firebreak planning and seasonal readiness",
      "Crew safety, PPE awareness, and communications",
      "Initial attack principles and containment support",
      "Protection of structures and critical assets",
    ],
    accreditation:
      "Practical wildfire preparedness training informed by decades of field experience in the Garden Route.",
    image: "/images/course-wildfire.webp",
    alt: "Wildfire preparedness briefing in outdoor field environment",
  },
  {
    id: "snake-awareness",
    slug: "snake-awareness",
    title: "Snake Awareness Workshop",
    shortDescription:
      "Snake awareness training for farms, schools, and teams working outdoors with clear identification guidance and bite response protocol.",
    seoFocus: "snake awareness training Garden Route",
    duration: "2 to 3 hours",
    audience: "Farm workers, schools, conservation teams, and residential communities",
    outcomes: [
      "Reduce risk through informed behavior in snake-prone environments",
      "Identify common regional snakes and risk cues",
      "Apply correct first aid and escalation for suspected envenomation",
    ],
    topics: [
      "Common snake species in the region",
      "Habitat and seasonal movement patterns",
      "Safe behavior and prevention measures",
      "Snakebite myths vs medically correct actions",
      "Emergency response and referral steps",
    ],
    accreditation:
      "Workshop delivered by experienced emergency trainers focused on practical risk reduction.",
    image: "/images/course-snake.webp",
    alt: "Instructor leading a snake awareness safety workshop outdoors",
  },
  {
    id: "workshops",
    slug: "workshops",
    title: "First Aid Workshops",
    shortDescription:
      "Short-format first aid workshops for schools, community groups, and events requiring practical emergency skills refreshers.",
    seoFocus: "corporate emergency training Western Cape",
    duration: "60 to 180 minutes",
    audience: "Community groups, school staff, sports clubs, and event teams",
    outcomes: [
      "Build confidence in common emergency scenarios",
      "Reinforce immediate life-saving actions while waiting for EMS",
      "Improve team readiness through scenario-based drills",
    ],
    topics: [
      "CPR refresher and airway emergencies",
      "Bleeding and trauma basics",
      "Heat stress, dehydration, and environmental injuries",
      "Emergency coordination and role allocation",
      "Practical Q&A for specific site risks",
    ],
    accreditation:
      "Workshop format can be tailored as accredited or awareness-focused depending on audience needs.",
    image: "/images/course-first-aid.webp",
    alt: "Group participating in practical first aid workshop activity",
  },
];

export const courseOptions = [
  { value: "Accredited First Aid", label: "Accredited First Aid" },
  { value: "Fire Marshal & Extinguisher Training", label: "Fire Marshal & Extinguisher Training" },
  { value: "Basic Wildfire Training", label: "Basic Wildfire Training" },
  { value: "Snake Awareness Workshop", label: "Snake Awareness Workshop" },
  { value: "First Aid Workshop", label: "First Aid Workshop" },
  { value: "Other", label: "Other" },
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Firstcare Training",
  url: "https://firstcaretraining.org.za",
  parentOrganization: {
    "@type": "Organization",
    name: "Firstcare Wildfire Support",
    url: "https://wildfiresupport.org.za",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "George",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  email: contactDetails.email,
  telephone: contactDetails.phonePrimary,
};

export const courseSchema = courses.map((course) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: course.title,
  description: course.shortDescription,
  provider: {
    "@type": "EducationalOrganization",
    name: "Firstcare Training",
    sameAs: "https://firstcaretraining.org.za",
  },
}));
