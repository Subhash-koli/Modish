import { useState } from "react";
import { Zap, Layers2, Star, Waves } from "lucide-react";
import printingImg from "../../imports/Modish catalog/20.webp";

// Each tech maps to a quadrant of the 20.webp image (2×2 grid)
// objectPosition crops the correct section for each printing method
const technologies = [
  {
    icon: <Zap size={28} />,
    name: "DTF Printing",
    fullName: "Direct to Film",
    description: "The most versatile printing method — supports photorealistic full-color designs on any fabric.",
    bestFor: ["Multicolor Designs", "Photo Prints", "Complex Artwork"],
    benefits: ["No minimum order", "Vibrant colors", "Soft hand-feel", "Wash-resistant"],
    cropPosition: "5% 46%",   // Top-left photo (DTF Good Vibes photo)
  },
  {
    icon: <Layers2 size={28} />,
    name: "Screen Printing",
    fullName: "Flat Screen / Rotary",
    description: "The industry standard for bulk orders — crisp, long-lasting prints at the best per-unit cost.",
    bestFor: ["Single-Color Bulk", "Long-Run Orders", "Simple Logos"],
    benefits: ["Lowest per-unit cost", "Durable print", "Pantone accurate", "Ideal for 50+"],
    cropPosition: "95% 46%",  // Top-right photo (Screen Printing squeegee photo)
  },
  {
    icon: <Star size={28} />,
    name: "Embroidery",
    fullName: "Machine Embroidery",
    description: "Premium, textured branding that looks and feels luxurious — the go-to for corporate workwear.",
    bestFor: ["Corporate Polo", "Premium Caps", "Workwear Logos"],
    benefits: ["3D texture look", "Long-lasting", "Premium feel", "Sharp edges"],
    cropPosition: "5% 96%",   // Bottom-left photo (Embroidery hoop photo)
  },
  {
    icon: <Waves size={28} />,
    name: "Sublimation",
    fullName: "Dye Sublimation",
    description: "All-over prints that go edge-to-edge — perfect for sportswear, jerseys, and vibrant full prints.",
    bestFor: ["All-Over Prints", "Sportswear", "Full-Color Jerseys"],
    benefits: ["Edge-to-edge print", "Fade-proof", "Lightweight", "Breathable fabric"],
    cropPosition: "95% 96%",  // Bottom-right photo (Sublimation tote photo)
  },
];

export function PrintingTech() {
  return (
    <section id="printing" className="modish-section" style={{ background: "var(--modish-grey-50)" }}>
      <div className="modish-container">
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
          <span style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
            PRINTING TECHNOLOGIES
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(20px, 3vw, 30px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
            Four Ways We Print
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "15px", color: "var(--modish-grey-500)", maxWidth: "560px", margin: "0 auto" }}>
            We choose the right method based on your design, quantity, and fabric — not what's easiest for us.
          </p>
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
        overflow: "hidden",
        height: "100%",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? "var(--modish-shadow-md)" : "var(--modish-shadow-sm)",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Cropped image from 20.webp showing the relevant quadrant */}
        <div style={{
          width: "100%",
          height: "180px",
          overflow: "hidden",
          flexShrink: 0,
          backgroundImage: `url(${printingImg})`,
          backgroundSize: "200% 200%",
          backgroundPosition: tech.cropPosition,
          backgroundRepeat: "no-repeat",
          transition: "transform 0.4s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
          role="img"
          aria-label={`${tech.name} printing example`}
        />

        {/* Card Content */}
        <div style={{
          padding: "var(--modish-space-5)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--modish-space-3)",
          flex: 1,
        }}>
          {/* Icon + Names */}
          <div style={{ display: "flex", alignItems: "center", gap: "var(--modish-space-3)" }}>
            <div style={{
              color: "var(--modish-black)",
              background: "var(--modish-grey-50)",
              width: "42px",
              height: "42px",
              borderRadius: "var(--modish-radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              {tech.icon}
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "17px", color: "var(--modish-black)", margin: 0, lineHeight: 1.2 }}>
                {tech.name}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "11px", color: "var(--modish-grey-500)", margin: 0, letterSpacing: "0.04em" }}>
                {tech.fullName}
              </p>
            </div>
          </div>

          {/* Description */}
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "13px", color: "var(--modish-grey-700)", lineHeight: 1.5, margin: 0 }}>
            {tech.description}
          </p>

          {/* Best For Chips */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "10px", color: "var(--modish-grey-500)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px 0" }}>
              Best for
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--modish-space-2)" }}>
              {tech.bestFor.map(tag => (
                <span key={tag} style={{
                  display: "inline-block",
                  padding: "3px 9px",
                  borderRadius: "var(--modish-radius-full)",
                  background: "var(--modish-grey-100)",
                  border: "1px solid var(--modish-grey-200)",
                  color: "var(--modish-grey-700)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "10px",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "auto" }}>
            {tech.benefits.map(b => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: "var(--modish-space-2)" }}>
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--modish-yellow)", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "12px", color: "var(--modish-grey-700)" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
