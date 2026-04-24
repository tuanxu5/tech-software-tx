"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #d7ac38 0%, #ed3334 100%)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isPointer ? 0.8 : 1})`,
          transition: "transform 0.15s ease-out",
          opacity: isVisible ? 1 : 0,
          mixBlendMode: "screen",
        }}
      />

      {/* Outer ring */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "2px solid rgba(215, 172, 56, 0.4)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isPointer ? 1.5 : 1})`,
          transition: "transform 0.2s ease-out",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Gradient glow effect */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(215, 172, 56, 0.15) 0%, rgba(237, 51, 52, 0.1) 30%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 9997,
          transform: `translate(${position.x - 100}px, ${position.y - 100}px)`,
          transition: "transform 0.3s ease-out",
          opacity: isVisible ? 1 : 0,
          filter: "blur(40px)",
        }}
      />

      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
