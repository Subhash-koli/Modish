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
  const listRef = useRef<HTMLDivElement>(null);

  // Track whether the user is dragging vs tapping
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const updateVisibility = () => {
      const currentY = window.scrollY;
      const productsEl = document.getElementById("products");
      const productsTop = productsEl ? productsEl.offsetTop - 120 : 600;
      const delta = currentY - lastScrollY.current;

      if (currentY < productsTop) {
        setVisible(true);
      } else {
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

  // Native touch scroll handling — much more reliable than CSS alone
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let startX = 0;
    let startScrollLeft = 0;
    let isDown = false;

    const onTouchStart = (e: TouchEvent) => {
      isDown = true;
      isDragging.current = false;
      startX = e.touches[0].clientX;
      startScrollLeft = list.scrollLeft;
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      const dx = e.touches[0].clientX - startX;
      const dy = Math.abs(e.touches[0].clientY - (touchStartY.current ?? 0));
      const absDx = Math.abs(dx);

      // If horizontal movement dominates → it's a horizontal drag
      if (absDx > dy && absDx > 5) {
        isDragging.current = true;
        // Prevent the page from scrolling vertically during horizontal drag
        e.preventDefault();
        list.scrollLeft = startScrollLeft - dx;
      }
    };

    const onTouchEnd = () => {
      isDown = false;
      // Reset drag flag after a short delay so onClick can check it first
      setTimeout(() => { isDragging.current = false; }, 150);
    };

    list.addEventListener("touchstart", onTouchStart, { passive: true });
    list.addEventListener("touchmove", onTouchMove, { passive: false }); // non-passive to allow preventDefault
    list.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      list.removeEventListener("touchstart", onTouchStart);
      list.removeEventListener("touchmove", onTouchMove);
      list.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const scrollToCategory = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleItemClick = (targetId: string) => {
    // Block navigation if user was dragging the list horizontally
    if (isDragging.current) return;
    scrollToCategory(targetId);
  };

  return (
    <div
      className={`modish-explore-secondary-nav${visible ? " visible" : ""}`}
      aria-label="Explore our range secondary navigation"
    >
      <div className="modish-explore-secondary-inner">
        <div className="modish-explore-secondary-heading" aria-hidden="true" />
        <div
          ref={listRef}
          className="modish-explore-secondary-list"
        >
          {categories.map((item) => (
            <button
              key={item.label}
              type="button"
              className="modish-explore-secondary-item"
              onClick={() => handleItemClick(item.targetId)}
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
