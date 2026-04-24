"use client";

import { useState } from "react";
import { 
  Palette, 
  Gauge, 
  ShieldCheck, 
  LayoutDashboard 
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    title: "Website & Mobile App",
    description:
      "Phát triển website responsive và ứng dụng iOS/Android. Giao diện đẹp mắt, trải nghiệm mượt mà. React Native, Flutter cho mobile. Next.js, React cho web.",
    icon: Palette,
  },
  {
    title: "Tối ưu hiệu suất & SEO",
    description:
      "Website tải nhanh, điểm Lighthouse 90+. Tối ưu SEO on-page, cấu trúc dữ liệu schema. Tăng thứ hạng Google, thu hút khách hàng tự nhiên.",
    icon: Gauge,
  },
  {
    title: "Bảo mật & Ổn định",
    description:
      "SSL miễn phí, bảo vệ khỏi tấn công phổ biến. Backup tự động, monitoring 24/7. Uptime 99.9%, dữ liệu luôn an toàn.",
    icon: ShieldCheck,
  },
  {
    title: "Quản trị nội dung dễ dàng",
    description:
      "CMS trực quan, không cần kiến thức kỹ thuật. Cập nhật nội dung, hình ảnh trong vài phút. Đào tạo sử dụng miễn phí cho team.",
    icon: LayoutDashboard,
  },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" style={{ padding: "100px 32px 120px", background: "#000", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header - left aligned */}
        <ScrollReveal>
          <div style={{ marginBottom: 64, maxWidth: 600 }}>
            <h2 className="section-heading text-white" style={{ marginBottom: 16, textAlign: "left" }}>
              Dịch vụ
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.6,
              }}
            >
              Website & mobile app từ thiết kế đến triển khai
            </p>
          </div>
        </ScrollReveal>

        {/* Feature list - simple vertical stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === idx;
            
            return (
              <ScrollReveal key={feature.title} delay={idx * 80}>
                <div
                  style={{
                    background: isHovered ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
                    borderTop: idx === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    padding: "32px 0",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}>
                    {/* Icon */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        opacity: isHovered ? 1 : 0.6,
                      }}
                    >
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id={`feature-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#d7ac38" />
                            <stop offset="100%" stopColor="#ed3334" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <Icon size={28} stroke={`url(#feature-grad-${idx})`} strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: 22,
                          fontWeight: 600,
                          lineHeight: 1.3,
                          color: "#ffffff",
                          marginBottom: "8px",
                        }}
                      >
                        {feature.title}
                      </h3>

                      <p
                        style={{
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.5)",
                          marginBottom: 0,
                          maxWidth: 720,
                        }}
                      >
                        {feature.description}
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
