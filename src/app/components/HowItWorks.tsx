import { Upload, ImageIcon, Cog, CheckSquare, Package } from "lucide-react";
import processImg from "../../imports/Modish catalog/19.png";

const steps = [
  {
    number: "01",
    icon: <Upload size={28} />,
    title: "Send Your Design",
    description: "Share your logo, artwork, or idea via WhatsApp or email. Our design team takes it from there.",
  },
  {
    number: "02",
    icon: <ImageIcon size={28} />,
    title: "Receive Digital Mockup",
    description: "Within 24 hours, get a photorealistic preview of your product — approve or request revisions.",
  },
  {
    number: "03",
    icon: <Cog size={28} />,
    title: "Production Begins",
    description: "Once you approve, we start printing. Our production team handles every step with care.",
  },
  {
    number: "04",
    icon: <CheckSquare size={28} />,
    title: "Quality Check",
    description: "Every item is inspected for print quality, color accuracy, and fabric finish before packing.",
  },
  {
    number: "05",
    icon: <Package size={28} />,
    title: "Delivery to Your Door",
    description: "We pack and ship your order across India. Track your delivery end-to-end.",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="modish-section" style={{ background: "var(--modish-white)" }}>
      <div className="modish-container">
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-12)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
            HOW IT WORKS
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
            From Idea to Doorstep
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "17px", color: "var(--modish-grey-500)", maxWidth: "560px", margin: "0 auto" }}>
            A clear, simple 5-step process — no confusion, no surprises.
          </p>
        </div>

        {/* Catalog process visual */}
        <div className="reveal-on-scroll" style={{ marginBottom: "var(--modish-space-10)", borderRadius: "var(--modish-radius-xl)", overflow: "hidden", border: "1px solid var(--modish-grey-200)", boxShadow: "var(--modish-shadow-md)", background: "var(--modish-white)" }}>
          <img
            src={processImg}
            alt="Print Your Story with Modish — How It Works, What Can I Customize, What About Quality"
            style={{ width: "100%", height: "auto", display: "block" }}
            loading="lazy"
          />
        </div>

        {/* Desktop: Horizontal Steps */}
        <div className="modish-desktop-only" style={{ position: "relative", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--modish-space-4)" }}>
          {/* Connector Line */}
          <div style={{
            position: "absolute",
            top: "24px",
            left: "10%",
            right: "10%",
            height: "1px",
            borderTop: "2px dashed var(--modish-yellow)",
            zIndex: 0,
          }} />

          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal-on-scroll"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "var(--modish-space-4)",
                position: "relative",
                zIndex: 1,
                animationDelay: `${i * 100}ms`,
              }}
            >
              {/* Step Circle */}
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "var(--modish-yellow)",
                color: "var(--modish-black)",
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 0 0 6px var(--modish-white)",
              }}>
                {step.number}
              </div>

              {/* Icon */}
              <div style={{ color: "var(--modish-black)", opacity: 0.7 }}>
                {step.icon}
              </div>

              <div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "15px", color: "var(--modish-black)", margin: "0 0 6px 0" }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "13px", color: "var(--modish-grey-500)", lineHeight: 1.5, margin: 0 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Steps */}
        <div className="modish-mobile-only" style={{ flexDirection: "column", position: "relative" }}>
          {/* Left connector line */}
          <div style={{
            position: "absolute",
            top: "24px",
            bottom: "24px",
            left: "23px",
            width: "2px",
            borderLeft: "2px dashed var(--modish-yellow)",
            zIndex: 0,
          }} />

          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal-on-scroll"
              style={{
                display: "flex",
                gap: "var(--modish-space-5)",
                alignItems: "flex-start",
                paddingBottom: i < steps.length - 1 ? "var(--modish-space-8)" : 0,
                position: "relative",
                zIndex: 1,
                animationDelay: `${i * 100}ms`,
              }}
            >
              {/* Step Circle */}
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "var(--modish-yellow)",
                color: "var(--modish-black)",
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 0 0 6px var(--modish-white)",
              }}>
                {step.number}
              </div>

              <div style={{ paddingTop: "10px" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px", color: "var(--modish-black)", margin: "0 0 6px 0" }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", color: "var(--modish-grey-500)", lineHeight: 1.6, margin: 0 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
