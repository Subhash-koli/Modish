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
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
            Let's Talk Merch
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "17px", color: "var(--modish-grey-500)", maxWidth: "500px", margin: "0 auto" }}>
            Reach out through any channel. We respond fast.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "var(--modish-space-5)",
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
  const inner = (
    <div style={{
      background: "var(--modish-white)",
      borderRadius: "var(--modish-radius-lg)",
      padding: "var(--modish-space-6)",
      border: "1px solid var(--modish-grey-200)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--modish-space-3)",
      height: "100%",
      boxSizing: "border-box",
      transition: "border-color 0.25s ease, box-shadow 0.25s ease",
      boxShadow: "var(--modish-shadow-sm)",
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.borderColor = contact.accent === "var(--modish-whatsapp)" ? "var(--modish-whatsapp)" : "var(--modish-yellow)";
      el.style.boxShadow = "var(--modish-shadow-md)";
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.borderColor = "var(--modish-grey-200)";
      el.style.boxShadow = "var(--modish-shadow-sm)";
    }}
    >
      <div style={{ color: contact.accent, marginBottom: "var(--modish-space-1)" }}>
        {contact.icon}
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: 0 }}>
        {contact.label}
      </p>
      <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "17px", color: "var(--modish-black)", margin: 0, wordBreak: "break-all" }}>
        {contact.value}
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "13px", color: "var(--modish-grey-500)", margin: 0, lineHeight: 1.5 }}>
        {contact.sub}
      </p>
      {contact.cta && (
        <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "13px", color: contact.accent, margin: "var(--modish-space-2) 0 0 0" }}>
          {contact.cta}
        </p>
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
