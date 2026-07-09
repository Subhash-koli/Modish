import { useState, useEffect } from "react";

import howItWorksDesktop from "../../imports/modish 1.png";
import howItWorksMobile from "../../imports/modish 2.png";

export function HowItWorks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="how-it-works"
      className="modish-section"
      style={{
        background: "var(--modish-white)",
        padding: 0,
        overflow: "hidden",
      }}
    >
      {isMobile ? (
        <img
          src={howItWorksMobile}
          alt="How Modish works — 5 simple steps: Send your design, receive digital mockup, production begins, quality check, delivery to your door"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          loading="lazy"
        />
      ) : (
        <img
          src={howItWorksDesktop}
          alt="How Modish works — 5 simple steps: Send your design, receive digital mockup, production begins, quality check, delivery to your door"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          loading="lazy"
        />
      )}
    </section>
  );
}
