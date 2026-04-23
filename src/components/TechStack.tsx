const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
    ],
  },
  {
    category: "CMS & Tools",
    items: [
      { name: "Strapi", icon: "📦" },
      { name: "Sanity", icon: "✨" },
      { name: "WordPress", icon: "W" },
      { name: "Shopify", icon: "🛍️" },
    ],
  },
  {
    category: "Hosting & Deploy",
    items: [
      { name: "Vercel", icon: "▲" },
      { name: "AWS", icon: "☁️" },
      { name: "Netlify", icon: "🌐" },
      { name: "DigitalOcean", icon: "🌊" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-white mb-4">
            Công nghệ hiện đại
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
            Stack công nghệ được các tập đoàn lớn tin dùng. 
            Hiệu suất cao, bảo mật tốt, dễ bảo trì.
          </p>
        </div>

        {/* Tech Grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {technologies.map((tech) => (
            <div key={tech.category} className="card-elevated p-6 group hover-lift">
              <h3
                className="gradient-text"
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {tech.category}
              </h3>
              <div className="flex flex-col gap-3">
                {tech.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 12px",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: 8,
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
