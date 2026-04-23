const footerLinks = {
  "Dịch vụ": ["Landing Page", "Website Doanh Nghiệp", "E-Commerce", "Mobile App", "Bảo trì"],
  "Tài nguyên": ["Blog", "Case Study", "Hướng dẫn", "Hỗ trợ", "FAQ"],
  "Công ty": ["Về chúng tôi", "Tuyển dụng", "Liên hệ", "Chính sách", "Bảo mật"],
};

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="grid gap-10"
          style={{ gridTemplateColumns: "1fr repeat(3, auto)", alignItems: "start" }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d7ac38" />
                    <stop offset="100%" stopColor="#ed3334" />
                  </linearGradient>
                </defs>
                <rect width="22" height="22" rx="5" fill="url(#footer-logo-gradient)" />
                <path d="M7 6h8v2H7zM7 10h8v2H7zM7 14h5v2H7z" fill="white" stroke="white" strokeWidth="0.5" />
              </svg>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "-0.3px",
                }}
              >
                Tx Tech
              </span>
            </div>
            <p style={{ fontSize: 14, color: "#a6a6a6", lineHeight: 1.6, maxWidth: 240 }}>
              Phát triển website & mobile app chuyên nghiệp cho cá nhân và doanh nghiệp.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
              {["𝕏", "in", "gh"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "background 0.15s",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                {category}
              </span>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            © 2026 Tx Tech. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Chính sách", "Điều khoản", "Bảo mật"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
