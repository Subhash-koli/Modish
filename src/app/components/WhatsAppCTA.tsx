import { MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/919136867622?text=Hi%20Modish!%20I%20need%20a%20quote%20for%20a%20bulk%20order.";

export function WhatsAppCTA() {
  return (
    <section
      id="wa-cta"
      style={{
        background: "var(--modish-yellow)",
        padding: "var(--modish-space-20) 0",
        textAlign: "center",
      }}
    >
      <div className="modish-container">
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: "clamp(24px, 4vw, 36px)",
          color: "var(--modish-black)",
          margin: "0 0 var(--modish-space-4) 0",
          lineHeight: 1.0,
        }}>
          Need Instant Pricing?
        </h2>
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "17px",
          color: "var(--modish-black)",
          opacity: 0.75,
          margin: "0 0 var(--modish-space-2) 0",
        }}>
          Your message gets a reply in under 24 hours.
        </p>
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 500,
          fontSize: "13px",
          color: "var(--modish-grey-700)",
          margin: "0 0 var(--modish-space-8) 0",
        }}>
          Mon – Sat, 10am – 7pm IST
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="modish-wa-cta-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--modish-space-3)",
            background: "var(--modish-whatsapp)",
            color: "var(--modish-white)",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            borderRadius: "var(--modish-radius-md)",
            textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 32px rgba(37,211,102,0.3)",
          }}
          onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "var(--modish-whatsapp-dark)"; a.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "var(--modish-whatsapp)"; a.style.transform = "translateY(0)"; }}
        >
          <MessageCircle size={22} />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
