const showcaseItems = [
  {
    label: "Quy trình làm việc",
    heading: "Minh bạch từng bước phát triển",
    body: "Trao đổi yêu cầu chi tiết, thiết kế mockup xác nhận trước khi code. Cập nhật tiến độ hàng tuần, demo thường xuyên. Bạn luôn nắm rõ dự án đang ở đâu.",
    side: "left",
  },
  {
    label: "Công nghệ",
    heading: "Stack hiện đại, hiệu suất cao",
    body: "Next.js 15, React 19, TypeScript cho code chất lượng. Tailwind CSS cho UI nhanh chóng. Vercel/AWS cho hosting ổn định. Công nghệ được các tập đoàn lớn tin dùng.",
    side: "right",
  },
];

function MockCanvas({ variant }: { variant: "editor" | "motion" }) {
  if (variant === "editor") {
    return (
      <div
        style={{
          background: "#0d0d0d",
          borderRadius: 10,
          overflow: "hidden",
          aspectRatio: "4/3",
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Toolbar */}
        <div
          style={{
            background: "#111",
            padding: "8px 12px",
            display: "flex",
            gap: 8,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {["T", "□", "○", "⟋"].map((tool) => (
            <div
              key={tool}
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                background: "rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {tool}
            </div>
          ))}
        </div>
        {/* Canvas */}
        <div
          style={{
            flex: 1,
            background: "#141414",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              background: "#000",
              borderRadius: 8,
              padding: "24px 28px",
              width: "75%",
              boxShadow: "0 0 0 2px rgba(215,172,56,0.4), 0 0 40px rgba(215,172,56,0.2)",
            }}
          >
            <div style={{ height: 10, width: "55%", background: "#fff", borderRadius: 4, marginBottom: 8 }} />
            <div style={{ height: 6, width: "80%", background: "rgba(255,255,255,0.2)", borderRadius: 4, marginBottom: 5 }} />
            <div style={{ height: 6, width: "65%", background: "rgba(255,255,255,0.2)", borderRadius: 4, marginBottom: 16 }} />
            <div
              style={{
                height: 32,
                width: 110,
                background: "linear-gradient(90deg, #d7ac38, #ed3334)",
                borderRadius: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(215,172,56,0.3)",
              }}
            >
              <span style={{ fontSize: 11, color: "#fff", fontWeight: 600 }}>Get started</span>
            </div>
          </div>
          {/* Selection handles */}
          {[
            { top: "calc(50% - 60px)", left: "calc(12.5% - 4px)" },
            { top: "calc(50% - 60px)", right: "calc(12.5% - 4px)" },
            { bottom: "calc(50% - 60px)", left: "calc(12.5% - 4px)" },
            { bottom: "calc(50% - 60px)", right: "calc(12.5% - 4px)" },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 8,
                height: 8,
                background: "linear-gradient(135deg, #d7ac38, #ed3334)",
                borderRadius: 2,
                boxShadow: "0 0 8px rgba(215,172,56,0.5)",
                ...pos,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#0d0d0d",
        borderRadius: 10,
        overflow: "hidden",
        aspectRatio: "4/3",
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Timeline header */}
      <div
        style={{
          background: "#111",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>TIMELINE</span>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
        <span className="gradient-text" style={{ fontSize: 11, fontWeight: 600 }}>0.3s</span>
      </div>
      {/* Animation tracks */}
      <div style={{ flex: 1, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        {["Opacity", "Scale", "Y Position", "Blur"].map((track, i) => (
          <div key={track} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", width: 70, flexShrink: 0 }}>
              {track}
            </span>
            <div style={{ flex: 1, height: 20, background: "rgba(255,255,255,0.04)", borderRadius: 4, position: "relative", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  left: `${i * 8}%`,
                  width: `${40 + i * 10}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, rgba(215,172,56,${0.3 + i * 0.1}), rgba(237,51,52,${0.2 + i * 0.1}))`,
                  borderRadius: 4,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="projects" style={{ padding: "80px 24px", background: "#000" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 80 }}>
        {showcaseItems.map((item, idx) => (
          <div
            key={item.label}
            className="flex items-center gap-12"
            style={{
              flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
              flexWrap: "wrap",
            }}
          >
            {/* Text */}
            <div className="flex-1 flex flex-col gap-4">
              <span
                className="gradient-text"
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </span>
              <h2 className="feature-heading text-white">{item.heading}</h2>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: "#a6a6a6",
                  maxWidth: 420,
                }}
              >
                {item.body}
              </p>
              <a href="#contact" className="btn-frosted" style={{ width: "fit-content", marginTop: 8 }}>
                Liên hệ ngay →
              </a>
            </div>

            {/* Screenshot */}
            <div className="flex-1 w-full screenshot-container">
              <MockCanvas variant={idx === 0 ? "editor" : "motion"} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
