/* RGS Services Page */
import { useState } from "react";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { WrenchSVG, PlumbingSVG, CCTVSvg, DrainageSVG, ShieldSVG, EmergencySVG } from "@/components/SVGTools";

const services = [
  {
    id: "plumbing",
    title: "Plumbing",
    subtitle: "Full-Scope Plumbing Solutions",
    svg: <PlumbingSVG size={180} />,
    color: "#5B9E1F",
    desc: "We cover all aspects of plumbing from tap changes to new radiator installation. Whether you need a small repair or a full installation, our qualified plumbers deliver quality workmanship every time.",
    features: [
      "Tap repairs and replacements",
      "Radiator installation and removal",
      "Boiler and cylinder connections",
      "Bathroom and kitchen installations",
      "Leak detection and repair",
      "Pipe lagging and insulation",
      "Cold water storage tanks",
      "Pressure testing",
    ],
    cta: "Free Quote Available",
    tag: "Residential & Commercial",
  },
  {
    id: "drainage",
    title: "Drainage",
    subtitle: "Drainage Clearance & CCTV Surveys",
    svg: <DrainageSVG size={180} />,
    color: "#5B9E1F",
    desc: "From a simple blocked sink to a full drainage CCTV survey, we've got you covered. We use the latest equipment to diagnose and resolve drainage issues quickly and efficiently.",
    features: [
      "Blocked drain clearance from £60+VAT",
      "High-pressure water jetting",
      "CCTV drainage surveys",
      "Drain mapping and reporting",
      "Root cutting and removal",
      "Soakaway installation",
      "Gully and manhole clearance",
      "Drain lining and repair",
    ],
    cta: "From £60 + VAT",
    tag: "Fast Response",
  },
  {
    id: "cctv",
    title: "CCTV & Door Entry",
    subtitle: "Security & Access Control Systems",
    svg: <CCTVSvg size={180} />,
    color: "#5B9E1F",
    desc: "Protect your property with our professional CCTV and door entry system installations. We supply and install systems for residential properties, commercial buildings, and schools.",
    features: [
      "CCTV system design and installation",
      "IP and analogue camera systems",
      "Remote viewing setup",
      "Door entry system installation",
      "Video intercom systems",
      "Access control systems",
      "System maintenance and servicing",
      "Fault finding and repair",
    ],
    cta: "Get a Security Survey",
    tag: "All Property Types",
  },
  {
    id: "packages",
    title: "Service Packages",
    subtitle: "Planned Maintenance Contracts",
    svg: <ShieldSVG size={180} />,
    color: "#D4A017",
    desc: "Our bespoke service packages are designed to give you complete peace of mind. We tailor planned maintenance contracts to suit your property portfolio, budget, and requirements.",
    features: [
      "Annual planned maintenance visits",
      "Priority emergency response",
      "Dedicated account manager",
      "Comprehensive service reports",
      "Discounted reactive call-out rates",
      "Multi-property portfolio management",
      "Schools and commercial buildings",
      "Residential block management",
    ],
    cta: "Discuss Your Package",
    tag: "Bespoke Contracts",
  },
  {
    id: "emergency",
    title: "Emergency Call Out",
    subtitle: "24/7 Emergency Response",
    svg: <EmergencySVG size={180} color="#D4A017" />,
    color: "#D4A017",
    desc: "Maintenance emergencies don't keep office hours. Our 24/7 emergency call out service means help is always available when you need it most — day or night, weekends and bank holidays.",
    features: [
      "Available 24 hours a day, 7 days a week",
      "Rapid response times",
      "Burst pipe emergency repair",
      "Severe blockage clearance",
      "Flood damage response",
      "CCTV and door entry faults",
      "Weekends and bank holidays",
      "London and Essex coverage",
    ],
    cta: "Call Now",
    tag: "24/7 Available",
  },
  {
    id: "maintenance",
    title: "General Maintenance",
    subtitle: "The Maintenance Umbrella",
    svg: <WrenchSVG size={180} />,
    color: "#5B9E1F",
    desc: "Beyond our specialist services, RGS can cover all aspects of building maintenance. If you can't find what you need on our website, contact us — our team will be happy to help.",
    features: [
      "General building repairs",
      "Carpentry and joinery",
      "Painting and decorating",
      "Tiling and flooring",
      "Gutter cleaning and repair",
      "External property maintenance",
      "Reactive maintenance",
      "Condition surveys",
    ],
    cta: "Ask Us Anything",
    tag: "Full Coverage",
  },
];

function QuoteFormInline() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", details: "" });
  const [sent, setSent] = useState(false);
  if (sent) return (
    <div className="text-center py-10">
      <CheckCircle size={48} className="mx-auto mb-3" style={{ color: "#5B9E1F" }} />
      <h3 className="text-2xl font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}>Quote Request Sent!</h3>
      <p className="mt-2" style={{ color: "#c8e6a0" }}>We'll be in touch within 2 hours.</p>
    </div>
  );
  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-semibold mb-1" style={{ color: "#c8e6a0" }}>Full Name *</label>
        <input required className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
          placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1" style={{ color: "#c8e6a0" }}>Phone *</label>
        <input required className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
          placeholder="07700 000000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1" style={{ color: "#c8e6a0" }}>Email</label>
        <input type="email" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
          placeholder="email@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1" style={{ color: "#c8e6a0" }}>Service Required</label>
        <select className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
          value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
          <option value="" style={{ color: "#1a2e0a" }}>Select service...</option>
          {services.map(s => <option key={s.id} value={s.title} style={{ color: "#1a2e0a" }}>{s.title}</option>)}
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="block text-xs font-semibold mb-1" style={{ color: "#c8e6a0" }}>Details</label>
        <textarea rows={3} className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
          placeholder="Describe your requirements..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} />
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="w-full py-4 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: "#D4A017", color: "#1a2e0a", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", letterSpacing: "0.05em" }}>
          REQUEST FREE QUOTE →
        </button>
      </div>
    </form>
  );
}

export default function Services() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #eef7e6 0%, #d4edba 100%)" }}>
        <div className="container text-center">
          <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4" style={{ background: "#fff", color: "#5B9E1F" }}>
            WHAT WE OFFER
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
            OUR <span style={{ color: "#5B9E1F" }}>SERVICES</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "#4a6a2a" }}>
            Specialist maintenance services for residential, commercial and educational properties across London and Essex. Planned, reactive, and emergency cover available.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container space-y-20">
          {services.map((svc, i) => (
            <div key={svc.id} id={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              style={{ flexDirection: i % 2 === 1 ? "row-reverse" : "row" }}>
              {/* SVG side */}
              <div className={`flex justify-center ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative">
                  {svc.svg}
                  <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: svc.color, color: "#fff" }}>
                    {svc.tag}
                  </div>
                </div>
              </div>
              {/* Content side */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-3"
                  style={{ background: "#eef7e6", color: svc.color }}>
                  {svc.subtitle}
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
                  {svc.title}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#5a7a3a" }}>{svc.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {svc.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm" style={{ color: "#2d4a1a" }}>
                      <CheckCircle size={14} style={{ color: svc.color, flexShrink: 0 }} /> {f}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link href="/quote"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
                    style={{ background: svc.color, color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}>
                    {svc.cta} <ArrowRight size={14} />
                  </Link>
                  {svc.id === "emergency" && (
                    <a href="tel:+441234567890"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:scale-105"
                      style={{ borderColor: "#D4A017", color: "#D4A017", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}>
                      <Phone size={14} /> 01234 567 890
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote CTA Banner */}
      <section className="py-20" style={{ background: "#1a2e0a" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}>
              GET YOUR <span style={{ color: "#D4A017" }}>FREE QUOTE</span> TODAY
            </h2>
            <p className="text-base" style={{ color: "#a8c88a" }}>
              No obligation. Competitive pricing. Fast response across London and Essex.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <QuoteFormInline />
          </div>
        </div>
      </section>
    </div>
  );
}
