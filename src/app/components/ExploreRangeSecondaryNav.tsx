import { useEffect, useRef, useState } from "react";
import img3_tshirts from "../../imports/Modish catalog/3.png";
import img6_oversized from "../../imports/Modish catalog/6.png";
import img9_polo from "../../imports/Modish catalog/9.png";
import img12_hoodies from "../../imports/Modish catalog/12.png";
import img15_gymvest from "../../imports/Modish catalog/15.png";
import img17_accessories from "../../imports/Modish catalog/17.png";

const categories = [
  { label: "T-Shirts", img: img3_tshirts },
  { label: "Oversized", img: img6_oversized },
  { label: "Polos", img: img9_polo },
  { label: "Hoodies", img: img12_hoodies },
  { label: "Gym Vests", img: img15_gymvest },
  { label: "Accessories", img: img17_accessories },
];

const SCROLL_THRESHOLD = 120;

export function ExploreRangeSecondaryNav() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateVisibility = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      const hasPassedThreshold = currentY > SCROLL_THRESHOLD;

      if (!hasPassedThreshold) {
        setVisible(true);
      } else if (delta > 8) {
        setVisible(false);
      } else if (delta < -8) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToProducts = () => {
    const target = document.getElementById("products");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`modish-explore-secondary-nav${visible ? " visible" : ""}`}
      aria-label="Explore our range secondary navigation"
    >
      <div className="modish-explore-secondary-inner">
        <div className="modish-explore-secondary-heading" aria-hidden="true" />
        <div className="modish-explore-secondary-list">
          {categories.map((item) => (
            <button
              key={item.label}
              type="button"
              className="modish-explore-secondary-item"
              onClick={scrollToProducts}
            >
              <img
                src={item.img}
                alt={item.label}
                className="modish-explore-secondary-thumb"
              />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
