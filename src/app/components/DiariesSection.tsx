import { useState } from "react";
import { ExternalLink, BookOpen, Notebook, NotebookPen, NotebookTabs, NotebookText, BookMarked, Briefcase, BookCopy, Book, Coffee, LucideIcon } from "lucide-react";
import bulkOrdersImg from "../../imports/Modish catalog/21.png";

const diaries: { name: string; Icon: LucideIcon; closure: string; material: string; bestFor: string; giftSet: boolean; }[] = [
  { name: "Elasto", Icon: Notebook, closure: "Elastic Band", material: "PU Leather", bestFor: "Day Planner", giftSet: true },
  { name: "Loopify", Icon: NotebookPen, closure: "Loop Closure", material: "Linen Cover", bestFor: "Journals", giftSet: true },
  { name: "Cork", Icon: NotebookTabs, closure: "Magnetic", material: "Cork Cover", bestFor: "Eco Gifting", giftSet: false },
  { name: "Trinity", Icon: NotebookText, closure: "Tri-fold", material: "Faux Leather", bestFor: "Conference", giftSet: true },
  { name: "Magneto", Icon: BookMarked, closure: "Magnetic Flap", material: "Soft Touch", bestFor: "Corporate", giftSet: true },
  { name: "Trio", Icon: BookOpen, closure: "Bookbind", material: "Cloth Cover", bestFor: "Executive", giftSet: true },
  { name: "Mobilo", Icon: Briefcase, closure: "Zipper", material: "PU with Pocket", bestFor: "Travel Diary", giftSet: false },
  { name: "Clutch", Icon: BookCopy, closure: "Button Snap", material: "Vegan Leather", bestFor: "Premium Gift", giftSet: false },
  { name: "Epitome", Icon: Book, closure: "Hardbound", material: "Premium Cloth", bestFor: "Luxury Gift", giftSet: false },
  { name: "Coffee Cork", Icon: Coffee, closure: "Elastic", material: "Cork + Linen", bestFor: "Lifestyle Gift", giftSet: false },
];

export function DiariesSection() {
  return (
    <section id="diaries" className="modish-section" style={{ background: "var(--modish-white)" }}>
      <div className="modish-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
            CORPORATE GIFTING
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(20px, 3vw, 30px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
            Premium Diaries &<br />Gift Sets
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "15px", color: "var(--modish-grey-500)", maxWidth: "560px", margin: "0 auto" }}>
            Crafted for brands that want to leave a lasting impression. 10 models, 5 gift set options.
          </p>
        </div>

        {/* Bulk Orders Visual from Catalog */}
        <div className="reveal-on-scroll" style={{ marginBottom: "var(--modish-space-10)", borderRadius: "var(--modish-radius-xl)", overflow: "hidden", border: "1px solid var(--modish-grey-200)", boxShadow: "var(--modish-shadow-md)", background: "var(--modish-white)" }}>
          <img
            src={bulkOrdersImg}
            alt="Bulk Orders? We've Got You! — College, Corporate, Yoga, Classes, Custom Order"
            style={{ width: "100%", height: "auto", display: "block" }}
            loading="lazy"
          />
        </div>

        {/* Diary Grid */}
        <div className="modish-diary-grid" style={{
          marginBottom: "var(--modish-space-10)",
        }}>
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
              fontSize: "16px",
              padding: "16px 36px",
              borderRadius: "var(--modish-radius-md)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "var(--modish-black)"; a.style.color = "var(--modish-yellow)"; a.style.outline = "2px solid var(--modish-yellow)"; }}
            onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "var(--modish-yellow)"; a.style.color = "var(--modish-black)"; a.style.outline = "none"; }}
          >
            <ExternalLink size={18} />
            View Full Diary Catalog
          </a>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--modish-grey-400)", marginTop: "var(--modish-space-3)" }}>
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
        border: hovered ? "1px solid var(--modish-yellow)" : "1px solid var(--modish-grey-200)",
        borderRadius: "var(--modish-radius-lg)",
        overflow: "hidden",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? "var(--modish-shadow-md)" : "var(--modish-shadow-sm)",
      }}>
        {/* Image area */}
        <div style={{
          aspectRatio: "1/1",
          background: "var(--modish-grey-50)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--modish-black)",
          transition: "background 0.3s ease",
        }}>
          <diary.Icon size={56} strokeWidth={1.25} />
        </div>

        {/* Content */}
        <div style={{ padding: "var(--modish-space-4)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--modish-space-2)" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px", color: "var(--modish-black)", margin: 0 }}>
              {diary.name}
            </h3>
            {diary.giftSet && (
              <span style={{
                background: "var(--modish-yellow)",
                color: "var(--modish-black)",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "9px",
                padding: "2px 6px",
                borderRadius: "var(--modish-radius-full)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}>
                Gift Set
              </span>
            )}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--modish-space-1)", marginBottom: "var(--modish-space-2)" }}>
            <span style={{ padding: "2px 8px", borderRadius: "var(--modish-radius-full)", background: "var(--modish-grey-100)", border: "1px solid var(--modish-grey-200)", color: "var(--modish-grey-700)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "10px" }}>
              {diary.closure}
            </span>
            <span style={{ padding: "2px 8px", borderRadius: "var(--modish-radius-full)", background: "var(--modish-grey-100)", border: "1px solid var(--modish-grey-200)", color: "var(--modish-grey-700)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "10px" }}>
              {diary.material}
            </span>
          </div>

          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "12px", color: "var(--modish-grey-500)", margin: 0 }}>
            Best for: {diary.bestFor}
          </p>
        </div>
      </div>
    </div>
  );
}
