/* RGS Header — white background, RGS green nav, amber CTA
   Design: Industrial Precision Meets British Craft */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const RGS_LOGO = "/manus-storage/rgs-logo_b8dec175.png";

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
        boxShadow: scrolled ? "0 2px 24px rgba(91,158,31,0.10)" : "0 1px 0 #e8f5d8",
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
          <div className="hidden sm:block">
            <div
              className="text-lg font-bold leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#5B9E1F", letterSpacing: "0.05em" }}
            >
              REGAN GROUP
            </div>
            <div
              className="text-xs font-semibold tracking-widest"
              style={{ color: "#D4A017", fontFamily: "'DM Sans', sans-serif" }}
            >
              SERVICES LTD
            </div>
          </div>
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
                color: location === link.href ? "#5B9E1F" : "#2d4a1a",
                background: location === link.href ? "#eef7e6" : "transparent",
              }}
            >
              {link.label}
              {link.href === "/emergency" && (
                <span
                  className="ml-1 text-xs px-1.5 py-0.5 rounded-full font-bold"
                  style={{ background: "#D4A017", color: "#fff" }}
                >
                  24/7
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+441234567890"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "#5B9E1F", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
          >
            <Phone size={15} />
            Call Us
          </a>
          <Link
            href="/quote"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "#D4A017", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
          >
            Free Quote
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: "#5B9E1F" }}
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
          style={{ background: "#fff", borderColor: "#e8f5d8" }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg font-semibold text-sm"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: location === link.href ? "#5B9E1F" : "#2d4a1a",
                  background: location === link.href ? "#eef7e6" : "transparent",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                {link.href === "/emergency" && (
                  <span
                    className="ml-2 text-xs px-1.5 py-0.5 rounded-full font-bold"
                    style={{ background: "#D4A017", color: "#fff" }}
                  >
                    24/7
                  </span>
                )}
              </Link>
            ))}
            <div className="flex gap-3 mt-3">
              <a
                href="tel:+441234567890"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm"
                style={{ background: "#5B9E1F", color: "#fff" }}
              >
                <Phone size={15} /> Call Us
              </a>
              <Link
                href="/quote"
                className="flex-1 flex items-center justify-center py-3 rounded-lg font-semibold text-sm"
                style={{ background: "#D4A017", color: "#fff" }}
                onClick={() => setMobileOpen(false)}
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
