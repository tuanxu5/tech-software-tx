import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ paddingTop: 160, paddingBottom: 100, minHeight: "100vh" }}
    >
      {/* Background gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(215,172,56,0.08) 0%, rgba(237,51,52,0.06) 50%, transparent 70%)",
        }}
      />
      
      {/* Animated gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
        style={{
          background: "linear-gradient(90deg, #d7ac38, #ed3334)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 animate-float-delayed"
        style={{
          background: "linear-gradient(135deg, #ed3334, #d7ac38)",
          animation: "float 10s ease-in-out infinite 2s",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6" style={{ maxWidth: 1000 }}>
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 fade-in group cursor-pointer"
          style={{
            background: "rgba(215,172,56,0.08)",
            border: "1px solid rgba(215,172,56,0.25)",
            borderRadius: 100,
            padding: "6px 14px",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "linear-gradient(90deg, #d7ac38, #ed3334)",
              display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
              boxShadow: "0 0 12px rgba(215,172,56,0.6)",
            }}
          />
          <span
            className="gradient-text"
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Đang nhận dự án mới
          </span>
        </div>

        {/* Hero heading */}
        <h1
          className="hero-heading text-white mb-6 fade-in-up"
          style={{ maxWidth: 900, animationDelay: "0.1s" }}
        >
          Website & Mobile App chuyên nghiệp
        </h1>

        {/* Sub-heading */}
        <p
          className="mb-10 fade-in-up"
          style={{
            fontSize: 20,
            lineHeight: 1.5,
            color: "#a6a6a6",
            maxWidth: 620,
            letterSpacing: "-0.3px",
            animationDelay: "0.2s",
          }}
        >
          Phát triển website và ứng dụng di động cho cá nhân & doanh nghiệp. 
          Thiết kế hiện đại, tối ưu hiệu suất, bảo mật cao. Giao hàng đúng hạn.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a href="#contact" className="btn-primary" style={{ padding: "12px 24px", fontSize: 16, display: "inline-flex", alignItems: "center", gap: 8 }}>
            Nhận báo giá miễn phí
            <ArrowRight size={18} />
          </a>
          <a href="#projects" className="btn-frosted" style={{ padding: "12px 24px", fontSize: 16, display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Play size={16} />
            Xem dự án
          </a>
        </div>

        {/* Social proof */}
        <p
          className="mt-6 fade-in"
          style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", letterSpacing: "0.01em", animationDelay: "0.4s" }}
        >
          Đã phát triển 50+ dự án cho cá nhân và doanh nghiệp
        </p>

        {/* Product screenshot mockup */}
        <div
          className="screenshot-container blue-glow mt-16 w-full"
          style={{ maxWidth: 900, position: "relative" }}
        >
          <div
            style={{
              background: "#090909",
              borderRadius: 10,
              overflow: "hidden",
              aspectRatio: "16/9",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Fake browser chrome */}
            <div
              style={{
                background: "#111",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
              <div
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 6,
                  height: 22,
                  marginLeft: 12,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 10,
                }}
              >
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
                  framerkit.app/canvas
                </span>
              </div>
            </div>

            {/* Canvas area */}
            <div
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "200px 1fr 220px",
                gap: 0,
              }}
            >
              {/* Left panel */}
              <div
                style={{
                  background: "#0a0a0a",
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                  padding: 12,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {["Pages", "Components", "Assets"].map((item, i) => (
                  <div
                    key={item}
                    style={{
                      padding: "6px 10px",
                      borderRadius: 6,
                      background: i === 0 ? "rgba(0,153,255,0.12)" : "transparent",
                      color: i === 0 ? "#0099ff" : "rgba(255,255,255,0.4)",
                      fontSize: 12,
                      fontWeight: i === 0 ? 500 : 400,
                    }}
                  >
                    {item}
                  </div>
                ))}
                <div style={{ marginTop: 8, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 8 }}>
                  {["Home", "About", "Pricing", "Blog"].map((page) => (
                    <div
                      key={page}
                      style={{
                        padding: "5px 10px",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.5)",
                        borderRadius: 4,
                      }}
                    >
                      {page}
                    </div>
                  ))}
                </div>
              </div>

              {/* Canvas */}
              <div
                style={{
                  background: "#141414",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Grid dots */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Mock frame */}
                <div
                  style={{
                    position: "relative",
                    width: "70%",
                    background: "#000",
                    borderRadius: 8,
                    padding: 20,
                    boxShadow: "0 0 0 1px rgba(215,172,56,0.3), 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(215,172,56,0.1)",
                  }}
                >
                  <div
                    style={{
                      height: 8,
                      width: "60%",
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: 4,
                      marginBottom: 10,
                    }}
                  />
                  <div
                    style={{
                      height: 5,
                      width: "80%",
                      background: "rgba(255,255,255,0.07)",
                      borderRadius: 4,
                      marginBottom: 6,
                    }}
                  />
                  <div
                    style={{
                      height: 5,
                      width: "50%",
                      background: "rgba(255,255,255,0.07)",
                      borderRadius: 4,
                      marginBottom: 16,
                    }}
                  />
                  <div
                    style={{
                      height: 28,
                      width: 100,
                      background: "linear-gradient(90deg, #d7ac38, #ed3334)",
                      borderRadius: 100,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 16px rgba(215,172,56,0.3)",
                    }}
                  >
                    <span style={{ fontSize: 10, color: "#fff", fontWeight: 600 }}>Get started</span>
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div
                style={{
                  background: "#0a0a0a",
                  borderLeft: "1px solid rgba(255,255,255,0.06)",
                  padding: 12,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {["Layout", "Typography", "Fill", "Border", "Effects"].map((prop) => (
                  <div key={prop}>
                    <div
                      style={{
                        fontSize: 10,
                        color: "rgba(255,255,255,0.3)",
                        marginBottom: 4,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {prop}
                    </div>
                    <div
                      style={{
                        height: 28,
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: 6,
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
