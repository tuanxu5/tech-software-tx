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
    tag: "Đa nền tảng",
    icon: Palette,
  },
  {
    title: "Tối ưu hiệu suất & SEO",
    description:
      "Website tải nhanh, điểm Lighthouse 90+. Tối ưu SEO on-page, cấu trúc dữ liệu schema. Tăng thứ hạng Google, thu hút khách hàng tự nhiên.",
    tag: "Hiệu suất",
    icon: Gauge,
  },
  {
    title: "Bảo mật & Ổn định",
    description:
      "SSL miễn phí, bảo vệ khỏi tấn công phổ biến. Backup tự động, monitoring 24/7. Uptime 99.9%, dữ liệu luôn an toàn.",
    tag: "Bảo mật",
    icon: ShieldCheck,
  },
  {
    title: "Quản trị nội dung dễ dàng",
    description:
      "CMS trực quan, không cần kiến thức kỹ thuật. Cập nhật nội dung, hình ảnh trong vài phút. Đào tạo sử dụng miễn phí cho team.",
    tag: "Quản trị",
    icon: LayoutDashboard,
  },
];

export default function Features() {
  return (
    <section id="services" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading text-white mb-4">
              Dịch vụ toàn diện.
              <br />
              <span style={{ color: "#a6a6a6" }}>Chất lượng vượt trội.</span>
            </h2>
            <p
              style={{
                fontSize: 18,
                color: "#a6a6a6",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.5,
                letterSpacing: "-0.2px",
              }}
            >
              Giải pháp website trọn gói từ thiết kế đến triển khai. 
              Công nghệ mới nhất, quy trình chuyên nghiệp.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature grid */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} delay={idx * 100}>
                <div className="card-ring p-6 flex flex-col gap-4 group hover-lift">
                {/* Icon with gradient */}
                <div
                  className="icon-gradient-box"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(215,172,56,0.08)",
                    border: "1px solid rgba(215,172,56,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id={`icon-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#d7ac38" />
                        <stop offset="100%" stopColor="#ed3334" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Icon size={24} stroke={`url(#icon-grad-${idx})`} strokeWidth={2} />
                </div>

                {/* Tag with gradient */}
                <span
                  className="gradient-tag"
                  style={{
                    display: "inline-block",
                    background: "rgba(215,172,56,0.08)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 100,
                    width: "fit-content",
                    border: "1px solid rgba(215,172,56,0.2)",
                  }}
                >
                  <span className="gradient-text">{feature.tag}</span>
                </span>

                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "-0.8px",
                    color: "#ffffff",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "#a6a6a6",
                  }}
                >
                  {feature.description}
                </p>

                <a
                  href="#contact"
                  className="gradient-text group-hover:gap-2 transition-all"
                  style={{
                    fontSize: 14,
                    textDecoration: "none",
                    marginTop: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontWeight: 600,
                  }}
                >
                  Tìm hiểu thêm →
                </a>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
