import { useState } from "react";
import { ExternalLink, BookOpen, Notebook, NotebookPen, NotebookTabs, NotebookText, BookMarked, Briefcase, BookCopy, Book, Coffee, LucideIcon } from "lucide-react";
import bulkOrdersImg from "../../imports/Modish catalog/21.webp";

const diaries: { name: string; Icon: LucideIcon; closure: string; material: string; bestFor: string; giftSet: boolean; }[] = [
  { name: "Elasto",      Icon: Notebook,     closure: "Elastic Band",   material: "PU Leather",     bestFor: "Day Planner",    giftSet: true  },
  { name: "Loopify",     Icon: NotebookPen,  closure: "Loop Closure",   material: "Linen Cover",    bestFor: "Journals",       giftSet: true  },
  { name: "Cork",        Icon: NotebookTabs, closure: "Magnetic",       material: "Cork Cover",     bestFor: "Eco Gifting",    giftSet: false },
  { name: "Trinity",     Icon: NotebookText, closure: "Tri-fold",       material: "Faux Leather",   bestFor: "Conference",     giftSet: true  },
  { name: "Magneto",     Icon: BookMarked,   closure: "Magnetic Flap",  material: "Soft Touch",     bestFor: "Corporate",      giftSet: true  },
  { name: "Trio",        Icon: BookOpen,     closure: "Bookbind",       material: "Cloth Cover",    bestFor: "Executive",      giftSet: true  },
  { name: "Mobilo",      Icon: Briefcase,    closure: "Zipper",         material: "PU with Pocket", bestFor: "Travel Diary",   giftSet: false },
  { name: "Clutch",      Icon: BookCopy,     closure: "Button Snap",    material: "Vegan Leather",  bestFor: "Premium Gift",   giftSet: false },
  { name: "Epitome",     Icon: Book,         closure: "Hardbound",      material: "Premium Cloth",  bestFor: "Luxury Gift",    giftSet: false },
  { name: "Coffee Cork", Icon: Coffee,       closure: "Elastic",        material: "Cork + Linen",   bestFor: "Lifestyle Gift", giftSet: false },
];

export function DiariesSection() {
  return (
    <section id="diaries" className="modish-section" style={{ background: "var(--modish-white)" }}>
      <div className="modish-container">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
          <span style={{
            display: "block",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "var(--text-xs)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--modish-grey-500)",
            margin: "0 0 8px 0",
          }}>
            CORPORATE GIFTING
          </span>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "var(--text-4xl)",
            color: "var(--modish-black)",
            margin: "0 0 12px 0",
            lineHeight: 1.1,
          }}>
            Premium Diaries &<br />Gift Sets
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "var(--text-base)",
            color: "var(--modish-grey-500)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.65,
          }}>
            Crafted for brands that want to leave a lasting impression. 10 models, 5 gift set options.
          </p>
        </div>

        {/* Bulk Orders Visual */}
        <div className="reveal-on-scroll" style={{
          marginBottom: "var(--modish-space-10)",
          borderRadius: "var(--modish-radius-xl)",
          overflow: "hidden",
          border: "1px solid var(--modish-grey-200)",
          boxShadow: "var(--modish-shadow-md)",
        }}>
          <img
            src={bulkOrdersImg}
            alt="Modish bulk custom orders — College, Corporate, Yoga, Fitness, Event merchandise India"
            width={1200}
            height={630}
            style={{ width: "100%", height: "auto", display: "block" }}
            loading="lazy"
          />
        </div>

        {/* Diary Grid */}
        <div className="modish-diary-grid" style={{ marginBottom: "var(--modish-space-10)" }}>
          {diaries.map((diary, i) => (
            <DiaryCard key={i} diary={diary} delay={i * 60} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://tinyurl.com/Diary-modish"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--modish-space-2)",
              background: "var(--modish-yellow)",
              color: "var(--modish-black)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "var(--text-md)",
              padding: "16px 32px",
              borderRadius: "var(--modish-radius-md)",
              textDecoration: "none",
              minHeight: "52px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "var(--modish-black)"; a.style.color = "var(--modish-yellow)"; }}
            onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "var(--modish-yellow)"; a.style.color = "var(--modish-black)"; }}
          >
            <ExternalLink size={18} />
            View Full Diary Catalog
          </a>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-xs)",
            color: "var(--modish-grey-400)",
            marginTop: "var(--modish-space-3)",
          }}>
            Opens PDF catalog in new tab
          </p>
        </div>

      </div>
    </section>
  );
}

function DiaryCard({ diary, delay }: { diary: typeof diaries[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        background: "var(--modish-white)",
        border: hovered ? "1.5px solid var(--modish-yellow)" : "1px solid var(--modish-grey-200)",
        borderRadius: "var(--modish-radius-lg)",
        overflow: "hidden",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? "var(--modish-shadow-md)" : "var(--modish-shadow-sm)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}>

        {/* Icon area — fluid height using aspect-ratio */}
        <div style={{
          aspectRatio: "1 / 1",
          background: hovered ? "var(--modish-yellow)" : "var(--modish-grey-50)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--modish-black)",
          transition: "background 0.3s ease",
        }}>
          {/* Icon scales with clamp — large on desktop, smaller on mobile */}
          <diary.Icon
            style={{
              width: "clamp(28px, 8vw, 48px)",
              height: "clamp(28px, 8vw, 48px)",
              strokeWidth: 1.25,
            }}
          />
        </div>

        {/* Content */}
        <div style={{
          padding: "clamp(8px, 2.5vw, 16px)",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "var(--modish-space-1)",
        }}>

          {/* Name + Gift Set badge */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "4px", flexWrap: "wrap" }}>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "var(--text-sm)",
              color: "var(--modish-black)",
              margin: 0,
              lineHeight: 1.2,
            }}>
              {diary.name}
            </h3>
            {diary.giftSet && (
              <span style={{
                background: "var(--modish-yellow)",
                color: "var(--modish-black)",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "clamp(7px, 1.8vw, 9px)",
                padding: "2px 5px",
                borderRadius: "var(--modish-radius-full)",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>
                Gift Set
              </span>
            )}
          </div>

          {/* Specs tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
            {[diary.closure, diary.material].map(tag => (
              <span key={tag} style={{
                padding: "2px 6px",
                borderRadius: "var(--modish-radius-full)",
                background: "var(--modish-grey-100)",
                border: "1px solid var(--modish-grey-200)",
                color: "var(--modish-grey-700)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "clamp(8px, 2vw, 10px)",
                whiteSpace: "nowrap",
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Best For */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: "clamp(9px, 2.2vw, 12px)",
            color: "var(--modish-grey-500)",
            margin: 0,
          }}>
            Best for: <strong style={{ color: "var(--modish-black)", fontWeight: 700 }}>{diary.bestFor}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
