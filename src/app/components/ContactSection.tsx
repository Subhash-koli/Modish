import { useState } from "react";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";

const contacts = [
  {
    icon: <MessageCircle size={28} />,
    label: "WhatsApp",
    value: "+91 91368 67622",
    sub: "Mon – Sat, 10am – 7pm IST",
    href: "https://wa.me/919136867622?text=Hi%20Modish!%20I%20need%20a%20quote%20for%20a%20bulk%20order.",
    cta: "Chat Now →",
    accent: "var(--modish-whatsapp)",
  },
  {
    icon: <Instagram size={28} />,
    label: "Instagram",
    value: "@modish.now",
    sub: "Browse our latest designs & work",
    href: "https://instagram.com/modish.now",
    cta: "Follow Us →",
    accent: "var(--modish-black)",
  },
  {
    icon: <Mail size={28} />,
    label: "Email",
    value: "modish.new@gmail.com",
    sub: "For detailed project briefs",
    href: "mailto:modish.new@gmail.com",
    cta: "Send Email →",
    accent: "var(--modish-black)",
  },
  {
    icon: <MapPin size={28} />,
    label: "Location",
    value: "Mumbai, India",
    sub: "Pan India delivery available",
    href: null,
    cta: null,
    accent: "var(--modish-black)",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="modish-section" style={{ background: "var(--modish-grey-50)" }}>
      <div className="modish-container">
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
            GET IN TOUCH
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(24px, 3.2vw, 36px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
            Let's Talk Merch
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "17px", color: "var(--modish-grey-500)", maxWidth: "500px", margin: "0 auto" }}>
            Reach out through any channel. We respond fast.
          </p>
        </div>

        <div className="modish-contact-grid" style={{
          maxWidth: "1080px",
          margin: "0 auto",
        }}>
          {contacts.map((c, i) => (
            <ContactCard key={i} contact={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCard({ contact }: { contact: typeof contacts[0] }) {
  const [hovered, setHovered] = useState(false);
  
  const inner = (
    <div style={{
      background: "var(--modish-white)",
      borderRadius: "var(--modish-radius-lg)",
      padding: "var(--modish-space-6)",
      border: "1px solid var(--modish-grey-200)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--modish-space-4)",
      height: "100%",
      boxSizing: "border-box",
      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
      boxShadow: hovered ? "var(--modish-shadow-lg)" : "var(--modish-shadow-sm)",
      transform: hovered ? "translateY(-4px)" : "translateY(0)",
      position: "relative",
      overflow: "hidden",
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: contact.accent,
      }} />
      
      {/* Icon container with background */}
      <div style={{ 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "56px",
        height: "56px",
        borderRadius: "var(--modish-radius-lg)",
        background: contact.accent === "var(--modish-whatsapp)" ? "rgba(37, 211, 102, 0.08)" : "rgba(244, 205, 0, 0.08)",
        color: contact.accent,
      }}>
        {contact.icon}
      </div>
      
      {/* Label */}
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: 0 }}>
        {contact.label}
      </p>
      
      {/* Value */}
      <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px", color: "var(--modish-black)", margin: 0, wordBreak: "break-all", lineHeight: 1.3 }}>
        {contact.value}
      </p>
      
      {/* Sub text */}
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "13px", color: "var(--modish-grey-500)", margin: 0, lineHeight: 1.6 }}>
        {contact.sub}
      </p>
      
      {/* CTA link */}
      {contact.cta && (
        <div style={{ marginTop: "auto", paddingTop: "var(--modish-space-3)" }}>
          <p style={{ 
            fontFamily: "var(--font-heading)", 
            fontWeight: 700, 
            fontSize: "13px", 
            color: contact.accent, 
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "6px",
            cursor: "pointer"
          }}>
            {contact.cta}
            <span style={{ fontSize: "10px" }}>→</span>
          </p>
        </div>
      )}
    </div>
  );

  if (contact.href) {
    return (
      <a
        href={contact.href}
        target={contact.href.startsWith("http") ? "_blank" : undefined}
        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
        style={{ textDecoration: "none", display: "block" }}
      >
        {inner}
      </a>
    );
  }

  return <div>{inner}</div>;
}
