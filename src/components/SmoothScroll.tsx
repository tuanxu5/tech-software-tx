"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Handle smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.hash) {
        const href = anchor.getAttribute("href");
        if (href?.startsWith("#")) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            const navHeight = 88; // Height of fixed nav + padding (56 + 32)
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
            
            // Update URL without jumping
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    document.addEventListener("click", handleClick);
    
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
