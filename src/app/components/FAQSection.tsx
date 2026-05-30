import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "Our MOQ varies by product. For custom T-Shirts (Round Neck, Oversized, Polo), our MOQ is 25 pieces. For Hoodies, it's 15 pieces. For Tote Bags and Accessories, it's 50 pieces. For Corporate Diaries, it's 25 pieces. We're flexible — contact us to discuss smaller quantities.",
  },
  {
    q: "Do you provide design mockups before production?",
    a: "Absolutely. Every order comes with a free digital mockup before we go into production. You'll see exactly how your print will look on the garment — colors, placement, sizing — and we won't start until you're 100% satisfied with the preview.",
  },
  {
    q: "How does the bulk ordering process work?",
    a: "It's simple: Share your design → receive a mockup within 24 hours → approve or revise → confirm the order and quantity → production begins. We'll keep you updated throughout and dispatch with tracking information.",
  },
  {
    q: "What are your delivery timelines?",
    a: "Standard production + delivery takes 7–12 working days after design approval. For urgent orders, we offer an expedited 4–5 day turnaround (subject to capacity). Large bulk orders (1000+) may require 14–18 working days.",
  },
  {
    q: "What printing methods do you offer?",
    a: "We offer four printing technologies: DTF (Direct to Film) for vibrant multicolor designs, Screen Printing for bulk single-color runs, Embroidery for premium workwear and caps, and Sublimation for all-over prints on polyester. We recommend the best method based on your design and order size.",
  },
  {
    q: "How is pricing determined?",
    a: "Pricing depends on the product type, quantity, number of print colors, and printing method. Generally, the higher the quantity, the lower the per-piece cost. We provide transparent, itemized quotes — no hidden charges or surprise fees.",
  },
  {
    q: "Can I customize colors, sizes, and print placements?",
    a: "Yes, fully. We offer custom colors (subject to stock availability), all standard sizes from S to 3XL, and multiple print placements — front, back, sleeve, chest pocket. Just mention your requirements when you inquire.",
  },
  {
    q: "What is your return or replacement policy?",
    a: "We don't accept returns on custom printed items due to their personalized nature. However, if there's a quality defect — print error, wrong size, damaged item — we'll replace it at no cost to you. Quality checks happen before dispatch, but we stand behind our work.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(prev => prev === i ? null : i);
  };

  return (
    <section id="faq" className="modish-section" style={{ background: "var(--modish-grey-100)" }}>
      <div className="modish-container">
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
            Everything You<br />Need to Know
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "17px", color: "var(--modish-grey-500)", maxWidth: "500px", margin: "0 auto" }}>
            Common questions answered so you can order with confidence.
          </p>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid var(--modish-grey-200)" }}>
      {/* using <button> instead of <Button>: FAQ accordion trigger needs full-width left-aligned text layout; kit Button is centered pill-shaped and can't express this pattern */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--modish-space-4)",
          padding: "var(--modish-space-5) 0",
          background: isOpen ? "var(--modish-yellow-light)" : "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          borderRadius: isOpen ? "var(--modish-radius-sm)" : 0,
          paddingLeft: isOpen ? "var(--modish-space-4)" : 0,
          paddingRight: isOpen ? "var(--modish-space-4)" : 0,
          transition: "background 0.2s ease, padding 0.2s ease",
        }}
      >
        <span style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: "16px",
          color: "var(--modish-black)",
          flex: 1,
        }}>
          {question}
        </span>
        <Plus
          size={20}
          style={{
            color: "var(--modish-black)",
            flexShrink: 0,
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>

      {/* Answer */}
      <div
        style={{
          maxHeight: isOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "15px",
          color: "var(--modish-grey-700)",
          lineHeight: 1.7,
          margin: "0 0 var(--modish-space-5) 0",
          paddingTop: "var(--modish-space-2)",
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}
