/* RGS Header — white background, RGS green nav, amber CTA
   Design: Industrial Precision Meets British Craft */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Droplets } from "lucide-react";

const RGS_LOGO = "/rgs-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/emergency", label: "Emergency" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "#fff",
        boxShadow: scrolled ? "0 2px 24px rgba(91,158,31,0.10)" : "0 1px 0 #dff0c0",
      }}
    >
      <div className="container flex items-center justify-between h-24 md:h-28">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={RGS_LOGO}
            alt="RGS Logo"
            className="h-20 md:h-24 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-md relative"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: location === link.href ? "#77A734" : "#2d4a1a",
                background: location === link.href ? "#e8f5d8" : "transparent",
              }}
            >
              {link.label}
              {link.href === "/emergency" && (
                <span
                  className="ml-1 text-xs px-1.5 py-0.5 rounded-full font-bold"
                  style={{ background: "#E8F5D8", color: "#2d4a1a" }}
                >
                  24/7
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Head Office number */}
          <a
            href="tel:01702614260"
            className="hidden md:flex flex-col items-start leading-tight"
          >
            <span className="text-xs font-bold" style={{ color: "#77A734", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em" }}>HEAD OFFICE</span>
            <span className="text-sm font-bold" style={{ color: "#77A734", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.05rem", letterSpacing: "0.03em" }}>01702 614260</span>
          </a>
          <a
            href="tel:01702614260"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "#77A734", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
          >
            <Phone size={15} />
            Call Us
          </a>
          <Link
            href="/quote"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "#E8F5D8", color: "#2d4a1a", fontFamily: "'DM Sans', sans-serif" }}
          >
            Free Quote
          </Link>
          <Link
            href="/quiz"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "#2d4a1a", color: "#E8F5D8", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em", fontSize: "0.85rem" }}
          >
            <Droplets size={14} /> PIPE HEALTH CHECK
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: "#77A734" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ background: "#fff", borderColor: "#dff0c0" }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg font-semibold text-sm"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: location === link.href ? "#77A734" : "#2d4a1a",
                  background: location === link.href ? "#e8f5d8" : "transparent",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                {link.href === "/emergency" && (
                  <span
                    className="ml-2 text-xs px-1.5 py-0.5 rounded-full font-bold"
                    style={{ background: "#E8F5D8", color: "#2d4a1a" }}
                  >
                    24/7
                  </span>
                )}
              </Link>
            ))}
            <div className="flex gap-3 mt-3">
              <a
                href="tel:01702614260"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm"
                style={{ background: "#77A734", color: "#fff" }}
              >
                <Phone size={15} /> Call Us
              </a>
              <Link
                href="/quote"
                className="flex-1 flex items-center justify-center py-3 rounded-lg font-semibold text-sm"
                style={{ background: "#E8F5D8", color: "#2d4a1a" }}
                onClick={() => setMobileOpen(false)}
              >
                Free Quote
              </Link>
            </div>
            <Link
              href="/quiz"
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm"
              style={{ background: "#2d4a1a", color: "#E8F5D8", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em" }}
              onClick={() => setMobileOpen(false)}
            >
              <Droplets size={15} /> FREE PIPE HEALTH CHECK
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
