// RGS Pipe Health Quiz — Landing Page
// Brand: #77A734 green, #E8F5D8 light green, white background
// Uses existing RGS site colour scheme — no changes to other pages

import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, AlertTriangle, Clock, Shield, ChevronRight, Phone } from "lucide-react";

const BRAND_GREEN = "#77A734";
const LIGHT_GREEN = "#E8F5D8";
const DARK_GREEN = "#2d4a1a";

const stats = [
  { value: "£7,000–£30,000", label: "Average sewage incident cost" },
  { value: "80%", label: "Cost reduction with planned maintenance" },
  { value: "72hrs", label: "Average time before sewage backup becomes structural" },
  { value: "1 in 3", label: "UK commercial properties have undetected pipe damage" },
];

const damageImages = [
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/DP9FEWsVLvkkd9oUeQo9ER/sewage-damage-flooded-basement-eagHbmw7L9FazNjNb8RrMC.webp",
    label: "Flooded Basement",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/DP9FEWsVLvkkd9oUeQo9ER/sewage-damage-office-floor-9tVZFptLjCx4XeFSaU5vpj.webp",
    label: "Office Floor Damage",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/DP9FEWsVLvkkd9oUeQo9ER/sewage-damage-residential-bathroom-Mbcpk9obFzrsVq5dGqCnLN.webp",
    label: "Residential Bathroom",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/DP9FEWsVLvkkd9oUeQo9ER/blocked-drain-fatberg-d2FBP8uyHJFWC837kfm2G4.webp",
    label: "Fatberg Blockage",
  },
];

const benefits = [
  "Takes less than 3 minutes to complete",
  "Instant personalised risk score",
  "Estimated annual cost exposure",
  "Tailored recommendations from drainage experts",
  "Completely free — no obligation",
];

export default function QuizLanding() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);

  const firePixel = (event: string) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", event, {
        content_name: "Pipe Health Quiz",
        content_category: "Drainage Assessment",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-28" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${DARK_GREEN} 0%, #3d6b20 100%)` }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: BRAND_GREEN, transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{ background: BRAND_GREEN, transform: "translate(-30%, 30%)" }} />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: "rgba(232,245,216,0.15)", border: `1px solid ${LIGHT_GREEN}`, color: LIGHT_GREEN }}>
                <Shield size={14} /> FREE — Takes Under 3 Minutes
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "-0.02em" }}>
                IS YOUR PROPERTY'S<br />
                <span style={{ color: BRAND_GREEN }}>DRAINAGE SYSTEM</span><br />
                A TICKING TIME BOMB?
              </h1>
              <p className="text-lg mb-8 opacity-90 max-w-lg">
                Answer 8 quick questions and get an instant pipe health score — plus your estimated annual risk exposure and expert recommendations.
              </p>
              <Link
                href="/quiz/questions"
                onClick={() => firePixel("InitiateCheckout")}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
                style={{ background: BRAND_GREEN, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", letterSpacing: "0.05em" }}
              >
                START MY FREE PIPE HEALTH CHECK <ChevronRight size={20} />
              </Link>
              <div className="flex flex-wrap gap-4 mt-6">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm opacity-80">
                    <CheckCircle size={14} style={{ color: BRAND_GREEN }} /> {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-80">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/DP9FEWsVLvkkd9oUeQo9ER/hero-pipe-diagnostic-eW8GUVXCkMS5SgmLarhwNn.webp"
                alt="Pipe diagnostic survey"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ maxHeight: 380 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: BRAND_GREEN }}>
        <div className="container mx-auto px-4 py-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="text-2xl md:text-3xl font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.value}</div>
                <div className="text-xs md:text-sm opacity-90 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sewage damage section */}
      <section className="py-16" style={{ background: "#f9fdf4" }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ background: LIGHT_GREEN, color: DARK_GREEN }}>
              <AlertTriangle size={14} /> The Real Cost of Ignoring Drainage
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
              THIS IS WHAT HAPPENS WHEN<br />
              <span style={{ color: BRAND_GREEN }}>DRAINAGE FAILS WITHOUT WARNING</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most property owners only discover drainage problems when it's too late. A single sewage backup can cost between £7,000 and £30,000 in damage, lost rent, and emergency repairs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {damageImages.map((img) => (
              <div key={img.label} className="relative rounded-xl overflow-hidden shadow-md group">
                <img src={img.url} alt={img.label} className="w-full h-40 object-cover transition-transform group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs font-semibold text-white" style={{ background: "rgba(0,0,0,0.55)" }}>
                  {img.label}
                </div>
              </div>
            ))}
          </div>

          {/* Pipe materials image */}
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center gap-0">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/DP9FEWsVLvkkd9oUeQo9ER/pipe-materials-L5kSjueeMtF4kDJA37xeVw.webp"
              alt="Different pipe materials"
              className="w-full md:w-1/2 h-56 object-cover"
            />
            <div className="flex-1 p-8" style={{ background: LIGHT_GREEN }}>
              <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
                DO YOU KNOW WHAT'S UNDERGROUND?
              </h3>
              <p className="text-gray-700 mb-4">
                Pitch fibre pipes installed pre-1980 are now collapsing across the UK. Clay pipes crack. Cast iron corrodes. Without a CCTV survey, you're flying blind.
              </p>
              <Link
                href="/quiz/questions"
                onClick={() => firePixel("InitiateCheckout")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
                style={{ background: BRAND_GREEN, color: "white", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                CHECK YOUR RISK NOW <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
              HOW THE PIPE HEALTH CHECK WORKS
            </h2>
            <p className="text-gray-500">Three simple steps to your personalised drainage risk report</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: <Clock size={28} />, title: "Answer 8 Questions", desc: "Quick questions about your building age, pipe material, inspection history, and recent issues." },
              { step: "02", icon: <Shield size={28} />, title: "Get Your Score", desc: "Our algorithm calculates your pipe health score and risk level based on your answers." },
              { step: "03", icon: <CheckCircle size={28} />, title: "See Your Report", desc: "Receive tailored recommendations, estimated annual risk exposure, and potential savings." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6 rounded-2xl" style={{ background: LIGHT_GREEN }}>
                <div className="text-5xl font-black mb-3 opacity-20" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: BRAND_GREEN }}>{item.step}</div>
                <div className="flex justify-center mb-3" style={{ color: BRAND_GREEN }}>{item.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: DARK_GREEN }}>{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ background: DARK_GREEN }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            READY TO FIND OUT YOUR<br />
            <span style={{ color: BRAND_GREEN }}>PIPE HEALTH SCORE?</span>
          </h2>
          <p className="text-white opacity-80 mb-8 text-lg">
            Free. Takes under 3 minutes. Instant results. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz/questions"
              onClick={() => firePixel("InitiateCheckout")}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
              style={{ background: BRAND_GREEN, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem" }}
            >
              START FREE CHECK <ChevronRight size={20} />
            </Link>
            <a
              href="tel:01702614260"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 border-2"
              style={{ borderColor: LIGHT_GREEN, color: LIGHT_GREEN, fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}
            >
              <Phone size={18} /> CALL 01702 614260
            </a>
          </div>
          <p className="text-white opacity-50 text-sm mt-6">
            Or read our article: <Link href="/quiz/article" className="underline opacity-80 hover:opacity-100">The True Cost of Failed Pipes & Sewage Blockages →</Link>
          </p>
        </div>
      </section>

    </div>
  );
}
