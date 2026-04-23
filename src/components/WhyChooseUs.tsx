import { Zap, Gem, DollarSign, Shield, Rocket, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    icon: Zap,
    title: "Giao hàng đúng hạn",
    description:
      "99% dự án giao đúng deadline. Quy trình làm việc chuyên nghiệp, cập nhật tiến độ hàng tuần.",
  },
  {
    icon: Gem,
    title: "Chất lượng đảm bảo",
    description:
      "Code sạch, chuẩn best practices. Test kỹ lưỡng trên nhiều thiết bị. Lighthouse score 90+.",
  },
  {
    icon: DollarSign,
    title: "Giá cả hợp lý",
    description:
      "Báo giá minh bạch, không phát sinh. Thanh toán linh hoạt 2 đợt. Ưu đãi cho khách hàng lâu dài.",
  },
  {
    icon: Shield,
    title: "Bảo mật cao",
    description:
      "SSL miễn phí, bảo vệ khỏi tấn công. Backup tự động hàng ngày. Tuân thủ chuẩn bảo mật quốc tế.",
  },
  {
    icon: Rocket,
    title: "Hiệu suất tối ưu",
    description:
      "Website tải nhanh < 2s. Tối ưu SEO on-page. CDN toàn cầu, uptime 99.9%.",
  },
  {
    icon: MessageCircle,
    title: "Hỗ trợ tận tâm",
    description:
      "Tư vấn miễn phí trước dự án. Đào tạo sử dụng CMS. Hỗ trợ kỹ thuật nhanh chóng sau bàn giao.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading text-white mb-4">
              Tại sao chọn Tx Tech?
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
              6 lý do khách hàng tin tưởng và quay lại với chúng tôi
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={reason.title} delay={idx * 100}>
                <div
                  className="card-ring p-6 flex flex-col gap-4 hover-lift group"
                  style={{
                    background: "#000",
                  }}
              >
                <div
                  className="icon-gradient-box"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 12,
                    background: "rgba(215,172,56,0.08)",
                    border: "1px solid rgba(215,172,56,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id={`reason-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#d7ac38" />
                        <stop offset="100%" stopColor="#ed3334" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Icon size={28} stroke={`url(#reason-grad-${idx})`} strokeWidth={2} />
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#a6a6a6",
                  }}
                >
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
