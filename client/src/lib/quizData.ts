// RGS Pipe Health Quiz — Quiz Data & Scoring Logic
// Source: RGS Pipe Health Quiz Complete Handoff Document

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle?: string;
  options: QuizOption[];
}

export interface QuizOption {
  label: string;
  value: string;
  score: number;
  riskNote?: string;
}

export interface QuizAnswers {
  [questionId: number]: string;
}

export interface QuizResult {
  score: number;
  riskLevel: "low" | "medium" | "high" | "critical";
  riskLabel: string;
  summary: string;
  recommendations: string[];
  estimatedAnnualRisk: number;
  potentialSavings: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When was your building constructed?",
    subtitle: "Pipe materials vary significantly by era",
    options: [
      { label: "Pre-1950", value: "pre-1950", score: 40 },
      { label: "1950s – 1970s", value: "1950-1970", score: 35 },
      { label: "1980s – 1990s", value: "1980-1990", score: 15 },
      { label: "2000 – Present", value: "2000-present", score: 5 },
      { label: "Not sure", value: "unknown", score: 25 },
    ],
  },
  {
    id: 2,
    question: "Do you know what material your drainage pipes are?",
    subtitle: "Different materials have different lifespans and failure modes",
    options: [
      { label: "Cast iron", value: "cast-iron", score: 30 },
      { label: "Clay / Vitrified clay", value: "clay", score: 35 },
      { label: "Pitch fibre (Orangeburg)", value: "pitch-fibre", score: 45 },
      { label: "PVC / Plastic", value: "pvc", score: 5 },
      { label: "Mixed / Unknown", value: "unknown", score: 25 },
    ],
  },
  {
    id: 3,
    question: "How many units or tenants does your property serve?",
    subtitle: "More usage means more strain on the drainage system",
    options: [
      { label: "1 – 5 units", value: "1-5", score: 5 },
      { label: "6 – 20 units", value: "6-20", score: 15 },
      { label: "21 – 50 units", value: "21-50", score: 25 },
      { label: "50+ units", value: "50+", score: 35 },
    ],
  },
  {
    id: 4,
    question: "When was the last professional drainage inspection?",
    subtitle: "Regular CCTV surveys catch problems before they become emergencies",
    options: [
      { label: "Within the last 12 months", value: "12-months", score: 0 },
      { label: "1 – 3 years ago", value: "1-3-years", score: 15 },
      { label: "3 – 5 years ago", value: "3-5-years", score: 25 },
      { label: "More than 5 years / Never", value: "never", score: 40 },
    ],
  },
  {
    id: 5,
    question: "Have you experienced any drainage issues in the past 12 months?",
    subtitle: "Select the most relevant answer",
    options: [
      { label: "No issues at all", value: "none", score: 0 },
      { label: "Occasional slow drains", value: "slow-drains", score: 15 },
      { label: "One blockage requiring a call-out", value: "one-blockage", score: 25 },
      { label: "Multiple blockages or a backup", value: "multiple", score: 40 },
    ],
  },
  {
    id: 6,
    question: "Are there any large trees within 5 metres of your drainage runs?",
    subtitle: "Tree roots are the #1 cause of pipe damage in the UK",
    options: [
      { label: "No trees nearby", value: "no-trees", score: 0 },
      { label: "Small shrubs only", value: "shrubs", score: 5 },
      { label: "Medium trees (under 5m tall)", value: "medium-trees", score: 15 },
      { label: "Large mature trees", value: "large-trees", score: 30 },
    ],
  },
  {
    id: 7,
    question: "Have tenants reported slow drains, gurgling sounds, or bad smells?",
    subtitle: "These are early warning signs of sewage blockages that can cost £7,000–£30,000 per incident",
    options: [
      { label: "No reports at all", value: "no-reports", score: 0 },
      { label: "Occasional bad smells from drains", value: "smells", score: 15 },
      { label: "Slow drains or gurgling in multiple units", value: "slow-gurgling", score: 30 },
      { label: "Sewage backup has occurred in the past", value: "sewage-backup", score: 45 },
    ],
  },
  {
    id: 8,
    question: "Do you currently have a planned maintenance contract for drainage?",
    subtitle: "Preventive maintenance reduces emergency costs by up to 80%",
    options: [
      { label: "Yes — regular scheduled maintenance", value: "yes-regular", score: 0 },
      { label: "Yes — but only annual", value: "yes-annual", score: 10 },
      { label: "No — we call when there's a problem", value: "no-reactive", score: 30 },
      { label: "No — never had one", value: "no-never", score: 35 },
    ],
  },
];

export function calculateResult(answers: QuizAnswers): QuizResult {
  let totalScore = 0;
  const maxPossibleScore = 305;

  Object.entries(answers).forEach(([questionId, value]) => {
    const question = quizQuestions.find((q) => q.id === parseInt(questionId));
    if (question) {
      const option = question.options.find((o) => o.value === value);
      if (option) {
        totalScore += option.score;
      }
    }
  });

  const healthScore = Math.max(0, Math.round(100 - (totalScore / maxPossibleScore) * 100));

  let riskLevel: QuizResult["riskLevel"];
  let riskLabel: string;
  let summary: string;
  let recommendations: string[];
  let estimatedAnnualRisk: number;
  let potentialSavings: number;

  if (healthScore >= 75) {
    riskLevel = "low";
    riskLabel = "Low Risk";
    summary =
      "Your drainage system appears to be in good condition. Continue with regular maintenance to keep it that way.";
    recommendations = [
      "Maintain your current inspection schedule",
      "Consider an annual CCTV survey to monitor condition",
      "Keep drain covers clear of debris seasonally",
    ];
    estimatedAnnualRisk = 350;
    potentialSavings = 150;
  } else if (healthScore >= 50) {
    riskLevel = "medium";
    riskLabel = "Medium Risk";
    summary =
      "Your drainage system shows some risk factors that could lead to problems. A professional assessment would identify any developing issues before they become emergencies.";
    recommendations = [
      "Book a CCTV drainage survey within the next 3 months",
      "Consider a planned maintenance contract",
      "Address any slow drains promptly — they indicate developing blockages",
      "Check for root intrusion if trees are nearby",
    ];
    estimatedAnnualRisk = 2800;
    potentialSavings = 1900;
  } else if (healthScore >= 25) {
    riskLevel = "high";
    riskLabel = "High Risk";
    summary =
      "Your drainage system has significant risk factors. Without intervention, you are likely to face emergency call-outs, potential flooding, and costly repairs in the near future.";
    recommendations = [
      "Arrange an urgent CCTV drainage survey",
      "Get a professional condition report on your pipework",
      "Implement a quarterly maintenance schedule immediately",
      "Budget for potential pipe relining or replacement",
      "Review your insurance cover for drainage failures",
    ];
    estimatedAnnualRisk = 6500;
    potentialSavings = 4800;
  } else {
    riskLevel = "critical";
    riskLabel = "Critical Risk";
    summary =
      "Your drainage system is at critical risk of failure. The combination of age, material, and lack of maintenance means an emergency is not a matter of 'if' but 'when'. Immediate professional assessment is strongly recommended.";
    recommendations = [
      "Book an emergency CCTV survey this week",
      "Prepare a contingency plan for drainage failure",
      "Get quotes for pipe relining or full replacement",
      "Implement immediate planned maintenance",
      "Consider temporary measures like root-cutting if trees are present",
      "Review tenant communication plans for potential disruption",
    ];
    estimatedAnnualRisk = 12000;
    potentialSavings = 9500;
  }

  return {
    score: healthScore,
    riskLevel,
    riskLabel,
    summary,
    recommendations,
    estimatedAnnualRisk,
    potentialSavings,
  };
}
