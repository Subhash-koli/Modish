import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { ProductModal, Product } from "./ProductModal";
import { ExploreRangeSecondaryNav } from "./ExploreRangeSecondaryNav";

// Batch 1 imports (images 3–11)
import img3_tshirts from "../../imports/Modish catalog/3.webp";
import img4_rneck_spec from "../../imports/Modish catalog/4.webp";
import img5_rneck_colors from "../../imports/Modish catalog/5.webp";
import img6_oversized from "../../imports/Modish catalog/6.webp";
import img7_oversized_spec from "../../imports/Modish catalog/7.webp";
import img8_oversized_colors from "../../imports/Modish catalog/8.webp";
import img9_polo from "../../imports/Modish catalog/9.webp";
import img10_polo_spec from "../../imports/Modish catalog/10.webp";
import img11_polo_colors from "../../imports/Modish catalog/11.webp";

// Batch 2 imports (images 12–18)
import img12_hoodies from "../../imports/Modish catalog/12.webp";
import img13_hoodies_spec from "../../imports/Modish catalog/13.webp";
import img14_hoodies_colors from "../../imports/Modish catalog/14.webp";
import img15_gymvest from "../../imports/Modish catalog/15.webp";
import img16_gymvest_spec from "../../imports/Modish catalog/16.webp";
import img17_accessories from "../../imports/Modish catalog/17.webp";
import img18_totebag_spec from "../../imports/Modish catalog/18.webp";

const WA_BASE = "https://wa.me/919136867622";

const products: Product[] = [
  {
    id: "round-neck",
    name: "Round Neck T-Shirt",
    categoryImage: img3_tshirts,
    specImage: img4_rneck_spec,
    colorsImage: img5_rneck_colors,
    descriptor: "Classic fit, premium cotton",
    badge: "Bestseller",
    specs: ["180 GSM", "100% Cotton", "Biowash", "Unisex Fit", "S–3XL"],
    colors: ["#0A0A0A", "#1A5C2A", "#EA5B0C", "#C4A5D0", "#800020", "#FFFFFF"],
    colorNames: ["Black", "Bottle Green", "Orange", "Lavender", "Maroon", "White"],
    bestFor: ["College Events", "Team Wear", "Brand Merch", "Personal Use"],
    printing: ["DTF Printing", "Screen Printing", "Embroidery"],
    description: "Our most popular garment — versatile, durable, and perfect for any custom print. 180 GSM bio-washed cotton gives a premium feel at an accessible price.",
  },
  {
    id: "oversized",
    name: "Oversized T-Shirt",
    categoryImage: img6_oversized,
    specImage: img7_oversized_spec,
    colorsImage: img8_oversized_colors,
    descriptor: "Dropped shoulders, street-ready fit",
    badge: "Trending",
    specs: ["210 GSM", "Cotton Loopknit", "Biowash", "Oversized Fit", "S–3XL"],
    colors: ["#0A0A0A", "#1A5C2A", "#EA5B0C", "#C4A5D0", "#800020", "#FFFFFF"],
    colorNames: ["Black", "Bottle Green", "Orange", "Lavender", "Maroon", "White"],
    bestFor: ["Streetwear Brand", "Influencer Merch", "Startup Kits", "Events"],
    printing: ["DTF Printing", "Screen Printing", "Sublimation"],
    description: "The streetwear staple. Dropped shoulders and boxy cut make this the go-to for brands that want to look cool. 210 GSM heavy-weight loopknit cotton for that premium hand-feel.",
  },
  {
    id: "polo",
    name: "Polo / Collar Tee",
    categoryImage: img9_polo,
    specImage: img10_polo_spec,
    colorsImage: img11_polo_colors,
    descriptor: "Corporate-ready, honeycomb cotton",
    specs: ["220 GSM", "Honeycomb Cotton", "Biowash", "Regular Fit", "S–2XL"],
    colors: ["#0A0A0A", "#9E9E9E", "#FFFFFF", "#800020", "#556B2F", "#1C3260"],
    colorNames: ["Black", "Grey", "White", "Maroon", "Olive", "Navy"],
    bestFor: ["Corporate Events", "School Uniforms", "Sports Teams", "Hospitality"],
    printing: ["Embroidery", "Screen Printing", "DTF Printing"],
    description: "Polished and professional. Honeycomb cotton weave gives structure while staying breathable. Perfect for workwear, uniforms, and any brand that wants a smart look.",
  },
  {
    id: "hoodie",
    name: "Premium Hoodie",
    categoryImage: img12_hoodies,
    specImage: img13_hoodies_spec,
    colorsImage: img14_hoodies_colors,
    descriptor: "Heavyweight, ultra-soft fleece",
    badge: "Popular",
    specs: ["320 GSM", "100% Cotton", "Ultra Soft", "Biowash", "S–2XL"],
    colors: ["#0A0A0A", "#9E9E9E", "#C4A5D0", "#800020", "#FFFFFF", "#1C3260"],
    colorNames: ["Black", "Grey", "Lavender", "Maroon", "White", "Navy"],
    bestFor: ["Winter Merch", "College Fest", "Premium Brand Kits", "Gift Sets"],
    printing: ["Embroidery", "DTF Printing", "Screen Printing"],
    description: "A statement piece. 320 GSM premium cotton, ultra-soft fleece lining, double-stitched seams, and a structured hood. The kind of hoodie people actually wear — not just collect.",
  },
  {
    id: "gym-vest",
    name: "Gym Vest",
    categoryImage: img15_gymvest,
    specImage: img16_gymvest_spec,
    colorsImage: null,
    descriptor: "Performance cut, custom print ready",
    specs: ["180 GSM", "100% Cotton", "Ultra Soft", "Biowash", "Athletic Cut"],
    colors: ["#0A0A0A", "#FFFFFF", "#1C3260", "#F5C400"],
    colorNames: ["Black", "White", "Navy", "Yellow"],
    bestFor: ["Gyms & Fitness", "Sports Events", "Marathon Merch", "Corporate Fitness"],
    printing: ["Sublimation", "DTF Printing", "Screen Printing"],
    description: "Built for performance and style. 180 GSM bio-washed cotton gym vest with a bold custom print area. Perfect for gym brands, sports teams, and fitness events.",
  },
  {
    id: "tote-bag",
    name: "Canvas Tote Bag",
    categoryImage: img17_accessories,
    specImage: img18_totebag_spec,
    colorsImage: null,
    descriptor: "Eco-friendly, large print area",
    specs: ["Polyester Cotton Mix", "Size 9×9 in", "Multiple Use", "Re-usable", "Custom Print"],
    colors: ["#F5F5DC", "#0A0A0A"],
    colorNames: ["Natural", "Black"],
    bestFor: ["Event Giveaways", "Eco Brands", "Colleges", "Retail"],
    printing: ["Screen Printing", "DTF Printing"],
    description: "Sustainable and stylish. Heavy-duty polyester-cotton canvas with a generous print area — perfect for bold statement designs. The eco-conscious giveaway that people actually use.",
  },
  {
    id: "accessories",
    name: "Accessories & More",
    categoryImage: img17_accessories,
    specImage: null,
    colorsImage: null,
    descriptor: "Coasters, magnets, mousepads & more",
    specs: ["Custom Sizes", "Various Materials", "Full Color Print", "Bulk Pricing"],
    colors: ["#F5C400", "#0A0A0A", "#FFFFFF", "#DC2626"],
    colorNames: ["Yellow", "Black", "White", "Red"],
    bestFor: ["Corporate Gifting", "Event Souvenirs", "Brand Activations", "Office Use"],
    printing: ["UV Printing", "Sublimation", "DTF Printing"],
    description: "Complete your brand kit with custom accessories. Coasters, fridge magnets, mouse pads, keychains — all printed with your design. Perfect for gift sets and giveaways.",
  },
];

function ColorSwatch({ color, name }: { color: string; name: string }) {
  return (
    <div
      title={name}
      style={{
        width: "clamp(14px, 2.5vw, 18px)",
        height: "clamp(14px, 2.5vw, 18px)",
        borderRadius: "50%",
        background: color,
        border: color === "#FFFFFF" || color === "#F5F5DC" ? "1.5px solid var(--modish-grey-200)" : "2px solid var(--modish-white)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
        cursor: "default",
        flexShrink: 0,
      }}
    />
  );
}

function SpecChip({ label }: { label: string }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "clamp(2px, 0.8vw, 4px) clamp(5px, 1.5vw, 10px)",
      borderRadius: "var(--modish-radius-full)",
      background: "var(--modish-grey-100)",
      border: "1px solid var(--modish-grey-200)",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "clamp(8px, 1.8vw, 11px)",
      color: "var(--modish-grey-700)",
    }}>
      {label}
    </span>
  );
}

function ProductCard({ product, onViewDetails }: { product: Product; onViewDetails: (p: Product) => void }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const waMsg = `Hi Modish! I'm interested in your ${product.name}. Can you share pricing?`;
  const waUrl = `${WA_BASE}?text=${encodeURIComponent(waMsg)}`;

  return (
    <article
      style={{
        background: "var(--modish-white)",
        border: "1px solid var(--modish-grey-200)",
        borderRadius: "var(--modish-radius-lg)",
        boxShadow: hovered ? "var(--modish-shadow-lg)" : "var(--modish-shadow-sm)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minHeight: "360px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge Area — Reserved Space */}
      <div style={{
        position: "absolute",
        top: "12px",
        left: "12px",
        zIndex: 1,
        height: "24px",
      }}>
        {product.badge && (
          <div style={{
            background: "var(--modish-yellow)",
            color: "var(--modish-black)",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "11px",
            padding: "3px 10px",
            borderRadius: "var(--modish-radius-full)",
            letterSpacing: "0.04em",
          }}>
            {product.badge}
          </div>
        )}
      </div>

      {/* Product Image — real catalog photo */}
      <div className="modish-product-image" style={{
        overflow: "hidden",
        background: "var(--modish-grey-50)",
        position: "relative",
      }}>
        <img
          src={product.categoryImage}
          alt={`Custom printed ${product.name} by Modish Mumbai — ${product.descriptor}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
            display: "block",
          }}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div style={{ padding: "clamp(5px, 1.2vw, 12px)", flex: 1, display: "flex", flexDirection: "column", gap: "clamp(2px, 0.3vw, 6px)" }}>
        <div style={{ maxHeight: "clamp(35px, 7vw, 48px)", overflow: "hidden" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(12px, 2.8vw, 16px)", color: "var(--modish-black)", margin: "0 0 1px 0", lineHeight: 1.2 }}>
            {product.name}
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "clamp(9px, 1.8vw, 12px)", color: "var(--modish-grey-500)", margin: 0, lineHeight: 1.2 }}>
            {product.descriptor}
          </p>
        </div>

        {/* Description */}
        <p style={{ margin: 0, color: "var(--modish-grey-700)", fontSize: "8px", lineHeight: 1.2, display: "-webkit-box", WebkitLineClamp: 3 as any, WebkitBoxOrient: "vertical" as any, overflow: "hidden" }}>
          {product.description}
        </p>

        {/* Spec Chips — Fixed Height */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(3px, 0.5vw, 8px)", minHeight: "26px", alignContent: "flex-start" }}>
          {product.specs.slice(0, 2).map(spec => (
            <SpecChip key={spec} label={spec} />
          ))}
        </div>

        {/* Color Swatches — Fixed Height */}
        <div style={{ display: "flex", gap: "clamp(4px, 1vw, 8px)", flexWrap: "wrap", minHeight: "22px", alignContent: "flex-start" }}>
          {product.colors.slice(0, 4).map((c, i) => (
            <ColorSwatch key={i} color={c} name={product.colorNames[i]} />
          ))}
          {product.colors.length > 4 && (
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--modish-grey-500)", alignSelf: "center" }}>
              +{product.colors.length - 4}
            </span>
          )}
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          gap: "6px",
          marginTop: "auto",
          flexDirection: isMobile ? "column" : "row",
          width: "100%"
        }}>
          <button
            onClick={() => onViewDetails(product)}
            style={{
              flex: isMobile ? "none" : "1 1 calc(50% - 6px)",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: isMobile ? "10px" : "13px",
              padding: isMobile ? "6px 8px" : "8px 12px",
              border: "1.5px solid var(--modish-black)",
              borderRadius: "var(--modish-radius-sm)",
              background: "transparent",
              color: "var(--modish-black)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { const b = e.currentTarget; b.style.background = "var(--modish-black)"; b.style.color = "var(--modish-yellow)"; }}
            onMouseLeave={e => { const b = e.currentTarget; b.style.background = "transparent"; b.style.color = "var(--modish-black)"; }}
          >
            <Eye size={isMobile ? 12 : 14} />
            <span className="modish-button-text">View Details</span>
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: isMobile ? "none" : "1 1 calc(50% - 6px)",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: isMobile ? "10px" : "14px",
              padding: isMobile ? "6px 8px" : "9px 14px",
              borderRadius: "var(--modish-radius-sm)",
              background: "var(--modish-whatsapp)",
              color: "var(--modish-white)",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--modish-whatsapp-dark)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--modish-whatsapp)"; }}
          >
            {/* Inline WhatsApp icon */}
            <svg width={isMobile ? 12 : 18} height={isMobile ? 12 : 18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.373 0 .01 5.364.01 12c0 2.115.56 4.078 1.53 5.8L0 24l6.42-1.67A11.92 11.92 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52z" fill="var(--modish-whatsapp)" />
              <path d="M17.5 14.2c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1l-.5.5c-.1.1-.4.2-.8.1-.8-.1-2.5-1.5-3.3-3.1-.2-.4.2-.8.4-1l.5-.5c.3-.3.3-.5.1-.8-.1-.2-1-2.4-1.4-3.3-.2-.5-.7-.6-1-.6-.4 0-.8.1-1.2.2-.3.1-.8.3-1.2.6-.4.3-.9.8-1.1 1.3-.2.6-.1 1.2.6 2.6.8 1.6 4 6.6 8.4 8.7 3 .95 3.9.4 4.6.3.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.5-.1-.3-1.2-1-1.5-1.1z" fill="#fff" />
            </svg>
            <span className="modish-button-text">WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
      <span style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
        {eyebrow}
      </span>
      <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(20px, 3vw, 30px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
        {title}
      </h2>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "15px", color: "var(--modish-grey-500)", maxWidth: "600px", margin: "0 auto" }}>
        {subtitle}
      </p>
    </div>
  );
}

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="modish-section" style={{ background: "var(--modish-white)" }}>
      <ExploreRangeSecondaryNav />
      <div className="modish-container">
        <SectionHeading
          eyebrow="OUR PRODUCTS"
          title="What We Make"
          subtitle="Premium custom merchandise, crafted to represent your brand."
        />

        <div className="modish-product-grid">
          {products.map((product, i) => (
            <div
              key={product.id}
              id={product.id}
              className="reveal-on-scroll modish-product-card-wrapper"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <ProductCard product={product} onViewDetails={setSelectedProduct} />
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

export { products };
