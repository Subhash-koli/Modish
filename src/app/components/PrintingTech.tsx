import { useState } from "react";
import { Zap, Layers2, Star, Waves } from "lucide-react";
import printingImg from "../../imports/Modish catalog/20.png";

const technologies = [
  {
    icon: <Zap size={36} />,
    name: "DTF Printing",
    fullName: "Direct to Film",
    description: "The most versatile printing method — supports photorealistic full-color designs on any fabric.",
    bestFor: ["Multicolor Designs", "Photo Prints", "Complex Artwork"],
    benefits: ["No minimum order", "Vibrant colors", "Soft hand-feel", "Wash-resistant"],
  },
  {
    icon: <Layers2 size={36} />,
    name: "Screen Printing",
    fullName: "Flat Screen / Rotary",
    description: "The industry standard for bulk orders — crisp, long-lasting prints at the best per-unit cost.",
    bestFor: ["Single-Color Bulk", "Long-Run Orders", "Simple Logos"],
    benefits: ["Lowest per-unit cost", "Durable print", "Pantone accurate", "Ideal for 50+"],
  },
  {
    icon: <Star size={36} />,
    name: "Embroidery",
    fullName: "Machine Embroidery",
    description: "Premium, textured branding that looks and feels luxurious — the go-to for corporate workwear.",
    bestFor: ["Corporate Polo", "Premium Caps", "Workwear Logos"],
    benefits: ["3D texture look", "Long-lasting", "Premium feel", "Sharp edges"],
  },
  {
    icon: <Waves size={36} />,
    name: "Sublimation",
    fullName: "Dye Sublimation",
    description: "All-over prints that go edge-to-edge — perfect for sportswear, jerseys, and vibrant full prints.",
    bestFor: ["All-Over Prints", "Sportswear", "Full-Color Jerseys"],
    benefits: ["Edge-to-edge print", "Fade-proof", "Lightweight", "Breathable fabric"],
  },
];

export function PrintingTech() {
  return (
    <section id="printing" className="modish-section" style={{ background: "var(--modish-grey-50)" }}>
      <div className="modish-container">
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
            PRINTING TECHNOLOGIES
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(20px, 3vw, 30px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
            Four Ways We Print
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "15px", color: "var(--modish-grey-500)", maxWidth: "560px", margin: "0 auto" }}>
            We choose the right method based on your design, quantity, and fabric — not what's easiest for us.
          </p>
        </div>

        {/* Catalog Printing Visual */}
        <div className="reveal-on-scroll" style={{ marginBottom: "var(--modish-space-10)", borderRadius: "var(--modish-radius-xl)", overflow: "hidden", border: "1px solid var(--modish-grey-200)", boxShadow: "var(--modish-shadow-md)" }}>
          <img
            src={printingImg}
            alt="Modish Printing Options: DTF, Screen Printing, Embroidery, Sublimation"
            style={{ width: "100%", height: "auto", display: "block" }}
            loading="lazy"
          />
        </div>

        {/* Swipe hint — mobile only */}
        <div className="modish-swipe-hint">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          Swipe to explore all methods
        </div>

        <div className="modish-printing-carousel">
          {technologies.map((tech, i) => (
            <div key={i} className="modish-printing-carousel-card">
              <TechCard tech={tech} delay={i * 80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech, delay }: { tech: typeof technologies[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        background: "var(--modish-white)",
        border: hovered ? "1px solid var(--modish-yellow)" : "1px solid var(--modish-grey-200)",
        borderRadius: "var(--modish-radius-lg)",
        padding: "var(--modish-space-6)",
        height: "100%",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? "var(--modish-shadow-md)" : "var(--modish-shadow-sm)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--modish-space-4)",
      }}>
        {/* Icon */}
        <div style={{ color: "var(--modish-black)", transition: "color 0.2s ease" }}>
          {tech.icon}
        </div>

        {/* Names */}
        <div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "20px", color: "var(--modish-black)", margin: "0 0 4px 0" }}>
            {tech.name}
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "12px", color: "var(--modish-grey-500)", margin: 0, letterSpacing: "0.05em" }}>
            {tech.fullName}
          </p>
        </div>

        {/* Description */}
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", color: "var(--modish-grey-700)", lineHeight: 1.6, margin: 0 }}>
          {tech.description}
        </p>

        {/* Best For Chips */}
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "11px", color: "var(--modish-grey-500)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px 0" }}>
            Best for
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--modish-space-2)" }}>
            {tech.bestFor.map(tag => (
              <span key={tag} style={{
                display: "inline-block",
                padding: "3px 10px",
                borderRadius: "var(--modish-radius-full)",
                background: "var(--modish-grey-100)",
                border: "1px solid var(--modish-grey-200)",
                color: "var(--modish-grey-700)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "11px",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--modish-space-1)" }}>
          {tech.benefits.map(b => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: "var(--modish-space-2)" }}>
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--modish-yellow)", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "13px", color: "var(--modish-grey-700)" }}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
