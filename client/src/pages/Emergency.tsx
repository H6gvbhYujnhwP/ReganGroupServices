/* RGS Emergency Page — 24/7 call out */
import { useState } from "react";
import { Phone, Clock, CheckCircle, AlertTriangle, Zap } from "lucide-react";
import { EmergencySVG, DrainageSVG, PlumbingSVG } from "@/components/SVGTools";

const emergencies = [
  { icon: <AlertTriangle size={20} />, title: "Burst Pipes", desc: "Immediate response to burst or leaking pipes to prevent flooding and water damage." },
  { icon: <AlertTriangle size={20} />, title: "Severe Blockages", desc: "Blocked drains causing flooding or sewage backup — cleared fast." },
  { icon: <Zap size={20} />, title: "Boiler Issues", desc: "No heating or hot water? We'll get your system back up and running." },
  { icon: <AlertTriangle size={20} />, title: "Flood Damage", desc: "Emergency response to water ingress and flood damage in your property." },
  { icon: <Zap size={20} />, title: "CCTV/Door Entry Faults", desc: "Security system failures resolved quickly to keep your property protected." },
  { icon: <AlertTriangle size={20} />, title: "Gas Leaks", desc: "If you suspect a gas leak, call the National Gas Emergency line first, then call us." },
];

function EmergencyForm() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", issue: "" });
  const [sent, setSent] = useState(false);
  if (sent) return (
    <div className="text-center py-10">
      <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#E8F5D8" }} />
      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}>Emergency Request Received!</h3>
      <p style={{ color: "#b8d880" }}>Our team will call you back within 15 minutes.</p>
    </div>
  );
  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1" style={{ color: "#b8d880" }}>Your Name *</label>
          <input required className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
            placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1" style={{ color: "#b8d880" }}>Phone Number *</label>
          <input required className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
            placeholder="07700 000000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1" style={{ color: "#b8d880" }}>Property Address *</label>
        <input required className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
          placeholder="Full address including postcode" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1" style={{ color: "#b8d880" }}>Describe the Emergency *</label>
        <textarea required rows={4} className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
          placeholder="Describe what's happening..." value={form.issue} onChange={e => setForm({ ...form, issue: e.target.value })} />
      </div>
      <button type="submit" className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
        style={{ background: "#E8F5D8", color: "#1a2e0a", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>
        SEND EMERGENCY REQUEST →
      </button>
    </form>
  );
}

export default function Emergency() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero — dark urgent */}
      <section className="py-20" style={{ background: "#1a2e0a" }}>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6"
              style={{ background: "#E8F5D8", color: "#1a2e0a" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1a2e0a" }} />
              AVAILABLE RIGHT NOW
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}>
              24/7 <span style={{ color: "#E8F5D8" }}>EMERGENCY</span><br />CALL OUT
            </h1>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#9dc46b" }}>
              Maintenance emergencies don't wait for office hours. Our team is available around the clock, every day of the year — including weekends and bank holidays.
            </p>
            <a href="tel:+441234567890"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 active:scale-95"
              style={{ background: "#E8F5D8", color: "#1a2e0a", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>
              <Phone size={24} /> CALL 01234 567 890
            </a>
            <div className="flex items-center gap-2 mt-4 text-sm" style={{ color: "#9dc46b" }}>
              <Clock size={14} /> Average response time: under 1 hour
            </div>
          </div>
          <div className="flex justify-center">
            <EmergencySVG size={280} color="#E8F5D8" />
          </div>
        </div>
      </section>

      {/* Emergency types */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
              EMERGENCY <span style={{ color: "#77A734" }}>SITUATIONS</span> WE COVER
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencies.map((e, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: "#f0fbea", border: "1.5px solid #dff0c0" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#E8F5D8", color: "#2d4a1a" }}>
                  {e.icon}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>{e.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4a6a2a" }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency form */}
      <section className="py-20" style={{ background: "#1a2e0a" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}>
                SUBMIT AN <span style={{ color: "#E8F5D8" }}>EMERGENCY REQUEST</span>
              </h2>
              <p className="text-base mb-8" style={{ color: "#9dc46b" }}>
                Fill in the form and we'll call you back within 15 minutes. For the fastest response, please call us directly.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Response Time", val: "Under 1 hour" },
                  { label: "Available", val: "24/7, 365 days" },
                  { label: "Coverage", val: "London & Essex" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: "#E8F5D8" }} />
                    <span className="text-sm" style={{ color: "#9dc46b" }}>{item.label}:</span>
                    <span className="font-bold text-sm" style={{ color: "#fff" }}>{item.val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <DrainageSVG size={160} color="#77A734" />
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <EmergencyForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
