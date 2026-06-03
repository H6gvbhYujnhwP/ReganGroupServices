/* RGS Footer — dark green background, white text, amber accents */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

const RGS_LOGO = "/rgs-logo.png";

export default function Footer() {
  return (
    <footer style={{ background: "#1a2e0a", color: "#fff" }}>
      {/* Emergency Banner */}
      <div style={{ background: "#D4A017" }} className="py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Clock size={20} style={{ color: "#1a2e0a" }} />
            <span className="font-bold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1a2e0a", fontSize: "1.1rem", letterSpacing: "0.05em" }}>
              24/7 EMERGENCY CALL OUT AVAILABLE
            </span>
          </div>
          <a
            href="tel:+441234567890"
            className="flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-sm transition-all hover:scale-105"
            style={{ background: "#1a2e0a", color: "#D4A017", fontFamily: "'DM Sans', sans-serif" }}
          >
            <Phone size={16} /> Call Now
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={RGS_LOGO} alt="RGS Logo" className="h-16 w-auto object-contain" />
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#9dc46b" }}>
            Delivering specialised maintenance services with unrivalled customer service across London and Essex.
          </p>
          <div className="mt-4 flex gap-3">
            {["f", "in", "tw"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:scale-110"
                style={{ background: "#2d4a1a", color: "#77A734" }}
              >
                {s.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-4 text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#77A734" }}>OUR SERVICES</h4>
          <ul className="space-y-2">
            {["Plumbing", "Drainage & CCTV", "Door Entry Systems", "Service Packages", "Emergency Call Out", "Planned Maintenance"].map((s) => (
              <li key={s}>
                <Link href="/services" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "#9dc46b" }}>
                  <ChevronRight size={14} style={{ color: "#D4A017" }} /> {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#77A734" }}>QUICK LINKS</h4>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/gallery", label: "Gallery" },
              { href: "/emergency", label: "Emergency Service" },
              { href: "/quote", label: "Get a Free Quote" },
              { href: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "#9dc46b" }}>
                  <ChevronRight size={14} style={{ color: "#D4A017" }} /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4 text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#77A734" }}>CONTACT US</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone size={16} style={{ color: "#D4A017", marginTop: 2 }} />
              <div>
                <div className="text-xs" style={{ color: "#9dc46b" }}>Phone</div>
                <a href="tel:+441234567890" className="text-sm font-semibold hover:text-white transition-colors" style={{ color: "#fff" }}>
                  01234 567 890
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} style={{ color: "#D4A017", marginTop: 2 }} />
              <div>
                <div className="text-xs" style={{ color: "#9dc46b" }}>Email</div>
                <a href="mailto:info@regangroupservices.com" className="text-sm font-semibold hover:text-white transition-colors" style={{ color: "#fff" }}>
                  info@regangroupservices.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} style={{ color: "#D4A017", marginTop: 2 }} />
              <div>
                <div className="text-xs" style={{ color: "#9dc46b" }}>Areas Served</div>
                <div className="text-sm font-semibold" style={{ color: "#fff" }}>London & Essex</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} style={{ color: "#D4A017", marginTop: 2 }} />
              <div>
                <div className="text-xs" style={{ color: "#9dc46b" }}>Emergency</div>
                <div className="text-sm font-semibold" style={{ color: "#fff" }}>24/7 Available</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-5" style={{ borderColor: "#2d4a1a" }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "#9dc46b" }}>
            © {new Date().getFullYear()} Regan Group Services Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a key={t} href="#" className="text-xs transition-colors hover:text-white" style={{ color: "#9dc46b" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
