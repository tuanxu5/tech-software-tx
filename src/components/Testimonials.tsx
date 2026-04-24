"use client";

import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Tx Tech đã giúp chúng tôi xây dựng website bán hàng chuyên nghiệp. Giao diện đẹp, tốc độ nhanh, doanh số tăng 40% sau 2 tháng.",
    author: "Nguyễn Văn A",
    role: "Giám đốc",
    company: "Công ty TNHH ABC",
    rating: 5,
    image: "https://i.pinimg.com/1200x/da/b0/73/dab0730fa78b984f97e7ff3e9d9b7087.jpg",
  },
  {
    quote:
      "Đội ngũ làm việc rất chuyên nghiệp, tư vấn tận tình. Website được giao đúng hạn, hỗ trợ sau bán hàng tốt. Rất hài lòng!",
    author: "Trần Thị B",
    role: "Marketing Manager",
    company: "XYZ Corp",
    rating: 5,
    image: "https://i.pinimg.com/1200x/6f/73/8f/6f738f87c7b255320596ac87caaedd96.jpg",
  },
  {
    quote:
      "Giá cả hợp lý, chất lượng vượt mong đợi. Website responsive hoàn hảo, SEO tốt. Đã giới thiệu cho nhiều đối tác.",
    author: "Lê Văn C",
    role: "CEO",
    company: "Startup DEF",
    rating: 5,
    image: "https://i.pinimg.com/1200x/85/ef/dc/85efdc0549469ca884c7dd9e72870dd0.jpg",
  },
  {
    quote:
      "Mobile app được phát triển rất tốt, UI/UX đẹp mắt, performance ổn định. Khách hàng của chúng tôi rất hài lòng với app.",
    author: "Phạm Minh D",
    role: "Product Manager",
    company: "Tech Solutions",
    rating: 5,
    image: "https://i.pinimg.com/736x/0c/cc/7b/0ccc7be01455106bb7ffcdc312bfef87.jpg",
  },
  {
    quote:
      "Dịch vụ tuyệt vời! Từ tư vấn đến triển khai đều chuyên nghiệp. Website chạy mượt mà, tích hợp thanh toán dễ dàng.",
    author: "Hoàng Thị E",
    role: "Founder",
    company: "E-commerce Store",
    rating: 5,
    image: "https://i.pinimg.com/736x/f2/65/88/f265880e4cf8dbdd76f31a2a38285f21.jpg",
  },
  {
    quote:
      "Đội ngũ support nhiệt tình, giải quyết vấn đề nhanh chóng. Giá cả hợp lý, chất lượng đảm bảo. Sẽ tiếp tục hợp tác!",
    author: "Vũ Đức F",
    role: "CTO",
    company: "Digital Agency",
    rating: 5,
    image: "https://i.pinimg.com/736x/e4/71/8d/e4718d57d376d5173a11b655e5e1c76e.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleSelect = (idx: number) => {
    if (idx !== activeIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(idx);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section 
      id="testimonials" 
      style={{ 
        padding: "120px 32px", 
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <h2 
            className="section-heading text-white" 
            style={{ 
              marginBottom: 20,
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Khách hàng nói gì
          </h2>
          <p
            style={{
              fontSize: 19,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 680,
              lineHeight: 1.6,
            }}
          >
            Hơn 100+ khách hàng tin tưởng và hài lòng với dịch vụ của chúng tôi
          </p>
        </div>

        {/* Main Content - 2 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "450px 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left: Avatar circles - all 6 in circular orbit */}
          <div style={{ position: "relative", height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Background glow for active avatar */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(215, 172, 56, 0.3) 0%, transparent 70%)",
                filter: "blur(60px)",
                pointerEvents: "none",
                opacity: 0.6,
              }}
            />

            {testimonials.map((testimonial, idx) => {
              const isActive = idx === activeIndex;
              
              // Calculate circular position for all 6 avatars
              // Rotate the circle so active is always at center-left
              const angleOffset = -(activeIndex / testimonials.length) * Math.PI * 2;
              const angle = (idx / testimonials.length) * Math.PI * 2 + angleOffset;
              const radius = 220; // Increased for more spacing between avatars
              const centerX = 80; // Moved further left from 100 to 80
              const centerY = 250;
              const x = centerX + Math.cos(angle) * radius;
              const y = centerY + Math.sin(angle) * radius;
              
              // Calculate normalized angle (0 to 2π)
              const normalizedAngle = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
              
              // Only show 3 avatars: 
              // - Active at center-left (angle ~0)
              // - One at top-right (angle ~-60deg to -90deg)
              // - One at bottom-right (angle ~60deg to 90deg)
              // Hide all others (left side and far right)
              const isVisible = normalizedAngle < Math.PI * 0.5 || normalizedAngle > Math.PI * 1.5;
              
              // Calculate scale based on position - smooth transition
              // Active (angle ~0) = 1.0, others = 0.5
              let scale = 1.0;
              if (!isActive) {
                // Distance from active position (angle 0)
                const distanceFromActive = Math.min(
                  Math.abs(normalizedAngle),
                  Math.abs(normalizedAngle - Math.PI * 2)
                );
                // Scale from 0.5 to 1.0 based on distance
                scale = 0.5 + (1 - Math.min(distanceFromActive / Math.PI, 1)) * 0.5;
              }
              
              const baseSize = isActive ? 260 : 130;
              const size = baseSize * scale;

              return (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    zIndex: isActive ? 10 : Math.round(scale * 5),
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                  onClick={() => handleSelect(idx)}
                >
                  {/* Glow effect - fade in/out smoothly */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "-20px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(215, 172, 56, 0.4) 0%, transparent 70%)",
                      filter: "blur(30px)",
                      pointerEvents: "none",
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 0.8s ease",
                    }}
                  />

                  {/* Avatar with gradient border - always same structure */}
                  <div
                    style={{
                      width: `${baseSize}px`,
                      height: `${baseSize}px`,
                      borderRadius: "50%",
                      background: isActive 
                        ? "linear-gradient(135deg, #d7ac38 0%, #ed3334 100%)"
                        : "rgba(100, 100, 100, 0.4)",
                      padding: isActive ? "3px" : "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: isActive 
                        ? "0 0 20px rgba(215, 172, 56, 0.2)"
                        : "none",
                      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {/* Inner wrapper with padding for gap */}
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background: "#000",
                        padding: isActive ? "12px" : "0px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          overflow: "hidden",
                          position: "relative",
                          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          style={{
                            objectFit: "cover",
                          }}
                          sizes={isActive ? "240px" : "120px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Content */}
          <div
            key={activeIndex}
            style={{
              animation: isTransitioning ? "fadeOut 0.3s ease" : "fadeInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* Quote icon */}
            <div style={{ marginBottom: "32px" }}>
              <Quote size={56} stroke="rgba(255,255,255,0.8)" strokeWidth={1.5} />
            </div>

            {/* Quote text */}
            <p
              style={{
                fontSize: "28px",
                lineHeight: 1.6,
                color: "#fff",
                fontStyle: "italic",
                marginBottom: "24px",
                fontWeight: 500,
                maxWidth: "600px",
              }}
            >
              {activeTestimonial.quote}
            </p>

            {/* Stars - replace closing quote */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i}
                  size={24} 
                  fill="url(#star-gradient)" 
                  stroke="url(#star-gradient)"
                  strokeWidth={1.5}
                  style={{
                    animation: `starPop 0.4s ease ${i * 0.1}s both`,
                  }}
                />
              ))}
            </div>

            {/* SVG gradient for stars */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <defs>
                <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d7ac38" />
                  <stop offset="100%" stopColor="#ed3334" />
                </linearGradient>
              </defs>
            </svg>

            {/* Author info */}
            <div style={{ marginBottom: "40px" }}>
              <div 
                style={{ 
                  fontSize: "20px", 
                  fontWeight: 700, 
                  color: "#fff",
                  marginBottom: "8px",
                }}
              >
                {activeTestimonial.author}
              </div>
              <div 
                style={{ 
                  fontSize: "16px", 
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "4px",
                }}
              >
                {activeTestimonial.role}
              </div>
              <div 
                style={{ 
                  fontSize: "15px", 
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {activeTestimonial.company}
              </div>
            </div>

            {/* Progress dots */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  style={{
                    width: idx === activeIndex ? "40px" : "8px",
                    height: "8px",
                    borderRadius: "100px",
                    background:
                      idx === activeIndex
                        ? "linear-gradient(90deg, #d7ac38, #ed3334)"
                        : "rgba(255,255,255,0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes starPop {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(10deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: 450px 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          div[style*="height: 500px"] {
            height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}
