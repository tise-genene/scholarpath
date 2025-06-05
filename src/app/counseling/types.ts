export interface Package {
  id: string;
  name: string;
  duration: string;
  price: number;
  features: string[];
}

export const packages: Package[] = [
  {
    id: "basic",
    name: "Basic Consultation",
    duration: "30 minutes",
    price: 500,
    features: [
      "Initial consultation session",
      "Personalized scholarship recommendations",
      "Basic application guidance",
      "Access to resources",
    ],
  },
  {
    id: "premium",
    name: "Premium Consultation",
    duration: "60 minutes",
    price: 1000,
    features: [
      "Detailed consultation session",
      "Personalized scholarship recommendations",
      "Application strategy development",
      "Essay and CV review",
      "Interview preparation",
      "Follow-up session",
    ],
  },
  {
    id: "vip",
    name: "VIP Consultation Package",
    duration: "120 minutes",
    price: 2000,
    features: [
      "Multiple consultation sessions",
      "Comprehensive scholarship strategy",
      "Custom application package development",
      "Essay and CV writing assistance",
      "Mock interviews",
      "Continuous support",
      "Priority access",
    ],
  },
];
