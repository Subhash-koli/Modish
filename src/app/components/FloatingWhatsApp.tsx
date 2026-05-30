import { MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/919136867622?text=Hi%20Modish!%20I%20need%20a%20quote%20for%20a%20bulk%20order.";

export function FloatingWhatsApp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="modish-desktop-only"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: "var(--modish-z-floating)" as any,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "var(--modish-whatsapp)",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
        animation: "pulseWA 2.5s ease-in-out infinite",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "var(--modish-whatsapp-dark)";
        el.style.transform = "scale(1.1)";
        el.style.transition = "all 0.2s ease";
        el.style.animationPlayState = "paused";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "var(--modish-whatsapp)";
        el.style.transform = "scale(1)";
        el.style.animationPlayState = "running";
      }}
    >
      <MessageCircle size={26} color="#ffffff" fill="transparent" />
    </a>
  );
}
