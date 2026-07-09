import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Founder, StartupKit",
    review:
      "Modish delivered 200 custom hoodies for our launch event in under 10 days. The quality was exactly as shown in the mockup — no surprises. Highly recommended for any startup looking for bulk merch.",
    rating: 5,
    initials: "RM",
    accent: "#FFCC00",
  },
  {
    name: "Priya Sharma",
    role: "HR Manager, TechCorp India",
    review:
      "Ordered corporate diary sets for our entire office — 300+ units. Printing was crisp, delivery was tracked end-to-end, and the packaging was premium. Our team loved it!",
    rating: 5,
    initials: "PS",
    accent: "#25D366",
  },
  {
    name: "Arjun Nair",
    role: "Cultural Secretary, IIT Mumbai",
    review:
      "Got our college fest T-shirts made here. Great pricing for bulk orders, fast mockups within 24 hours, and the print quality lasted through multiple washes. Will be ordering again next year.",
    rating: 5,
    initials: "AN",
    accent: "#0A0A0A",
  },
  {
    name: "Sneha Kulkarni",
    role: "Event Manager, Eventify",
    review:
      "We've used Modish for 3 consecutive events now. Every time — consistent quality, clear communication, no delays. They're our go-to custom merch partner in Mumbai.",
    rating: 5,
    initials: "SK",
    accent: "#FFCC00",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#F5A623", fontSize: "16px" }}>★</span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = () => {
    intervalRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (intervalRef.current) clearTimeout(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section
      id="reviews"
      className="modish-section"
      style={{ background: "var(--modish-black)", overflow: "hidden" }}
      aria-label="Customer testimonials"
    >
      <div className="modish-container">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--modish-yellow)",
            margin: "0 0 12px 0",
          }}>
            <span style={{ color: "#F5A623" }}>★★★★★</span>
            5.0 · 26 Google Reviews
          </span>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(22px, 4vw, 36px)",
            color: "var(--modish-white)",
            margin: "0 0 12px 0",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}>
            What Our Clients Say
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "rgba(255,255,255,0.5)",
            margin: "0 auto",
            maxWidth: "480px",
          }}>
            500+ brands, colleges, startups and individuals trust Modish for their merch.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--modish-space-5)",
            marginBottom: "var(--modish-space-10)",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal-on-scroll"
              style={{
                background: i === active ? "var(--modish-yellow)" : "rgba(255,255,255,0.05)",
                borderRadius: "var(--modish-radius-lg)",
                padding: "var(--modish-space-6)",
                border: i === active
                  ? "1.5px solid var(--modish-yellow)"
                  : "1.5px solid rgba(255,255,255,0.08)",
                transition: "all 0.4s ease",
                cursor: "pointer",
                animationDelay: `${i * 80}ms`,
              }}
              onClick={() => {
                setActive(i);
                if (intervalRef.current) clearTimeout(intervalRef.current);
              }}
            >
              {/* Quote mark */}
              <div style={{
                fontFamily: "Georgia, serif",
                fontSize: "48px",
                lineHeight: "1",
                color: i === active ? "rgba(0,0,0,0.2)" : "rgba(255,204,0,0.3)",
                marginBottom: "4px",
                marginTop: "-8px",
              }}>
                "
              </div>

              <StarRating count={t.rating} />

              <p style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: 1.7,
                color: i === active ? "var(--modish-black)" : "rgba(255,255,255,0.75)",
                margin: "var(--modish-space-4) 0",
              }}>
                {t.review}
              </p>

              {/* Reviewer */}
              <div style={{ display: "flex", alignItems: "center", gap: "var(--modish-space-3)" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: i === active ? "var(--modish-black)" : "var(--modish-yellow)",
                  color: i === active ? "var(--modish-yellow)" : "var(--modish-black)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "14px",
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: i === active ? "var(--modish-black)" : "var(--modish-white)",
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: i === active ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.5)",
                  }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActive(i);
                if (intervalRef.current) clearTimeout(intervalRef.current);
              }}
              aria-label={`View testimonial ${i + 1}`}
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                background: i === active ? "var(--modish-yellow)" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Google CTA */}
        <div style={{ textAlign: "center", marginTop: "var(--modish-space-10)" }}>
          <a
            href="https://g.page/r/CYatrYCuXpkREAE/review"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "14px",
              color: "var(--modish-black)",
              background: "var(--modish-yellow)",
              padding: "12px 24px",
              borderRadius: "var(--modish-radius-full)",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            aria-label="Read all Modish reviews on Google"
          >
            <span style={{ color: "#F5A623" }}>★</span>
            Read All 26 Google Reviews
          </a>
        </div>

      </div>
    </section>
  );
}
