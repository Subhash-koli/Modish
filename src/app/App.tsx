import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { ProductGrid } from "./components/ProductGrid";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { HowItWorks } from "./components/HowItWorks";
import { PrintingTech } from "./components/PrintingTech";
import { StatsCounter } from "./components/StatsCounter";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TrustedClients } from "./components/TrustedClients";
import { CatalogDownloads } from "./components/CatalogDownloads";
import { InquiryForm } from "./components/InquiryForm";
import { WhatsAppCTA } from "./components/WhatsAppCTA";
import { AboutSection } from "./components/AboutSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { MobileBottomBar } from "./components/MobileBottomBar";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll(".reveal-on-scroll");
    targets.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();

  // Scroll progress bar
  const [scrollPct, setScrollPct] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0);
      setShowBackToTop(scrolled > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "var(--font-body)", background: "var(--modish-white)", minHeight: "100vh" }}>
      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          width: `${scrollPct}%`,
          background: "var(--modish-yellow)",
          zIndex: 9999,
          transition: "width 0.1s linear",
          pointerEvents: "none",
        }}
      />

      <Header />

      <main aria-label="Modish — Custom Merchandise and Corporate Gifting">
        <HeroBanner />
        <MarqueeTicker />
        <ProductGrid />
        <WhyChooseSection />
        <HowItWorks />
        <PrintingTech />
        <StatsCounter />
        <TestimonialsSection />
        <TrustedClients />
        <CatalogDownloads />
        <InquiryForm />
        <WhatsAppCTA />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: "100px",
            right: "16px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "var(--modish-black)",
            color: "var(--modish-yellow)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            zIndex: 600,
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
            transition: "opacity 0.3s ease",
          }}
        >
          ↑
        </button>
      )}

      <Analytics />
      <SpeedInsights />
    </div>
  );
}
