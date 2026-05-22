/* RGS About Page */
import { Link } from "wouter";
import { ArrowRight, Award, Heart, Users, Shield } from "lucide-react";
import { WrenchSVG, ShieldSVG } from "@/components/SVGTools";

const values = [
  { icon: <Award size={28} />, title: "Excellence", desc: "We hold ourselves to the highest standards in every job we undertake, no matter how large or small." },
  { icon: <Heart size={28} />, title: "Integrity", desc: "Honest pricing, transparent communication, and work we're proud to put our name to." },
  { icon: <Users size={28} />, title: "Family Values", desc: "As a family business, we treat every client's property as if it were our own." },
  { icon: <Shield size={28} />, title: "Reliability", desc: "When we say we'll be there, we'll be there. Dependability is at the core of everything we do." },
];

export default function About() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #eef7e6 0%, #d4edba 100%)" }}>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4" style={{ background: "#fff", color: "#5B9E1F" }}>
              OUR STORY
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
              ABOUT <span style={{ color: "#5B9E1F" }}>REGAN GROUP</span> SERVICES
            </h1>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#4a6a2a" }}>
              Regan Group Services Limited is a family run and owned business established in 2023, founded by a father and son who bring a wealth of maintenance and servicing experience to every project.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#4a6a2a" }}>
              Between them, their knowledge and expertise spans over 30 years in the domestic, commercial and building maintenance sectors. That depth of experience means our clients receive a service that is both technically excellent and genuinely personal.
            </p>
          </div>
          <div className="flex justify-center">
            <WrenchSVG size={280} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#5B9E1F" }} className="py-10">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { val: "2023", label: "Established" },
            { val: "30+", label: "Years Experience" },
            { val: "100+", label: "Properties Served" },
            { val: "24/7", label: "Emergency Cover" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-extrabold" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}>{s.val}</div>
              <div className="text-sm mt-1" style={{ color: "#c8e6a0" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
              BUILT ON <span style={{ color: "#5B9E1F" }}>EXPERIENCE</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-2xl p-8" style={{ background: "#f7fdf2", border: "1.5px solid #e8f5d8" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#5B9E1F", color: "#fff" }}>
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>A Family Business</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5a7a3a" }}>
                Founded in 2023 by a father and son team, RGS was built on the belief that great maintenance work comes from genuine care — for the craft, for the client, and for the community. We're not a faceless corporation; we're your neighbours.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "#f7fdf2", border: "1.5px solid #e8f5d8" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#D4A017", color: "#fff" }}>
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>30+ Years of Expertise</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5a7a3a" }}>
                With over three decades of combined experience spanning domestic, commercial and building maintenance, our team has seen and solved it all. That expertise means faster diagnosis, better solutions, and lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "#f7fdf2" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
              OUR <span style={{ color: "#5B9E1F" }}>VALUES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ background: "#fff", border: "1.5px solid #e8f5d8" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "#eef7e6", color: "#5B9E1F" }}>
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5a7a3a" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
                AREAS WE <span style={{ color: "#5B9E1F" }}>SERVE</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#5a7a3a" }}>
                We currently look after a wide range of properties and several schools within the London and Essex areas, providing a variety of planned and reactive maintenance as well as 24/7 emergency call out.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Central London", "East London", "North London", "South London", "West London", "Essex", "Hertfordshire", "Kent"].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm" style={{ color: "#2d4a1a" }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: "#5B9E1F" }} /> {area}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
                style={{ background: "#5B9E1F", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}>
                GET IN TOUCH <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex justify-center">
              <ShieldSVG size={280} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
