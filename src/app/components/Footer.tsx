import logoWhite from "../../imports/LOGO_WHITE.jpeg";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";

const WA_URL = "https://wa.me/919136867622?text=Hi%20Modish!%20I%20need%20a%20quote.";

const quickLinks = [
  { label: "Products", href: "#products" },
  { label: "Diaries", href: "#diaries" },
  { label: "Catalogs", href: "#catalogs" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const products = [
  "Round Neck T-Shirt",
  "Oversized T-Shirt",
  "Polo T-Shirt",
  "Premium Hoodie",
  "Gym Vest",
  "Tote Bag",
  "Corporate Diary",
];

const linkStyle = {
  fontFamily: "var(--font-body)",
  fontWeight: 400,
  fontSize: "14px",
  color: "var(--modish-grey-400)",
  textDecoration: "none",
  transition: "color 0.2s ease",
  display: "block",
  lineHeight: 1,
};

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={linkStyle}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-yellow)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-grey-400)"; }}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--modish-black)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="modish-container" style={{ paddingTop: "var(--modish-space-16)", paddingBottom: "var(--modish-space-10)" }}>
        <div className="modish-footer-grid" style={{
          marginBottom: "var(--modish-space-10)",
        }}>
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--modish-space-4)" }}>
            <img
              src={logoWhite}
              alt="Modish"
              style={{ height: "36px", width: "auto", objectFit: "contain", objectPosition: "left" }}
            />
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", color: "var(--modish-grey-500)", lineHeight: 1.7, margin: 0, maxWidth: "260px" }}>
              Mumbai's trusted custom merchandise brand. Premium quality prints for brands, colleges, events, and startups — delivered pan India.
            </p>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "var(--modish-space-3)", marginTop: "var(--modish-space-1)" }}>
              {[
                { icon: <MessageCircle size={18} />, href: WA_URL, label: "WhatsApp" },
                { icon: <Instagram size={18} />, href: "https://instagram.com/modish.now", label: "Instagram" },
                { icon: <Mail size={18} />, href: "mailto:modish.new@gmail.com", label: "Email" },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "var(--modish-radius-sm)",
                    background: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--modish-grey-400)",
                    textDecoration: "none",
                    transition: "background 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "var(--modish-yellow)";
                    el.style.color = "var(--modish-black)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(255,255,255,0.06)";
                    el.style.color = "var(--modish-grey-400)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "13px", color: "var(--modish-white)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 var(--modish-space-5) 0" }}>
              Quick Links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--modish-space-3)" }}>
              {quickLinks.map(l => (
                <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "13px", color: "var(--modish-white)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 var(--modish-space-5) 0" }}>
              Products
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--modish-space-3)" }}>
              {products.map(p => (
                <FooterLink key={p} href="#products">{p}</FooterLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "13px", color: "var(--modish-white)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 var(--modish-space-5) 0" }}>
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--modish-space-4)" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, display: "flex", alignItems: "flex-start", gap: "8px" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-yellow)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-grey-400)"; }}
              >
                <MessageCircle size={14} style={{ flexShrink: 0, marginTop: "1px" }} />
                +91 91368 67622
              </a>
              <a href="https://instagram.com/modish.now" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, display: "flex", alignItems: "flex-start", gap: "8px" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-yellow)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-grey-400)"; }}
              >
                <Instagram size={14} style={{ flexShrink: 0, marginTop: "1px" }} />
                @modish.now
              </a>
              <a href="mailto:modish.new@gmail.com" style={{ ...linkStyle, display: "flex", alignItems: "flex-start", gap: "8px" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-yellow)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-grey-400)"; }}
              >
                <Mail size={14} style={{ flexShrink: 0, marginTop: "1px" }} />
                modish.new@gmail.com
              </a>
              <span style={{ ...linkStyle, display: "flex", alignItems: "flex-start", gap: "8px", cursor: "default" }}>
                <MapPin size={14} style={{ flexShrink: 0, marginTop: "1px" }} />
                Mumbai, India
              </span>
              <div style={{ marginTop: "var(--modish-space-2)", display: "flex", flexDirection: "column", gap: "var(--modish-space-2)" }}>
                <a href="https://tinyurl.com/Modish-now" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, fontSize: "12px", color: "var(--modish-yellow)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-yellow-dark)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-yellow)"; }}
                >
                  ↓ Clothing Catalog
                </a>
                <a href="https://tinyurl.com/Diary-modish" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, fontSize: "12px", color: "var(--modish-yellow)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-yellow-dark)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--modish-yellow)"; }}
                >
                  ↓ Diary Catalog
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "var(--modish-space-6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--modish-space-3)",
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "13px", color: "var(--modish-grey-500)", margin: 0 }}>
            © 2025 Modish. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "13px", color: "var(--modish-grey-500)", margin: 0 }}>
            Made in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
