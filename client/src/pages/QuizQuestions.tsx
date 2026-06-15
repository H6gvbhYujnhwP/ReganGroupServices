// RGS Pipe Health Quiz — Questions + Lead Capture
// Brand: #77A734 green, #E8F5D8 light green, white background

import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm, ValidationError } from "@formspree/react";
import { quizQuestions, calculateResult, QuizAnswers } from "@/lib/quizData";
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";

const BRAND_GREEN = "#77A734";
const LIGHT_GREEN = "#E8F5D8";
const DARK_GREEN = "#2d4a1a";
const FORMSPREE_ID = "xrevjlby";

interface LeadForm {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
}

export default function QuizQuestions() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(0); // 0-7 = questions, 8 = lead form
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [lead, setLead] = useState<LeadForm>({ name: "", email: "", phone: "", propertyType: "" });
  const [formspreeState, handleFormspreeSubmit] = useForm(FORMSPREE_ID);

  // Scroll to top on mount and on every step change
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [currentStep]);

  const totalSteps = quizQuestions.length + 1; // 8 questions + 1 lead form
  const progress = Math.round((currentStep / totalSteps) * 100);
  const isQuestionStep = currentStep < quizQuestions.length;
  const currentQuestion = isQuestionStep ? quizQuestions[currentStep] : null;
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null;

  const firePixel = (event: string, data?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", event, { content_name: "Pipe Health Quiz", ...data });
    }
  };

  const handleOptionSelect = (value: string) => {
    if (!currentQuestion) return;
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    setTimeout(() => {
      if (currentStep < quizQuestions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else if (currentStep === quizQuestions.length - 1) {
        setCurrentStep(quizQuestions.length); // go to lead form
        firePixel("AddToCart");
      }
    }, 350);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    firePixel("Lead", { value: 0, currency: "GBP" });

    // Store result in sessionStorage for results page
    const result = calculateResult(answers);
    sessionStorage.setItem("rgs_quiz_result", JSON.stringify(result));
    sessionStorage.setItem("rgs_quiz_lead", JSON.stringify(lead));
    sessionStorage.setItem("rgs_quiz_answers", JSON.stringify(answers));

    // Submit to Formspree
    await handleFormspreeSubmit({
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      propertyType: lead.propertyType,
      quizScore: result.score,
      riskLevel: result.riskLevel,
      formSource: "Pipe Health Quiz",
    });

    // Navigate to results regardless of Formspree response
    setLocation("/quiz/results");
  };

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-28" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Progress header */}
      <div className="sticky top-16 z-10 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3 max-w-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold" style={{ color: DARK_GREEN }}>
              {isQuestionStep ? `Question ${currentStep + 1} of ${quizQuestions.length}` : "Almost done — your details"}
            </span>
            <span className="text-sm font-bold" style={{ color: BRAND_GREEN }}>{progress}% complete</span>
          </div>
          <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: BRAND_GREEN }}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-2xl">

        {/* Question step */}
        {isQuestionStep && currentQuestion && (
          <div>
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BRAND_GREEN }}>
                Pipe Health Assessment
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
                {currentQuestion.question}
              </h2>
              {currentQuestion.subtitle && (
                <p className="text-gray-500 text-sm">{currentQuestion.subtitle}</p>
              )}
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = currentAnswer === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleOptionSelect(option.value)}
                    className="w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-all hover:scale-[1.01] active:scale-[0.99]"
                    style={{
                      borderColor: isSelected ? BRAND_GREEN : "#e5e7eb",
                      background: isSelected ? LIGHT_GREEN : "white",
                      color: isSelected ? DARK_GREEN : "#374151",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.label}</span>
                      {isSelected && <CheckCircle size={18} style={{ color: BRAND_GREEN }} />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between mt-8">
              {currentStep > 0 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border font-semibold text-sm transition-all hover:bg-gray-50"
                  style={{ borderColor: "#e5e7eb", color: "#6b7280" }}
                >
                  <ChevronLeft size={16} /> Back
                </button>
              ) : <div />}
              {currentAnswer && (
                <button
                  onClick={() => {
                    if (currentStep < quizQuestions.length - 1) {
                      setCurrentStep(currentStep + 1);
                    } else {
                      setCurrentStep(quizQuestions.length);
                      firePixel("AddToCart");
                    }
                  }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
                  style={{ background: BRAND_GREEN, color: "white" }}
                >
                  Next <ChevronRight size={16} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Lead capture form */}
        {!isQuestionStep && (
          <div>
            <div className="mb-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: LIGHT_GREEN }}>
                <CheckCircle size={32} style={{ color: BRAND_GREEN }} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
                GREAT — YOUR RESULTS ARE READY!
              </h2>
              <p className="text-gray-500">Enter your details below to see your personalised pipe health score and recommendations.</p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: DARK_GREEN }}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={lead.name}
                  onChange={(e) => setLead({ ...lead, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all"
                  style={{ borderColor: "#e5e7eb", fontFamily: "'DM Sans', sans-serif" }}
                  onFocus={(e) => (e.target.style.borderColor = BRAND_GREEN)}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
                <ValidationError field="name" prefix="Name" errors={formspreeState.errors} className="text-red-500 text-xs mt-1" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: DARK_GREEN }}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={lead.email}
                  onChange={(e) => setLead({ ...lead, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all"
                  style={{ borderColor: "#e5e7eb", fontFamily: "'DM Sans', sans-serif" }}
                  onFocus={(e) => (e.target.style.borderColor = BRAND_GREEN)}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
                <ValidationError field="email" prefix="Email" errors={formspreeState.errors} className="text-red-500 text-xs mt-1" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: DARK_GREEN }}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={lead.phone}
                  onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                  placeholder="01234 567 890"
                  className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all"
                  style={{ borderColor: "#e5e7eb", fontFamily: "'DM Sans', sans-serif" }}
                  onFocus={(e) => (e.target.style.borderColor = BRAND_GREEN)}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: DARK_GREEN }}>Property Type</label>
                <select
                  name="propertyType"
                  value={lead.propertyType}
                  onChange={(e) => setLead({ ...lead, propertyType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all bg-white"
                  style={{ borderColor: "#e5e7eb", fontFamily: "'DM Sans', sans-serif" }}
                  onFocus={(e) => (e.target.style.borderColor = BRAND_GREEN)}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                >
                  <option value="">Select property type</option>
                  <option value="residential-block">Residential Block</option>
                  <option value="commercial">Commercial Property</option>
                  <option value="mixed-use">Mixed Use</option>
                  <option value="industrial">Industrial / Warehouse</option>
                  <option value="hmo">HMO</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formspreeState.submitting}
                  className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                  style={{ background: BRAND_GREEN, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", letterSpacing: "0.05em" }}
                >
                  {formspreeState.submitting ? "CALCULATING YOUR SCORE..." : "SEE MY PIPE HEALTH SCORE →"}
                </button>
                <p className="text-xs text-gray-400 text-center mt-3">
                  By submitting you agree to be contacted by RGS. We never share your data with third parties.
                </p>
              </div>
            </form>

            <button
              onClick={handleBack}
              className="flex items-center gap-2 mx-auto mt-6 text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ChevronLeft size={14} /> Back to questions
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
