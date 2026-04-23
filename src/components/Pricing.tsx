"use client";

import { ArrowRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const plans = [
  {
    name: "Landing Page",
    price: 15,
    description: "Trang giới thiệu đơn giản, hiệu quả.",
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
    unit: "triệu"
  },
  {
    name: "Website Doanh Nghiệp",
    price: 35,
    description: "Giải pháp toàn diện cho doanh nghiệp.",
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
    unit: "triệu"
  },
  {
    name: "E-Commerce",
    price: 60,
    description: "Website bán hàng chuyên nghiệp.",
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
    unit: "triệu"
  },
  {
    name: "Mobile App",
    price: 80,
    description: "Ứng dụng iOS & Android.",
    features: [
      "App iOS + Android",
      "React Native / Flutter",
      "UI/UX hiện đại",
      "Push notification",
      "API backend",
      "Admin dashboard",
      "Publish lên Store",
      "Bảo hành 12 tháng",
      "Hỗ trợ 24/7"
    ],
    cta: "Nhận báo giá",
    highlighted: false,
    unit: "triệu"
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading text-white mb-4">Báo giá minh bạch</h2>
            <p style={{ fontSize: 18, color: "#a6a6a6", letterSpacing: "-0.2px" }}>
              Gói dịch vụ linh hoạt, phù hợp mọi nhu cầu từ cá nhân đến doanh nghiệp.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.name} delay={idx * 100}>
              <div
                style={{
                  background: "#000",
                  borderRadius: 15,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  boxShadow: plan.highlighted
                    ? "0 0 0 1px rgba(215,172,56,0.5), 0 0 40px 10px rgba(215,172,56,0.15)"
                    : "rgba(255,255,255,0.08) 0px 0px 0px 1px",
                  position: "relative",
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
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      borderRadius: "0 0 8px 8px",
                    }}
                  >
                    Phổ biến nhất
                  </div>
                )}

                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      marginBottom: 8,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      ...(plan.highlighted
                        ? {
                            background: "linear-gradient(90deg, #d7ac38 0%, #ed3334 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }
                        : { color: "rgba(255,255,255,0.6)" }),
                    }}
                  >
                    {plan.name}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span
                      style={{
                        fontSize: 48,
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "-2px",
                        lineHeight: 1,
                      }}
                    >
                      {plan.price}
                    </span>
                    <span style={{ fontSize: 18, color: "#a6a6a6" }}>{plan.unit}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#a6a6a6", marginTop: 8 }}>
                    {plan.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className={plan.highlighted ? "btn-primary" : "btn-frosted"}
                  style={{ justifyContent: "center", padding: "11px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}
                >
                  {plan.cta}
                  <ArrowRight size={16} />
                </a>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.7)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, rgba(215,172,56,0.2) 0%, rgba(237,51,52,0.2) 100%)",
                          border: "1px solid rgba(215,172,56,0.4)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Check size={12} style={{ stroke: "url(#check-gradient)" }} strokeWidth={3} />
                        <svg width="0" height="0">
                          <defs>
                            <linearGradient id="check-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#d7ac38" />
                              <stop offset="100%" stopColor="#ed3334" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
