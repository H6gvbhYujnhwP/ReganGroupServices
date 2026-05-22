/* RGS Contact Page */
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageSquare } from "lucide-react";
import { PlumbingSVG } from "@/components/SVGTools";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  if (sent) return (
    <div className="text-center py-12">
      <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#5B9E1F" }} />
      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>Message Sent!</h3>
      <p style={{ color: "#5a7a3a" }}>We'll get back to you within 2 hours.</p>
    </div>
  );
  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Full Name *</label>
          <input required className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-green-400" style={{ borderColor: "#c8e6a0", background: "#fff", color: "#1a2e0a" }}
            placeholder="John Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Phone Number</label>
          <input className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-green-400" style={{ borderColor: "#c8e6a0", background: "#fff", color: "#1a2e0a" }}
            placeholder="07700 000000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Email Address *</label>
        <input required type="email" className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-green-400" style={{ borderColor: "#c8e6a0", background: "#fff", color: "#1a2e0a" }}
          placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Subject</label>
        <select className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "#c8e6a0", background: "#fff", color: "#1a2e0a" }}
          value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
          <option value="">Select a subject...</option>
          <option>General Enquiry</option>
          <option>Request a Quote</option>
          <option>Plumbing</option>
          <option>Drainage</option>
          <option>CCTV / Door Entry</option>
          <option>Service Package</option>
          <option>Emergency</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Message *</label>
        <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none transition-all focus:border-green-400" style={{ borderColor: "#c8e6a0", background: "#fff", color: "#1a2e0a" }}
          placeholder="Tell us how we can help..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
      </div>
      <button type="submit" className="w-full py-4 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
        style={{ background: "#5B9E1F", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", letterSpacing: "0.05em" }}>
        SEND MESSAGE →
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #eef7e6 0%, #d4edba 100%)" }}>
        <div className="container text-center">
          <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4" style={{ background: "#fff", color: "#5B9E1F" }}>
            GET IN TOUCH
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
            CONTACT <span style={{ color: "#5B9E1F" }}>US</span>
          </h1>
          <p className="max-w-xl mx-auto text-base" style={{ color: "#4a6a2a" }}>
            Whether you need a quote, have a question, or want to discuss a maintenance contract — we're here to help.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-extrabold mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
              HOW TO REACH US
            </h2>
            <div className="space-y-5 mb-10">
              {[
                { icon: <Phone size={22} />, label: "Phone", val: "01234 567 890", link: "tel:+441234567890", color: "#5B9E1F" },
                { icon: <Mail size={22} />, label: "Email", val: "info@regangroupservices.com", link: "mailto:info@regangroupservices.com", color: "#5B9E1F" },
                { icon: <MapPin size={22} />, label: "Areas Served", val: "London & Essex", link: null, color: "#D4A017" },
                { icon: <Clock size={22} />, label: "Emergency", val: "24/7 Available", link: null, color: "#D4A017" },
                { icon: <MessageSquare size={22} />, label: "Office Hours", val: "Mon–Fri 8am–6pm, Sat 9am–4pm", link: null, color: "#5B9E1F" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl" style={{ background: "#f7fdf2", border: "1.5px solid #e8f5d8" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#eef7e6", color: item.color }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold mb-0.5" style={{ color: "#5a7a3a" }}>{item.label}</div>
                    {item.link ? (
                      <a href={item.link} className="font-bold text-sm hover:underline" style={{ color: "#1a2e0a" }}>{item.val}</a>
                    ) : (
                      <div className="font-bold text-sm" style={{ color: "#1a2e0a" }}>{item.val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <PlumbingSVG size={200} />
            </div>
          </div>
          {/* Form */}
          <div className="rounded-2xl p-8 shadow-lg" style={{ background: "#f7fdf2", border: "1.5px solid #e8f5d8" }}>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
              Send Us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="rounded-2xl overflow-hidden" style={{ border: "1.5px solid #e8f5d8", height: 320, background: "#eef7e6", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="text-center">
              <MapPin size={48} style={{ color: "#5B9E1F" }} className="mx-auto mb-3" />
              <p className="font-bold text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>Serving London & Essex</p>
              <p className="text-sm mt-1" style={{ color: "#5a7a3a" }}>Contact us for our exact service area coverage</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
