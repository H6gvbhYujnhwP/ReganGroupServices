/* RGS Quote Page — comprehensive multi-step quote form */
import { useState, useRef } from "react";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { ShieldSVG } from "@/components/SVGTools";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrevjlby";

const services = ["Plumbing", "Drainage", "CCTV Installation", "Door Entry System", "Service Package", "Emergency Call Out", "General Maintenance", "Other"];
const propertyTypes = ["Residential Home", "Flat / Apartment", "Commercial Office", "Retail Unit", "School / Education", "Industrial / Warehouse", "Block of Flats", "Other"];
const urgencies = ["Not urgent — within 2 weeks", "Soon — within 1 week", "Urgent — within 48 hours", "Emergency — today"];

type Step = 1 | 2 | 3 | 4;

export default function Quote() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({
    services: [] as string[],
    propertyType: "",
    urgency: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    preferredContact: "phone",
    bestTime: "",
    newsletter: false,
  });

  const toggleService = (s: string) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s],
    }));
  };

  const [submitting, setSubmitting] = useState(false);

  const submitToFormspree = async () => {
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          services: form.services.join(", "),
          propertyType: form.propertyType,
          urgency: form.urgency,
          description: form.description,
          address: form.address,
          postcode: form.postcode,
          bestTime: form.bestTime,
          formSource: "Quote Page",
        }),
      });
    } catch (_) {
      // proceed regardless
    }
  };

  if (step === 4) return (
    <div className="pt-24 md:pt-28 min-h-screen flex items-center justify-center" style={{ background: "#f0fbea" }}>
      <div className="text-center max-w-md mx-auto px-4 py-20">
        <CheckCircle size={72} className="mx-auto mb-6" style={{ color: "#77A734" }} />
        <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
          QUOTE REQUEST SENT!
        </h2>
        <p className="text-base mb-6" style={{ color: "#4a6a2a" }}>
          Thank you, {form.name}! We've received your quote request and will be in touch within 2 hours.
        </p>
        <div className="rounded-2xl p-6 text-left space-y-3 mb-8" style={{ background: "#e8f5d8", border: "1.5px solid #b8d880" }}>
          <div className="text-sm"><span className="font-semibold" style={{ color: "#1a2e0a" }}>Services: </span><span style={{ color: "#4a6a2a" }}>{form.services.join(", ")}</span></div>
          <div className="text-sm"><span className="font-semibold" style={{ color: "#1a2e0a" }}>Property: </span><span style={{ color: "#4a6a2a" }}>{form.propertyType}</span></div>
          <div className="text-sm"><span className="font-semibold" style={{ color: "#1a2e0a" }}>Urgency: </span><span style={{ color: "#4a6a2a" }}>{form.urgency}</span></div>
        </div>
        <a href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
          style={{ background: "#77A734", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}>
          BACK TO HOME
        </a>
      </div>
    </div>
  );

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="py-12" style={{ background: "linear-gradient(135deg, #e8f5d8 0%, #c8e49a 100%)" }}>
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
            GET YOUR <span style={{ color: "#77A734" }}>FREE QUOTE</span>
          </h1>
          <p className="text-base" style={{ color: "#3d5a1a" }}>No obligation. Competitive pricing. Fast response.</p>
        </div>
      </section>

      <section className="py-16" style={{ background: "#fff" }}>
        <div className="container max-w-3xl mx-auto">
          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-10">
            {([1, 2, 3] as const).map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className="flex items-center justify-center w-9 h-9 rounded-full font-bold text-sm flex-shrink-0 transition-all"
                  style={{ background: step >= s ? "#77A734" : "#e8f5d8", color: step >= s ? "#fff" : "#4a6a2a" }}>
                  {step > s ? <CheckCircle size={18} /> : s}
                </div>
                <div className="text-xs font-semibold hidden sm:block" style={{ color: step >= s ? "#77A734" : "#9dc46b" }}>
                  {["Service Details", "Property Info", "Your Details"][s - 1]}
                </div>
                {s < 3 && <div className="flex-1 h-0.5 rounded" style={{ background: step > s ? "#77A734" : "#dff0c0" }} />}
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-8 shadow-lg" style={{ background: "#f0fbea", border: "1.5px solid #dff0c0" }}>
            {/* Step 1: Service selection */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>What services do you need?</h2>
                <p className="text-sm mb-6" style={{ color: "#4a6a2a" }}>Select all that apply</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {services.map((s) => (
                    <button key={s} type="button" onClick={() => toggleService(s)}
                      className="p-3 rounded-xl text-sm font-semibold text-center transition-all hover:scale-105"
                      style={{
                        background: form.services.includes(s) ? "#77A734" : "#fff",
                        color: form.services.includes(s) ? "#fff" : "#2d4a1a",
                        border: `1.5px solid ${form.services.includes(s) ? "#77A734" : "#b8d880"}`,
                      }}>
                      {s}
                    </button>
                  ))}
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>How urgent is this?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {urgencies.map((u) => (
                      <button key={u} type="button" onClick={() => setForm(f => ({ ...f, urgency: u }))}
                        className="p-3 rounded-xl text-sm font-semibold text-left transition-all"
                        style={{
                          background: form.urgency === u ? "#e8f5d8" : "#fff",
                          color: "#2d4a1a",
                          border: `1.5px solid ${form.urgency === u ? "#77A734" : "#b8d880"}`,
                        }}>
                        {u}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Describe your requirements</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none" style={{ borderColor: "#b8d880", background: "#fff", color: "#1a2e0a" }}
                    placeholder="Please describe what you need in as much detail as possible..."
                    value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
                </div>
                <button onClick={() => setStep(2)} disabled={form.services.length === 0}
                  className="w-full py-4 rounded-xl font-bold text-base transition-all hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: "#77A734", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}>
                  NEXT: PROPERTY DETAILS <ArrowRight size={18} className="inline ml-2" />
                </button>
              </div>
            )}

            {/* Step 2: Property info */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>Tell us about the property</h2>
                <p className="text-sm mb-6" style={{ color: "#4a6a2a" }}>This helps us provide an accurate quote</p>
                <div className="mb-5">
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Property Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {propertyTypes.map((p) => (
                      <button key={p} type="button" onClick={() => setForm(f => ({ ...f, propertyType: p }))}
                        className="p-3 rounded-xl text-sm font-semibold text-center transition-all"
                        style={{
                          background: form.propertyType === p ? "#77A734" : "#fff",
                          color: form.propertyType === p ? "#fff" : "#2d4a1a",
                          border: `1.5px solid ${form.propertyType === p ? "#77A734" : "#b8d880"}`,
                        }}>
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Property Address</label>
                    <input className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "#b8d880", background: "#fff", color: "#1a2e0a" }}
                      placeholder="Street address" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Postcode</label>
                    <input className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "#b8d880", background: "#fff", color: "#1a2e0a" }}
                      placeholder="e.g. E1 6RF" value={form.postcode} onChange={e => setForm(f => ({ ...f, postcode: e.target.value }))} />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-xl font-bold text-base border-2 transition-all hover:scale-[1.02]"
                    style={{ borderColor: "#77A734", color: "#77A734", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}>
                    <ArrowLeft size={16} className="inline mr-2" /> BACK
                  </button>
                  <button onClick={() => setStep(3)} className="flex-1 py-4 rounded-xl font-bold text-base transition-all hover:scale-[1.02]"
                    style={{ background: "#77A734", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}>
                    NEXT: YOUR DETAILS <ArrowRight size={16} className="inline ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact details */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>Your contact details</h2>
                <p className="text-sm mb-6" style={{ color: "#4a6a2a" }}>We'll use these to send your quote</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Full Name *</label>
                    <input required className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "#b8d880", background: "#fff", color: "#1a2e0a" }}
                      placeholder="John Smith" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Phone Number *</label>
                    <input required className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "#b8d880", background: "#fff", color: "#1a2e0a" }}
                      placeholder="07700 000000" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Email Address *</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "#b8d880", background: "#fff", color: "#1a2e0a" }}
                    placeholder="you@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2d4a1a" }}>Best time to contact you</label>
                  <select className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "#b8d880", background: "#fff", color: "#1a2e0a" }}
                    value={form.bestTime} onChange={e => setForm(f => ({ ...f, bestTime: e.target.value }))}>
                    <option value="">Select a time...</option>
                    <option>Morning (8am–12pm)</option>
                    <option>Afternoon (12pm–5pm)</option>
                    <option>Evening (5pm–8pm)</option>
                    <option>Any time</option>
                  </select>
                </div>
                <div className="flex items-center gap-3 mb-6 p-4 rounded-xl" style={{ background: "#e8f5d8" }}>
                  <input type="checkbox" id="newsletter" checked={form.newsletter}
                    onChange={e => setForm(f => ({ ...f, newsletter: e.target.checked }))}
                    className="w-4 h-4 rounded" style={{ accentColor: "#77A734" }} />
                  <label htmlFor="newsletter" className="text-sm" style={{ color: "#2d4a1a" }}>
                    Keep me updated with maintenance tips and special offers
                  </label>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="flex-1 py-4 rounded-xl font-bold text-base border-2 transition-all hover:scale-[1.02]"
                    style={{ borderColor: "#77A734", color: "#77A734", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}>
                    <ArrowLeft size={16} className="inline mr-2" /> BACK
                  </button>
                  <button
                    onClick={async () => {
                      if (form.name && form.phone && form.email) {
                        setSubmitting(true);
                        await submitToFormspree();
                        setSubmitting(false);
                        setStep(4);
                      }
                    }}
                    disabled={!form.name || !form.phone || !form.email || submitting}
                    className="flex-1 py-4 rounded-xl font-bold text-base transition-all hover:scale-[1.02] disabled:opacity-40"
                    style={{ background: "#E8F5D8", color: "#1a2e0a", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}>
                    {submitting ? "SENDING..." : "SUBMIT QUOTE REQUEST ✓"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {["Free, No-Obligation Quote", "Response Within 2 Hours", "Competitive Pricing", "Fully Insured"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm" style={{ color: "#4a6a2a" }}>
                <CheckCircle size={15} style={{ color: "#77A734" }} /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
