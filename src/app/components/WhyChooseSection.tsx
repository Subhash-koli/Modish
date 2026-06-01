import { Award, Layers, Monitor, Shield, Truck, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Monitor,
    title: "Digital Mockups Before Printing",
    description: "We provide digital mockups for visual clarity before printing — see exactly what you get before we produce it.",
    highlight: "Zero guesswork",
  },
  {
    icon: Award,
    title: "Consistent, High-Quality Prints",
    description: "Top-grade fabrics and inks that withstand 50+ washes without fading or cracking. Quality you can feel.",
    highlight: "50+ wash guarantee",
  },
  {
    icon: DollarSign,
    title: "Competitive & Transparent Pricing",
    description: "Fair, transparent bulk pricing with no hidden charges. Our prices are honest and firm — no surprises.",
    highlight: "No hidden fees",
  },
  {
    icon: Shield,
    title: "Clear, Responsive Communication",
    description: "Always responsive on WhatsApp & Instagram. We never ghost our clients at any stage of the order.",
    highlight: "Always reachable",
  },
  {
    icon: Layers,
    title: "Multiple Printing Technologies",
    description: "DTF, Screen Printing, Embroidery & Sublimation — we pick the best method for your design and budget.",
    highlight: "4 print methods",
  },
  {
    icon: Truck,
    title: "Pan India Delivery — Tracked",
    description: "We ship to every corner of India. Every order is tracked end-to-end so you always know where it is.",
    highlight: "180+ cities",
  },
];

export function WhyChooseSection() {
  return (
    <section id="why" className="modish-section" style={{ background: "var(--modish-grey-50)" }}>
      <div className="modish-container">

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-6)" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--modish-grey-500)",
            margin: "0 0 8px 0",
          }}>
            WHY MODISH
          </p>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(18px, 4.6vw, 26px)",
            color: "var(--modish-black)",
            margin: "0 0 10px 0",
            lineHeight: 1.05,
          }}>
            Why Choose Modish?
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "13px",
            color: "var(--modish-grey-500)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.45,
          }}>
            From design to delivery, we're built to make the process easy and the results exceptional.
          </p>
        </div>

        {/* Feature blocks — full-width stack on mobile */}
        <div className="modish-why-stack">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className="modish-why-row reveal-on-scroll"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                {/* Icon Box */}
                <div className="modish-why-icon-box">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="modish-why-content">
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--modish-space-3)", flexWrap: "wrap" }}>
                    <h3 style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "var(--modish-black)",
                      margin: 0,
                      lineHeight: 1.15,
                    }}>
                      {reason.title}
                    </h3>
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "10px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      background: "var(--modish-yellow)",
                      color: "var(--modish-black)",
                      padding: "3px 10px",
                      borderRadius: "var(--modish-radius-full)",
                      whiteSpace: "nowrap",
                    }}>
                      {reason.highlight}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "var(--modish-grey-500)",
                    lineHeight: 1.45,
                    margin: "6px 0 0 0",
                  }}>
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
