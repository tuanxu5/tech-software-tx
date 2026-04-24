"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, Palette, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tư vấn & Phân tích",
    icon: MessageSquare,
    description:
      "Gặp gỡ trao đổi yêu cầu chi tiết. Phân tích đối thủ, nghiên cứu thị trường. Đề xuất giải pháp tối ưu cho doanh nghiệp.",
    duration: "1-2 ngày",
    details: [
      "Họp kickoff meeting với khách hàng",
      "Thu thập yêu cầu chi tiết về tính năng",
      "Phân tích đối thủ cạnh tranh",
      "Nghiên cứu thị trường và target audience",
      "Đề xuất giải pháp công nghệ phù hợp",
      "Lập kế hoạch timeline và budget"
    ],
  },
  {
    number: "02",
    title: "Thiết kế UI/UX",
    icon: Palette,
    description:
      "Wireframe & mockup chi tiết. Thiết kế giao diện hiện đại, trải nghiệm mượt mà. Xác nhận với khách hàng trước khi code.",
    duration: "3-5 ngày",
    details: [
      "Vẽ wireframe cho tất cả màn hình",
      "Thiết kế mockup high-fidelity",
      "Tạo design system và style guide",
      "Prototype tương tác với Figma",
      "Review và điều chỉnh theo feedback",
      "Xuất assets cho developer"
    ],
  },
  {
    number: "03",
    title: "Phát triển",
    icon: Code,
    description:
      "Code theo chuẩn best practices. Responsive hoàn hảo mọi thiết bị. Tối ưu hiệu suất & SEO. Demo hàng tuần.",
    duration: "7-14 ngày",
    details: [
      "Setup project structure và environment",
      "Code frontend theo design đã duyệt",
      "Phát triển backend API và database",
      "Tích hợp third-party services",
      "Responsive design cho mobile/tablet",
      "Tối ưu performance và SEO",
      "Demo tiến độ hàng tuần"
    ],
  },
  {
    number: "04",
    title: "Testing & QA",
    icon: TestTube,
    description:
      "Test kỹ lưỡng trên nhiều thiết bị. Fix bug, tối ưu cuối cùng. Đảm bảo chất lượng trước khi launch.",
    duration: "2-3 ngày",
    details: [
      "Unit testing và integration testing",
      "Cross-browser testing",
      "Responsive testing trên nhiều thiết bị",
      "Performance testing và optimization",
      "Security testing",
      "User acceptance testing (UAT)",
      "Fix bugs và polish UI"
    ],
  },
  {
    number: "05",
    title: "Deploy & Launch",
    icon: Rocket,
    description:
      "Deploy lên server production. Cấu hình domain, SSL, CDN. Monitoring và đảm bảo website chạy ổn định.",
    duration: "1-2 ngày",
    details: [
      "Setup server và database production",
      "Cấu hình domain và SSL certificate",
      "Deploy code lên production",
      "Setup CDN và caching",
      "Cấu hình monitoring và logging",
      "Final check trước khi go-live",
      "Đào tạo khách hàng sử dụng CMS"
    ],
  },
  {
    number: "06",
    title: "Bảo hành & Hỗ trợ",
    icon: HeadphonesIcon,
    description:
      "Bảo hành 3-12 tháng tùy gói. Hỗ trợ kỹ thuật nhanh chóng. Cập nhật nội dung miễn phí. Tư vấn marketing online.",
    duration: "Liên tục",
    details: [
      "Bảo hành 3-12 tháng tùy gói",
      "Fix bugs phát sinh miễn phí",
      "Hỗ trợ kỹ thuật qua Zalo/Email",
      "Cập nhật nội dung theo yêu cầu",
      "Backup dữ liệu định kỳ",
      "Tư vấn SEO và marketing online",
      "Nâng cấp tính năng (có phí)"
    ],
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll spy - detect which step is in view within the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollCenter = scrollPosition + windowHeight / 2;

      // Find which step is closest to center of viewport
      let closestStep = 0;
      let closestDistance = Infinity;

      stepRefs.current.forEach((stepElement, idx) => {
        if (stepElement) {
          const stepTop = stepElement.getBoundingClientRect().top + window.scrollY;
          const stepHeight = stepElement.offsetHeight;
          const stepCenter = stepTop + stepHeight / 2;
          const distance = Math.abs(scrollCenter - stepCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestStep = idx;
          }
        }
      });

      setActiveStep(closestStep);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to step when clicking navigation
  const scrollToStep = (index: number) => {
    stepRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="process" 
      style={{ 
        padding: "120px 32px 120px 32px", 
        background: "#000",
        position: "relative",
        overflow: "visible",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", overflow: "visible" }}>
        {/* Two Column Layout - Left Sticky, Right Scrolls */}
        <div style={{ display: "flex", gap: "80px", alignItems: "flex-start", position: "relative", minHeight: "100vh" }}>
          {/* Left Column - Navigation (Sticky) */}
          <div 
            style={{ 
              width: "300px", 
              flexShrink: 0,
              position: "sticky",
              top: "50%",
              transform: "translateY(-50%)",
              alignSelf: "flex-start",
              height: "fit-content",
              zIndex: 10,
              marginTop: "240px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = idx === activeStep;

                return (
                  <div
                    key={step.number}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      opacity: isActive ? 1 : 0.5,
                      transform: isActive ? "translateX(8px)" : "translateX(0)",
                    }}
                    onClick={() => scrollToStep(idx)}
                  >
                    {/* Icon Circle */}
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background: isActive
                          ? "linear-gradient(135deg, rgba(215, 172, 56, 0.15), rgba(237, 51, 52, 0.15))"
                          : "rgba(255,255,255,0.04)",
                        border: isActive
                          ? "1px solid rgba(215, 172, 56, 0.4)"
                          : "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.3s ease",
                        position: "relative",
                      }}
                    >
                      <StepIcon 
                        size={24} 
                        style={{ 
                          stroke: isActive ? "#d7ac38" : "rgba(255,255,255,0.4)",
                          transition: "all 0.3s ease",
                        }}
                        strokeWidth={2}
                      />
                      
                      {/* Number badge */}
                      <div
                        style={{
                          position: "absolute",
                          top: "-6px",
                          right: "-6px",
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          background: isActive
                            ? "linear-gradient(135deg, #d7ac38 0%, #ed3334 100%)"
                            : "rgba(255,255,255,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                          fontWeight: 700,
                          color: isActive ? "#000" : "rgba(255,255,255,0.5)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Title */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: "15px",
                          fontWeight: 700,
                          background: isActive ? "linear-gradient(90deg, #d7ac38, #ed3334)" : "transparent",
                          WebkitBackgroundClip: isActive ? "text" : "unset",
                          WebkitTextFillColor: isActive ? "transparent" : "rgba(255,255,255,0.5)",
                          backgroundClip: isActive ? "text" : "unset",
                          color: isActive ? "transparent" : "rgba(255,255,255,0.5)",
                          transition: "all 0.3s ease",
                          lineHeight: 1.3,
                        }}
                      >
                        {step.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Content (Scrollable) */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "40px" }}>
            {/* Header */}
            <div className="fade-in-up" style={{ marginBottom: 40 }}>
              <h2 className="section-heading text-white" style={{ marginBottom: 20 }}>
                Quy trình làm việc
              </h2>
              <p
                style={{
                  fontSize: 19,
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: 680,
                  lineHeight: 1.6,
                }}
              >
                Quy trình 6 bước minh bạch, chuyên nghiệp. Từ ý tưởng đến website hoàn chỉnh
              </p>
            </div>

            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              
              return (
                <div
                  key={step.number}
                  ref={(el) => { stepRefs.current[idx] = el; }}
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "24px",
                    padding: "48px",
                    minHeight: "500px",
                    scrollMarginTop: "100px",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  {/* Header */}
                  <div style={{ marginBottom: "24px" }}>
                    <h3
                      style={{
                        fontSize: "36px",
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "-1px",
                        lineHeight: 1.2,
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.75)",
                      marginBottom: "32px",
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Details Grid */}
                  <div 
                    style={{ 
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                      gap: "16px",
                    }}
                  >
                    {step.details.map((detail, detailIdx) => (
                      <div
                        key={detailIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          padding: "12px 16px",
                          background: "rgba(255,255,255,0.03)",
                          borderRadius: "12px",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #d7ac38 0%, #ed3334 100%)",
                            marginTop: "6px",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "15px",
                            color: "rgba(255,255,255,0.7)",
                            lineHeight: 1.6,
                          }}
                        >
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center" style={{ marginTop: "80px" }}>
          <a
            href="/contact"
            className="btn-primary"
            style={{ padding: "18px 36px", fontSize: "18px", fontWeight: 600 }}
          >
            Bắt đầu dự án ngay
          </a>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="display: flex; gap: 80px"] {
            flex-direction: column !important;
            gap: 40px !important;
          }
          div[style*="width: 300px"] {
            width: 100% !important;
            position: relative !important;
          }
          div[style*="flex-direction: column; gap: 24px"] {
            flex-direction: row !important;
            overflow-x: auto !important;
          }
        }
        @media (max-width: 768px) {
          section {
            padding: 80px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
