"use client";

import { ArrowRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const webPlans = [
  {
    name: "Website Cơ Bản",
    price: 3000000,
    description: "Giải pháp nhanh cho cá nhân và startup mới khởi nghiệp",
    features: [
      "Responsive design trên mọi thiết bị",
      "SEO cơ bản, tối ưu Google",
      "Form liên hệ, đăng ký",
      "Thời gian bàn giao: 3-5 ngày",
      "Tặng hosting 1 năm",
      "Tên miền .com miễn phí",
      "SSL certificate bảo mật",
      "Hỗ trợ kỹ thuật 24/7",
      "Bảo hành 3 tháng"
    ],
    cta: "Nhận báo giá",
    highlighted: false,
  },
  {
    name: "Website Doanh Nghiệp",
    price: 8000000,
    description: "Giải pháp toàn diện cho doanh nghiệp vừa và nhỏ",
    features: [
      "UI/UX chuyên nghiệp, hiện đại",
      "SEO nâng cao, chuẩn Google",
      "CMS quản trị dễ dàng",
      "Thời gian bàn giao: 1-2 tuần",
      "Tích hợp Google Analytics",
      "Tối ưu tốc độ tải trang",
      "Responsive hoàn hảo",
      "Bảo trì 3 tháng miễn phí",
      "Đào tạo sử dụng CMS",
      "Backup tự động hàng ngày",
      "Hỗ trợ ưu tiên"
    ],
    cta: "Nhận báo giá",
    highlighted: true,
  },
  {
    name: "Website Cao Cấp",
    price: 12000000,
    description: "Giải pháp chuyên nghiệp cho doanh nghiệp lớn và tập đoàn",
    features: [
      "UI/UX cao cấp, thiết kế riêng",
      "SEO chuyên sâu, đa ngôn ngữ",
      "CMS tùy chỉnh linh hoạt",
      "Thời gian bàn giao: 2-3 tuần",
      "Tích hợp API bên thứ 3",
      "Tối ưu hiệu suất tối đa",
      "Bảo mật nâng cao SSL",
      "Live chat & Chatbot AI",
      "Dashboard analytics chi tiết",
      "Bảo trì 6 tháng miễn phí",
      "Đào tạo team toàn diện",
      "Hỗ trợ 24/7 ưu tiên cao"
    ],
    cta: "Nhận báo giá",
    highlighted: false,
  },
];

const appPlans = [
  {
    name: "App Cơ Bản",
    price: 8000000,
    description: "Ứng dụng mobile cho iOS hoặc Android",
    features: [
      "iOS & Android cross-platform",
      "UI/UX hiện đại, mượt mà",
      "Thời gian bàn giao: 3-4 tuần",
      "Backend API đầy đủ",
      "Push notification",
      "Tích hợp Firebase",
      "In-app purchase (nếu cần)",
      "Upload lên App Store & Play Store",
      "Bảo hành 3 tháng"
    ],
    cta: "Nhận báo giá",
    highlighted: false,
  },
  {
    name: "App Doanh Nghiệp",
    price: 14000000,
    description: "Ứng dụng đa nền tảng với tính năng đầy đủ",
    features: [
      "iOS & Android (React Native)",
      "UI/UX chuyên nghiệp, tùy chỉnh",
      "Thời gian bàn giao: 4-6 tuần",
      "Backend API mạnh mẽ",
      "Push notification nâng cao",
      "Admin dashboard quản trị",
      "Tích hợp thanh toán online",
      "Real-time sync & updates",
      "Analytics & reporting",
      "Upload & maintain Store",
      "Bảo hành 6 tháng",
      "Hỗ trợ 24/7"
    ],
    cta: "Nhận báo giá",
    highlighted: true,
  },
  {
    name: "App Cao Cấp",
    price: 18000000,
    description: "Giải pháp doanh nghiệp với khả năng mở rộng cao",
    features: [
      "iOS & Android (Native/Flutter)",
      "UI/UX cao cấp, thiết kế riêng",
      "Thời gian bàn giao: 6-8 tuần",
      "Microservices architecture",
      "Real-time features đầy đủ",
      "Admin & Analytics dashboard",
      "Tích hợp đa dịch vụ API",
      "Payment gateway đa kênh",
      "AI/ML features (nếu cần)",
      "CI/CD automation",
      "Security & encryption cao",
      "Upload & maintain Store",
      "Bảo hành 12 tháng",
      "Dedicated support 24/7"
    ],
    cta: "Nhận báo giá",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "120px 32px", position: "relative", overflow: "hidden" }}>
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(215, 172, 56, 0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
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
              Báo giá minh bạch
            </h2>
            <p style={{ fontSize: 19, color: "rgba(255,255,255,0.6)", letterSpacing: "-0.2px", lineHeight: 1.6, maxWidth: 680, margin: "0 auto" }}>
              Gói dịch vụ linh hoạt, phù hợp mọi nhu cầu từ cá nhân đến doanh nghiệp
            </p>
          </div>
        </ScrollReveal>

        {/* All Plans in One Grid */}
        <ScrollReveal>
          <div
            className="pricing-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
              maxWidth: 1200,
              margin: "0 auto",
              alignItems: "stretch",
            }}
          >
            {[...webPlans, ...appPlans].map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: plan.highlighted 
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.02)",
                  border: plan.highlighted
                    ? "1px solid rgba(215, 172, 56, 0.3)"
                    : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  height: "100%",
                  transform: plan.highlighted ? "translateY(-4px)" : "translateY(0)",
                }}
                onMouseEnter={(e) => {
                  if (!plan.highlighted) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(215, 172, 56, 0.2)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.highlighted) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: 24 }}>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      marginBottom: 8,
                      color: "#fff",
                    }}
                  >
                    {plan.name}
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: 16 }}>
                    {plan.description}
                  </p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span
                      style={{
                        fontSize: 48,
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "-2px",
                      }}
                    >
                      {plan.price.toLocaleString('vi-VN')}
                    </span>
                    <span style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>đ</span>
                  </div>
                </div>

                {/* Features */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 24 }}>
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.7)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        lineHeight: 1.5,
                      }}
                    >
                      <Check size={16} style={{ stroke: "#d7ac38", flexShrink: 0, marginTop: 2 }} strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/contact"
                  className={plan.highlighted ? "btn-primary" : "btn-frosted"}
                  style={{ 
                    justifyContent: "center", 
                    padding: "12px 20px", 
                    fontSize: 15,
                    fontWeight: 600,
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: 8,
                    width: "100%",
                  }}
                >
                  {plan.cta}
                  <ArrowRight size={16} strokeWidth={2.5} />
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Mobile responsive */}
      <style jsx>{`
        @media (max-width: 968px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
          section {
            padding: 80px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
