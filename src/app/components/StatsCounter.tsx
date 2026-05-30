import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Orders Completed" },
  { value: 3200, suffix: "+", label: "Happy Customers" },
  { value: 180, suffix: "+", label: "Cities Delivered" },
  { value: 50000, suffix: "+", label: "Products Printed" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // easeOut
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

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 2, active);

  const formatted = count >= 1000 ? `${Math.floor(count / 1000)}K` : count.toString();

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(36px, 5vw, 56px)", color: "var(--modish-black)", lineHeight: 1, marginBottom: "var(--modish-space-2)" }}>
        {formatted}{suffix}
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "15px", color: "var(--modish-grey-500)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [triggered]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      style={{
        background: "var(--modish-white)",
        padding: "var(--modish-space-20) 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--modish-grey-200)",
        borderBottom: "1px solid var(--modish-grey-200)",
      }}
    >
      {/* Subtle diagonal texture */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.015) 0px, rgba(0,0,0,0.015) 1px, transparent 1px, transparent 20px)",
        pointerEvents: "none",
      }} />

      <div className="modish-container" style={{ position: "relative" }}>
        <div
          className="modish-stats-grid"
        >
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} active={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}
