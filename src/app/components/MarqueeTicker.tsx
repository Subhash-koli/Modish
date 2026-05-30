import { Gift, PenTool, Truck, Printer, Shirt, PartyPopper, Briefcase, Star, LucideIcon } from "lucide-react";

const items: { label: string; Icon: LucideIcon }[] = [
  { label: "Bulk Order Discounts", Icon: Gift },
  { label: "Free Design Support", Icon: PenTool },
  { label: "Pan India Delivery", Icon: Truck },
  { label: "DTF Printing Available", Icon: Printer },
  { label: "Custom T-Shirts", Icon: Shirt },
  { label: "Event Merchandise", Icon: PartyPopper },
  { label: "Corporate Gifting", Icon: Briefcase },
  { label: "Quality Guaranteed", Icon: Star },
];

export function MarqueeTicker() {
  const content = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      style={{
        background: "var(--modish-yellow)",
        height: "44px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          animation: "marquee 32s linear infinite",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}
      >
        {content.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "0" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--modish-space-2)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "13px",
                color: "var(--modish-black)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                paddingLeft: "var(--modish-space-5)",
              }}
            >
              <item.Icon size={14} strokeWidth={2} color="var(--modish-black)" />
              {item.label}
            </span>
            <span
              style={{
                color: "var(--modish-black)",
                fontSize: "18px",
                opacity: 0.4,
                paddingLeft: "var(--modish-space-5)",
                lineHeight: 1,
              }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
