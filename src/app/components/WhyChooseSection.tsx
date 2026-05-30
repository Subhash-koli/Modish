import { useState } from "react";
import { Award, Layers, Monitor, Shield, Truck, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: <Monitor size={36} />,
    title: "Digital Mockups Before Printing",
    description: "We provide digital mockups for visual clarity before printing — see exactly what you get.",
  },
  {
    icon: <Award size={36} />,
    title: "Consistent, High-Quality Prints",
    description: "Top-grade fabrics and inks that withstand 50+ washes without fading or cracking.",
  },
  {
    icon: <DollarSign size={36} />,
    title: "Competitive Pricing",
    description: "Competitive pricing with premium quality. Our bulk pricing is fair, transparent, and firm.",
  },
  {
    icon: <Shield size={36} />,
    title: "Clear Communication",
    description: "Clear, responsive communication on WhatsApp & Instagram — always responsive, never ghosting.",
  },
  {
    icon: <Layers size={36} />,
    title: "Multiple Printing Technologies",
    description: "DTF, Screen Printing, Embroidery & Sublimation — we pick the best method for your design.",
  },
  {
    icon: <Truck size={36} />,
    title: "Transparent & Customer-Friendly",
    description: "Transparent and customer-friendly process. Pan India delivery, tracked end-to-end.",
  },
];

export function WhyChooseSection() {
  return (
    <section id="why" className="modish-section" style={{ background: "var(--modish-grey-100)" }}>
      <div className="modish-container">
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
            WHY MODISH
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
            Why Choose Modish?
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "17px", color: "var(--modish-grey-500)", maxWidth: "580px", margin: "0 auto" }}>
            From design to delivery, we're built to make the process easy and the results exceptional.
          </p>
        </div>

        <div className="modish-feature-grid">
          {reasons.map((reason, i) => (
            <WhyCard key={i} {...reason} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) {
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
        border: "1px solid var(--modish-grey-200)",
        borderLeft: hovered ? "3px solid var(--modish-yellow)" : "1px solid var(--modish-grey-200)",
        borderRadius: "var(--modish-radius-lg)",
        padding: "var(--modish-space-6)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        height: "100%",
      }}>
        <div style={{ color: hovered ? "var(--modish-yellow)" : "var(--modish-black)", marginBottom: "var(--modish-space-4)", transition: "color 0.2s ease" }}>
          {icon}
        </div>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px", color: "var(--modish-black)", margin: "0 0 8px 0" }}>
          {title}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", color: "var(--modish-grey-500)", lineHeight: 1.6, margin: 0 }}>
          {description}
        </p>
      </div>
    </div>
  );
}
