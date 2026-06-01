import logoBlack from "../../imports/LOGO_BLACK.jpeg";
import { Award, Palette, CheckSquare, Star } from "lucide-react";

const values = [
  { icon: <Award size={22} />, title: "Quality", desc: "We never compromise on fabric, print, or finish." },
  { icon: <Palette size={22} />, title: "Creativity", desc: "Your vision, brought to life with expert design support." },
  { icon: <CheckSquare size={22} />, title: "Reliability", desc: "On-time delivery and zero-surprise pricing. Always." },
  { icon: <Star size={22} />, title: "Transparency", desc: "Mockups before production. No hidden charges." },
];

export function AboutSection() {
  return (
    <section id="about" className="modish-section" style={{ background: "var(--modish-white)" }}>
      <div className="modish-container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "var(--modish-space-12)",
          alignItems: "center",
        }} className="modish-about-grid">
          {/* Left: Text Content */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
              OUR STORY
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(22px, 3vw, 32px)", color: "var(--modish-black)", margin: "0 0 var(--modish-space-5) 0", lineHeight: 1.1 }}>
              Made in Mumbai.<br />Worn Across India.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "16px", color: "var(--modish-grey-700)", lineHeight: 1.7, margin: "0 0 var(--modish-space-8) 0" }}>
              Modish started in Mumbai in 2022 with a simple belief — that every brand, college, startup, and individual deserves custom merchandise that looks as good as it feels. We combine street-smart design instincts with rigorous quality control to deliver products that people are proud to wear and gift.
            </p>

            {/* Core Values */}
            <div className="modish-values-grid">
              {values.map((v, i) => (
                <div key={i} style={{
                  display: "flex",
                  gap: "var(--modish-space-3)",
                  alignItems: "flex-start",
                  padding: "var(--modish-space-4)",
                  background: "var(--modish-grey-50)",
                  borderRadius: "var(--modish-radius-md)",
                  border: "1px solid var(--modish-grey-200)",
                }}>
                  <div style={{ color: "var(--modish-yellow)", flexShrink: 0 }}>{v.icon}</div>
                  <div>
                    <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "14px", color: "var(--modish-black)", margin: "0 0 4px 0" }}>{v.title}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "12px", color: "var(--modish-grey-500)", margin: 0, lineHeight: 1.5 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Brand Card */}
          <div className="reveal-on-scroll">
            <div style={{
              background: "var(--modish-black)",
              borderRadius: "var(--modish-radius-xl)",
              overflow: "hidden",
              position: "relative",
            }}>
              {/* Yellow top accent */}
              <div style={{ height: "6px", background: "var(--modish-yellow)" }} />

              <div style={{ padding: "var(--modish-space-10)", textAlign: "center" }}>
                {/* Logo */}
                <img
                  src={logoBlack}
                  alt="Modish Logo"
                  style={{ height: "48px", width: "auto", objectFit: "contain", filter: "invert(1)", marginBottom: "var(--modish-space-2)" }}
                />
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "13px", color: "var(--modish-grey-400)", margin: "0 0 var(--modish-space-8) 0", letterSpacing: "0.06em" }}>
                  Wear Your Mood
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "var(--modish-space-3)" }}>
                  {[
                    { label: "Location", value: "Mumbai, India" },
                    { label: "Established", value: "2022" },
                    { label: "Services", value: "Custom Merchandise" },
                    { label: "Delivery", value: "Pan India" },
                    { label: "Orders", value: "B2B & B2C" },
                  ].map(item => (
                    <div key={item.label} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "var(--modish-space-3) 0",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}>
                      <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", color: "var(--modish-grey-500)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        {item.label}
                      </span>
                      <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "14px", color: "var(--modish-white)" }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "var(--modish-space-6)", padding: "var(--modish-space-4)", background: "rgba(245,196,0,0.08)", borderRadius: "var(--modish-radius-md)", border: "1px solid rgba(245,196,0,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "13px", color: "var(--modish-yellow)", margin: 0, textAlign: "center" }}>
                    "Premium quality at every price point."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
