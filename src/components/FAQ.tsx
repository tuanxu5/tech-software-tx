"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Thời gian hoàn thành dự án là bao lâu?",
    answer:
      "Tùy thuộc vào quy mô dự án. Landing page: 1-2 tuần. Website doanh nghiệp: 3-4 tuần. E-commerce: 4-6 tuần. Mobile app: 6-8 tuần. Chúng tôi cam kết giao đúng deadline đã thỏa thuận.",
  },
  {
    question: "Chi phí phát triển là bao nhiêu?",
    answer:
      "Giá dao động từ 15-80 triệu tùy gói dịch vụ. Landing page: 15 triệu. Website doanh nghiệp: 35 triệu. E-commerce: 60 triệu. Mobile app: 80 triệu. Liên hệ để được tư vấn chi tiết.",
  },
  {
    question: "Tôi có được sở hữu source code không?",
    answer:
      "Có, bạn sở hữu 100% source code sau khi thanh toán đầy đủ. Chúng tôi cung cấp file source, tài liệu hướng dẫn, và hỗ trợ deploy lên server của bạn nếu cần.",
  },
  {
    question: "Có hỗ trợ bảo hành và bảo trì không?",
    answer:
      "Có. Bảo hành 3-12 tháng tùy gói (fix bug, cập nhật nhỏ miễn phí). Sau đó có gói bảo trì từ 2-5 triệu/tháng bao gồm: hosting, backup, security update, support 24/7.",
  },
  {
    question: "Website có tối ưu SEO không?",
    answer:
      "Có. Tất cả website đều được tối ưu SEO on-page cơ bản: meta tags, sitemap, schema markup, tốc độ tải nhanh, mobile-friendly. Có thể nâng cấp gói SEO chuyên sâu nếu cần.",
  },
  {
    question: "Tôi có thể tự cập nhật nội dung không?",
    answer:
      "Có. Chúng tôi tích hợp CMS (Content Management System) dễ dùng. Bạn có thể tự cập nhật text, hình ảnh, sản phẩm mà không cần kiến thức kỹ thuật. Có đào tạo sử dụng miễn phí.",
  },
  {
    question: "Thanh toán như thế nào?",
    answer:
      "Thanh toán 2 đợt: 50% khi ký hợp đồng, 50% khi bàn giao. Chấp nhận chuyển khoản ngân hàng, Momo, ZaloPay. Có hóa đơn VAT đầy đủ.",
  },
  {
    question: "Mobile app có publish lên Store không?",
    answer:
      "Có. Chúng tôi hỗ trợ publish app lên App Store (iOS) và Google Play (Android). Bao gồm cả việc tạo tài khoản developer, chuẩn bị assets, và submit app.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "100px 24px" }}>
      {/* SVG gradient definition for icons */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d7ac38" />
            <stop offset="100%" stopColor="#ed3334" />
          </linearGradient>
        </defs>
      </svg>
      
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-heading text-white mb-4">
            Câu hỏi thường gặp
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#a6a6a6",
              lineHeight: 1.5,
            }}
          >
            Giải đáp những thắc mắc phổ biến về dịch vụ của chúng tôi
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="fade-in-up"
              style={{
                background: openIndex === idx ? "#090909" : "#000",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                overflow: "hidden",
                transition: "all 0.2s",
                animationDelay: `${idx * 0.05}s`,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{
                  width: "100%",
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#fff",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    transition: "transform 0.2s",
                    transform: openIndex === idx ? "rotate(180deg)" : "none",
                    flexShrink: 0,
                  }}
                  className="gradient-icon"
                />
              </button>
              {openIndex === idx && (
                <div
                  style={{
                    padding: "0 24px 20px",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#a6a6a6",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
