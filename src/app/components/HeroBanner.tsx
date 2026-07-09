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
    eyebrow: "CUSTOM APPAREL",
    headline: ["Premium Custom", "Printed Apparel."],
    subtext: "High-quality custom printed clothing for teams, brands, and events. Delivered pan India.",
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
    headline: ["High Volume.", "Delivered Fast."],
    subtext: "Scale your custom merch with automated screen printing, DTF, and premium embroidery.",
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
    headline: ["Premium Custom", "Corporate Diaries."],
    subtext: "Bespoke gift sets and notebooks designed to leave a lasting impression.",
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
    headline: ["Custom Event", "Merchandise."],
    subtext: "High-impact promotional apparel and accessories for launches, fests, and meets.",
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
    eyebrow: "CREATORS & BRANDS",
    headline: ["Apparel Built", "For Your Brand."],
    subtext: "Your custom designs on retail-grade fabric. From streetwear hoodies to premium polo tees.",
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
          paddingTop: "var(--modish-space-6)",
          paddingBottom: "var(--modish-space-6)",
        }}
      >
        <div className="modish-hero-layout" style={{ gridTemplateColumns: "1fr" }}>
          {/* ── RIGHT: Hero Visual (now centered and full width) ── */}
          <div
            className="modish-desktop-only"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", gap: "24px", width: "100%", justifyContent: "center" }}>
              <img
                key={`img-left-${current}`}
                src={slide.slideImage || heroImg}
                alt={`Modish premium apparel design`}
                style={{
                  width: "calc(50% - 12px)",
                  height: "560px",
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
                alt={`Modish premium apparel print`}
                style={{
                  width: "calc(50% - 12px)",
                  height: "560px",
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

        {/* Hero Image — mobile only */}
        <div className="modish-hero-mobile-img modish-mobile-only" style={{ marginTop: 0 }}>
          <img
            key={`mobile-img-${current}`}
            src={slide.slideImage || heroImg}
            alt={`Modish custom printed product`}
            style={{
              width: "100%",
              height: "420px",
              objectFit: "cover",
              objectPosition: "top center",
              borderRadius: "var(--modish-radius-xl)",
              display: "block",
              animation: "fadeInScale 0.6s ease forwards",
            }}
            loading="eager"
          />
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
          gap: "8px",
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
              height: "8px",
              width: i === current ? "24px" : "8px",
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
