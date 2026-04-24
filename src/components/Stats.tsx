"use client";

import { useState, useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: 50, suffix: "+", label: "Dự án hoàn thành" },
  { value: 40, suffix: "+", label: "Khách hàng hài lòng" },
  { value: 5, suffix: "+", label: "Năm kinh nghiệm" },
  { value: 99, suffix: "%", label: "Đúng deadline" },
];

function CountUp({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="gradient-text group-hover:scale-110 transition-transform duration-300"
      style={{
        fontSize: "clamp(48px, 6vw, 72px)",
        fontWeight: 800,
        lineHeight: 1,
        letterSpacing: "-2px",
        marginBottom: 12,
      }}
    >
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section style={{ padding: "80px 24px", background: "#000" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        >
          {stats.map((stat, idx) => (
            <ScrollReveal key={stat.label} delay={idx * 100}>
              <div className="text-center group cursor-default">
                <CountUp end={stat.value} suffix={stat.suffix} />
                <div
                  style={{
                    fontSize: 16,
                    color: "#a6a6a6",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
