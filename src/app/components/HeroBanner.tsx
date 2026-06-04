import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import heroImg from "../../imports/Modish catalog/2.webp";
import img3_tshirts from "../../imports/Modish catalog/3.webp";
import img6_oversized from "../../imports/Modish catalog/6.webp";
import img9_polo from "../../imports/Modish catalog/9.webp";
import img12_hoodies from "../../imports/Modish catalog/12.webp";
import img15_gymvest from "../../imports/Modish catalog/15.webp";
import img17_accessories from "../../imports/Modish catalog/17.webp";

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
    slideImage: img3_tshirts,
    slideImageSecondary: img9_polo,
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
    slideImage: img6_oversized,
    slideImageSecondary: img12_hoodies,
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
    slideImage: img12_hoodies,
    slideImageSecondary: img15_gymvest,
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
    slideImage: img9_polo,
    slideImageSecondary: img17_accessories,
  },
  {
    id: "slide-5",
    bg: "var(--modish-grey-50)",
    accentColor: "var(--modish-yellow)",
    textColor: "var(--modish-black)",
    eyebrow: "DESIGNED FOR BRANDS & CREATORS",
    headline: ["Merch That", "Moves the", "Crowd."],
    subtext: "From oversized hoodies to custom polo tees — we craft apparel that carries your identity. For startups, college fests, corporate events, and more.",
    cta1: { label: "Explore Products", href: "#products", target: "_self", style: "yellow" },
    cta2: { label: "Get a Quote", href: "#inquiry", target: "_self", style: "black" },
    dotColor: "var(--modish-black)",
    slideImage: img15_gymvest,
    slideImageSecondary: img3_tshirts,
  },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
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

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const slide = slides[current];

  const ctaStyle = (style: string) => {
    const scale = isMobile ? 0.7 : 1.05; // increase CTA sizes, especially on mobile
    const base = {
      display: "inline-flex" as const,
      alignItems: "center" as const,
      gap: `${8 * scale}px`,
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: `${16 * scale}px`,
      padding: `${Math.round(10 * scale)}px ${Math.round(20 * scale)}px`,
      borderRadius: "var(--modish-radius-md)",
      textDecoration: "none",
      transition: "all 0.3s ease",
      cursor: "pointer" as const,
      minHeight: `${Math.round(48 * scale)}px`,
      whiteSpace: "nowrap" as const,
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
      className="modish-hero-section"
      style={{
        position: "relative",
        marginTop: "var(--modish-header-height)",
        overflow: "clip",
        background: slide.bg,
        transition: "background 0.4s ease",
        display: "flex",
        alignItems: "center",
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
          position: "relative",
          zIndex: 2,
          paddingTop: "var(--modish-space-8)",
          paddingBottom: "var(--modish-space-8)",
        }}
      >
        {/* Two-column layout: text left, image right on desktop */}
        <div className="modish-hero-layout">

          {/* ── LEFT: Text Block ── */}
          <div className="modish-hero-text-col">

            {/* Eyebrow */}
            <span
              key={`eyebrow-${current}`}
              className="modish-hero-eyebrow"
              style={{
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
              className="modish-hero-headline"
              style={{
                color: slide.textColor,
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
                        height: "28%",
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
              className="modish-hero-subtext"
              style={{
                color: slide.textColor,
                opacity: 0,
                animation: "revealUp 0.6s ease 0.2s forwards",
              }}
            >
              {slide.subtext}
            </p>

            {/* CTAs */}
            <div
              key={`ctas-${current}`}
              className="modish-hero-ctas-row"
              style={{
                opacity: 0,
                animation: "revealUp 0.6s ease 0.3s forwards",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "var(--modish-space-4)",
                maxWidth: "720px",
              }}
            >
              <a
                href={slide.cta1.href}
                target={slide.cta1.target as "_blank" | "_self"}
                rel="noopener noreferrer"
                style={{ ...ctaStyle(slide.cta1.style), flex: "1 1 calc(50% - 6px)", justifyContent: "center" }}
              >
                {slide.cta1.label}
                <ArrowRight size={isMobile ? 12 : 16} />
              </a>
              <a
                href={slide.cta2.href}
                target={slide.cta2.target as "_blank" | "_self"}
                rel="noopener noreferrer"
                style={{ ...ctaStyle(slide.cta2.style), flex: "1 1 calc(50% - 6px)", justifyContent: "center" }}
              >
                {/* Inline WhatsApp SVG icon for accurate branding */}
                <svg width={isMobile ? 18 : 20} height={isMobile ? 18 : 20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.373 0 .01 5.364.01 12c0 2.115.56 4.078 1.53 5.8L0 24l6.42-1.67A11.92 11.92 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52z" fill="var(--modish-whatsapp)" />
                  <path d="M17.5 14.2c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1l-.5.5c-.1.1-.4.2-.8.1-.8-.1-2.5-1.5-3.3-3.1-.2-.4.2-.8.4-1l.5-.5c.3-.3.3-.5.1-.8-.1-.2-1-2.4-1.4-3.3-.2-.5-.7-.6-1-.6-.4 0-.8.1-1.2.2-.3.1-.8.3-1.2.6-.4.3-.9.8-1.1 1.3-.2.6-.1 1.2.6 2.6.8 1.6 4 6.6 8.4 8.7 3 .95 3.9.4 4.6.3.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.5-.1-.3-1.2-1-1.5-1.1z" fill="#fff" />
                </svg>
                <span style={{ marginLeft: 6 }}>{slide.cta2.label}</span>
              </a>
            </div>

            {/* Trust badge row */}
            <div
              className="modish-hero-trust"
              style={{
                opacity: 0,
                animation: "revealUp 0.6s ease 0.4s forwards",
              }}
            >
              {["5000+ Orders", "180+ Cities", "Free Mockup"].map((badge) => (
                <span key={badge} className="modish-hero-trust-badge" style={{ color: slide.textColor }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: slide.bg === "var(--modish-yellow)" ? "var(--modish-black)" : "var(--modish-yellow)",
                    flexShrink: 0,
                  }} />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Hero Visual (desktop only) ── */}
          <div
            className="modish-desktop-only modish-hero-img-col"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "12px", width: "100%" }}>
              <img
                key={`img-left-${current}`}
                src={slide.slideImage || heroImg}
                alt={`Modish ${slide.eyebrow.toLowerCase()} — custom printed apparel Mumbai`}
                style={{
                  width: "48%",
                  height: "480px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  borderRadius: "var(--modish-radius-xl)",
                  boxShadow: "var(--modish-shadow-lg)",
                  animation: "fadeInScale 0.6s ease forwards",
                }}
                loading="eager"
              />
              <img
                key={`img-right-${current}`}
                src={(slide as any).slideImageSecondary || heroImg}
                alt={`Modish bulk custom merchandise — ${slide.eyebrow.toLowerCase()}`}
                style={{
                  width: "48%",
                  height: "480px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  borderRadius: "var(--modish-radius-xl)",
                  boxShadow: "var(--modish-shadow-lg)",
                  animation: "fadeInScale 0.6s ease 0.1s forwards",
                }}
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Hero Image — mobile only, shown below CTAs */}
        <div className="modish-hero-mobile-img modish-mobile-only">
          <img
            key={`mobile-img-${current}`}
            src={slide.slideImage || heroImg}
            alt={`Modish custom printed ${slide.eyebrow.toLowerCase()} — premium apparel Mumbai`}
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              objectPosition: "top center",
              borderRadius: "var(--modish-radius-xl)",
              display: "block",
              animation: "fadeInScale 0.6s ease forwards",
            }}
            loading="eager"
          />
        </div>

        {/* Product Quick-Browse Strip */}
        <div
          className="modish-hero-browse"
          style={{
            opacity: 0,
            animation: "revealUp 0.7s ease 0.5s forwards",
            /* Bleed to screen edges on mobile */
            marginLeft: "calc(-1 * var(--modish-container-pad-mobile))",
            marginRight: "calc(-1 * var(--modish-container-pad-mobile))",
          }}
        >
          <span className="modish-hero-browse-label" style={{
            color: slide.textColor === "var(--modish-white)" ? "rgba(255,255,255,0.5)" : "var(--modish-grey-500)",
            paddingLeft: "var(--modish-container-pad-mobile)",
            display: "block",
          }}>
            Explore Our Range
          </span>
          <div
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              overflowY: "visible",
              WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
              touchAction: "pan-x",
              paddingBottom: "10px",
              paddingLeft: "var(--modish-container-pad-mobile)",
              paddingRight: "var(--modish-container-pad-mobile)",
              scrollbarWidth: "none" as const,
              msOverflowStyle: "none" as const,
            } as React.CSSProperties}
            className="hide-scrollbar"
          >
            {previewCategories.map((cat, idx) => (
              <a
                key={idx}
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="modish-hero-chip"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.55)",
                  borderRadius: "var(--modish-radius-md)",
                  padding: "8px 16px 8px 8px",
                  textDecoration: "none",
                  cursor: "pointer",
                  flexShrink: 0,
                  minWidth: "max-content",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255, 255, 255, 0.8)";
                  el.style.border = "1px solid var(--modish-yellow)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255, 255, 255, 0.45)";
                  el.style.border = "1px solid rgba(255, 255, 255, 0.55)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    objectFit: "cover",
                    objectPosition: "top center",
                    background: "var(--modish-grey-100)",
                    flexShrink: 0,
                  }}
                />
                <span style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.02em",
                  color: slide.textColor,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}>
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Controls — desktop only */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="modish-desktop-only"
        style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.08)",
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
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.08)",
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
        className="modish-slide-dots"
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "var(--modish-space-2)",
        }}
      >
        <div className="modish-mobile-range-tabs hide-scrollbar">
          {previewCategories.map((cat) => (
            <button
              key={cat.name}
              type="button"
              className="modish-mobile-range-tab"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              <img
                src={cat.img}
                alt={`${cat.name} custom printed by Modish`}
                width={18}
                height={18}
                loading="lazy"
                style={{ width: "18px", height: "18px", objectFit: "cover", borderRadius: "6px", display: "inline-block" }}
              />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          className="modish-mobile-range-arrow"
          onClick={next}
          aria-label="Next slide"
        >
          <ArrowRight size={16} />
        </button>
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            style={{
              height: "8px",
              width: i === current ? "28px" : "8px",
              borderRadius: "9999px",
              background: i === current ? slide.dotColor : "rgba(0,0,0,0.2)",
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
