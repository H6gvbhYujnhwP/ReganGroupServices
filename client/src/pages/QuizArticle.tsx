// RGS Pipe Health Quiz — Article Page
// "The True Cost of Failed Pipes & Sewage Blockages"
// Brand: #77A734 green, #E8F5D8 light green, white background
// Fires Facebook Pixel ViewContent on load

import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, User, Calendar } from "lucide-react";

const BRAND_GREEN = "#77A734";
const LIGHT_GREEN = "#E8F5D8";
const DARK_GREEN = "#2d4a1a";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/DP9FEWsVLvkkd9oUeQo9ER";

export default function QuizArticle() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "ViewContent", {
        content_name: "The True Cost of Failed Pipes & Sewage Blockages",
        content_category: "Drainage Article",
      });
    }
    window.scrollTo(0, 0);
  }, []);

  const firePixel = (event: string) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", event, {
        content_name: "Pipe Health Quiz",
        content_category: "Drainage Assessment",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-72 md:h-96">
          <img
            src={`${CDN}/article-hero-burst-pipe-jHwWNupA3H6Q3qzCVGxKNi.webp`}
            alt="Burst pipe causing flooding"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(45,74,26,0.6) 0%, rgba(45,74,26,0.85) 100%)" }} />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit" style={{ background: BRAND_GREEN, color: "white" }}>
              DRAINAGE GUIDE
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              THE TRUE COST OF FAILED PIPES<br />
              <span style={{ color: BRAND_GREEN }}>&amp; SEWAGE BLOCKAGES</span>
            </h1>
          </div>
        </div>
        <div className="border-b" style={{ background: LIGHT_GREEN }}>
          <div className="container mx-auto px-4 py-4 max-w-4xl flex flex-wrap gap-6 items-center text-sm" style={{ color: DARK_GREEN }}>
            <div className="flex items-center gap-2">
              <User size={14} /> <span className="font-semibold">Regan Group Services</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} /> <span>June 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} /> <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top CTA */}
      <div className="border-b" style={{ background: "#fffbeb" }}>
        <div className="container mx-auto px-4 py-5 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold" style={{ color: DARK_GREEN }}>
            Concerned about your property's drainage? Get your free pipe health score in under 3 minutes.
          </p>
          <Link
            href="/quiz"
            onClick={() => firePixel("InitiateCheckout")}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
            style={{ background: BRAND_GREEN, color: "white", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
          >
            FREE PIPE HEALTH CHECK <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* Article body */}
      <article className="container mx-auto px-4 py-12 max-w-3xl">

        <div className="prose prose-lg max-w-none" style={{ color: "#374151" }}>

          <p className="text-xl font-semibold leading-relaxed mb-8" style={{ color: DARK_GREEN }}>
            Most property managers and landlords only think about drainage when something goes wrong. By that point, the cost — financial, operational, and reputational — is already significant. This article examines the true cost of drainage failure in the UK, and why preventive maintenance is the most commercially sound decision you can make.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-black mt-10 mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
            THE SCALE OF THE PROBLEM
          </h2>
          <p className="mb-4">
            Drainage failure is one of the most underestimated risks in UK property management. According to data from the Association of British Insurers, water damage — including sewage backup — accounts for over £1.8 billion in insurance claims annually. Yet the majority of incidents are entirely preventable with routine inspection and maintenance.
          </p>
          <p className="mb-6">
            The problem is structural. The UK's drainage infrastructure is ageing rapidly. Millions of properties built before 1980 still rely on clay, cast iron, or pitch fibre pipes — materials that were never designed to last more than 50 years. Many are now well past their design life, corroding, cracking, or collapsing silently underground.
          </p>

          <div className="rounded-2xl overflow-hidden my-8 flex flex-col md:flex-row">
            <img
              src={`${CDN}/ad-blocked-drain-closeup-nEaobFEyW7WM6U3kos6r7n.webp`}
              alt="Blocked drain close-up"
              className="w-full md:w-2/5 h-52 object-cover"
            />
            <div className="flex-1 p-6" style={{ background: LIGHT_GREEN }}>
              <h3 className="font-black text-xl mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
                THE SILENT FAILURE
              </h3>
              <p className="text-sm text-gray-700">
                Unlike a burst boiler or a broken window, drainage failure develops slowly and invisibly. Root intrusion, pipe deformation, and fatberg build-up can take years to reach crisis point — but when they do, the damage is sudden and severe.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-black mt-10 mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
            WHAT A SEWAGE INCIDENT ACTUALLY COSTS
          </h2>
          <p className="mb-4">
            When drainage fails, the costs cascade rapidly. A single sewage backup in a residential block can trigger a chain of expenses that most landlords are wholly unprepared for.
          </p>

          <div className="rounded-2xl border-2 my-8 overflow-hidden" style={{ borderColor: "#fee2e2" }}>
            <div className="px-6 py-4 font-bold text-white" style={{ background: "#ef4444", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}>
              TYPICAL COST BREAKDOWN: SEWAGE BACKUP IN A 20-UNIT RESIDENTIAL BLOCK
            </div>
            <div className="divide-y">
              {[
                { item: "Emergency drainage call-out (out of hours)", cost: "£850 – £2,400" },
                { item: "Professional clean-up and sanitisation", cost: "£1,500 – £4,000" },
                { item: "Structural drying and dehumidification", cost: "£800 – £2,500" },
                { item: "Flooring and fixture replacement", cost: "£2,000 – £8,000" },
                { item: "Temporary rehousing of affected tenants", cost: "£500 – £3,000" },
                { item: "Lost rental income during repairs", cost: "£1,000 – £5,000" },
                { item: "Insurance excess and premium increase", cost: "£500 – £2,000" },
                { item: "Legal costs (if tenant claims negligence)", cost: "£0 – £15,000" },
              ].map((row) => (
                <div key={row.item} className="flex justify-between items-center px-6 py-3 text-sm">
                  <span className="text-gray-700">{row.item}</span>
                  <span className="font-bold text-red-600 ml-4 flex-shrink-0">{row.cost}</span>
                </div>
              ))}
              <div className="flex justify-between items-center px-6 py-4 font-bold" style={{ background: "#fef2f2" }}>
                <span style={{ color: DARK_GREEN }}>TOTAL POTENTIAL EXPOSURE</span>
                <span className="text-red-600 text-xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>£7,150 – £41,900</span>
              </div>
            </div>
          </div>

          <p className="mb-6">
            These figures do not include the less quantifiable costs: damage to your reputation as a landlord, the stress of managing multiple contractors simultaneously, and the potential for tenants to withhold rent or pursue legal action under the Landlord and Tenant Act 1985.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-black mt-10 mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
            THE PIPE MATERIALS CRISIS
          </h2>
          <p className="mb-4">
            Understanding your pipe material is the single most important factor in assessing drainage risk. Here is a summary of the materials commonly found in UK properties and their current condition:
          </p>

          <div className="space-y-4 my-8">
            {[
              {
                material: "Pitch Fibre (Orangeburg)",
                era: "1950s – 1980s",
                risk: "Critical",
                riskColour: "#ef4444",
                desc: "Pitch fibre pipes were widely used as a cheap post-war solution. They absorb moisture over time, causing them to deform into an oval shape and eventually collapse. Surveys consistently find pitch fibre pipes in the worst condition of any material. If your property was built between 1950 and 1980, there is a significant chance pitch fibre is present.",
              },
              {
                material: "Clay / Vitrified Clay",
                era: "Pre-1960s",
                risk: "High",
                riskColour: "#f97316",
                desc: "Clay pipes are brittle and susceptible to root intrusion at joints. They were the standard material before the 1960s and are still found in millions of UK properties. While clay itself does not corrode, the joints between sections are vulnerable to tree root penetration and ground movement.",
              },
              {
                material: "Cast Iron",
                era: "Pre-1950s",
                risk: "Medium–High",
                riskColour: "#f59e0b",
                desc: "Cast iron is durable but corrodes from the inside over decades of use. Scale build-up reduces flow capacity and eventually leads to blockages. Corrosion can also cause pinhole leaks that are invisible until significant structural damage has occurred.",
              },
              {
                material: "PVC / uPVC",
                era: "1980s – Present",
                risk: "Low",
                riskColour: "#22c55e",
                desc: "Modern plastic pipes are the most resilient option. They are resistant to corrosion, have smooth internal surfaces that resist build-up, and are flexible enough to accommodate minor ground movement. Properties built after 1985 are likely to have PVC drainage — though older sections may still be present.",
              },
            ].map((item) => (
              <div key={item.material} className="rounded-xl border p-5 flex gap-4" style={{ borderColor: "#e5e7eb" }}>
                <div className="flex-shrink-0 w-3 rounded-full self-stretch" style={{ background: item.riskColour }} />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-black text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>{item.material}</h3>
                    <span className="text-xs px-2 py-1 rounded-full font-semibold text-white" style={{ background: item.riskColour }}>{item.risk}</span>
                    <span className="text-xs text-gray-400">{item.era}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-black mt-10 mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
            THE TREE ROOT PROBLEM
          </h2>
          <p className="mb-4">
            Tree root intrusion is the number one cause of drainage failure in the UK, accounting for an estimated 40% of all blocked drain call-outs. Roots are attracted to the warm, moist environment inside drainage pipes and can penetrate through even the smallest crack or joint.
          </p>
          <p className="mb-6">
            Once inside, roots grow rapidly and can fill an entire pipe section within two to three years. The roots do not just block the pipe — they cause structural damage that requires excavation and replacement rather than simple jetting. A mature oak or ash tree within five metres of your drainage run represents a significant ongoing risk.
          </p>

          <div className="rounded-2xl overflow-hidden my-8">
            <img
              src={`${CDN}/article-maintenance-team-J5PAYmrHV7aYtiHSRAiJyQ.webp`}
              alt="RGS maintenance team conducting drainage survey"
              className="w-full h-64 object-cover"
            />
            <div className="p-5" style={{ background: LIGHT_GREEN }}>
              <p className="text-sm text-gray-600 italic">
                Regular CCTV drainage surveys allow engineers to identify root intrusion, pipe deformation, and blockages before they become emergencies.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-2xl md:text-3xl font-black mt-10 mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
            THE CASE FOR PLANNED MAINTENANCE
          </h2>
          <p className="mb-4">
            The financial case for planned maintenance is compelling. Industry data consistently shows that reactive maintenance costs three to five times more than the equivalent preventive work. A CCTV survey that costs £300–£600 can identify a developing blockage that, left untreated, would cost £5,000–£15,000 to remediate.
          </p>
          <p className="mb-4">
            A planned maintenance contract for a 20-unit residential block typically costs between £800 and £1,500 per year, depending on the scope of work. This covers quarterly inspections, jetting, and a CCTV survey. Compare this to the average cost of a single emergency call-out — £850 to £2,400 — and the economics are clear.
          </p>
          <p className="mb-6">
            Beyond the direct financial savings, planned maintenance provides something equally valuable: certainty. You know the condition of your drainage system. You can budget for repairs. You can demonstrate due diligence to insurers and, if necessary, to courts.
          </p>

          <div className="rounded-2xl p-6 my-8" style={{ background: LIGHT_GREEN, border: `2px solid ${BRAND_GREEN}` }}>
            <h3 className="font-black text-xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
              THE 80% RULE
            </h3>
            <p className="text-gray-700 mb-3">
              Research from the Chartered Institution of Building Services Engineers (CIBSE) and multiple insurance industry studies consistently shows that planned maintenance reduces emergency maintenance costs by 70–80%.
            </p>
            <p className="text-gray-700">
              For a property with a historical annual emergency drainage spend of £3,000, a planned maintenance contract at £1,200 per year would typically reduce that spend to £600–£900 — a net saving of £900–£1,200 per year, after the cost of the contract.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-2xl md:text-3xl font-black mt-10 mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
            WHAT A CCTV DRAINAGE SURVEY REVEALS
          </h2>
          <p className="mb-4">
            A CCTV drainage survey is the definitive diagnostic tool for any drainage system. A small camera is inserted into the drainage run and transmits live footage to a monitor, allowing the engineer to identify:
          </p>
          <ul className="space-y-2 mb-6 ml-4">
            {[
              "Root intrusion at pipe joints",
              "Pipe deformation or collapse (particularly in pitch fibre)",
              "Cracks, fractures, and open joints",
              "Scale and grease build-up",
              "Displaced or misaligned pipe sections",
              "Illegal connections or cross-connections",
              "Vermin ingress points",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: BRAND_GREEN }} />
                {item}
              </li>
            ))}
          </ul>
          <p className="mb-6">
            The survey produces a condition report with a grading for each defect, allowing the property manager to prioritise repairs and budget accordingly. For properties with no inspection history, a CCTV survey is the essential first step.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl md:text-3xl font-black mt-10 mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
            YOUR LEGAL OBLIGATIONS
          </h2>
          <p className="mb-4">
            Landlords and property managers have clear legal obligations regarding drainage. Under the Landlord and Tenant Act 1985, landlords are responsible for keeping in repair the structure and exterior of the property, including drains, gutters, and external pipes. Failure to maintain drainage can constitute a breach of the repairing covenant.
          </p>
          <p className="mb-4">
            The Housing Health and Safety Rating System (HHSRS) includes drainage failure as a Category 1 hazard — the most serious classification — when it results in sewage contamination of living spaces. A Category 1 hazard triggers a duty on the local authority to take enforcement action.
          </p>
          <p className="mb-6">
            In practice, this means that if a tenant suffers harm or property damage as a result of drainage failure that you knew about (or should have known about), you face significant legal and financial exposure. Documented regular maintenance is your primary defence.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl md:text-3xl font-black mt-10 mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
            THE EARLY WARNING SIGNS
          </h2>
          <p className="mb-4">
            Drainage failure rarely happens without warning. The challenge is that the warning signs are easy to dismiss or attribute to other causes. If any of the following are present in your property, a professional assessment is warranted:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { sign: "Slow-draining sinks or baths", severity: "Early warning" },
              { sign: "Gurgling sounds from drains or toilets", severity: "Early warning" },
              { sign: "Persistent unpleasant smells from drains", severity: "Early warning" },
              { sign: "Multiple units reporting the same issue", severity: "Moderate concern" },
              { sign: "Water backing up in ground-floor drains", severity: "Urgent" },
              { sign: "Wet patches in gardens or car parks", severity: "Urgent" },
              { sign: "Subsidence or ground movement near drainage runs", severity: "Critical" },
              { sign: "Sewage visible in inspection chambers", severity: "Critical" },
            ].map((item) => (
              <div key={item.sign} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#e5e7eb" }}>
                <span
                  className="flex-shrink-0 text-xs px-2 py-1 rounded-full font-semibold text-white mt-0.5"
                  style={{
                    background:
                      item.severity === "Critical" ? "#ef4444" :
                      item.severity === "Urgent" ? "#f97316" :
                      item.severity === "Moderate concern" ? "#f59e0b" : BRAND_GREEN,
                  }}
                >
                  {item.severity}
                </span>
                <span className="text-sm text-gray-700">{item.sign}</span>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl md:text-3xl font-black mt-10 mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK_GREEN }}>
            THE BOTTOM LINE
          </h2>
          <p className="mb-4">
            Drainage failure is not a matter of bad luck. It is the predictable consequence of ageing infrastructure, inadequate maintenance, and a reactive rather than preventive approach to property management.
          </p>
          <p className="mb-4">
            The good news is that it is entirely preventable. A CCTV survey costs a fraction of the remediation work it prevents. A planned maintenance contract costs less than a single emergency call-out. And the peace of mind that comes from knowing the condition of your drainage system is worth considerably more than either.
          </p>
          <p className="mb-8">
            If you have not had a professional drainage assessment in the last two years — or if you have never had one — the time to act is now, before the problem finds you.
          </p>

        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl p-8 text-center mt-8" style={{ background: DARK_GREEN }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ background: "rgba(232,245,216,0.15)", border: `1px solid ${LIGHT_GREEN}`, color: LIGHT_GREEN }}>
            FREE — Takes Under 3 Minutes
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            FIND OUT YOUR PROPERTY'S<br />
            <span style={{ color: BRAND_GREEN }}>PIPE HEALTH SCORE</span>
          </h3>
          <p className="text-white opacity-80 mb-6 text-sm max-w-md mx-auto">
            Answer 8 quick questions and get an instant personalised drainage risk assessment — completely free, no obligation.
          </p>
          <Link
            href="/quiz"
            onClick={() => firePixel("InitiateCheckout")}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
            style={{ background: BRAND_GREEN, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem" }}
          >
            START MY FREE PIPE HEALTH CHECK <ChevronRight size={20} />
          </Link>
        </div>

        {/* Breadcrumb back */}
        <div className="mt-8 text-center">
          <Link href="/quiz" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            ← Back to Pipe Health Check
          </Link>
        </div>

      </article>
    </div>
  );
}
