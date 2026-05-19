/* RGS Gallery Page */
import { WrenchSVG, PlumbingSVG, CCTVSvg, DrainageSVG, ShieldSVG, EmergencySVG } from "@/components/SVGTools";

const categories = ["All", "Plumbing", "Drainage", "CCTV", "Commercial", "Residential"];

const galleryItems = [
  { title: "Radiator Installation", cat: "Plumbing", svg: <PlumbingSVG size={100} />, desc: "New radiator fitted in a residential property in Essex" },
  { title: "Drain CCTV Survey", cat: "Drainage", svg: <DrainageSVG size={100} />, desc: "Full CCTV drainage survey for a commercial building" },
  { title: "CCTV System Install", cat: "CCTV", svg: <CCTVSvg size={100} />, desc: "8-camera CCTV system installed at a London school" },
  { title: "Commercial Plumbing", cat: "Commercial", svg: <WrenchSVG size={100} />, desc: "Full pipework installation for a commercial premises" },
  { title: "Blockage Clearance", cat: "Drainage", svg: <DrainageSVG size={100} />, desc: "Severe blockage cleared using high-pressure jetting" },
  { title: "Service Package", cat: "Commercial", svg: <ShieldSVG size={100} />, desc: "Planned maintenance contract for a property portfolio" },
  { title: "Door Entry System", cat: "CCTV", svg: <CCTVSvg size={100} />, desc: "Video intercom and access control for a residential block" },
  { title: "Emergency Repair", cat: "Residential", svg: <EmergencySVG size={100} color="#D4A017" />, desc: "Burst pipe emergency repair completed within 45 minutes" },
  { title: "Bathroom Renovation", cat: "Residential", svg: <PlumbingSVG size={100} />, desc: "Full bathroom plumbing for a residential property" },
];

export default function Gallery() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #eef7e6 0%, #d4edba 100%)" }}>
        <div className="container text-center">
          <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4" style={{ background: "#fff", color: "#5B9E1F" }}>
            OUR WORK
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>
            PROJECT <span style={{ color: "#5B9E1F" }}>GALLERY</span>
          </h1>
          <p className="max-w-xl mx-auto text-base" style={{ color: "#4a6a2a" }}>
            A selection of recent projects completed by the RGS team across London and Essex.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button key={cat} className="px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ background: cat === "All" ? "#5B9E1F" : "#eef7e6", color: cat === "All" ? "#fff" : "#5B9E1F", border: "1.5px solid #c8e6a0" }}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ background: "#f7fdf2", border: "1.5px solid #e8f5d8" }}>
                <div className="flex items-center justify-center py-10 relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #eef7e6, #d4edba)" }}>
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {item.svg}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ background: "#5B9E1F", color: "#fff" }}>
                    {item.cat}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a" }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: "#5a7a3a" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 rounded-2xl" style={{ background: "#eef7e6", border: "1.5px dashed #c8e6a0" }}>
            <p className="text-base font-semibold mb-2" style={{ color: "#5B9E1F", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem" }}>
              MORE PHOTOS COMING SOON
            </p>
            <p className="text-sm" style={{ color: "#5a7a3a" }}>We're constantly updating our gallery with new projects. Check back regularly!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
