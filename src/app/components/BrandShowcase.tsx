import { ArrowRight, MessageCircle } from "lucide-react";
import img6 from "../../imports/Modish catalog/6.webp";
import img12 from "../../imports/Modish catalog/12.webp";
import img9 from "../../imports/Modish catalog/9.webp";

const WA_URL = "https://wa.me/919136867622?text=Hi%20Modish!%20I%20want%20to%20place%20a%20custom%20order.%20Can%20you%20help%3F";

export function BrandShowcase() {
  return (
    <section
      id="brand-showcase"
      style={{
        background: "var(--modish-grey-50)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle yellow glow */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-5%",
        width: "50vw",
        height: "60vh",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,204,0,0.08) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div className="modish-container" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Mobile: Stacked full-width layout ── */}
        {/* ── Desktop: Split 50/50 layout ── */}
        <div className="modish-showcase-grid">

          {/* Left — headline block */}
          <div
            className="modish-showcase-text reveal-on-scroll"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: "var(--modish-space-14)",
              paddingBottom: "var(--modish-space-10)",
            }}
          >
            {/* Eyebrow */}
            <span style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--modish-yellow)",
              marginBottom: "var(--modish-space-4)",
              display: "block",
            }}>
              DESIGNED FOR BRANDS & CREATORS
            </span>

            {/* Headline */}
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(26px, 5vw, 42px)",
              color: "var(--modish-black)",
              lineHeight: 1.05,
              margin: "0 0 var(--modish-space-5) 0",
            }}>
              Merch That{" "}
              <span style={{
                position: "relative",
                display: "inline-block",
                whiteSpace: "nowrap",
              }}>
                <span style={{
                  position: "absolute",
                  left: "-4px",
                  right: "-4px",
                  bottom: "6%",
                  height: "30%",
                  background: "var(--modish-yellow)",
                  zIndex: 0,
                  borderRadius: "2px",
                }} />
                <span style={{ position: "relative", zIndex: 1, color: "var(--modish-black)" }}>
                  Moves
                </span>
              </span>
              <br />
              the Crowd.
            </h2>

            {/* Body */}
            <p style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "16px",
              color: "var(--modish-grey-500)",
              lineHeight: 1.7,
              margin: "0 0 var(--modish-space-7) 0",
              maxWidth: "420px",
            }}>
              From oversized hoodies to custom polo tees — we craft apparel that carries your identity. For startups, college fests, corporate events, and more.
            </p>

            {/* Feature pills */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--modish-space-3)",
              marginBottom: "var(--modish-space-7)",
            }}>
              {["Minimum 1 Piece", "Free Digital Mockup", "Bulk Discounts", "Pan India Delivery"].map(tag => (
                <span key={tag} style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "var(--modish-black)",
                  background: "var(--modish-grey-200)",
                  border: "1px solid var(--modish-grey-200)",
                  borderRadius: "var(--modish-radius-full)",
                  padding: "6px 14px",
                  whiteSpace: "nowrap",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--modish-space-3)",
            }}>
              <a
                href="#products"
                onClick={e => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "15px",
                  background: "var(--modish-yellow)",
                  color: "var(--modish-black)",
                  padding: "16px 28px",
                  borderRadius: "var(--modish-radius-md)",
                  textDecoration: "none",
                  minHeight: "52px",
                }}
              >
                Explore Products
                <ArrowRight size={16} />
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "15px",
                  background: "transparent",
                  color: "var(--modish-black)",
                  padding: "16px 28px",
                  borderRadius: "var(--modish-radius-md)",
                  textDecoration: "none",
                  border: "1.5px solid var(--modish-black)",
                  minHeight: "52px",
                }}
              >
                <MessageCircle size={16} />
                Get a Quote
              </a>
            </div>
          </div>

          {/* Right — image mosaic */}
          <div
            className="modish-showcase-images reveal-on-scroll"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "auto auto",
              gap: "var(--modish-space-3)",
              paddingTop: "var(--modish-space-10)",
              paddingBottom: "var(--modish-space-10)",
              alignItems: "start",
            }}
          >
            {/* Large top-left image */}
            <div style={{
              gridColumn: "1",
              gridRow: "1 / span 2",
              borderRadius: "var(--modish-radius-xl)",
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.08)",
            }}>
              <img
                src={img6}
                alt="Oversized premium custom printed t-shirt by Modish"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                  minHeight: "260px",
                  maxHeight: "380px",
                }}
                loading="lazy"
              />
            </div>

            {/* Top-right */}
            <div style={{
              borderRadius: "var(--modish-radius-xl)",
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.08)",
            }}>
              <img
                src={img9}
                alt="Premium polo shirt custom printed by Modish"
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
                loading="lazy"
              />
            </div>

            {/* Bottom-right */}
            <div style={{
              borderRadius: "var(--modish-radius-xl)",
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.08)",
            }}>
              <img
                src={img12}
                alt="Custom printed premium hoodie by Modish"
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
