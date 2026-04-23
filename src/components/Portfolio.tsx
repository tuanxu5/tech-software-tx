const projects = [
  {
    title: "E-commerce Fashion",
    category: "Thương mại điện tử",
    description: "Website bán hàng thời trang với 5000+ sản phẩm. Tích hợp thanh toán VNPay, Momo. Doanh thu 2 tỷ/tháng.",
    tags: ["Next.js", "Shopify", "Tailwind"],
    image: "🛍️",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    description: "Hệ thống quản lý dự án cho doanh nghiệp. 10,000+ users. Real-time collaboration, analytics.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "📊",
  },
  {
    title: "Corporate Website",
    category: "Website Doanh Nghiệp",
    description: "Website giới thiệu công ty tập đoàn. Đa ngôn ngữ (VI/EN). SEO top 3 Google. 50k visits/tháng.",
    tags: ["Next.js", "Strapi", "AWS"],
    image: "🏢",
  },
  {
    title: "Restaurant Booking",
    category: "Booking System",
    description: "Hệ thống đặt bàn nhà hàng online. Tích hợp Google Maps, payment gateway. 500+ bookings/ngày.",
    tags: ["React", "Firebase", "Stripe"],
    image: "🍽️",
  },
  {
    title: "Education Platform",
    category: "E-learning",
    description: "Nền tảng học trực tuyến. Video streaming, quiz, certificate. 3000+ học viên đăng ký.",
    tags: ["Next.js", "MongoDB", "Vercel"],
    image: "🎓",
  },
  {
    title: "Real Estate Portal",
    category: "Bất động sản",
    description: "Website môi giới BĐS. 10,000+ listings. Map search, mortgage calculator. 100k visits/tháng.",
    tags: ["React", "Node.js", "MySQL"],
    image: "🏠",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-white mb-4">
            Dự án tiêu biểu
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
            Một số dự án chúng tôi đã thực hiện cho khách hàng
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-elevated p-6 flex flex-col gap-4 hover-lift group"
              style={{
                cursor: "pointer",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: 64,
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {project.image}
              </div>

              {/* Category with gradient */}
              <span
                className="gradient-text"
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#a6a6a6",
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.6)",
                      background: "rgba(255,255,255,0.05)",
                      padding: "4px 10px",
                      borderRadius: 100,
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn-frosted"
            style={{ padding: "12px 24px", fontSize: 16 }}
          >
            Xem thêm dự án →
          </a>
        </div>
      </div>
    </section>
  );
}
