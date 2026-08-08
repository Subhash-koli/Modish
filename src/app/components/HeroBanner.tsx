import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import all product images
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

/* ── Data ── */

const section1Cards = [
  { img: img3, label: "T-Shirts" },
  { img: img6, label: "Oversized" },
  { img: img9, label: "Polos" },
  { img: img12, label: "Hoodies" },
  { img: img15, label: "Gym Vests" },
  { img: img17, label: "Accessories" },
  { img: img7, label: "Oversized Fits" },
  { img: img4, label: "Premium Tees" },
  { img: img10, label: "Polo Range" },
];

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

/* ── Shared carousel hook ── */
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
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, paused, next, intervalMs]);

  return { index, go, next, prev, paused, setPaused };
}

/* ── Section Title ── */
function SectionTitle({ title, isMobile, highlight }: { title: string; isMobile: boolean; highlight?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: isMobile ? "8px" : "14px",
        padding: isMobile ? "0 12px 4px" : "0 40px 10px",
      }}
    >
      {highlight ? (
        <span
          style={{
            display: "inline-block",
            background: "var(--modish-yellow)",
            padding: isMobile ? "3px 10px" : "5px 16px",
            borderRadius: "var(--modish-radius-full)",
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: isMobile ? "13px" : "18px",
            color: "var(--modish-black)",
            letterSpacing: "0.01em",
            lineHeight: 1.3,
            boxShadow: "0 2px 8px rgba(255,204,0,0.3)",
          }}
        >
          {title}
        </span>
      ) : (
        <>
          <span
            style={{
              width: isMobile ? "3px" : "4px",
              height: isMobile ? "16px" : "22px",
              background: "var(--modish-black)",
              borderRadius: "2px",
              flexShrink: 0,
            }}
          />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: isMobile ? "13px" : "17px",
              color: "var(--modish-grey-700)",
              margin: 0,
              letterSpacing: "0.01em",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>
        </>
      )}
    </div>
  );
}

/* ── Arrow Button ── */
function ArrowBtn({ dir, onClick, variant = "default" }: { dir: "left" | "right"; onClick: () => void; variant?: "default" | "glass" }) {
  const isGlass = variant === "glass";
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Previous" : "Next"}
      style={{
        position: "absolute",
        [dir === "left" ? "left" : "right"]: "8px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        background: isGlass ? "rgba(255,255,255,0.85)" : "var(--modish-yellow)",
        backdropFilter: isGlass ? "blur(8px)" : "none",
        border: isGlass ? "1px solid rgba(0,0,0,0.08)" : "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--modish-black)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
        zIndex: 10,
        transition: "transform 0.15s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-50%) scale(1.1)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(-50%) scale(1)")}
    >
      {dir === "left" ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
    </button>
  );
}

/* ──────────────────────────────────────────────────────────────
   Section 1 — Trending Categories (Portrait Cards)
   Full-width, edge-to-edge. Center card highlighted.
   Desktop: 5-7 cards | Mobile: 3 cards
   ────────────────────────────────────────────────────────────── */
function PortraitCarousel({ isMobile }: { isMobile: boolean }) {
  const cards = section1Cards;
  const { index, next, prev } = useCarousel(cards.length, 3500);
  const [touchX, setTouchX] = useState<number | null>(null);

  const visibleCount = isMobile ? 3 : 7;
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
          gap: isMobile ? "6px" : "12px",
          transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
          padding: isMobile ? "0 4px" : "0",
        }}
      >
        {visibleIndices.map((cardIdx, pos) => {
          const isCenter = pos === centerOffset;
          // On desktop, calculate card width to fill viewport: ~(100vw / visibleCount) minus gaps
          // On mobile: 3 cards filling width
          const w = isMobile
            ? (isCenter ? "calc(48vw)" : "calc(34vw)")
            : (isCenter ? "calc(17vw)" : "calc(14vw)");
          const h = isMobile
            ? (isCenter ? "280px" : "240px")
            : (isCenter ? "420px" : "360px");

          return (
            <div
              key={`s1-${cardIdx}-${pos}`}
              style={{
                width: w,
                height: h,
                borderRadius: isMobile ? "12px" : "18px",
                overflow: "hidden",
                flexShrink: 0,
                transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                boxShadow: isCenter
                  ? "0 8px 30px rgba(0,0,0,0.18)"
                  : "0 2px 12px rgba(0,0,0,0.06)",
                position: "relative",
                border: isCenter
                  ? "2.5px solid var(--modish-yellow)"
                  : "1px solid rgba(0,0,0,0.06)",
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
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: isMobile ? "18px 6px 6px" : "30px 12px 12px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
                  color: "#fff",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: isMobile ? "10px" : "14px",
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

      {!isMobile && (
        <>
          <ArrowBtn dir="left" onClick={prev} />
          <ArrowBtn dir="right" onClick={next} />
        </>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Section 2 — Latest Prints (Elevated Center Carousel)
   Desktop: 5 cards with scale | Mobile: 3 cards
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
          gap: isMobile ? "8px" : "14px",
          padding: isMobile ? "4px 0" : "8px 0",
          transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {visibleIndices.map((cardIdx, pos) => {
          const isCenter = pos === centerOffset;
          const distFromCenter = Math.abs(pos - centerOffset);
          const scale = isCenter ? 1 : 1 - distFromCenter * 0.08;

          const w = isMobile
            ? (isCenter ? "calc(38vw)" : "calc(28vw)")
            : (isCenter ? "calc(22vw)" : "calc(17vw)");
          const h = isMobile
            ? (isCenter ? "150px" : "125px")
            : (isCenter ? "340px" : "280px");

          return (
            <div
              key={`s2-${cardIdx}-${pos}`}
              style={{
                width: w,
                height: h,
                borderRadius: isMobile ? "14px" : "20px",
                overflow: "hidden",
                flexShrink: 0,
                transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                transform: `scale(${scale})`,
                boxShadow: isCenter
                  ? "0 12px 40px rgba(0,0,0,0.18)"
                  : "0 2px 10px rgba(0,0,0,0.06)",
                position: "relative",
                zIndex: isCenter ? 3 : 1,
                border: isCenter
                  ? "2.5px solid var(--modish-yellow)"
                  : "1px solid rgba(0,0,0,0.06)",
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
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: isMobile ? "16px 4px 6px" : "28px 10px 12px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
                  color: "#fff",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: isMobile ? "10px" : "15px",
                  textAlign: "center",
                  letterSpacing: "0.03em",
                }}
              >
                {cards[cardIdx].label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          marginTop: isMobile ? "5px" : "12px",
        }}
      >
        {cards.map((_, i) => (
          <span
            key={i}
            style={{
              width: i === index ? "18px" : "6px",
              height: "5px",
              borderRadius: "9999px",
              background: i === index ? "var(--modish-black)" : "rgba(0,0,0,0.12)",
              transition: "all 0.3s ease",
              display: "block",
            }}
          />
        ))}
      </div>

      {!isMobile && (
        <>
          <ArrowBtn dir="left" onClick={prev} variant="glass" />
          <ArrowBtn dir="right" onClick={next} variant="glass" />
        </>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Section 3 — Explore Collection (Horizontal Strip)
   Full edge-to-edge scroll. Desktop: 4+ visible | Mobile: 2-3
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
    el.scrollBy({ left: dir * (isMobile ? 220 : 450), behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        ref={scrollRef}
        className="hide-scrollbar"
        style={{
          display: "flex",
          gap: isMobile ? "8px" : "14px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          padding: isMobile ? "0 12px" : "0 32px",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={`s3-${i}`}
            style={{
              width: isMobile ? "44vw" : "24vw",
              minWidth: isMobile ? "44vw" : "24vw",
              height: isMobile ? "105px" : "210px",
              borderRadius: isMobile ? "10px" : "14px",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
              scrollSnapAlign: "start",
              boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
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
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: isMobile ? "14px 6px 6px" : "24px 12px 10px",
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

      {!isMobile && canScrollLeft && (
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "34px",
            height: "34px",
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
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "34px",
            height: "34px",
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

/* ── Divider ── */
function Divider({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      style={{
        width: isMobile ? "85%" : "92%",
        height: "1px",
        background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.08) 80%, transparent 100%)",
        margin: isMobile ? "6px auto" : "6px auto",
      }}
    />
  );
}

/* ──────────────────────────────────────────────────────────────
   Main HeroBanner
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
        padding: isMobile ? "10px 0 6px" : "28px 0 20px",
        gap: 0,
      }}
    >
      {/* Decorative Blur Blobs */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "3%",
          width: isMobile ? "100px" : "250px",
          height: isMobile ? "100px" : "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,204,0,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          right: "3%",
          width: isMobile ? "80px" : "200px",
          height: isMobile ? "80px" : "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,204,0,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Section 1: Trending Categories ── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <SectionTitle title="Trending Categories" isMobile={isMobile} highlight />
        <PortraitCarousel isMobile={isMobile} />
      </div>

      {!isMobile && <Divider isMobile={isMobile} />}

      {/* ── Section 2: Latest Prints (desktop only) ── */}
      {!isMobile && (
        <>
          <div style={{ position: "relative", zIndex: 1, marginTop: "8px" }}>
            <SectionTitle title="Latest Prints" isMobile={isMobile} />
            <ElevatedCarousel isMobile={isMobile} />
          </div>

          <Divider isMobile={isMobile} />

          {/* ── Section 3: Explore Collection (desktop only) ── */}
          <div style={{ position: "relative", zIndex: 1, marginTop: "8px" }}>
            <SectionTitle title="Explore Collection" isMobile={isMobile} />
            <StripCarousel isMobile={isMobile} />
          </div>
        </>
      )}
    </section>
  );
}
