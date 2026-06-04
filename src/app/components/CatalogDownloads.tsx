import { useState } from "react";
import { Download, ExternalLink, Shirt, BookOpen, LucideIcon } from "lucide-react";

const catalogs: { Icon: LucideIcon; title: string; description: string; url: string; pages: string; updated: string; accentColor: string; }[] = [
  {
    Icon: Shirt,
    title: "Clothing Catalog",
    description: "Explore our full apparel range — Round Neck, Oversized, Polo, Hoodies, Gym Vests, Tote Bags, and Accessories. Includes specs, color options, and bulk pricing guidelines.",
    url: "https://tinyurl.com/Modish-now",
    pages: "24 pages",
    updated: "May 2026",
    accentColor: "var(--modish-black)",
  },
  {
    Icon: BookOpen,
    title: "Diary Collection",
    description: "Discover all 10 diary models — Elasto, Loopify, Cork, Trinity, Magneto, Trio, Mobilo, Clutch, Epitome, Coffee Cork. Includes gift set configurations and customization options.",
    url: "https://tinyurl.com/Diary-modish",
    pages: "18 pages",
    updated: "May 2026",
    accentColor: "var(--modish-yellow)",
  },
];

export function CatalogDownloads() {
  return (
    <section id="catalogs" className="modish-section" style={{ background: "var(--modish-white)" }}>
      <div className="modish-container">
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
          <span style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
            DOWNLOAD CATALOGS
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(20px, 3vw, 30px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
            Explore Our Catalogs
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "15px", color: "var(--modish-grey-500)", maxWidth: "560px", margin: "0 auto" }}>
            Download our product catalogs and share them with your team before placing an order.
          </p>
        </div>

        <div className="modish-catalog-grid" style={{
          maxWidth: "780px",
          margin: "0 auto",
        }}>
          {catalogs.map((catalog, i) => (
            <CatalogCard key={i} catalog={catalog} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CatalogCard({ catalog }: { catalog: typeof catalogs[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal-on-scroll"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        background: "var(--modish-white)",
        border: "1px solid var(--modish-grey-200)",
        borderRadius: "var(--modish-radius-lg)",
        overflow: "hidden",
        boxShadow: hovered ? "var(--modish-shadow-yellow)" : "var(--modish-shadow-sm)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}>
        {/* Yellow left accent bar */}
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "4px",
          background: catalog.accentColor,
        }} />

        {/* Content */}
        <div style={{ padding: "var(--modish-space-6) var(--modish-space-6) var(--modish-space-6) var(--modish-space-8)", flex: 1 }}>
          {/* Icon */}
          <div style={{ marginBottom: "var(--modish-space-4)", color: "var(--modish-black)" }}>
            <catalog.Icon size={44} strokeWidth={1.5} />
          </div>

          {/* Meta */}
          <div style={{ display: "flex", gap: "var(--modish-space-2)", marginBottom: "var(--modish-space-3)", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", color: "var(--modish-grey-400)", background: "var(--modish-grey-100)", padding: "2px 8px", borderRadius: "var(--modish-radius-full)" }}>
              {catalog.pages}
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", color: "var(--modish-grey-400)", background: "var(--modish-grey-100)", padding: "2px 8px", borderRadius: "var(--modish-radius-full)" }}>
              Updated {catalog.updated}
            </span>
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "22px", color: "var(--modish-black)", margin: "0 0 var(--modish-space-3) 0" }}>
            {catalog.title}
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", color: "var(--modish-grey-500)", lineHeight: 1.6, margin: "0 0 var(--modish-space-5) 0" }}>
            {catalog.description}
          </p>

          {/* CTA */}
          <a
            href={catalog.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--modish-space-2)",
              background: "var(--modish-yellow)",
              color: "var(--modish-black)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "14px",
              padding: "12px 20px",
              borderRadius: "var(--modish-radius-sm)",
              textDecoration: "none",
              transition: "all 0.2s ease",
              width: "fit-content",
            }}
            onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "var(--modish-black)"; a.style.color = "var(--modish-yellow)"; }}
            onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "var(--modish-yellow)"; a.style.color = "var(--modish-black)"; }}
          >
            <Download size={15} />
            Download {catalog.title}
            <ExternalLink size={12} />
          </a>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--modish-grey-400)", margin: "var(--modish-space-2) 0 0 0" }}>
            Opens PDF in new tab
          </p>
        </div>
      </div>
    </div>
  );
}
