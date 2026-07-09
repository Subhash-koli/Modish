import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import all product images for rich variety across 3 carousels
import img3 from "../../imports/Modish catalog/3.webp";
import img4 from "../../imports/Modish catalog/4.webp";
import img5 from "../../imports/Modish catalog/5.webp";
import img6 from "../../imports/Modish catalog/6.webp";
import img7 from "../../imports/Modish catalog/7.webp";
import img8 from "../../imports/Modish catalog/8.webp";
import img9 from "../../imports/Modish catalog/9.webp";
import img10 from "../../imports/Modish catalog/10.webp";
import img11 from "../../imports/Modish catalog/11.webp";
import img12 from "../../imports/Modish catalog/12.webp";
import img13 from "../../imports/Modish catalog/13.webp";
import img14 from "../../imports/Modish catalog/14.webp";
import img15 from "../../imports/Modish catalog/15.webp";
import img16 from "../../imports/Modish catalog/16.webp";
import img17 from "../../imports/Modish catalog/17.webp";
import img18 from "../../imports/Modish catalog/18.webp";

/* ──────────────────────────────────────────────────────────────
   Data for each carousel section
   ────────────────────────────────────────────────────────────── */

// Section 1: Tall portrait cards (like Screenshot 1 — national parks style)
const section1Cards = [
  { img: img3, label: "T-Shirts" },
  { img: img6, label: "Oversized" },
  { img: img9, label: "Polos" },
  { img: img12, label: "Hoodies" },
  { img: img15, label: "Gym Vests" },
  { img: img17, label: "Accessories" },
  { img: img7, label: "Oversized Spec" },
  { img: img4, label: "T-Shirt Spec" },
  { img: img10, label: "Polo Spec" },
];

// Section 2: Centered elevated cards (like Screenshot 2 — bloom/vivid style)
const section2Cards = [
  { img: img12, label: "Hoodies" },
  { img: img3, label: "T-Shirts" },
  { img: img6, label: "Oversized" },
  { img: img15, label: "Gym Vests" },
  { img: img9, label: "Polos" },
  { img: img17, label: "Tote Bags" },
  { img: img14, label: "Hoodie Colors" },
  { img: img8, label: "Oversized Colors" },
];

// Section 3: Horizontal strip of equal-width cards (like Screenshot 3)
const section3Cards = [
  { img: img5, label: "T-Shirt Colors" },
  { img: img11, label: "Polo Colors" },
  { img: img13, label: "Hoodie Spec" },
  { img: img16, label: "Gym Vest Spec" },
  { img: img18, label: "Tote Bag Spec" },
  { img: img8, label: "Oversized Colors" },
  { img: img14, label: "Hoodie Colors" },
  { img: img4, label: "T-Shirt Spec" },
  { img: img10, label: "Polo Spec" },
];

/* ──────────────────────────────────────────────────────────────
   useCarousel — shared hook for auto-rotating carousel state
   ────────────────────────────────────────────────────────────── */
function useCarousel(length: number, intervalMs = 4000) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (i: number) => setIndex(((i % length) + length) % length),
    [length]
  );
  const next = useCallback(() => go(index + 1), [index, go]);
  const prev = useCallback(() => go(index - 1), [index, go]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, intervalMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, paused, next, intervalMs]);

  return { index, go, next, prev, paused, setPaused };
}

/* ──────────────────────────────────────────────────────────────
   Section 1 — Tall Portrait Card Carousel
   Center card is slightly larger, all cards in full color
   Desktop: 5 cards visible | Mobile: 3 cards visible
   ────────────────────────────────────────────────────────────── */
function PortraitCarousel({ isMobile }: { isMobile: boolean }) {
  const cards = section1Cards;
  const { index, next, prev } = useCarousel(cards.length, 3500);
  const [touchX, setTouchX] = useState<number | null>(null);

  const visibleCount = isMobile ? 3 : 5;
  const centerOffset = Math.floor(visibleCount / 2);

  // Build the visible card indices (wrapping around)
  const visibleIndices: number[] = [];
  for (let i = -centerOffset; i <= centerOffset; i++) {
    visibleIndices.push(((index + i) % cards.length + cards.length) % cards.length);
  }

  const cardHeight = isMobile ? "140px" : "340px";
  const centerCardHeight = isMobile ? "155px" : "370px";
  const cardWidth = isMobile ? "90px" : "180px";
  const centerCardWidth = isMobile ? "105px" : "210px";

  return (
    <div
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const d = touchX - e.changedTouches[0].clientX;
        if (Math.abs(d) > 40) d > 0 ? next() : prev();
        setTouchX(null);
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? "6px" : "16px",
          transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
          padding: isMobile ? "4px 0" : "10px 0",
        }}
      >
        {visibleIndices.map((cardIdx, pos) => {
          const isCenter = pos === centerOffset;
          return (
            <div
              key={`s1-${cardIdx}-${pos}`}
              style={{
                width: isCenter ? centerCardWidth : cardWidth,
                height: isCenter ? centerCardHeight : cardHeight,
                borderRadius: isMobile ? "12px" : "16px",
                overflow: "hidden",
                flexShrink: 0,
                transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                transform: isCenter ? "scale(1)" : "scale(0.95)",
                boxShadow: isCenter
                  ? "0 8px 32px rgba(0,0,0,0.18)"
                  : "0 2px 12px rgba(0,0,0,0.08)",
                position: "relative",
                border: isCenter ? "2px solid var(--modish-yellow)" : "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={cards[cardIdx].img}
                alt={cards[cardIdx].label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
                loading="eager"
              />
              {/* Label overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: isMobile ? "6px 4px" : "12px 10px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
                  color: "#fff",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: isMobile ? "10px" : "15px",
                  textAlign: "center",
                  letterSpacing: "0.02em",
                }}
              >
                {cards[cardIdx].label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Nav arrows — desktop only */}
      {!isMobile && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "var(--modish-yellow)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--modish-black)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 5,
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "var(--modish-yellow)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--modish-black)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 5,
            }}
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Section 2 — Centered Elevated Card Carousel
   Center card is larger and elevated, side cards smaller
   Desktop: 3-5 cards | Mobile: 3 cards
   ────────────────────────────────────────────────────────────── */
function ElevatedCarousel({ isMobile }: { isMobile: boolean }) {
  const cards = section2Cards;
  const { index, next, prev } = useCarousel(cards.length, 4500);
  const [touchX, setTouchX] = useState<number | null>(null);

  const visibleCount = isMobile ? 3 : 5;
  const centerOffset = Math.floor(visibleCount / 2);

  const visibleIndices: number[] = [];
  for (let i = -centerOffset; i <= centerOffset; i++) {
    visibleIndices.push(((index + i) % cards.length + cards.length) % cards.length);
  }

  return (
    <div
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const d = touchX - e.changedTouches[0].clientX;
        if (Math.abs(d) > 40) d > 0 ? next() : prev();
        setTouchX(null);
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? "8px" : "20px",
          padding: isMobile ? "6px 0" : "14px 0",
          transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {visibleIndices.map((cardIdx, pos) => {
          const isCenter = pos === centerOffset;
          const distFromCenter = Math.abs(pos - centerOffset);

          const baseW = isMobile ? 90 : 180;
          const baseH = isMobile ? 110 : 240;
          const scale = isCenter ? 1 : 1 - distFromCenter * 0.12;

          return (
            <div
              key={`s2-${cardIdx}-${pos}`}
              style={{
                width: `${baseW * (isCenter ? 1.2 : 1)}px`,
                height: `${baseH * (isCenter ? 1.25 : 1)}px`,
                borderRadius: isMobile ? "14px" : "20px",
                overflow: "hidden",
                flexShrink: 0,
                transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                transform: `scale(${scale})`,
                boxShadow: isCenter
                  ? "0 12px 40px rgba(0,0,0,0.2)"
                  : "0 2px 10px rgba(0,0,0,0.08)",
                position: "relative",
                zIndex: isCenter ? 3 : 1,
                border: isCenter ? "2.5px solid var(--modish-yellow)" : "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={cards[cardIdx].img}
                alt={cards[cardIdx].label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
                loading="eager"
              />
              {/* Label overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: isMobile ? "8px 4px" : "14px 10px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
                  color: "#fff",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: isMobile ? "11px" : "16px",
                  textAlign: "center",
                  letterSpacing: "0.03em",
                  textTransform: "lowercase" as const,
                }}
              >
                {cards[cardIdx].label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          marginTop: isMobile ? "4px" : "10px",
        }}
      >
        {cards.map((_, i) => (
          <span
            key={i}
            style={{
              width: i === index ? "18px" : "6px",
              height: "6px",
              borderRadius: "9999px",
              background: i === index ? "var(--modish-black)" : "rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              display: "block",
            }}
          />
        ))}
      </div>

      {/* Nav arrows — desktop only */}
      {!isMobile && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            style={{
              position: "absolute",
              left: "24px",
              top: "48%",
              transform: "translateY(-50%)",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(0,0,0,0.08)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--modish-black)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              zIndex: 5,
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            style={{
              position: "absolute",
              right: "24px",
              top: "48%",
              transform: "translateY(-50%)",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(0,0,0,0.08)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--modish-black)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              zIndex: 5,
            }}
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Section 3 — Horizontal Scrolling Strip
   Equal-sized cards in a continuous scroll row
   Desktop: 4+ visible | Mobile: 2-3 visible
   ────────────────────────────────────────────────────────────── */
function StripCarousel({ isMobile }: { isMobile: boolean }) {
  const cards = section3Cards;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = isMobile ? 200 : 400;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const cardW = isMobile ? "140px" : "260px";
  const cardH = isMobile ? "95px" : "180px";

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: isMobile ? "8px" : "16px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          padding: isMobile ? "2px 4px" : "4px 8px",
          WebkitOverflowScrolling: "touch",
        }}
        className="hide-scrollbar"
      >
        {cards.map((card, i) => (
          <div
            key={`s3-${i}`}
            style={{
              width: cardW,
              minWidth: cardW,
              height: cardH,
              borderRadius: isMobile ? "10px" : "14px",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
              scrollSnapAlign: "start",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={card.img}
              alt={card.label}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
              loading="lazy"
            />
            {/* Label overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: isMobile ? "6px 6px" : "10px 12px",
                background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
                color: "#fff",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: isMobile ? "10px" : "14px",
                textAlign: "left",
              }}
            >
              {card.label}
            </div>
          </div>
        ))}
      </div>

      {/* Nav arrows — desktop only */}
      {!isMobile && canScrollLeft && (
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          style={{
            position: "absolute",
            left: "4px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(0,0,0,0.08)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--modish-black)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            zIndex: 5,
          }}
        >
          <ChevronLeft size={16} />
        </button>
      )}
      {!isMobile && canScrollRight && (
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          style={{
            position: "absolute",
            right: "4px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(0,0,0,0.08)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--modish-black)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            zIndex: 5,
          }}
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Separator Line Component
   ────────────────────────────────────────────────────────────── */
function Divider({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      style={{
        width: isMobile ? "60%" : "80%",
        maxWidth: "600px",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.10), transparent)",
        margin: isMobile ? "4px auto" : "10px auto",
      }}
    />
  );
}

/* ──────────────────────────────────────────────────────────────
   Main HeroBanner — 3 sections stacked
   On mobile: all 3 fit within viewport without scrolling
   ────────────────────────────────────────────────────────────── */
export function HeroBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="home"
      role="region"
      aria-label="Hero Banner"
      className="modish-hero-section"
      style={{
        position: "relative",
        marginTop: "var(--modish-header-height)",
        overflow: "hidden",
        background: "var(--modish-white)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "8px 0" : "28px 0",
        gap: isMobile ? "4px" : "8px",
        minHeight: isMobile ? "auto" : "auto",
      }}
    >
      {/* Decorative Blur Blobs */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: isMobile ? "120px" : "280px",
          height: isMobile ? "120px" : "280px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 204, 0, 0.12) 0%, rgba(255, 204, 0, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: isMobile ? "100px" : "250px",
          height: isMobile ? "100px" : "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 204, 0, 0.10) 0%, rgba(255, 204, 0, 0) 75%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Section 1: Portrait Card Carousel */}
      <div style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <PortraitCarousel isMobile={isMobile} />
      </div>

      <Divider isMobile={isMobile} />

      {/* Section 2: Elevated Center Carousel */}
      <div style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <ElevatedCarousel isMobile={isMobile} />
      </div>

      <Divider isMobile={isMobile} />

      {/* Section 3: Horizontal Scrolling Strip */}
      <div style={{ width: "100%", position: "relative", zIndex: 1, padding: isMobile ? "0 8px" : "0 24px" }}>
        <StripCarousel isMobile={isMobile} />
      </div>
    </section>
  );
}
