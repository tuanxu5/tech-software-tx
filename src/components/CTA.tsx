import { Phone, ArrowRight, Clock, Shield, Award } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" style={{ padding: "120px 32px", position: "relative", overflow: "hidden" }}>
      {/* Background gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(215, 172, 56, 0.12) 0%, rgba(237, 51, 52, 0.08) 40%, transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "relative" }} className="fade-in-up">
          <h2
            className="section-display text-white"
            style={{ 
              fontSize: "clamp(42px, 7vw, 88px)",
              marginBottom: 28,
              lineHeight: 1.1,
            }}
          >
            Bắt đầu dự án của bạn
          </h2>
          
          <p
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.65)",
              marginBottom: 48,
              lineHeight: 1.7,
              letterSpacing: "-0.2px",
              maxWidth: 680,
              margin: "0 auto 48px",
            }}
          >
            Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết.
            Cam kết giao hàng đúng hạn, hỗ trợ tận tâm.
          </p>

          {/* Buttons */}
          <div 
            style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: 16,
            }}
          >
            <a 
              href="tel:0386426150" 
              className="btn-primary" 
              style={{ 
                padding: "18px 36px", 
                fontSize: 18, 
                fontWeight: 600,
                display: "inline-flex", 
                alignItems: "center", 
                gap: 10,
                minWidth: 220,
                justifyContent: "center",
              }}
            >
              <Phone size={20} strokeWidth={2.5} />
              0386 426 150
            </a>
            
            <a 
              href="/contact" 
              className="btn-frosted" 
              style={{ 
                padding: "18px 36px", 
                fontSize: 18, 
                fontWeight: 600,
                display: "inline-flex", 
                alignItems: "center", 
                gap: 10,
                minWidth: 220,
                justifyContent: "center",
              }}
            >
              Liên hệ ngay
              <ArrowRight size={20} strokeWidth={2.5} />
            </a>
          </div>

          {/* Trust indicators - Cards style */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 20,
              marginTop: 64,
              maxWidth: 800,
              margin: "64px auto 0",
            }}
          >
            <div
              style={{
                padding: "28px 24px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(215, 172, 56, 0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, rgba(215, 172, 56, 0.15) 0%, rgba(237, 51, 52, 0.15) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Clock size={24} style={{ stroke: "url(#icon-gradient-cta)" }} />
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                24/7
              </div>
              <div style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
                Hỗ trợ khách hàng
              </div>
            </div>

            <div
              style={{
                padding: "28px 24px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(215, 172, 56, 0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, rgba(215, 172, 56, 0.15) 0%, rgba(237, 51, 52, 0.15) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Shield size={24} style={{ stroke: "url(#icon-gradient-cta)" }} />
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                100%
              </div>
              <div style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
                Bảo mật dữ liệu
              </div>
            </div>

            <div
              style={{
                padding: "28px 24px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(215, 172, 56, 0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, rgba(215, 172, 56, 0.15) 0%, rgba(237, 51, 52, 0.15) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Award size={24} style={{ stroke: "url(#icon-gradient-cta)" }} />
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                3-12
              </div>
              <div style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
                Tháng bảo hành
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG gradient for icons */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="icon-gradient-cta" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d7ac38" />
            <stop offset="100%" stopColor="#ed3334" />
          </linearGradient>
        </defs>
      </svg>

      {/* Mobile responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 20px !important;
          }
          a {
            min-width: 100% !important;
            padding: 16px 28px !important;
            font-size: 16px !important;
          }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
