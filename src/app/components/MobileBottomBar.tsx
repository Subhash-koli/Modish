import { MessageCircle, FileText } from "lucide-react";
import { useState } from "react";

const WA_URL = "https://wa.me/919136867622?text=Hi%20Modish!%20I%20need%20a%20quote%20for%20a%20bulk%20order.";

export function MobileBottomBar() {
  const [hoveredBtn, setHoveredBtn] = useState<"wa" | "quote" | null>(null);

  return (
    <div
      className="modish-mobile-only"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "16px",
        zIndex: "var(--modish-z-floating)" as any,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        pointerEvents: "none", // Let clicks pass through empty spaces
      }}
    >
      {/* Get Quote Floating Button */}
      <a
        href="#inquiry"
        title="Get Quote"
        onMouseEnter={() => setHoveredBtn("quote")}
        onMouseLeave={() => setHoveredBtn(null)}
        style={{
          pointerEvents: "auto",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: hoveredBtn === "quote" ? "var(--modish-black)" : "var(--modish-yellow)",
          color: hoveredBtn === "quote" ? "var(--modish-yellow)" : "var(--modish-black)",
          border: hoveredBtn === "quote" ? "1.5px solid var(--modish-yellow)" : "1.5px solid transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.22)",
          transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: hoveredBtn === "quote" ? "scale(1.08) translateY(-2px)" : "scale(1)",
        }}
      >
        <FileText size={20} />
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        onMouseEnter={() => setHoveredBtn("wa")}
        onMouseLeave={() => setHoveredBtn(null)}
        style={{
          pointerEvents: "auto",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "var(--modish-whatsapp)",
          color: "var(--modish-white)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(37, 211, 102, 0.35)",
          transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: hoveredBtn === "wa" ? "scale(1.08) translateY(-2px)" : "scale(1)",
          animation: "pulseWA 2.5s infinite",
        }}
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
