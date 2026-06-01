import clientLogosImg from "../../imports/Modish catalog/22.png";

const clients = [
  "Chandrabhan Sharma College",
  "ENpower",
  "Agam Yoga",
  "Grain Aura",
  "Gurukrupa Catering",
  "Vatika",
  "Kid's Tutorial",
  "A2Z Diagnostic",
];

export function TrustedClients() {
  const row1 = [...clients, ...clients];
  const row2 = [...clients.slice(4), ...clients.slice(0, 4), ...clients.slice(4), ...clients.slice(0, 4)];

  return (
    <section id="clients" className="modish-section" style={{ background: "var(--modish-white)" }}>

      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }} className="modish-container">
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "12px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--modish-grey-500)",
          margin: "0 0 10px 0",
        }}>
          TRUSTED BY
        </p>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: "clamp(22px, 4vw, 32px)",
          color: "var(--modish-black)",
          margin: "0 0 12px 0",
          lineHeight: 1.1,
        }}>
          Brands That Wear Modish
        </h2>
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "16px",
          color: "var(--modish-grey-500)",
          maxWidth: "480px",
          margin: "0 auto",
          lineHeight: 1.65,
        }}>
          From colleges to corporates — they all trust Modish with their brand.
        </p>

        {/* Logo grid image — cleaner, grayscale-filtered, contained */}
        <div
          className="reveal-on-scroll"
          style={{
            marginTop: "var(--modish-space-10)",
            borderRadius: "var(--modish-radius-xl)",
            overflow: "hidden",
            background: "var(--modish-grey-50)",
            border: "1px solid var(--modish-grey-200)",
            boxShadow: "var(--modish-shadow-sm)",
            maxWidth: "800px",
            margin: "var(--modish-space-10) auto 0 auto",
          }}
        >
          <img
            src={clientLogosImg}
            alt="Clients who trust Modish — CSC, ENpower, Agam Yoga, Grain Aura, Gurukrupa, Vatika, Kid's Tutorial, A2Z Diagnostic"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "grayscale(40%) contrast(1.05)",
              opacity: 0.9,
            }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Marquee Row 1 — left to right */}
      <div
        aria-hidden="true"
        style={{ overflow: "hidden", marginBottom: "var(--modish-space-3)" }}
      >
        <div style={{
          display: "flex",
          gap: "var(--modish-space-3)",
          animation: "marquee 22s linear infinite",
          width: "max-content",
        }}>
          {row1.map((c, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--modish-grey-50)",
                border: "1px solid var(--modish-grey-200)",
                borderRadius: "var(--modish-radius-full)",
                padding: "10px 20px",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "14px",
                color: "var(--modish-black)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--modish-yellow)",
                flexShrink: 0,
              }} />
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — right to left */}
      <div
        aria-hidden="true"
        style={{ overflow: "hidden" }}
      >
        <div style={{
          display: "flex",
          gap: "var(--modish-space-3)",
          animation: "marquee 28s linear infinite reverse",
          width: "max-content",
        }}>
          {row2.map((c, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--modish-grey-100)",
                border: "1px solid var(--modish-grey-200)",
                borderRadius: "var(--modish-radius-full)",
                padding: "10px 20px",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "14px",
                color: "var(--modish-grey-500)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--modish-grey-300)",
                flexShrink: 0,
              }} />
              {c}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
