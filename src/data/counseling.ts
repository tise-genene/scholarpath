import { FaUserGraduate, FaCalendarCheck, FaComments, FaFileAlt, FaMoneyCheckAlt, FaGlobeEurope } from "react-icons/fa";
import { FeatureCardData, ServiceCardData, TestimonialData, ResourceCardData } from "../types/counseling";

export const features: FeatureCardData[] = [
  { Icon: FaUserGraduate, title: "Personalized", desc: "Tailored plans for your academic goals." },
  { Icon: FaCalendarCheck, title: "Flexible Booking", desc: "You pick the time, we make it work." },
  { Icon: FaComments, title: "Expert Advice", desc: "Talk with experienced scholarship mentors." },
];

export const services: ServiceCardData[] = [
  { Icon: FaFileAlt, title: "CV & Motivation Letter Editing", desc: "Polish your documents with expert-level editing for impact and clarity." },
  { Icon: FaComments, title: "Interview Coaching", desc: "Practice and get feedback for scholarship or university interviews." },
  { Icon: FaMoneyCheckAlt, title: "International Payments", desc: "Easily pay application, tuition, or visa fees through trusted platforms." },
  { Icon: FaGlobeEurope, title: "Visa & Application Support", desc: "Get help with student visa processes and application requirements." },
  { Icon: FaUserGraduate, title: "Scholarship Matching", desc: "We help match you with scholarships based on your profile." },
  { Icon: FaCalendarCheck, title: "Priority Booking", desc: "Fast-track services for urgent applications and deadlines." },
];

export const testimonials: TestimonialData[] = [
  { name: "Sarah M.", quote: "The scholarship coaching was amazing! I never knew how to approach applications, but now I feel confident I can win one.", location: "Addis Ababa, Ethiopia" },
  { name: "Lukas T.", quote: "I got personalized advice that really helped me stand out in my scholarship applications. The interview coaching was top-notch.", location: "London, UK" },
  { name: "Anya K.", quote: "I applied for 5 scholarships and got accepted to 3 of them. The tips I received were incredibly helpful in narrowing down my choices.", location: "Toronto, Canada" },
];

export const resources: ResourceCardData[] = [
  { title: "Scholarship Search Engines", link: "https://www.scholarships.com", description: "Discover thousands of scholarships worldwide with this helpful search engine." },
  { title: "Free Online Courses", link: "https://www.edx.org", description: "Enhance your skills with free courses from top universities." },
  { title: "Document Templates", link: "https://www.overleaf.com/latex/templates/tagged/scholarship", description: "Access ready-to-use templates for CVs, motivation letters, and more." },
  { title: "Visa Information", link: "https://www.schengenvisainfo.com/", description: "Get up-to-date information on student visas and application requirements." },
  { title: "International Fee Payment", link: "https://wise.com/", description: "Transfer money abroad easily and pay university fees with low rates." },
  { title: "Scholarship Forums", link: "https://www.reddit.com/r/scholarships/", description: "Connect with other students and get advice on scholarships and applications." },
];
