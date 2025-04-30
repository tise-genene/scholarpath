'use client';

import './globals.css';
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  Search,
  CalendarCheck,
  BookOpenCheck,
  Download,
  Video,
  Banknote,
  UploadCloud,
  X,
} from 'lucide-react';

const FEATURES = [
  {
    title: 'Personalized Matches',
    description: 'Get scholarship suggestions tailored to your profile.',
  },
  {
    title: '1:1 Counseling',
    description: 'Schedule consultations with our experts for guidance.',
  },
  {
    title: 'Webinars & Resources',
    description: 'Join events and access tools to boost your chances.',
  },
  {
    title: 'Application Tracking',
    description: 'Keep tabs on all your scholarship applications in one place.',
  },
];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [receipt, setReceipt] = useState<File | null>(null);

  const filteredFeatures = FEATURES.filter((feature) =>
    feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feature.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceipt(e.target.files[0]);
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white via-indigo-50 to-rose-50">

      {/* --- HERO/ABOUT SECTION: Tegegn & Pathway --- */}
      {/* Subtle gradient background for hero */}
      <div className="absolute top-0 left-0 w-full h-[650px] bg-gradient-to-br from-purple-100 via-white to-pink-100 opacity-80 -z-10" />
      <section className="relative z-10 py-20 px-4 md:px-0 flex flex-col items-center text-center bg-transparent">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl mx-auto">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <img src="/tegegn.jpg" alt="Tegegn, Scholarship Consultant" className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-purple-200 mb-4" />
            <span className="font-semibold text-lg text-purple-700 mb-2">Tegegn, Scholarship Consultant</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-purple-700 mb-4 drop-shadow-lg">Your Pathway to Global Opportunities</h1>
            <p className="text-gray-700 mb-4 max-w-md">Welcome! I’m Tegegn, your trusted guide to scholarships, study abroad, and student services. Unlock opportunities across the world and increase your chances of studying at top universities abroad.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
              <a href="/scholarships" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition text-base">
                Explore Scholarships
              </a>
              <a href="/counseling/booking" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition text-base">
                Book a Counseling Session
              </a>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="/webinars" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition text-base">
                Join Our Webinar
              </a>
              <a href="/payments" className="bg-white border border-purple-600 text-purple-700 hover:bg-purple-50 font-semibold px-6 py-3 rounded-full shadow-lg transition text-base">
                Make International Payments
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            {/* Optional: Add a quote or testimonial here for extra trust */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-6 mt-8 md:mt-0">
              <h3 className="text-xl font-bold text-purple-800 mb-2">Why Work With Me?</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 text-left">
                <li>Personalized, expert guidance for every student</li>
                <li>Years of experience with international scholarships</li>
                <li>Proven success stories from students worldwide</li>
                <li>Transparent, student-first approach</li>
              </ul>
              {/* Trust badges or affiliations (placeholder) */}
              <div className="flex gap-4 mt-6 justify-center">
                <img src="/badge-1.svg" alt="Trusted" className="h-10" />
                <img src="/badge-2.svg" alt="Certified" className="h-10" />
                <img src="/badge-3.svg" alt="Partner" className="h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT I OFFER --- */}
      <section className="py-16 bg-white/80">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-10">What I Offer</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "Scholarship Listings",
              desc: "Curated scholarships for all levels and countries.",
              href: "/scholarships",
              color: "from-purple-50 to-purple-100",
              iconColor: "text-purple-600",
              renderIcon: () => <Search className="w-12 h-12" />,
            },
            {
              icon: BookOpenCheck,
              title: "Counseling",
              desc: "1:1 sessions, CV/motivation letter review, interview prep.",
              href: "/counseling/booking",
              color: "from-pink-50 to-pink-100",
              iconColor: "text-pink-600",
              renderIcon: () => <BookOpenCheck className="w-12 h-12" />,
            },
            {
              icon: Video,
              title: "Webinars & Trainings",
              desc: "Live and recorded sessions to boost your application.",
              href: "/webinars",
              color: "from-indigo-50 to-indigo-100",
              iconColor: "text-indigo-600",
              renderIcon: () => <Video className="w-12 h-12" />,
            },
            {
              icon: Banknote,
              title: "International Payments",
              desc: "Secure tuition and fee payments, hassle-free.",
              href: "/payments",
              color: "from-green-50 to-green-100",
              iconColor: "text-green-600",
              renderIcon: () => <Banknote className="w-12 h-12" />,
            },
          ].map((service, i) => (
            <a key={i} href={service.href} className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col items-center hover:scale-105 transition group">
              <div className={`inline-flex items-center justify-center rounded-full w-20 h-20 ${service.color} mb-6`}>
                {service.renderIcon()}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-700 transition">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <span className="text-purple-600 font-medium group-hover:underline">Learn More</span>
            </a>
          ))}
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-16 bg-gradient-to-r from-purple-50 via-white to-pink-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-10">How It Works</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Search className="w-10 h-10 text-purple-600 mx-auto mb-4" />, title: "Explore Scholarships", desc: "Browse and filter scholarships by country, degree, and more." },
            { icon: <BookOpenCheck className="w-10 h-10 text-pink-500 mx-auto mb-4" />, title: "Book Counseling", desc: "Get expert help with your applications and documents." },
            { icon: <Video className="w-10 h-10 text-indigo-500 mx-auto mb-4" />, title: "Join Webinars", desc: "Learn from exclusive sessions and Q&As." },
            { icon: <Banknote className="w-10 h-10 text-green-500 mx-auto mb-4" />, title: "Make Payments", desc: "Pay tuition and fees securely with ease." },
          ].map((step, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col items-center">
              {step.icon}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT TEGEGN --- */}
      <section className="py-16 bg-gradient-to-br from-white via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img src="/tegegn-profile.jpg" alt="Tegegn, Scholarship Consultant" className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-purple-200 mb-4 md:mb-0" />
          <div>
            <h2 className="text-3xl font-bold text-purple-800 mb-2">Hi, I’m Tegegn.</h2>
            <p className="text-lg text-gray-700 mb-4">I’m passionate about helping students access global education opportunities. Through this platform, I provide information on scholarships, one-on-one counseling, and payment services to make studying abroad easier for you.</p>
            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="font-semibold text-purple-700 mb-2">Why Work With Me?</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Personalized, expert guidance for every student</li>
                <li>Years of experience with international scholarships</li>
                <li>Proven success stories from students worldwide</li>
                <li>Transparent, student-first approach</li>
              </ul>
            </div>
            {/* Trust badges or affiliations (placeholder) */}
            <div className="flex gap-4 mt-6">
              <img src="/badge-1.svg" alt="Trusted" className="h-10" />
              <img src="/badge-2.svg" alt="Certified" className="h-10" />
              <img src="/badge-3.svg" alt="Partner" className="h-10" />
            </div>
          </div>
        </div>
      </section>


      {/* --- HOW IT WORKS --- */}
      <section className="py-16 bg-white/60 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-10">How It Works</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Search className="w-10 h-10 text-purple-600 mx-auto mb-4" />, title: "Create Profile", desc: "Sign up and tell us about your goals and background." },
            { icon: <BookOpenCheck className="w-10 h-10 text-pink-500 mx-auto mb-4" />, title: "Get Matches", desc: "Receive scholarships curated just for you." },
            { icon: <CalendarCheck className="w-10 h-10 text-indigo-500 mx-auto mb-4" />, title: "Apply Easily", desc: "Track deadlines and submit applications in one place." },
            { icon: <Video className="w-10 h-10 text-green-500 mx-auto mb-4" />, title: "Expert Guidance", desc: "Access counseling, webinars, and resources." },
          ].map((step, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col items-center">
              {step.icon}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURED SCHOLARSHIPS --- */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 via-white to-pink-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-10">Featured Scholarships</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:scale-105 transition">
              <img src="/scholarship-placeholder.svg" alt="Scholarship" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold text-purple-700 mb-2">Scholarship Title {n}</h3>
              <p className="text-gray-600 mb-2">A brief description of this featured scholarship. Eligibility, amount, and deadline info goes here.</p>
              <a href="/scholarships" className="text-purple-600 font-medium hover:underline mt-auto">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURES/BENEFITS --- */}
      <section className="py-16 bg-white/80">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-10">Why ScholarPath?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feature, i) => (
            <div key={i} className="flex items-start gap-5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 shadow hover:shadow-lg transition">
              <div className="flex-shrink-0">
                {i === 0 && <Search className="w-8 h-8 text-purple-600" />}
                {i === 1 && <CalendarCheck className="w-8 h-8 text-pink-500" />}
                {i === 2 && <Video className="w-8 h-8 text-indigo-500" />}
                {i === 3 && <BookOpenCheck className="w-8 h-8 text-green-500" />}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-16 bg-gradient-to-r from-white via-purple-50 to-pink-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-10">Success Stories</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Amina T.", text: "ScholarPath helped me find a full scholarship abroad! The counseling was amazing and I felt supported at every step." },
            { name: "Samuel B.", text: "I never thought I'd get so many opportunities. The webinars and resources are top-notch!" },
            { name: "Liya G.", text: "The platform is so easy to use. I matched with scholarships I never knew existed." },
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center">
              <img src={`/user-${i+1}.svg`} alt={t.name} className="w-20 h-20 rounded-full mb-4 border-4 border-purple-100" />
              <p className="text-gray-700 italic mb-2">“{t.text}”</p>
              <span className="font-semibold text-purple-700">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-16 bg-white/70">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "Is ScholarPath free to use?", a: "Yes! You can search and match with scholarships for free. Some premium services may have a fee." },
            { q: "Do I need to pay to apply for scholarships?", a: "No, applying for scholarships through ScholarPath is free. Some universities may have their own application fees." },
            { q: "Can I get personal counseling?", a: "Absolutely! Our experts are available for one-on-one counseling sessions." },
            { q: "How do I know if I'm eligible for a scholarship?", a: "Our matching system only shows scholarships you are eligible for based on your profile." },
          ].map((faq, i) => (
            <div key={i} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 shadow">
              <h3 className="font-semibold text-lg mb-2 text-purple-700">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER SIGNUP --- */}
      <section className="py-16 bg-gradient-to-r from-pink-50 via-white to-purple-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Stay Updated</h2>
          <p className="text-gray-700 mb-6">Get the latest scholarships and tips delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" required placeholder="Enter your email" className="px-6 py-3 rounded-full border border-purple-300 focus:ring-2 focus:ring-purple-400 outline-none w-full sm:w-auto" />
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
