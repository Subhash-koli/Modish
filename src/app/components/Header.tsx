import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoWordmark from "../../imports/LOGO_WORD.jpeg";
import logoWhite from "../../imports/LOGO_WHITE.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#printing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const WA_URL = "https://wa.me/919136867622?text=Hi%20Modish!%20I'd%20like%20to%20know%20more%20about%20your%20products.";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-70px 0px -60% 0px" }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: scrolled ? "58px" : "var(--modish-header-height)",
          background: scrolled ? "rgba(255, 204, 0, 0.90)" : "var(--modish-nav-bg)",
          backdropFilter: scrolled ? "blur(12px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px) saturate(180%)" : "none",
          zIndex: "var(--modish-z-sticky)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.08)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.05)" : "1px solid transparent",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className="modish-container"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--modish-space-4)",
          }}
        >
          {/* Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: "var(--modish-space-2)", textDecoration: "none", flexShrink: 0 }}>
            <img
              src={logoWordmark}
              alt="Modish — Custom Printed Apparel Mumbai"
              width={120}
              height={40}
              fetchPriority="high"
              style={{
                height: scrolled ? "34px" : "40px",
                width: "auto",
                objectFit: "contain",
                transition: "height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="modish-desktop-only"
            style={{ alignItems: "center", gap: "var(--modish-space-8)", listStyle: "none" }}
          >
            {navLinks.map(link => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontWeight: isActive ? 700 : 600,
                    color: "var(--modish-black)",
                    textDecoration: "none",
                    background: isActive ? "rgba(0,0,0,0.10)" : "transparent",
                    padding: "5px 12px",
                    borderRadius: "var(--modish-radius-sm)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,0,0,0.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = isActive ? "rgba(0,0,0,0.10)" : "transparent"; }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="modish-desktop-only" style={{ alignItems: "center", gap: "var(--modish-space-3)" }}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--modish-space-2)",
                background: "var(--modish-whatsapp)",
                color: "var(--modish-white)",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "13px",
                padding: scrolled ? "7px 14px" : "9px 16px",
                borderRadius: "var(--modish-radius-sm)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <a
              href="#inquiry"
              style={{
                display: "flex",
                alignItems: "center",
                background: "var(--modish-black)",
                color: "var(--modish-white)",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "13px",
                padding: scrolled ? "7px 18px" : "9px 20px",
                borderRadius: "var(--modish-radius-sm)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              Get Quote →
            </a>
          </div>

          {/* Mobile Controls — hamburger only; WA + Quote live in the bottom action bar */}
          <div className="modish-mobile-only">
            {/* using <button> instead of <Button>: kit Button is pill-shaped SaaS component; mobile hamburger needs icon-only flat style matching Modish nav */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              id="mobile-hamburger-btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: scrolled ? "40px" : "48px",
                height: scrolled ? "40px" : "48px",
                background: "rgba(0,0,0,0.08)",
                border: "1.5px solid rgba(0,0,0,0.12)",
                borderRadius: "var(--modish-radius-sm)",
                cursor: "pointer",
                color: "var(--modish-black)",
                flexShrink: 0,
                transition: "all 0.3s ease",
              }}
            >
              <Menu size={scrolled ? 18 : 22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay — Slide-in Transition */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--modish-black)",
          zIndex: "var(--modish-z-modal)",
          display: "flex",
          flexDirection: "column",
          padding: "var(--modish-space-6)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        {/* Close */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--modish-space-12)" }}>
          <img src={logoWhite} alt="Modish" width={96} height={32} loading="lazy" style={{ height: "32px", width: "auto" }} />
          {/* using <button> instead of <Button>: drawer close is icon-only flat action on dark bg, no kit variant matches */}
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--modish-white)",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={28} />
          </button>
        </div>

        {/* Nav Links */}
        <nav style={{ flex: 1 }}>
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "24px",
                color: "var(--modish-white)",
                textDecoration: "none",
                padding: "var(--modish-space-4) 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s ease",
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                opacity: mobileOpen ? 1 : 0,
                transitionDelay: `${idx * 50}ms`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-yellow)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-white)"; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* WA CTA at bottom */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--modish-space-2)",
            background: "var(--modish-whatsapp)",
            color: "var(--modish-white)",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "16px",
            padding: "16px",
            borderRadius: "var(--modish-radius-md)",
            textDecoration: "none",
            marginTop: "var(--modish-space-8)",
            transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
            opacity: mobileOpen ? 1 : 0,
            transition: "all 0.4s ease",
            transitionDelay: "300ms",
          }}
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </a>
      </div>
    </>
  );
}
