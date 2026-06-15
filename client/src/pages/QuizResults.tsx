// RGS Pipe Health Quiz — Results Page
// Brand: #77A734 green, #E8F5D8 light green, white background
// Reads result from sessionStorage key: rgs_quiz_result

import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { QuizResult } from "@/lib/quizData";
import { CheckCircle, AlertTriangle, AlertOctagon, XCircle, Phone, ChevronRight, BookOpen } from "lucide-react";

const BRAND_GREEN = "#77A734";
const LIGHT_GREEN = "#E8F5D8";
const DARK_GREEN = "#2d4a1a";

const RISK_CONFIG = {
  low: {
    label: "Low Risk",
    colour: "#22c55e",
    bg: "#f0fdf4",
    border: "#86efac",
    icon: <CheckCircle size={24} />,
    headline: "Your drainage system looks healthy!",
    subheadline: "Keep up the good work — regular maintenance will protect your investment.",
  },
  medium: {
    label: "Medium Risk",
    colour: "#f59e0b",
    bg: "#fffbeb",
    border: "#fcd34d",
    icon: <AlertTriangle size={24} />,
    headline: "Some risk factors detected",
    subheadline: "A professional survey would identify developing issues before they become costly emergencies.",
  },
  high: {
    label: "High Risk",
    colour: "#f97316",
    bg: "#fff7ed",
    border: "#fdba74",
    icon: <AlertOctagon size={24} />,
    headline: "Significant risk — action recommended",
    subheadline: "Your drainage system shows multiple risk factors. Without intervention, emergency costs are likely.",
  },
  critical: {
    label: "Critical Risk",
    colour: "#ef4444",
    bg: "#fef2f2",
    border: "#fca5a5",
    icon: <XCircle size={24} />,
    headline: "Critical — immediate action needed",
    subheadline: "Your system is at high risk of failure. An emergency survey is strongly recommended this week.",
  },
};

// Animated circular gauge
function ScoreGauge({ score, colour }: { score: number; colour: string }) {
  const [displayScore, setDisplayScore] = useState(0);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;
    const duration = 1200;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayScore(Math.round(eased * score));
      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      }
    };
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [score]);

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayScore / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
      <svg width="200" height="200" viewBox="0 0 200 200" className="-rotate-90">
        <circle cx="100" cy="100" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="16" />
        <circle
          cx="100" cy="100" r={radius}
          fill="none"
          stroke={colour}
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.05s linear" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: colour }}>{displayScore}</span>
        <span className="text-sm font-semibold text-gray-500">/ 100</span>
        <span className="text-xs text-gray-400 mt-1">Health Score</span>
      </div>
    </div>
  );
}

export default function QuizResults() {
  const [, setLocation] = useLocation();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [leadName, setLeadName] = useState<string>("");

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem("rgs_quiz_result");
    const storedLead = sessionStorage.getItem("rgs_quiz_lead");
    if (!stored) {
      setLocation("/quiz");
      return;
    }
    setResult(JSON.parse(stored));
    if (storedLead) {
      const lead = JSON.parse(storedLead);
      setLeadName(lead.name?.split(" ")[0] || "");
    }
    // Fire Facebook Pixel ViewContent
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "ViewContent", {
        content_name: "Quiz Results",
        content_category: "Drainage Assessment",
      });
    }
  }, [setLocation]);

  const fireBooking = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase", {
        value: 0,
        currency: "GBP",
        content_name: "Book Free Consultation",
      });
    }
  };

  if (!result) return null;

  const config = RISK_CONFIG[result.riskLevel];

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-28" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Results hero */}
      <section className="py-12 border-b" style={{ background: config.bg }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          {leadName && (
            <p className="text-sm font-semibold mb-2" style={{ color: BRAND_GREEN }}>
              Results for {leadName}
            </p>
          )}
          <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
            YOUR PIPE HEALTH REPORT
          </h1>
          <p className="text-gray-500 mb-8">Based on your answers, here is your personalised drainage assessment</p>

          {/* Score gauge + risk badge */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <ScoreGauge score={result.score} colour={config.colour} />
            <div className="text-left max-w-sm">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm mb-4"
                style={{ background: config.bg, border: `2px solid ${config.border}`, color: config.colour }}
              >
                {config.icon} {config.label}
              </div>
              <h2 className="text-2xl font-black mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
                {config.headline}
              </h2>
              <p className="text-gray-600 text-sm">{config.subheadline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl p-6 mb-8" style={{ background: LIGHT_GREEN }}>
            <h3 className="font-bold text-lg mb-2" style={{ color: DARK_GREEN }}>Assessment Summary</h3>
            <p className="text-gray-700">{result.summary}</p>
          </div>

          {/* Cost exposure */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl p-6 text-center border-2" style={{ borderColor: "#fee2e2", background: "#fef9f9" }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-2 text-red-400">Estimated Annual Risk Exposure</div>
              <div className="text-4xl font-black mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#ef4444" }}>
                £{result.estimatedAnnualRisk.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">Without planned maintenance</div>
            </div>
            <div className="rounded-2xl p-6 text-center border-2" style={{ borderColor: "#bbf7d0", background: "#f0fdf4" }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: BRAND_GREEN }}>Potential Annual Savings</div>
              <div className="text-4xl font-black mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: BRAND_GREEN }}>
                £{result.potentialSavings.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">With a planned maintenance contract</div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-10">
            <h3 className="text-2xl font-black mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
              YOUR RECOMMENDATIONS
            </h3>
            <div className="space-y-3">
              {result.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#e5e7eb" }}>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: BRAND_GREEN }}>
                    {i + 1}
                  </div>
                  <p className="text-gray-700 text-sm">{rec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-8 text-center" style={{ background: DARK_GREEN }}>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              BOOK YOUR FREE DRAINAGE CONSULTATION
            </h3>
            <p className="text-white opacity-80 mb-6 text-sm max-w-lg mx-auto">
              One of our drainage specialists will review your results and provide a no-obligation assessment of your property's drainage system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                onClick={fireBooking}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
                style={{ background: BRAND_GREEN, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}
              >
                BOOK FREE CONSULTATION <ChevronRight size={18} />
              </a>
              <a
                href="tel:01702614260"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 border-2"
                style={{ borderColor: LIGHT_GREEN, color: LIGHT_GREEN, fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}
              >
                <Phone size={18} /> CALL 01702 614260
              </a>
            </div>
          </div>

          {/* Article link */}
          <div className="mt-8 text-center">
            <Link
              href="/quiz/article"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:underline"
              style={{ color: BRAND_GREEN }}
            >
              <BookOpen size={16} />
              Read: The True Cost of Failed Pipes & Sewage Blockages →
            </Link>
          </div>

          {/* Retake */}
          <div className="mt-4 text-center">
            <Link href="/quiz" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              ← Retake the quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
