import { useState } from "react";
import { MessageCircle, Eye } from "lucide-react";
import { ProductModal, Product } from "./ProductModal";

// Batch 1 imports (images 3–11)
import img3_tshirts from "../../imports/Modish catalog/3.png";
import img4_rneck_spec from "../../imports/Modish catalog/4.png";
import img5_rneck_colors from "../../imports/Modish catalog/5.png";
import img6_oversized from "../../imports/Modish catalog/6.png";
import img7_oversized_spec from "../../imports/Modish catalog/7.png";
import img8_oversized_colors from "../../imports/Modish catalog/8.png";
import img9_polo from "../../imports/Modish catalog/9.png";
import img10_polo_spec from "../../imports/Modish catalog/10.png";
import img11_polo_colors from "../../imports/Modish catalog/11.png";

// Batch 2 imports (images 12–18)
import img12_hoodies from "../../imports/Modish catalog/12.png";
import img13_hoodies_spec from "../../imports/Modish catalog/13.png";
import img14_hoodies_colors from "../../imports/Modish catalog/14.png";
import img15_gymvest from "../../imports/Modish catalog/15.png";
import img16_gymvest_spec from "../../imports/Modish catalog/16.png";
import img17_accessories from "../../imports/Modish catalog/17.png";
import img18_totebag_spec from "../../imports/Modish catalog/18.png";

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
        width: "18px",
        height: "18px",
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
      padding: "4px 10px",
      borderRadius: "var(--modish-radius-full)",
      background: "var(--modish-grey-100)",
      border: "1px solid var(--modish-grey-200)",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "11px",
      color: "var(--modish-grey-700)",
    }}>
      {label}
    </span>
  );
}

function ProductCard({ product, onViewDetails }: { product: Product; onViewDetails: (p: Product) => void }) {
  const [hovered, setHovered] = useState(false);
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
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          background: "var(--modish-yellow)",
          color: "var(--modish-black)",
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          fontSize: "11px",
          padding: "3px 10px",
          borderRadius: "var(--modish-radius-full)",
          zIndex: 1,
          letterSpacing: "0.04em",
        }}>
          {product.badge}
        </div>
      )}

      {/* Product Image — real catalog photo */}
      <div style={{
        aspectRatio: "3/2",
        overflow: "hidden",
        background: "var(--modish-grey-50)",
        position: "relative",
      }}>
        <img
          src={product.categoryImage}
          alt={product.name}
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
      <div style={{ padding: "var(--modish-space-5)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--modish-space-3)" }}>
        <div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px", color: "var(--modish-black)", margin: "0 0 4px 0" }}>
            {product.name}
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "13px", color: "var(--modish-grey-500)", margin: 0 }}>
            {product.descriptor}
          </p>
        </div>

        {/* Spec Chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--modish-space-2)" }}>
          {product.specs.slice(0, 3).map(spec => (
            <SpecChip key={spec} label={spec} />
          ))}
        </div>

        {/* Color Swatches */}
        <div style={{ display: "flex", gap: "var(--modish-space-2)", flexWrap: "wrap" }}>
          {product.colors.slice(0, 6).map((c, i) => (
            <ColorSwatch key={i} color={c} name={product.colorNames[i]} />
          ))}
          {product.colors.length > 6 && (
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--modish-grey-500)", alignSelf: "center" }}>
              +{product.colors.length - 6}
            </span>
          )}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "var(--modish-space-2)", marginTop: "auto" }}>
          <button
            onClick={() => onViewDetails(product)}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--modish-space-1)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "13px",
              padding: "10px 12px",
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
            <Eye size={14} />
            View Details
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--modish-space-1)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "13px",
              padding: "10px 12px",
              borderRadius: "var(--modish-radius-sm)",
              background: "var(--modish-whatsapp)",
              color: "var(--modish-white)",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--modish-whatsapp-dark)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--modish-whatsapp)"; }}
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
        {eyebrow}
      </p>
      <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
        {title}
      </h2>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "17px", color: "var(--modish-grey-500)", maxWidth: "600px", margin: "0 auto" }}>
        {subtitle}
      </p>
    </div>
  );
}

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="modish-section" style={{ background: "var(--modish-white)" }}>
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
              className="reveal-on-scroll"
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
