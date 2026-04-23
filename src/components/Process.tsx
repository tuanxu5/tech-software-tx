const steps = [
  {
    number: "01",
    title: "Tư vấn & Phân tích",
    description:
      "Gặp gỡ trao đổi yêu cầu chi tiết. Phân tích đối thủ, nghiên cứu thị trường. Đề xuất giải pháp tối ưu cho doanh nghiệp.",
    duration: "1-2 ngày",
  },
  {
    number: "02",
    title: "Thiết kế UI/UX",
    description:
      "Wireframe & mockup chi tiết. Thiết kế giao diện hiện đại, trải nghiệm mượt mà. Xác nhận với khách hàng trước khi code.",
    duration: "3-5 ngày",
  },
  {
    number: "03",
    title: "Phát triển",
    description:
      "Code theo chuẩn best practices. Responsive hoàn hảo mọi thiết bị. Tối ưu hiệu suất & SEO. Demo hàng tuần.",
    duration: "7-14 ngày",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "Test kỹ lưỡng trên nhiều thiết bị. Fix bug, tối ưu cuối cùng. Deploy lên server, cấu hình domain. Đào tạo sử dụng.",
    duration: "2-3 ngày",
  },
  {
    number: "05",
    title: "Bảo hành & Hỗ trợ",
    description:
      "Bảo hành 3-12 tháng tùy gói. Hỗ trợ kỹ thuật nhanh chóng. Cập nhật nội dung miễn phí. Tư vấn marketing online.",
    duration: "Liên tục",
  },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: "100px 24px", background: "#000" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-heading text-white mb-4">
            Quy trình làm việc
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#a6a6a6",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.5,
            }}
          >
            Quy trình 5 bước minh bạch, chuyên nghiệp. 
            Từ ý tưởng đến website hoàn chỉnh.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="card-ring p-6 flex flex-col md:flex-row gap-6 items-start fade-in-up"
              style={{
                background: idx % 2 === 0 ? "#000" : "#050505",
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {/* Number with gradient */}
              <div
                className="gradient-text"
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  opacity: 0.3,
                  lineHeight: 1,
                  letterSpacing: "-2px",
                  minWidth: 80,
                }}
              >
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <span
                    className="gradient-tag"
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      background: "rgba(215,172,56,0.08)",
                      padding: "4px 10px",
                      borderRadius: 100,
                      border: "1px solid rgba(215,172,56,0.2)",
                    }}
                  >
                    <span className="gradient-text">{step.duration}</span>
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#a6a6a6",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
