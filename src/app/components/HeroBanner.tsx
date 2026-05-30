import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "../../imports/Modish catalog/2.png";
import img3_tshirts from "../../imports/Modish catalog/3.png";
import img6_oversized from "../../imports/Modish catalog/6.png";
import img9_polo from "../../imports/Modish catalog/9.png";
import img12_hoodies from "../../imports/Modish catalog/12.png";
import img15_gymvest from "../../imports/Modish catalog/15.png";
import img17_accessories from "../../imports/Modish catalog/17.png";

const previewCategories = [
  { name: "T-Shirts", img: img3_tshirts },
  { name: "Oversized", img: img6_oversized },
  { name: "Polos", img: img9_polo },
  { name: "Hoodies", img: img12_hoodies },
  { name: "Gym Vests", img: img15_gymvest },
  { name: "Accessories", img: img17_accessories },
];

const WA_BASE = "https://wa.me/919136867622";

const slides = [
  {
    id: "slide-1",
    bg: "var(--modish-grey-50)",
    accentColor: "#A67B00",
    textColor: "var(--modish-black)",
    eyebrow: "CUSTOM T-SHIRTS",
    headline: ["Your Brand,", "Your Style,", "Your Story."],
    subtext: "Premium custom printed apparel — from 1 piece to 10,000. Bulk orders with bulk discounts.",
    cta1: { label: "Browse Catalog", href: "https://tinyurl.com/Modish-now", target: "_blank", style: "yellow" },
    cta2: { label: "WhatsApp Now", href: `${WA_BASE}?text=Hi%20Modish!%20I'm%20interested%20in%20placing%20an%20order.`, target: "_blank", style: "wa" },
    dotColor: "var(--modish-black)",
  },
  {
    id: "slide-2",
    bg: "var(--modish-yellow)",
    accentColor: "var(--modish-black)",
    textColor: "var(--modish-black)",
    eyebrow: "BULK ORDERS",
    headline: ["Scale Up.", "Stand Out.", "Ship Fast."],
    subtext: "Pan India delivery. DTF, Screen, Embroidery & Sublimation printing for every requirement.",
    cta1: { label: "Get a Quote", href: "#inquiry", target: "_self", style: "black" },
    cta2: { label: "WhatsApp Now", href: `${WA_BASE}?text=Hi%20Modish!%20I%20need%20a%20quote%20for%20a%20bulk%20order.`, target: "_blank", style: "wa" },
    dotColor: "var(--modish-black)",
  },
  {
    id: "slide-3",
    bg: "var(--modish-grey-100)",
    accentColor: "#A67B00",
    textColor: "var(--modish-black)",
    eyebrow: "CORPORATE DIARIES",
    headline: ["Gifts That", "Make a", "Lasting Impression."],
    subtext: "Premium custom diaries and corporate gift sets crafted for brands that want to leave a lasting impression.",
    cta1: { label: "View Diary Catalog", href: "https://tinyurl.com/Diary-modish", target: "_blank", style: "yellow" },
    cta2: { label: "WhatsApp Now", href: `${WA_BASE}?text=Hi%20Modish!%20I%20just%20viewed%20your%20catalog.%20Can%20we%20discuss%20an%20order%3F`, target: "_blank", style: "wa" },
    dotColor: "var(--modish-black)",
  },
  {
    id: "slide-4",
    bg: "var(--modish-white)",
    accentColor: "#A67B00",
    textColor: "var(--modish-black)",
    eyebrow: "EVENT MERCHANDISE",
    headline: ["Merch That", "Moves the", "Crowd."],
    subtext: "Custom merchandise for college fests, corporate events, startups, and every occasion in between.",
    cta1: { label: "Explore Products", href: "#products", target: "_self", style: "black" },
    cta2: { label: "WhatsApp Now", href: `${WA_BASE}?text=Hi%20Modish!%20I%20m%20interested%20in%20event%20merchandise.%20Can%20you%20help%3F`, target: "_blank", style: "wa" },
    dotColor: "var(--modish-black)",
  },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setTimeout(next, 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, isHovered, next]);

  const slide = slides[current];

  const ctaStyle = (style: string) => {
    const base = {
      display: "inline-flex" as const,
      alignItems: "center" as const,
      gap: "var(--modish-space-2)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: "15px",
      padding: "14px 28px",
      borderRadius: "var(--modish-radius-md)",
      textDecoration: "none",
      transition: "all 0.3s ease",
      cursor: "pointer" as const,
      minHeight: "48px",
    };
    if (style === "yellow") return { ...base, background: "var(--modish-yellow)", color: "var(--modish-black)" };
    if (style === "black") return { ...base, background: "var(--modish-black)", color: "var(--modish-yellow)" };
    if (style === "wa") return { ...base, background: "var(--modish-whatsapp)", color: "var(--modish-white)" };
    return base;
  };

  return (
    <section
      id="home"
      role="region"
      aria-label="Hero Banner"
      aria-live="polite"
      style={{
        position: "relative",
        minHeight: "calc(100vh - var(--modish-header-height))",
        marginTop: "var(--modish-header-height)",
        overflow: "hidden",
        background: slide.bg,
        transition: "background 0.4s ease",
        display: "flex",
        alignItems: "center",
        paddingTop: "var(--modish-space-8)",
        paddingBottom: "var(--modish-space-12)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={e => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={e => {
        if (touchStart === null) return;
        const delta = touchStart - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 50) { delta > 0 ? next() : prev(); }
        setTouchStart(null);
      }}
    >
      {/* Decorative Blur Blobs */}
      <div
        className="modish-hero-blob-1"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 204, 0, 0.15) 0%, rgba(255, 204, 0, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        className="modish-hero-blob-2"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 204, 0, 0.12) 0%, rgba(255, 204, 0, 0) 75%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="modish-container"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "var(--modish-space-6)",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="modish-hero-grid">
          {/* Text Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--modish-space-4)" }}>
            {/* Eyebrow */}
            <span
              key={`eyebrow-${current}`}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: slide.accentColor,
                opacity: 0,
                animation: "revealUp 0.6s ease forwards",
              }}
            >
              {slide.eyebrow}
            </span>

            {/* Headline */}
            <h1
              key={`headline-${current}`}
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: slide.textColor,
                fontSize: "clamp(32px, 8vw, 80px)",
                margin: 0,
                opacity: 0,
                animation: "revealUp 0.6s ease 0.1s forwards",
              }}
            >
              {slide.headline.map((line, i) => (
                <span key={i} style={{ display: "block" }}>
                  {i === 0 ? (
                    <span style={{ 
                      position: "relative", 
                      display: "inline-block",
                      zIndex: 1, 
                    }}>
                      <span style={{
                        position: "absolute",
                        left: "-4px",
                        right: "-4px",
                        bottom: "8%",
                        height: "26%",
                        background: slide.bg === "var(--modish-yellow)" ? "var(--modish-white)" : "var(--modish-yellow)",
                        zIndex: -1,
                        borderRadius: "2px",
                        opacity: 0.95,
                      }} />
                      <span style={{ color: "var(--modish-black)", position: "relative" }}>
                        {line}
                      </span>
                    </span>
                  ) : line}
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p
              key={`sub-${current}`}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "17px",
                lineHeight: 1.6,
                color: slide.textColor,
                opacity: slide.bg === "var(--modish-yellow)" ? 0.75 : 0.75,
                maxWidth: "480px",
                margin: 0,
                animation: "revealUp 0.6s ease 0.2s forwards",
              }}
            >
              {slide.subtext}
            </p>

            {/* CTAs */}
            <div
              key={`ctas-${current}`}
              className="modish-hero-ctas"
              style={{
                opacity: 0,
                animation: "revealUp 0.6s ease 0.3s forwards",
              }}
            >
              {/* using <a> instead of <Button>: hero CTAs require brand-specific color variants not available in kit */}
              <a
                href={slide.cta1.href}
                target={slide.cta1.target as "_blank" | "_self"}
                rel="noopener noreferrer"
                style={ctaStyle(slide.cta1.style)}
              >
                {slide.cta1.label}
              </a>
              <a
                href={slide.cta2.href}
                target={slide.cta2.target as "_blank" | "_self"}
                rel="noopener noreferrer"
                style={ctaStyle(slide.cta2.style)}
              >
                <MessageCircle size={16} />
                {slide.cta2.label}
              </a>
            </div>
          </div>

          {/* Hero Visual — real catalog hero photo (desktop only) */}
          <div
            className="modish-desktop-only"
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "420px",
            }}
          >
            <img
              src={heroImg}
              alt="Modish custom printed apparel — T-shirts, Polos, Oversized, Hoodies"
              style={{
                height: "100%",
                width: "auto",
                maxWidth: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                borderRadius: "var(--modish-radius-xl)",
                boxShadow: "var(--modish-shadow-lg)",
              }}
              loading="eager"
            />
          </div>
        </div>

        {/* Product Quick-Browse Strip */}
        <div
          style={{
            marginTop: "var(--modish-space-2)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "var(--modish-space-2)",
            animation: "revealUp 0.7s ease 0.4s forwards",
            opacity: 0,
          }}
        >
          <span style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: slide.textColor === "var(--modish-white)" ? "rgba(255,255,255,0.5)" : "var(--modish-grey-500)",
            marginBottom: "4px"
          }}>
            Explore Our Range
          </span>
          <div
            style={{
              display: "flex",
              gap: "var(--modish-space-3)",
              overflowX: "auto",
              paddingBottom: "8px",
              scrollbarWidth: "none",
            }}
            className="hide-scrollbar"
          >
            {previewCategories.map((cat, idx) => (
              <a
                key={idx}
                href={`#products`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.55)",
                  borderRadius: "var(--modish-radius-md)",
                  padding: "6px 14px 6px 6px",
                  textDecoration: "none",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255, 255, 255, 0.8)";
                  el.style.border = "1px solid var(--modish-yellow)";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.06)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255, 255, 255, 0.45)";
                  el.style.border = "1px solid rgba(255, 255, 255, 0.55)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.02)";
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    objectFit: "cover",
                    objectPosition: "top center",
                    background: "var(--modish-grey-100)",
                  }}
                />
                <span style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.02em",
                  color: slide.textColor,
                  textTransform: "uppercase",
                }}>
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      {/* using <button> instead of <Button>: slide nav arrows are minimal icon-only overlays on variable-bg hero; kit Button is pill-shaped and not suited */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="modish-desktop-only"
        style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: slide.textColor === "var(--modish-white)" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: slide.textColor,
          transition: "background 0.2s ease",
        }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="modish-desktop-only"
        style={{
          position: "absolute",
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: slide.textColor === "var(--modish-white)" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: slide.textColor,
          transition: "background 0.2s ease",
        }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot Navigation */}
      <div
        role="tablist"
        aria-label="Slide navigation"
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "var(--modish-space-2)",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            style={{
              height: "10px",
              width: i === current ? "28px" : "10px",
              borderRadius: "9999px",
              background: i === current ? slide.dotColor : (slide.textColor === "var(--modish-white)" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.25)"),
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
