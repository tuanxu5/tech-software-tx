import { Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" style={{ padding: "100px 24px" }}>
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Gradient Glow */}
        <div
          style={{
            position: "absolute",
            inset: "-60px",
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(215,172,56,0.12) 0%, rgba(237,51,52,0.08) 50%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }} className="fade-in-up">
          <h2
            className="section-display text-white mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Bắt đầu dự án của bạn
          </h2>
          <p
            style={{
              fontSize: 20,
              color: "#a6a6a6",
              marginBottom: 40,
              lineHeight: 1.5,
              letterSpacing: "-0.2px",
            }}
          >
            Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết.
            Cam kết giao hàng đúng hạn, hỗ trợ tận tâm.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a 
              href="tel:0386426150" 
              className="btn-primary" 
              style={{ padding: "14px 28px", fontSize: 17, display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <Phone size={18} />
              0386 426 150
            </a>
            <a 
              href="mailto:lehoangtuan012@gmail.com" 
              className="btn-frosted" 
              style={{ padding: "14px 28px", fontSize: 17, display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <Mail size={18} />
              lehoangtuan012@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
