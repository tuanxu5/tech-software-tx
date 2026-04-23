const testimonials = [
  {
    quote:
      "Tx Tech đã giúp chúng tôi xây dựng website bán hàng chuyên nghiệp. Giao diện đẹp, tốc độ nhanh, doanh số tăng 40% sau 2 tháng.",
    author: "Nguyễn Văn A",
    role: "Giám đốc, Công ty TNHH ABC",
  },
  {
    quote:
      "Đội ngũ làm việc rất chuyên nghiệp, tư vấn tận tình. Website được giao đúng hạn, hỗ trợ sau bán hàng tốt. Rất hài lòng!",
    author: "Trần Thị B",
    role: "Marketing Manager, XYZ Corp",
  },
  {
    quote:
      "Giá cả hợp lý, chất lượng vượt mong đợi. Website responsive hoàn hảo, SEO tốt. Đã giới thiệu cho nhiều đối tác.",
    author: "Lê Văn C",
    role: "CEO, Startup DEF",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2
          className="section-heading text-white text-center mb-12 fade-in-up"
          style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
        >
          Khách hàng nói gì
        </h2>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {testimonials.map((t, idx) => (
            <div key={t.author} className="card-elevated p-6 flex flex-col gap-4 fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              {/* Stars with gradient */}
              <div style={{ display: "flex", gap: 3 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14">
                    <defs>
                      <linearGradient id={`star-grad-${idx}-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#d7ac38" />
                        <stop offset="100%" stopColor="#ed3334" />
                      </linearGradient>
                    </defs>
                    <path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5z" fill={`url(#star-grad-${idx}-${i})`} />
                  </svg>
                ))}
              </div>

              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.85)",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ marginTop: "auto" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{t.author}</div>
                <div style={{ fontSize: 13, color: "#a6a6a6" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
