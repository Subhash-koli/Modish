import { useEffect } from "react";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { ProductGrid } from "./components/ProductGrid";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { HowItWorks } from "./components/HowItWorks";
import { PrintingTech } from "./components/PrintingTech";
import { StatsCounter } from "./components/StatsCounter";
import { DiariesSection } from "./components/DiariesSection";
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

  return (
    <div style={{ fontFamily: "var(--font-body)", background: "var(--modish-white)", minHeight: "100vh" }}>
      <Header />

      <main>
        <HeroBanner />
        <MarqueeTicker />
        <ProductGrid />
        <WhyChooseSection />
        <HowItWorks />
        <PrintingTech />
        <StatsCounter />
        <DiariesSection />
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
    </div>
  );
}
