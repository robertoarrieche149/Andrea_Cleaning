import { 
  Sparkles, 
  CheckCircle2, 
  Utensils, 
  Hammer,
  LucideIcon 
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  duration: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: "regular",
    title: "Regular Cleaning",
    duration: "Recommended: Weekly or Bi-Weekly",
    icon: CheckCircle2,
    description: "Standard top-notch maintenance to keep your home fresh, clean, and healthy. Perfect for busy families in Atlanta.",
    features: [
      "Dusting all surfaces & furniture",
      "Vacuuming carpets & rugs",
      "Mopping hard floors",
      "Emptying trash bins",
      "Sanitizing bathrooms & kitchen counters",
      "Wiping outer appliances"
    ]
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    duration: "Recommended: Every 3-6 months",
    icon: Sparkles,
    description: "Comprehensive restoration of your living spaces. We reach every hidden corner and scrub deep layers.",
    features: [
      "Everything in Regular Cleaning",
      "Detailed baseboards wiping",
      "Inside of microwave & oven surface deep-scrub",
      "Dusting ceiling fans & light fixtures",
      "Scrubbing bathroom tile grout",
      "Wiping window sills & doors"
    ]
  },
  {
    id: "move",
    title: "Move In / Out Cleaning",
    duration: "Perfect for transitions",
    icon: Utensils,
    description: "Ensure your old home is flawless to get your full deposit back, or step into a sanitized, safe new home in Atlanta.",
    features: [
      "Inside all kitchen & bathroom cabinets",
      "Deep cleaning inside the oven & refrigerator",
      "Full closet dusting and cleaning",
      "Detailed cleaning of baseboards, trims & doors",
      "Stain spot cleaning on walls",
      "Sanitizing every single surface"
    ]
  },
  {
    id: "post",
    title: "Post-Construction",
    duration: "After remodeling or painting",
    icon: Hammer,
    description: "Fine dust removal and detailed sanitizing after renovations. We make your brand-new build ready to live in.",
    features: [
      "Industrial dust vacuuming",
      "Removal of drywall dust, paint splatters & adhesive",
      "Cleaning light switches, fixtures & outlets",
      "Detailed cleaning inside cabinets & wardrobes",
      "Polishing glass, metal, and floor tiles",
      "Full frame and trim wiping"
    ]
  }
];
