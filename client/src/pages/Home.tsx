/* RGS Home Page — Industrial Precision Meets British Craft
   White/Green/Amber palette | Animated SVG tools | Full featured */
import { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "wouter";
import { Phone, CheckCircle, Star, ArrowRight, Shield, Clock, Award, Users } from "lucide-react";

import { WrenchSVG, PlumbingSVG, CCTVSvg, DrainageSVG, ShieldSVG, EmergencySVG } from "@/components/SVGTools";

const FORMSPREE_ID = "xrevjlby";

const RGS_LOGO = "/rgs-circle-logo.png";

// Animated counter hook
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const services = [
  {
    title: "Plumbing",
    desc: "All aspects of plumbing from tap changes to full radiator installations. Residential and commercial.",
    icon: <PlumbingSVG size={120} />,
    href: "/services",
    tag: "Free Quote",
  },
  {
    title: "Drainage",
    desc: "Blocked drains cleared from £60+VAT. Full CCTV drainage surveys and jetting services.",
    icon: <DrainageSVG size={120} />,
    href: "/services",
    tag: "From £60",
  },
  {
    title: "CCTV & Door Entry",
    desc: "Installation and maintenance of CCTV systems and door entry solutions for all property types.",
    icon: <CCTVSvg size={120} />,
    href: "/services",
    tag: "Security",
  },
  {
    title: "Service Packages",
    desc: "Bespoke planned maintenance packages tailored to your property portfolio at competitive prices.",
    icon: <ShieldSVG size={120} />,
    href: "/services",
    tag: "Bespoke",
  },
];

const stats = [
  { value: 30, suffix: "+", label: "Years Combined Experience" },
  { value: 100, suffix: "+", label: "Properties Maintained" },
  { value: 24, suffix: "/7", label: "Emergency Response" },
  { value: 5, suffix: "★", label: "Star Rated Service" },
];

const reasons = [
  { icon: <Shield size={28} />, title: "Family Run Business", desc: "Founded by a father and son with over 30 years of combined expertise in the maintenance industry." },
  { icon: <Clock size={28} />, title: "24/7 Emergency Cover", desc: "Round-the-clock emergency call out service for urgent plumbing, drainage and maintenance issues." },
  { icon: <Award size={28} />, title: "Fully Qualified Engineers", desc: "Our team of specialised engineers are dedicated to the highest standards of quality and integrity." },
  { icon: <Users size={28} />, title: "Serving London & Essex", desc: "Covering a wide range of properties from residential homes to commercial buildings and schools." },
  { icon: <CheckCircle size={28} />, title: "Competitive Pricing", desc: "Transparent, fair pricing with free quotes available. No hidden charges, ever." },
  { icon: <Star size={28} />, title: "Bespoke Service", desc: "Every solution is tailored to meet the unique needs of your property and budget." },
];

function ContactFormMini() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) return (
    <div className="text-center py-8">
      <CheckCircle size={48} style={{ color: "#77A734" }} className="mx-auto mb-3" />
      <h3 className="text-xl font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>Thank You!</h3>
      <p className="text-sm mt-1" style={{ color: "#4a6a2a" }}>We'll be in touch shortly.</p>
    </div>
  );
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="formSource" value="Home Page" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1" style={{ color: "#2d4a1a" }}>Full Name *</label>
          <input required name="name" className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all focus:ring-2" style={{ borderColor: "#b8d880", background: "#fff", color: "#1a2e0a", fontFamily: "'DM Sans', sans-serif" }}
            placeholder="John Smith" />
          <ValidationError field="name" prefix="Name" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1" style={{ color: "#2d4a1a" }}>Phone Number *</label>
          <input required name="phone" className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all focus:ring-2" style={{ borderColor: "#b8d880", background: "#fff", color: "#1a2e0a" }}
            placeholder="07700 000000" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1" style={{ color: "#2d4a1a" }}>Service Required</label>
        <select name="service" className="w-full px-4 py-3 rounded-lg border text-sm outline-none" style={{ borderColor: "#b8d880", background: "#fff", color: "#1a2e0a" }}>
          <option value="">Select a service...</option>
          <option>Plumbing</option>
          <option>Drainage</option>
          <option>CCTV / Door Entry</option>
          <option>Service Package</option>
          <option>Emergency Call Out</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1" style={{ color: "#2d4a1a" }}>Message</label>
        <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none" style={{ borderColor: "#b8d880", background: "#fff", color: "#1a2e0a" }}
          placeholder="Tell us about your requirements..." />
      </div>
      <button type="submit" disabled={state.submitting} className="w-full py-3 rounded-lg font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
        style={{ background: "#77A734", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", letterSpacing: "0.05em" }}>
        {state.submitting ? "SENDING..." : "GET MY FREE QUOTE →"}
      </button>
    </form>
  );
}

export default function Home() {
  const statsRef = useInView();
  const c0 = useCounter(stats[0].value, 2000, statsRef.inView);
  const c1 = useCounter(stats[1].value, 2000, statsRef.inView);
  const c2 = useCounter(stats[2].value, 2000, statsRef.inView);
  const c3 = useCounter(stats[3].value, 2000, statsRef.inView);
  const counts = [c0, c1, c2, c3];

  return (
    <div className="pt-24 md:pt-28">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#fff", minHeight: "90vh" }}>
        {/* Green diagonal background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full" style={{ background: "linear-gradient(135deg, #e8f5d8 0%, #c8e49a 100%)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }} />
        </div>

        <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20 lg:py-28">
          {/* Left: Text */}
          <div className="flex-1 max-w-xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6"
              style={{ background: "#e8f5d8", color: "#77A734", border: "1px solid #b8d880" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#77A734" }} />
              London & Essex — Est. 2023
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
              SPECIALIST<br />
              <span style={{ color: "#77A734" }}>MAINTENANCE</span><br />
              <span className="relative">
                SERVICES
                <span className="absolute -bottom-1 left-0 w-2/3 h-1 rounded" style={{ background: "#E8F5D8" }} />
              </span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#3d5a1a", fontFamily: "'DM Sans', sans-serif" }}>
              Delivering specialised maintenance with unrivalled customer service. Plumbing, drainage, CCTV, door entry and full building maintenance — tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/quote"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 active:scale-95"
                style={{ background: "#77A734", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", letterSpacing: "0.05em" }}>
                GET A FREE QUOTE <ArrowRight size={18} />
              </Link>
              <Link href="/emergency"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 active:scale-95 border-2"
                style={{ borderColor: "#77A734", color: "#77A734", background: "transparent", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}>
                <Phone size={18} /> EMERGENCY
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8">
              {["Fully Insured", "30+ Yrs Experience", "Free Quotes"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-sm" style={{ color: "#3d5a1a" }}>
                  <CheckCircle size={15} style={{ color: "#77A734" }} /> {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Animated SVG showcase */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Central logo */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-36 h-36 rounded-full flex items-center justify-center shadow-xl"
                  style={{ background: "#fff", border: "3px solid #77A734" }}>
                  <img src={RGS_LOGO} alt="RGS" className="w-32 h-32 object-contain" />
                </div>
              </div>
              {/* Orbiting tools */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 animate-float" style={{ animationDelay: "0s" }}>
                <WrenchSVG size={80} />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 animate-float" style={{ animationDelay: "1s" }}>
                <DrainageSVG size={80} />
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 animate-float" style={{ animationDelay: "0.5s" }}>
                <PlumbingSVG size={80} />
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 animate-float" style={{ animationDelay: "1.5s" }}>
                <CCTVSvg size={80} />
              </div>
              {/* Orbit ring */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" aria-hidden="true">
                <circle cx="200" cy="200" r="160" stroke="#77A734" strokeWidth="1.5" fill="none" strokeDasharray="8 6" opacity="0.3">
                  <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="200" r="120" stroke="#E8F5D8" strokeWidth="1" fill="none" strokeDasharray="4 8" opacity="0.2">
                  <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="15s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-8" style={{ background: "#77A734" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#77A734" }} />
        </div>
      </section>

      {/* STATS BANNER */}
      <section ref={statsRef.ref} style={{ background: "#77A734" }} className="py-10">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}>
                {counts[i]}{s.suffix}
              </div>
              <div className="text-sm mt-1" style={{ color: "#b8d880", fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4" style={{ background: "#e8f5d8", color: "#77A734" }}>
              WHAT WE DO
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
              OUR <span style={{ color: "#77A734" }}>SPECIALIST</span> SERVICES
            </h2>
            <p className="max-w-2xl mx-auto text-base" style={{ color: "#4a6a2a" }}>
              From a blocked drain to a full planned maintenance contract — we cover all aspects of property maintenance for residential and commercial clients across London and Essex.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}
                className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ background: "#fff", border: "1.5px solid #dff0c0" }}>
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {svc.icon}
                </div>
                <div className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={{ background: "#e8f5d8", color: "#77A734" }}>
                  {svc.tag}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4a6a2a" }}>{svc.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-sm font-semibold" style={{ color: "#77A734" }}>
                  Learn more <ArrowRight size={14} />
                </div>
                {/* Hover border */}
                <div className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: "#77A734" }} />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: "#1a2e0a", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", letterSpacing: "0.05em" }}>
              VIEW ALL SERVICES <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE RGS */}
      <section className="py-20" style={{ background: "#f0fbea" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: SVG illustration */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <WrenchSVG size={320} color="#77A734" />
                <div className="absolute top-4 right-4">
                  <ShieldSVG size={100} color="#E8F5D8" />
                </div>
              </div>
            </div>
            {/* Right: Reasons */}
            <div>
              <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4" style={{ background: "#e8f5d8", color: "#77A734" }}>
                WHY CHOOSE US
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
                THE RGS <span style={{ color: "#77A734" }}>DIFFERENCE</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {reasons.map((r, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: "#e8f5d8", color: "#77A734" }}>
                      {r.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a", fontSize: "1.1rem" }}>{r.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#4a6a2a" }}>{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="py-16" style={{ background: "#1a2e0a" }}>
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <EmergencySVG size={80} color="#E8F5D8" />
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}>
                24/7 EMERGENCY CALL OUT
              </h2>
              <p className="text-base mt-1" style={{ color: "#9dc46b" }}>
                Burst pipe? Blocked drain? We're available around the clock for urgent maintenance issues.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="tel:01702614260"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: "#E8F5D8", color: "#1a2e0a", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}>
              <Phone size={20} /> CALL NOW
            </a>
            <Link href="/emergency"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold border-2 transition-all hover:scale-105"
              style={{ borderColor: "#77A734", color: "#77A734", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}>
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* PIPE HEALTH QUIZ CTA BANNER */}
      <section className="py-14" style={{ background: "#f9fdf4", borderTop: "2px solid #dff0c0", borderBottom: "2px solid #dff0c0" }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4" style={{ background: "#e8f5d8", color: "#77A734" }}>
                FREE — TAKES UNDER 3 MINUTES
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
                IS YOUR PROPERTY'S DRAINAGE A<br />
                <span style={{ color: "#77A734" }}>TICKING TIME BOMB?</span>
              </h2>
              <p className="text-base leading-relaxed mb-2" style={{ color: "#4a6a2a" }}>
                Sewage incidents cost UK landlords £7,000–£30,000 per event. Answer 8 quick questions and get your free pipe health score — plus tailored recommendations from our drainage experts.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
                style={{ background: "#77A734", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", letterSpacing: "0.05em" }}
              >
                START FREE PIPE HEALTH CHECK <ArrowRight size={20} />
              </Link>
              <p className="text-xs" style={{ color: "#4a6a2a" }}>Free · Instant results · No obligation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div>
              <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4" style={{ background: "#e8f5d8", color: "#77A734" }}>
                GET IN TOUCH
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
                REQUEST YOUR <span style={{ color: "#77A734" }}>FREE QUOTE</span>
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#4a6a2a" }}>
                Tell us about your maintenance requirements and we'll get back to you with a competitive, no-obligation quote. Our team covers all of London and Essex.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Phone size={18} />, label: "Call us anytime", value: "01702 614260" },
                  { icon: <Clock size={18} />, label: "Emergency line", value: "Available 24/7" },
                  { icon: <CheckCircle size={18} />, label: "Response time", value: "Within 2 hours" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "#f0fbea" }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#e8f5d8", color: "#77A734" }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: "#4a6a2a" }}>{item.label}</div>
                      <div className="font-bold text-sm" style={{ color: "#1a2e0a" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <PlumbingSVG size={160} />
              </div>
            </div>
            {/* Right: Form */}
            <div className="rounded-2xl p-8 shadow-lg" style={{ background: "#f0fbea", border: "1.5px solid #dff0c0" }}>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
                Quick Enquiry
              </h3>
              <ContactFormMini />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20" style={{ background: "#e8f5d8" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
              WHAT OUR <span style={{ color: "#77A734" }}>CLIENTS SAY</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah T.", role: "Homeowner, Essex", text: "Fantastic service from start to finish. The team arrived promptly, fixed our burst pipe quickly and left everything spotless. Highly recommend!", stars: 5 },
              { name: "James R.", role: "Facilities Manager, London", text: "RGS look after several of our commercial properties. Their planned maintenance packages have saved us significant time and money. Professional and reliable.", stars: 5 },
              { name: "Helen M.", role: "School Business Manager", text: "We use RGS for all our drainage and plumbing needs. Always responsive, always professional. The 24/7 emergency service has been invaluable.", stars: 5 },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: "#fff", border: "1.5px solid #b8d880" }}>
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <Star key={j} size={16} fill="#E8F5D8" stroke="none" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d5a1a" }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ background: "#77A734", color: "#fff" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "#1a2e0a" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "#4a6a2a" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
