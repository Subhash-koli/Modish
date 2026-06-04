import { X, MessageCircle, Download, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export interface Product {
  id: string;
  name: string;
  categoryImage: string;              // category header shot (shown in card)
  specImage: string | null;           // spec sheet image (shown in modal left panel)
  colorsImage: string | null;         // color variant grid image (shown in modal)
  descriptor: string;
  badge?: string;
  specs: string[];
  colors: string[];
  colorNames: string[];
  bestFor: string[];
  printing: string[];
  description: string;
}

const WA_BASE = "https://wa.me/919136867622";

function SpecChip({ label, variant = "light", isMobile = false }: { label: string; variant?: "light" | "yellow"; isMobile?: boolean }) {
  return (
    <span style={{
      display: "inline-block",
      padding: isMobile ? "2px 6px" : "4px 12px",
      borderRadius: "var(--modish-radius-full)",
      background: variant === "yellow" ? "var(--modish-yellow)" : "var(--modish-grey-100)",
      border: variant === "yellow" ? "none" : "1px solid var(--modish-grey-200)",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: isMobile ? "10px" : "12px",
      color: variant === "yellow" ? "var(--modish-black)" : "var(--modish-grey-700)",
    }}>
      {label}
    </span>
  );
}

function ColorSwatch({ color, name }: { color: string; name: string }) {
  return (
    <div title={name} style={{
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      background: color,
      border: color === "#FFFFFF" || color === "#F5F5DC" ? "1.5px solid var(--modish-grey-200)" : "2px solid var(--modish-white)",
      boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
      cursor: "default",
      flexShrink: 0,
    }} />
  );
}

// Which tab to show in the modal left panel
type PanelTab = "spec" | "colors" | "hero";

export function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const waMsg = `Hi Modish! I'm interested in your ${product.name}. Can you share pricing?`;
  const waUrl = `${WA_BASE}?text=${encodeURIComponent(waMsg)}`;

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Decide initial tab based on what images are available
  const initialTab: PanelTab = product.specImage ? "spec" : product.colorsImage ? "colors" : "hero";
  const [activeTab, setActiveTab] = useState<PanelTab>(initialTab);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // Active image displayed in panel
  const panelImage =
    activeTab === "spec" ? product.specImage :
    activeTab === "colors" ? product.colorsImage :
    product.categoryImage;

  // Tabs to show
  const tabs: { key: PanelTab; label: string }[] = [
    { key: "hero", label: "Overview" },
    ...(product.specImage ? [{ key: "spec" as PanelTab, label: "Spec Sheet" }] : []),
    ...(product.colorsImage ? [{ key: "colors" as PanelTab, label: "Colors" }] : []),
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-name"
      className="modish-modal-outer"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: "var(--modish-z-modal)",
        display: "flex",
        justifyContent: "center",
        padding: "var(--modish-space-4)",
        paddingTop: "calc(var(--modish-header-height) + 16px)",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.70)",
          backdropFilter: "blur(3px)",
          animation: "revealUp 0.2s ease forwards",
        }}
      />

      {/* Modal Content */}
      <div
        style={{
          position: "relative",
          background: "var(--modish-white)",
          borderRadius: "var(--modish-radius-xl)",
          width: "100%",
          maxWidth: "860px",
          maxHeight: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          animation: "revealUp 0.25s ease forwards",
          boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            zIndex: 2,
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.08)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--modish-black)",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.18)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.08)"; }}
        >
          <X size={18} />
        </button>

        <div className="modish-modal-body">

          {/* Left Panel — catalog images */}
          <div
            className="modish-modal-img"
            style={{
              background: "var(--modish-grey-50)",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Image */}
            <div style={{ flex: 1, overflow: "hidden", position: "relative", minHeight: "200px" }}>
              {panelImage ? (
                <img
                  key={activeTab}
                  src={panelImage}
                  alt={`${product.name} ${activeTab}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    padding: "8px",
                    animation: "revealUp 0.25s ease forwards",
                  }}
                  loading="eager"
                />
              ) : (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "var(--modish-grey-400)" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "14px" }}>No image</span>
                </div>
              )}
            </div>

            {/* Tab Switcher (only if multiple tabs available) */}
            {tabs.length > 1 && (
              <div style={{
                display: "flex",
                borderTop: "1px solid var(--modish-grey-200)",
                background: "var(--modish-white)",
              }}>
                {tabs.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    style={{
                      flex: 1,
                      padding: "10px 8px",
                      fontFamily: "var(--font-body)",
                      fontWeight: activeTab === tab.key ? 700 : 500,
                      fontSize: "12px",
                      border: "none",
                      borderTop: activeTab === tab.key ? "2px solid var(--modish-yellow)" : "2px solid transparent",
                      background: "transparent",
                      color: activeTab === tab.key ? "var(--modish-black)" : "var(--modish-grey-500)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Panel — product details */}
          <div className="modish-modal-content" style={{ flex: 1, display: "flex", flexDirection: "column", overflowY: isMobile ? "visible" : "auto" }}>

            {/* Header */}
            <div>
              {product.badge && (
                <span style={{
                  display: "inline-block",
                  background: "var(--modish-yellow)",
                  color: "var(--modish-black)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: isMobile ? "9px" : "11px",
                  padding: isMobile ? "2px 6px" : "3px 10px",
                  borderRadius: "var(--modish-radius-full)",
                  marginBottom: "6px",
                  letterSpacing: "0.04em",
                }}>
                  {product.badge}
                </span>
              )}
              <h2 id="modal-product-name" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: isMobile ? "16px" : "clamp(22px, 3vw, 28px)", color: "var(--modish-black)", margin: "0 0 4px 0", lineHeight: 1.1 }}>
                {product.name}
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: isMobile ? "11px" : "15px", color: "var(--modish-grey-500)", margin: 0 }}>
                {product.descriptor}
              </p>
            </div>

            {/* Description */}
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: isMobile ? "12px" : "15px", color: "var(--modish-grey-700)", lineHeight: isMobile ? 1.4 : 1.7, margin: 0 }}>
              {product.description}
            </p>

            {/* Specifications */}
            <div>
              <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: isMobile ? "10px" : "13px", color: "var(--modish-black)", textTransform: "uppercase", letterSpacing: "0.08em", margin: isMobile ? "0 0 4px 0" : "0 0 10px 0" }}>
                Specifications
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--modish-space-2)" }}>
                {product.specs.map(spec => <SpecChip key={spec} label={spec} isMobile={isMobile} />)}
              </div>
            </div>

            {/* Available Colors */}
            <div>
              <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: isMobile ? "10px" : "13px", color: "var(--modish-black)", textTransform: "uppercase", letterSpacing: "0.08em", margin: isMobile ? "0 0 4px 0" : "0 0 10px 0" }}>
                Available Colors
              </h4>
              <div style={{ display: "flex", gap: "var(--modish-space-2)", flexWrap: "wrap", alignItems: "center" }}>
                {product.colors.map((c, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                    <ColorSwatch color={c} name={product.colorNames[i]} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: isMobile ? "8px" : "10px", color: "var(--modish-grey-500)", whiteSpace: "nowrap" }}>
                      {product.colorNames[i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Best For */}
            <div>
              <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: isMobile ? "10px" : "13px", color: "var(--modish-black)", textTransform: "uppercase", letterSpacing: "0.08em", margin: isMobile ? "0 0 4px 0" : "0 0 10px 0" }}>
                Best For
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "4px" : "var(--modish-space-2)" }}>
                {product.bestFor.map(use => (
                  <div key={use} style={{ display: "flex", alignItems: "center", gap: "var(--modish-space-2)" }}>
                    <CheckCircle size={isMobile ? 12 : 15} style={{ color: "var(--modish-yellow)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: isMobile ? "12px" : "14px", color: "var(--modish-grey-700)" }}>{use}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Printing Methods */}
            <div>
              <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: isMobile ? "10px" : "13px", color: "var(--modish-black)", textTransform: "uppercase", letterSpacing: "0.08em", margin: isMobile ? "0 0 4px 0" : "0 0 10px 0" }}>
                Printing Methods
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--modish-space-2)" }}>
                {product.printing.map(method => <SpecChip key={method} label={method} variant="yellow" isMobile={isMobile} />)}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "6px" : "var(--modish-space-3)", marginTop: "auto" }}>
              <a
                href="https://tinyurl.com/Modish-now"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "var(--modish-space-2)",
                  background: "var(--modish-black)",
                  color: "var(--modish-yellow)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: isMobile ? "11px" : "15px",
                  padding: isMobile ? "8px 12px" : "14px 24px",
                  borderRadius: "var(--modish-radius-md)",
                  textDecoration: "none",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "var(--modish-yellow)"; a.style.color = "var(--modish-black)"; }}
                onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "var(--modish-black)"; a.style.color = "var(--modish-yellow)"; }}
              >
                <Download size={isMobile ? 12 : 16} />
                Download Full Catalog
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "var(--modish-space-2)",
                  background: "var(--modish-whatsapp)",
                  color: "var(--modish-white)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: isMobile ? "11px" : "15px",
                  padding: isMobile ? "8px 12px" : "14px 24px",
                  borderRadius: "var(--modish-radius-md)",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--modish-whatsapp-dark)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--modish-whatsapp)"; }}
              >
                <MessageCircle size={isMobile ? 12 : 16} />
                Chat on WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
