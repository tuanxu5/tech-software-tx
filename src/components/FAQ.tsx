"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Thời gian hoàn thành dự án là bao lâu?",
    answer:
      "Tùy thuộc vào quy mô dự án. Website cơ bản: 3-5 ngày. Website doanh nghiệp: 1-2 tuần. Website cao cấp: 2-3 tuần. App cơ bản: 3-4 tuần. App doanh nghiệp: 4-6 tuần. App cao cấp: 6-8 tuần. Chúng tôi cam kết giao đúng deadline đã thỏa thuận.",
  },
  {
    question: "Chi phí phát triển là bao nhiêu?",
    answer:
      "Website: từ 3-12 triệu. Mobile app: từ 8-18 triệu. Cụ thể: Website cơ bản 3tr, Website doanh nghiệp 8tr, Website cao cấp 12tr. App cơ bản 8tr, App doanh nghiệp 14tr, App cao cấp 18tr. Liên hệ để được tư vấn chi tiết và báo giá chính xác.",
  },
  {
    question: "Tôi có được sở hữu source code không?",
    answer:
      "Có, bạn sở hữu 100% source code sau khi thanh toán đầy đủ. Chúng tôi cung cấp file source, tài liệu hướng dẫn, và hỗ trợ deploy lên server của bạn nếu cần. Source code được viết sạch, chuẩn best practices.",
  },
  {
    question: "Có hỗ trợ bảo hành và bảo trì không?",
    answer:
      "Có. Bảo hành 3-12 tháng tùy gói (fix bug, cập nhật nhỏ miễn phí). Bao gồm: hosting miễn phí, backup tự động, SSL certificate, hỗ trợ kỹ thuật 24/7. Sau thời gian bảo hành có gói bảo trì linh hoạt theo nhu cầu.",
  },
  {
    question: "Website có tối ưu SEO không?",
    answer:
      "Có. Tất cả website đều được tối ưu SEO chuẩn Google: meta tags, sitemap, schema markup, tốc độ tải nhanh < 2s, mobile-friendly, Lighthouse 90+. Gói cao cấp có SEO chuyên sâu và đa ngôn ngữ.",
  },
  {
    question: "Tôi có thể tự cập nhật nội dung không?",
    answer:
      "Có. Chúng tôi tích hợp CMS (Content Management System) trực quan, dễ dùng. Bạn có thể tự cập nhật text, hình ảnh, sản phẩm mà không cần kiến thức kỹ thuật. Có đào tạo sử dụng CMS miễn phí cho team.",
  },
  {
    question: "Thanh toán như thế nào?",
    answer:
      "Thanh toán linh hoạt 2-3 đợt: 50% khi ký hợp đồng, 30% khi hoàn thành 70% dự án, 20% khi bàn giao. Chấp nhận chuyển khoản ngân hàng, Momo, ZaloPay. Có hóa đơn VAT đầy đủ.",
  },
  {
    question: "Mobile app có publish lên Store không?",
    answer:
      "Có. Chúng tôi hỗ trợ upload app lên App Store (iOS) và Google Play (Android). Bao gồm: tạo tài khoản developer, chuẩn bị assets, submit app, và maintain sau khi publish. Đảm bảo app được duyệt thành công.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "120px 32px", position: "relative", overflow: "hidden" }}>
      {/* Background gradient orb */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(237, 51, 52, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* SVG gradient definition for icons */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="icon-gradient-faq" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d7ac38" />
            <stop offset="100%" stopColor="#ed3334" />
          </linearGradient>
        </defs>
      </svg>
      
      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div className="text-center fade-in-up" style={{ marginBottom: 80 }}>
          <h2 
            className="section-heading text-white" 
            style={{ 
              marginBottom: 20,
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Câu hỏi thường gặp
          </h2>
          <p
            style={{
              fontSize: 19,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Giải đáp những thắc mắc phổ biến về dịch vụ phát triển website và mobile app
          </p>
        </div>

        {/* FAQ List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="fade-in-up"
              style={{
                background: openIndex === idx 
                  ? "linear-gradient(135deg, rgba(215, 172, 56, 0.03) 0%, rgba(237, 51, 52, 0.03) 100%)"
                  : "rgba(255,255,255,0.02)",
                border: openIndex === idx 
                  ? "1px solid rgba(215, 172, 56, 0.2)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                animationDelay: `${idx * 0.05}s`,
              }}
              onMouseEnter={(e) => {
                if (openIndex !== idx) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (openIndex !== idx) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                }
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{
                  width: "100%",
                  padding: "28px 32px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 24,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontSize: 19,
                    fontWeight: 600,
                    color: openIndex === idx ? "#fff" : "rgba(255,255,255,0.9)",
                    lineHeight: 1.5,
                    transition: "color 0.2s",
                  }}
                >
                  {faq.question}
                </span>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: openIndex === idx 
                      ? "linear-gradient(135deg, rgba(215, 172, 56, 0.15) 0%, rgba(237, 51, 52, 0.15) 100%)"
                      : "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s",
                  }}
                >
                  <ChevronDown
                    size={22}
                    style={{
                      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: openIndex === idx ? "rotate(180deg)" : "none",
                      stroke: openIndex === idx ? "url(#icon-gradient-faq)" : "rgba(255,255,255,0.5)",
                    }}
                  />
                </div>
              </button>
              
              <div
                style={{
                  maxHeight: openIndex === idx ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div
                  style={{
                    padding: "0 32px 28px",
                    fontSize: 17,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div
          className="fade-in-up"
          style={{
            marginTop: 60,
            textAlign: "center",
            padding: "48px 32px",
            background: "linear-gradient(135deg, rgba(215, 172, 56, 0.05) 0%, rgba(237, 51, 52, 0.05) 100%)",
            border: "1px solid rgba(215, 172, 56, 0.15)",
            borderRadius: 20,
          }}
        >
          <h3
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 12,
              letterSpacing: "-0.5px",
            }}
          >
            Vẫn còn thắc mắc?
          </h3>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 28,
              lineHeight: 1.6,
            }}
          >
            Liên hệ trực tiếp để được tư vấn chi tiết và báo giá chính xác
          </p>
          <a href="/contact" className="btn-primary">
            Liên hệ ngay
          </a>
        </div>
      </div>

      {/* Mobile responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 20px !important;
          }
          button {
            padding: 20px 20px !important;
          }
          button span {
            font-size: 17px !important;
          }
          div[style*="padding: 0 32px 28px"] {
            padding: 0 20px 20px !important;
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}