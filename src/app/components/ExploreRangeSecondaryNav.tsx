import { useEffect, useRef, useState } from "react";
import img3_tshirts from "../../imports/Modish catalog/3.webp";
import img6_oversized from "../../imports/Modish catalog/6.webp";
import img9_polo from "../../imports/Modish catalog/9.webp";
import img12_hoodies from "../../imports/Modish catalog/12.webp";
import img15_gymvest from "../../imports/Modish catalog/15.webp";
import img17_accessories from "../../imports/Modish catalog/17.webp";

const categories = [
  { label: "T-Shirts", img: img3_tshirts, targetId: "round-neck" },
  { label: "Oversized", img: img6_oversized, targetId: "oversized" },
  { label: "Polos", img: img9_polo, targetId: "polo" },
  { label: "Hoodies", img: img12_hoodies, targetId: "hoodie" },
  { label: "Gym Vests", img: img15_gymvest, targetId: "gym-vest" },
  { label: "Accessories", img: img17_accessories, targetId: "tote-bag" },
];

export function ExploreRangeSecondaryNav() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateVisibility = () => {
      const currentY = window.scrollY;
      const productsEl = document.getElementById("products");
      const productsTop = productsEl ? productsEl.offsetTop - 120 : 600;
      const delta = currentY - lastScrollY.current;

      // If we are above the products section, keep it visible in normal flow
      if (currentY < productsTop) {
        setVisible(true);
      } else {
        // Hide on scroll down, show on scroll up
        if (delta > 8) {
          setVisible(false);
        } else if (delta < -8) {
          setVisible(true);
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToCategory = (targetId: string) => {
    const target = document.getElementById(targetId);
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
              onClick={() => scrollToCategory(item.targetId)}
            >
              <img
                src={item.img}
                alt={`${item.label} category custom merchandise`}
                width={48}
                height={48}
                loading="lazy"
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
