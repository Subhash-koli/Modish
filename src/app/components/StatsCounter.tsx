import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Orders Completed", sublabel: "and growing every month" },
  { value: 3200, suffix: "+", label: "Happy Customers", sublabel: "from brands & colleges" },
  { value: 180, suffix: "+", label: "Cities Delivered", sublabel: "pan India shipping" },
  { value: 50000, suffix: "+", label: "Products Printed", sublabel: "DTF, Screen, Embroidery" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, sublabel, active, index }: {
  value: number; suffix: string; label: string; sublabel: string; active: boolean; index: number;
}) {
  const count = useCountUp(value, 2, active);
  const formatted = count >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K` : count.toString();

  return (
    <div className="modish-stat-item"
      style={{
        textAlign: "center",
        padding: "var(--modish-space-4)",
        opacity: 0,
        animation: active ? `revealUp 0.6s ease ${index * 120}ms forwards` : "none",
      }}
    >
      {/* Giant number */}
      <div style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 800,
        fontSize: "clamp(22px, 8vw, 36px)",
        color: "var(--modish-black)",
        lineHeight: 1,
        letterSpacing: "-0.02em",
        marginBottom: "var(--modish-space-2)",
      }}>
        {formatted}{suffix}
      </div>

      {/* Label */}
      <div style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: "clamp(12px, 3.2vw, 14px)",
        color: "var(--modish-black)",
        marginBottom: "4px",
      }}>
        {label}
      </div>

      {/* Sub-label */}
      <div style={{
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: "11px",
        color: "var(--modish-grey-500)",
        letterSpacing: "0.02em",
      }}>
        {sublabel}
      </div>
    </div>
  );
}

export function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [triggered]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      style={{
        background: "var(--modish-yellow)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot pattern texture */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        pointerEvents: "none",
      }} />

      <div className="modish-container" style={{ position: "relative", paddingTop: "var(--modish-space-10)", paddingBottom: "var(--modish-space-10)" }}>
        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-8)" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.55)",
            margin: 0,
          }}>
            BY THE NUMBERS
          </p>
        </div>

        {/* Stats grid */}
        <div className="modish-stats-grid">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} active={triggered} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          textAlign: "center",
          paddingBottom: "0",
          paddingTop: "var(--modish-space-12)",
        }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: "13px",
            color: "rgba(0,0,0,0.6)",
            margin: "0 0 var(--modish-space-4) 0",
          }}>
            Join thousands of happy brands and individuals who trust Modish.
          </p>
          <a
            href="#inquiry"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "13px",
              background: "var(--modish-black)",
              color: "var(--modish-yellow)",
              padding: "10px 20px",
              borderRadius: "var(--modish-radius-md)",
              textDecoration: "none",
              minHeight: "40px",
            }}
          >
            Get Your Quote Now →
          </a>
        </div>
      </div>
    </section>
  );
}
