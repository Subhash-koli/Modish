import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Product images
import img3_tshirts from "../../imports/Modish catalog/3.webp";
import img6_oversized from "../../imports/Modish catalog/6.webp";
import img9_polo from "../../imports/Modish catalog/9.webp";
import img12_hoodies from "../../imports/Modish catalog/12.webp";
import img15_gymvest from "../../imports/Modish catalog/15.webp";
import img17_accessories from "../../imports/Modish catalog/17.webp";

// ─── CAROUSEL 1 DATA (Asymmetric Focus) ───
const carousel1Items = [
  { id: "c1-1", category: "T-SHIRTS", title: "Classic Crew T-Shirt", img: img3_tshirts, desc: "180 GSM Bio-Wash Combed Cotton" },
  { id: "c1-2", category: "OVERSIZED", title: "Heavy Drop-Shoulder", img: img6_oversized, desc: "240 GSM Premium Streetwear" },
  { id: "c1-3", category: "T-SHIRTS", title: "Organic Eco Tee", img: img3_tshirts, desc: "100% Certified Organic Cotton" },
  { id: "c1-4", category: "OVERSIZED", title: "Acid Wash Streetwear", img: img6_oversized, desc: "Vintage Wash Heavy Fabric" },
  { id: "c1-5", category: "T-SHIRTS", title: "Active Dry-Fit", img: img9_polo, desc: "Moisture-Wicking Tech" },
];

// ─── CAROUSEL 2 DATA (Depth Stack) ───
const carousel2Items = [
  { id: "c2-1", label: "bloom", title: "Honeycomb Polo", img: img9_polo, tag: "220 GSM" },
  { id: "c2-2", label: "vivid", title: "Premium Hoodie", img: img12_hoodies, tag: "320 GSM" },
  { id: "c2-3", label: "petaled", title: "Executive Polo", img: img9_polo, tag: "240 GSM" },
  { id: "c2-4", label: "cozy", title: "Urban Crewneck", img: img12_hoodies, tag: "300 GSM" },
  { id: "c2-5", label: "sport", title: "Mandarin Polo", img: img9_polo, tag: "210 GSM" },
];

// ─── CAROUSEL 3 DATA (Full-Bleed Gallery) ───
const carousel3Items = [
  { id: "c3-1", title: "Performance Tank", img: img15_gymvest },
  { id: "c3-2", title: "Premium Canvas Tote", img: img17_accessories },
  { id: "c3-3", title: "Custom Wood Coasters", img: img17_accessories },
  { id: "c3-4", title: "Speed-Tex Mousepad", img: img17_accessories },
  { id: "c3-5", title: "Deep Gym Stringer", img: img15_gymvest },
];

export function HeroBanner() {
  const [index1, setIndex1] = useState(2); // Center default
  const [index2, setIndex2] = useState(1); // Center default
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Carousel 1 Controls
  const next1 = () => setIndex1((prev) => (prev + 1) % carousel1Items.length);
  const prev1 = () => setIndex1((prev) => (prev - 1 + carousel1Items.length) % carousel1Items.length);

  // Carousel 2 Controls
  const next2 = () => setIndex2((prev) => (prev + 1) % carousel2Items.length);
  const prev2 = () => setIndex2((prev) => (prev - 1 + carousel2Items.length) % carousel2Items.length);

  return (
    <div style={{ background: "var(--modish-grey-50)", width: "100%" }}>
      {/* ═══════════════════════════════════════════════════════════
           SECTION 1: ASYMMETRIC FOCUS CAROUSEL (Style of Screenshot 1)
      ════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "var(--modish-space-12)",
          paddingBottom: "var(--modish-space-8)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="modish-container">
          <div style={{ textAlign: "center", marginBottom: "var(--modish-space-8)" }}>
            <span style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF7A00", margin: "0 0 8px 0" }}>
              COLLECTION ONE
            </span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: "var(--modish-black)", margin: 0 }}>
              Streetwear & Custom Tees
            </h2>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: isMobile ? "360px" : "500px",
              marginTop: "var(--modish-space-6)",
            }}
          >
            {/* Left navigation arrow */}
            <button
              onClick={prev1}
              aria-label="Previous slide"
              style={{
                position: "absolute",
                left: isMobile ? "12px" : "15%",
                zIndex: 10,
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#FF7A00", // screenshot orange
                border: "none",
                color: "#FFFFFF",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(255, 122, 0, 0.4)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Carousel track */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: isMobile ? "16px" : "32px",
                width: "100%",
                maxWidth: "1120px",
                overflow: "visible",
              }}
            >
              {/* Render 3 cards centered around index1 */}
              {[-1, 0, 1].map((offset) => {
                const itemIndex = (index1 + offset + carousel1Items.length) % carousel1Items.length;
                const item = carousel1Items[itemIndex];
                const isActive = offset === 0;

                // Hide side cards on extra small viewports
                if (!isActive && isMobile) return null;

                return (
                  <div
                    key={item.id}
                    style={{
                      width: isActive ? (isMobile ? "260px" : "320px") : "240px",
                      height: isActive ? (isMobile ? "340px" : "460px") : "380px",
                      flexShrink: 0,
                      borderRadius: "var(--modish-radius-xl)",
                      overflow: "hidden",
                      position: "relative",
                      boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.16)" : "0 8px 16px rgba(0,0,0,0.06)",
                      filter: isActive ? "none" : "grayscale(100%) opacity(0.4)",
                      transform: isActive ? "scale(1.05)" : "scale(0.95)",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      background: "var(--modish-white)",
                      border: isActive ? "1.5px solid rgba(0,0,0,0.08)" : "1px solid rgba(0,0,0,0.04)",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                    />
                    <div style={{ padding: "16px", background: "var(--modish-white)", textAlign: "center", height: "25%" }}>
                      <span style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "10px", color: "var(--modish-grey-500)", letterSpacing: "0.1em", marginBottom: "4px" }}>
                        {item.category}
                      </span>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 850, fontSize: "16px", color: "var(--modish-black)", margin: "0 0 4px 0" }}>
                        {item.title}
                      </h4>
                      {isActive && (
                        <div
                          style={{
                            width: "28px",
                            height: "2.5px",
                            background: "#FF7A00",
                            margin: "8px auto 0 auto",
                            borderRadius: "1px",
                          }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right navigation arrow */}
            <button
              onClick={next1}
              aria-label="Next slide"
              style={{
                position: "absolute",
                right: isMobile ? "12px" : "15%",
                zIndex: 10,
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#FF7A00", // screenshot orange
                border: "none",
                color: "#FFFFFF",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(255, 122, 0, 0.4)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           SECTION 2: DEPTH STACK CAROUSEL (Style of Screenshot 2)
      ════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "var(--modish-space-10)",
          paddingBottom: "var(--modish-space-10)",
          background: "rgba(0,0,0,0.03)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="modish-container">
          <div style={{ textAlign: "center", marginBottom: "var(--modish-space-8)" }}>
            <span style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
              COLLECTION TWO
            </span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: "var(--modish-black)", margin: 0 }}>
              Premium Polos & Outerwear
            </h2>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: isMobile ? "320px" : "460px",
              marginTop: "var(--modish-space-6)",
            }}
          >
            {/* Left navigation arrow */}
            <button
              onClick={prev2}
              aria-label="Previous slide"
              style={{
                position: "absolute",
                left: isMobile ? "8px" : "20%",
                zIndex: 10,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(0,0,0,0.1)",
                color: "var(--modish-black)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Depth stack layout */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: "800px",
                position: "relative",
              }}
            >
              {[-1, 0, 1].map((offset) => {
                const itemIndex = (index2 + offset + carousel2Items.length) % carousel2Items.length;
                const item = carousel2Items[itemIndex];
                const isActive = offset === 0;

                // Scale sizes to match Screenshot 2
                const width = isActive ? (isMobile ? "200px" : "280px") : (isMobile ? "130px" : "180px");
                const height = isActive ? (isMobile ? "260px" : "380px") : (isMobile ? "180px" : "260px");
                const opacity = isActive ? 1 : 0.45;
                const zIndex = isActive ? 5 : 2;

                return (
                  <div
                    key={item.id}
                    style={{
                      width,
                      height,
                      opacity,
                      zIndex,
                      borderRadius: isActive ? "32px" : "24px", // Screenshot 2 high rounded corners
                      overflow: "hidden",
                      position: "relative",
                      background: "var(--modish-white)",
                      boxShadow: isActive ? "0 25px 60px rgba(0,0,0,0.22)" : "0 10px 25px rgba(0,0,0,0.06)",
                      transform: `scale(${isActive ? 1.05 : 0.90})`,
                      transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                      border: "1.5px solid rgba(0,0,0,0.06)",
                      margin: isMobile ? "0 -16px" : "0 -32px", // overlap cards
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "20px 16px",
                        background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)",
                        textAlign: "center",
                      }}
                    >
                      <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: isActive ? "20px" : "14px", color: "var(--modish-white)", margin: 0, textTransform: "lowercase", letterSpacing: "-0.02em" }}>
                        {item.label}
                      </h4>
                      {isActive && (
                        <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", color: "rgba(255,255,255,0.85)", margin: "4px 0 0 0" }}>
                          {item.title} ({item.tag})
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right navigation arrow */}
            <button
              onClick={next2}
              aria-label="Next slide"
              style={{
                position: "absolute",
                right: isMobile ? "8px" : "20%",
                zIndex: 10,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(0,0,0,0.1)",
                color: "var(--modish-black)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Custom active dots navigation */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "24px",
              }}
            >
              {carousel2Items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex2(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    height: "4px",
                    width: i === index2 ? "24px" : "12px",
                    borderRadius: "2px",
                    background: i === index2 ? "var(--modish-black)" : "rgba(0,0,0,0.2)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           SECTION 3: FULL-BLEED GALLERY TICKER (Style of Screenshot 3)
      ════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "var(--modish-space-10)",
          paddingBottom: "var(--modish-space-12)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="modish-container">
          <div style={{ textAlign: "center", marginBottom: "var(--modish-space-8)" }}>
            <span style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
              COLLECTION THREE
            </span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: "var(--modish-black)", margin: 0 }}>
              Gym Vests & Accessories
            </h2>
          </div>
        </div>

        {/* Full-width horizontal gallery */}
        <div
          style={{
            display: "flex",
            gap: isMobile ? "8px" : "16px",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            padding: "8px var(--modish-space-6)",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="hide-scrollbar"
        >
          {carousel3Items.map((item) => (
            <div
              key={item.id}
              style={{
                width: isMobile ? "240px" : "360px",
                height: isMobile ? "200px" : "320px",
                flexShrink: 0,
                borderRadius: "var(--modish-radius-lg)",
                overflow: "hidden",
                position: "relative",
                boxShadow: "var(--modish-shadow-md)",
                border: "1.5px solid rgba(0,0,0,0.06)",
                cursor: "pointer",
              }}
              onClick={() => {
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.30)", // dim overlay matching Screenshot 3
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 855,
                    fontSize: isMobile ? "18px" : "24px",
                    color: "var(--modish-white)",
                    margin: 0,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
