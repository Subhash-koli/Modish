export function WhyChooseSection() {
  return (
    <section id="why" className="modish-section" style={{ background: "var(--modish-grey-50)" }}>
      <div className="modish-container" style={{ display: "flex", justifyContent: "center" }}>
        <picture style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "1000px" }}>
          <source srcSet="/why-choose-modish-desktop.png" media="(min-width: 768px)" />
          <img 
            src="/why-choose-modish.png" 
            alt="Why Choose Modish" 
            style={{ 
              width: "100%", 
              height: "auto", 
              display: "block",
              borderRadius: "var(--modish-radius-lg)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }} 
          />
        </picture>
      </div>
    </section>
  );
}
