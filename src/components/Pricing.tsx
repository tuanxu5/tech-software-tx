"use client";

import { ArrowRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const webPlans = [
  {
    name: "Landing Page",
    price: 15,
    description: "Trang giới thiệu đơn giản, hiệu quả cho cá nhân và startup.",
    features: [
      "1 trang landing page",
      "Responsive mobile/tablet",
      "Tối ưu SEO cơ bản",
      "Form liên hệ",
      "Hosting 1 năm miễn phí",
      "Bảo hành 3 tháng"
    ],
    cta: "Nhận báo giá",
    highlighted: false,
  },
  {
    name: "Website Doanh Nghiệp",
    price: 35,
    description: "Giải pháp toàn diện cho doanh nghiệp vừa và nhỏ.",
    features: [
      "5-10 trang nội dung",
      "CMS quản trị dễ dùng",
      "Tích hợp Google Analytics",
      "Tối ưu SEO chuyên sâu",
      "Live chat / Chatbot",
      "Hosting 1 năm miễn phí",
      "Bảo hành 6 tháng",
      "Hỗ trợ ưu tiên"
    ],
    cta: "Nhận báo giá",
    highlighted: true,
  },
  {
    name: "E-Commerce",
    price: 60,
    description: "Website bán hàng chuyên nghiệp với đầy đủ tính năng.",
    features: [
      "Quản lý sản phẩm không giới hạn",
      "Giỏ hàng & thanh toán",
      "Tích hợp VNPay/Momo/COD",
      "Quản lý đơn hàng",
      "Báo cáo doanh thu",
      "SEO & Marketing tools",
      "Hosting 1 năm miễn phí",
      "Bảo hành 12 tháng",
      "Hỗ trợ 24/7"
    ],
    cta: "Nhận báo giá",
    highlighted: false,
  },
];

const appPlans = [
  {
    name: "App Cơ Bản",
    price: 50,
    description: "Ứng dụng mobile đơn giản cho iOS hoặc Android.",
    features: [
      "1 nền tảng (iOS hoặc Android)",
      "5-7 màn hình chính",
      "UI/UX hiện đại",
      "Push notification",
      "API backend cơ bản",
      "Publish lên Store",
      "Bảo hành 6 tháng",
      "Hỗ trợ kỹ thuật"
    ],
    cta: "Nhận báo giá",
    highlighted: false,
  },
  {
    name: "App Nâng Cao",
    price: 80,
    description: "Ứng dụng đa nền tảng với tính năng phong phú.",
    features: [
      "iOS + Android (React Native)",
      "10-15 màn hình",
      "UI/UX chuyên nghiệp",
      "Push notification nâng cao",
      "API backend đầy đủ",
      "Admin dashboard",
      "Tích hợp thanh toán",
      "Publish lên Store",
      "Bảo hành 12 tháng",
      "Hỗ trợ 24/7"
    ],
    cta: "Nhận báo giá",
    highlighted: true,
  },
  {
    name: "App Enterprise",
    price: 150,
    description: "Giải pháp doanh nghiệp với tính năng tùy chỉnh cao.",
    features: [
      "iOS + Android (Native/Flutter)",
      "Không giới hạn màn hình",
      "UI/UX cao cấp, tùy chỉnh",
      "Real-time features",
      "Microservices backend",
      "Admin + Analytics dashboard",
      "Tích hợp đa dịch vụ",
      "CI/CD pipeline",
      "Publish + Maintain Store",
      "Bảo hành 24 tháng",
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
            <h2 className="section-heading text-white" style={{ marginBottom: 20 }}>
              Báo giá minh bạch
            </h2>
            <p style={{ fontSize: 19, color: "rgba(255,255,255,0.6)", letterSpacing: "-0.2px", lineHeight: 1.6, maxWidth: 680, margin: "0 auto" }}>
              Gói dịch vụ linh hoạt, phù hợp mọi nhu cầu từ cá nhân đến doanh nghiệp
            </p>
          </div>
        </ScrollReveal>

        {/* Website Plans */}
        <ScrollReveal>
          <div style={{ marginBottom: 60 }}>
            <h3
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 32,
                letterSpacing: "-0.8px",
                textAlign: "center",
              }}
            >
              Website Development
            </h3>
            
            <div
              className="pricing-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
            >
              {webPlans.map((plan, idx) => (
                <div
                  key={plan.name}
                  style={{
                    background: plan.highlighted 
                      ? "linear-gradient(135deg, rgba(215, 172, 56, 0.05) 0%, rgba(237, 51, 52, 0.05) 100%)"
                      : "rgba(255,255,255,0.02)",
                    border: plan.highlighted
                      ? "1px solid rgba(215,172,56,0.3)"
                      : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 20,
                    padding: "36px 28px",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.highlighted) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
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
                  {plan.highlighted && (
                    <div
                      style={{
                        position: "absolute",
                        top: -1,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "linear-gradient(90deg, #d7ac38 0%, #ed3334 100%)",
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "6px 16px",
                        borderRadius: "0 0 10px 10px",
                      }}
                    >
                      Phổ biến nhất
                    </div>
                  )}

                  <div style={{ marginBottom: 24 }}>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        marginBottom: 12,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: plan.highlighted ? "#fff" : "rgba(255,255,255,0.6)",
                      }}
                    >
                      {plan.name}
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
                      <span
                        style={{
                          fontSize: 56,
                          fontWeight: 700,
                          color: "#fff",
                          letterSpacing: "-2.5px",
                          lineHeight: 1,
                        }}
                      >
                        {plan.price}
                      </span>
                      <span style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>triệu</span>
                    </div>
                    <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, minHeight: 48 }}>
                      {plan.description}
                    </p>
                  </div>

                  <a
                    href="/contact"
                    className={plan.highlighted ? "btn-primary" : "btn-frosted"}
                    style={{ 
                      justifyContent: "center", 
                      padding: "14px 24px", 
                      fontSize: 16,
                      fontWeight: 600,
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: 8,
                      width: "100%",
                      marginBottom: 24,
                    }}
                  >
                    {plan.cta}
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </a>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          fontSize: 15,
                          color: "rgba(255,255,255,0.75)",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          lineHeight: 1.5,
                        }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, rgba(215,172,56,0.2) 0%, rgba(237,51,52,0.2) 100%)",
                            border: "1px solid rgba(215,172,56,0.4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        >
                          <Check size={12} style={{ stroke: "url(#check-gradient)" }} strokeWidth={3} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile App Plans */}
        <ScrollReveal>
          <div>
            <h3
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 32,
                letterSpacing: "-0.8px",
                textAlign: "center",
              }}
            >
              Mobile App Development
            </h3>
            
            <div
              className="pricing-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
            >
              {appPlans.map((plan, idx) => (
                <div
                  key={plan.name}
                  style={{
                    background: plan.highlighted 
                      ? "linear-gradient(135deg, rgba(215, 172, 56, 0.05) 0%, rgba(237, 51, 52, 0.05) 100%)"
                      : "rgba(255,255,255,0.02)",
                    border: plan.highlighted
                      ? "1px solid rgba(215,172,56,0.3)"
                      : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 20,
                    padding: "36px 28px",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.highlighted) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
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
                  {plan.highlighted && (
                    <div
                      style={{
                        position: "absolute",
                        top: -1,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "linear-gradient(90deg, #d7ac38 0%, #ed3334 100%)",
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "6px 16px",
                        borderRadius: "0 0 10px 10px",
                      }}
                    >
                      Phổ biến nhất
                    </div>
                  )}

                  <div style={{ marginBottom: 24 }}>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        marginBottom: 12,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: plan.highlighted ? "#fff" : "rgba(255,255,255,0.6)",
                      }}
                    >
                      {plan.name}
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
                      <span
                        style={{
                          fontSize: 56,
                          fontWeight: 700,
                          color: "#fff",
                          letterSpacing: "-2.5px",
                          lineHeight: 1,
                        }}
                      >
                        {plan.price}
                      </span>
                      <span style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>triệu</span>
                    </div>
                    <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, minHeight: 48 }}>
                      {plan.description}
                    </p>
                  </div>

                  <a
                    href="/contact"
                    className={plan.highlighted ? "btn-primary" : "btn-frosted"}
                    style={{ 
                      justifyContent: "center", 
                      padding: "14px 24px", 
                      fontSize: 16,
                      fontWeight: 600,
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: 8,
                      width: "100%",
                      marginBottom: 24,
                    }}
                  >
                    {plan.cta}
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </a>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          fontSize: 15,
                          color: "rgba(255,255,255,0.75)",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          lineHeight: 1.5,
                        }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, rgba(215,172,56,0.2) 0%, rgba(237,51,52,0.2) 100%)",
                            border: "1px solid rgba(215,172,56,0.4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        >
                          <Check size={12} style={{ stroke: "url(#check-gradient)" }} strokeWidth={3} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* SVG gradient for checkmarks */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="check-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d7ac38" />
              <stop offset="100%" stopColor="#ed3334" />
            </linearGradient>
          </defs>
        </svg>
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
