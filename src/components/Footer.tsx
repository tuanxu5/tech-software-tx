import Image from "next/image";
import { IconsAssets } from "../../public/icons";

const socialLinks = [
  { 
    name: "Facebook", 
    icon: IconsAssets.facebook,
    href: "https://www.facebook.com/tunnxu5/" 
  },
  { 
    name: "Telegram", 
    icon: IconsAssets.telegram,
    href: "https://t.me/tuanxu5" 
  },
  { 
    name: "Zalo", 
    icon: IconsAssets.zalo,
    href: "https://zalo.me/0386426150" 
  },
  { 
    name: "LinkedIn", 
    icon: IconsAssets.linkedin,
    href: "https://www.linkedin.com/in/tuanxu5/" 
  },
  { 
    name: "GitHub", 
    icon: IconsAssets.github,
    href: "https://github.com/tuanxu5" 
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        padding: "100px 32px 40px",
        background: "#000",
        overflow: "hidden",
      }}
    >
      {/* Gradient orb background */}
      <div
        style={{
          position: "absolute",
          top: "-30%",
          left: "20%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(215, 172, 56, 0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {/* Main content - 2 columns */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 80,
            alignItems: "start",
            marginBottom: 60,
          }}
        >
          {/* Left: Brand & Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d7ac38" />
                    <stop offset="100%" stopColor="#ed3334" />
                  </linearGradient>
                </defs>
                <rect width="48" height="48" rx="12" fill="url(#footer-logo-gradient)" />
                <path d="M14 12h20v4H14zM14 22h20v4H14zM14 32h12v4H14z" fill="white" stroke="white" strokeWidth="0.5" />
              </svg>
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.8px",
                }}
              >
                Tx Tech
              </span>
            </div>

            {/* Description */}
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 520 }}>
              Phát triển website và mobile app chuyên nghiệp cho cá nhân và doanh nghiệp. 
              Thiết kế hiện đại, hiệu suất cao, bảo mật tốt.
            </p>

            {/* Quick Links */}
            <div style={{ display: "flex", gap: 40, flexWrap: "wrap", marginTop: 8 }}>
              <a
                href="#services"
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                }}
              >
                Dịch vụ
              </a>
              <a
                href="#process"
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                }}
              >
                Quy trình
              </a>
              <a
                href="#portfolio"
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                }}
              >
                Dự án
              </a>
              <a
                href="#pricing"
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                }}
              >
                Báo giá
              </a>
              <a
                href="#testimonials"
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                }}
              >
                Đánh giá
              </a>
              <a
                href="#faq"
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                }}
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Right: Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.5px",
                marginBottom: 8,
              }}
            >
              Kết nối với tôi
            </h3>

            {/* Social Icons - Larger */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.borderColor = "rgba(215, 172, 56, 0.4)";
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 12px 30px rgba(215, 172, 56, 0.2)";
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.filter = "grayscale(0) brightness(1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.filter = "grayscale(1) brightness(0.7)";
                  }}
                >
                  <Image 
                    src={social.icon} 
                    alt={social.name} 
                    width={28} 
                    height={28}
                    style={{ 
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      filter: "grayscale(1) brightness(0.7)",
                    }}
                  />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
              <a
                href="mailto:lehoangtuan012@gmail.com"
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                lehoangtuan012@gmail.com
              </a>
              <a
                href="tel:0386426150"
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                0386 426 150
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.08)",
            marginBottom: 32,
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
            © {new Date().getFullYear()} Tx Tech. Made with ❤️ in Hà Nội
          </span>
          <span style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
            Thiết kế & Phát triển bởi Tx Tech
          </span>
        </div>
      </div>

      {/* Mobile responsive */}
      <style jsx>{`
        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          footer {
            padding: 80px 24px 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
