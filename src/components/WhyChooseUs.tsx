"use client";

import { useState } from "react";
import { 
  Zap, 
  Gem, 
  CircleDollarSign, 
  MessageCircle,
  Palette,
  Gauge,
  ShieldCheck,
  LayoutDashboard
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    icon: Palette,
    title: "Website & Mobile App",
    description:
      "Phát triển đa nền tảng: website responsive, ứng dụng iOS/Android. React Native, Flutter, Next.js.",
  },
  {
    icon: Gauge,
    title: "Hiệu suất & SEO",
    description:
      "Tải nhanh < 2s, Lighthouse 90+. Tối ưu SEO on-page, tăng thứ hạng Google tự nhiên.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo mật & Ổn định",
    description:
      "SSL miễn phí, backup tự động, monitoring 24/7. Uptime 99.9%, dữ liệu luôn an toàn.",
  },
  {
    icon: LayoutDashboard,
    title: "Quản trị dễ dàng",
    description:
      "CMS trực quan, cập nhật nội dung trong vài phút. Đào tạo miễn phí cho team.",
  },
  {
    icon: Zap,
    title: "Đúng deadline",
    description:
      "99% dự án giao đúng hạn. Quy trình chuyên nghiệp, cập nhật tiến độ hàng tuần.",
  },
  {
    icon: Gem,
    title: "Chất lượng cao",
    description:
      "Code sạch, chuẩn best practices. Test kỹ lưỡng trên nhiều thiết bị.",
  },
  {
    icon: CircleDollarSign,
    title: "Giá hợp lý",
    description:
      "Báo giá minh bạch, không phát sinh. Thanh toán linh hoạt, ưu đãi khách hàng lâu dài.",
  },
  {
    icon: MessageCircle,
    title: "Hỗ trợ tận tâm",
    description:
      "Tư vấn miễn phí, đào tạo sử dụng. Hỗ trợ kỹ thuật nhanh chóng sau bàn giao.",
  },
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{
        padding: "120px 32px",
        background: "#000",
        position: "relative",
        overflow: "hidden",
        scrollMarginTop: "100px",
      }}
    >
      {/* Background gradient orb */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(215, 172, 56, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <ScrollReveal>
          <div className="text-center" style={{ marginBottom: 80 }}>
            <h2 
              className="section-heading text-white" 
              style={{ 
                marginBottom: 20,
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Tại sao chọn Tx Tech?
            </h2>
            <p
              style={{
                fontSize: 19,
                color: "rgba(255,255,255,0.6)",
                maxWidth: 680,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Dịch vụ toàn diện & chất lượng vượt trội
            </p>
          </div>
        </ScrollReveal>

        {/* Grid - 4 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            const isHovered = hoveredIndex === idx;
            
            return (
              <ScrollReveal key={reason.title} delay={idx * 80}>
                <div
                  style={{
                    background: isHovered
                      ? "linear-gradient(135deg, rgba(215, 172, 56, 0.05) 0%, rgba(237, 51, 52, 0.05) 100%)"
                      : "rgba(255,255,255,0.02)",
                    border: `1px solid ${isHovered ? "rgba(215,172,56,0.2)" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "20px",
                    padding: "32px",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "default",
                    position: "relative",
                    overflow: "hidden",
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start", height: "100%" }}>
                    {/* Icon with gradient background */}
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "14px",
                        background: "linear-gradient(135deg, rgba(215, 172, 56, 0.15) 0%, rgba(237, 51, 52, 0.15) 100%)",
                        border: "1px solid rgba(215,172,56,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.4s ease",
                        boxShadow: isHovered ? "0 0 20px rgba(215, 172, 56, 0.3)" : "none",
                      }}
                    >
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id={`icon-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#d7ac38" />
                            <stop offset="100%" stopColor="#ed3334" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <Icon 
                        size={28} 
                        stroke={`url(#icon-grad-${idx})`}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#fff",
                          letterSpacing: "-0.5px",
                          marginBottom: "8px",
                          lineHeight: 1.3,
                        }}
                      >
                        {reason.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.6)",
                        }}
                      >
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
