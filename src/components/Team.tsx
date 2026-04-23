const team = [
  {
    name: "Nguyễn Văn A",
    role: "Lead Developer",
    avatar: "👨‍💻",
    description: "7+ năm kinh nghiệm Full-stack. Chuyên Next.js, React, Node.js.",
  },
  {
    name: "Trần Thị B",
    role: "UI/UX Designer",
    avatar: "👩‍🎨",
    description: "5+ năm thiết kế giao diện. Figma expert. Đam mê user experience.",
  },
  {
    name: "Lê Văn C",
    role: "Backend Engineer",
    avatar: "👨‍💼",
    description: "6+ năm phát triển backend. Database optimization, API design.",
  },
  {
    name: "Phạm Thị D",
    role: "QA Engineer",
    avatar: "👩‍🔬",
    description: "4+ năm testing. Automation testing, performance optimization.",
  },
];

export default function Team() {
  return (
    <section
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-white mb-4">
            Đội ngũ chuyên nghiệp
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
            Team developers, designers giàu kinh nghiệm. 
            Đam mê công nghệ, tận tâm với khách hàng.
          </p>
        </div>

        {/* Team Grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="card-elevated p-6 flex flex-col items-center text-center gap-4 hover-lift group"
            >
              {/* Avatar with gradient border */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "rgba(215,172,56,0.08)",
                  border: "2px solid rgba(215,172,56,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 40,
                }}
              >
                {member.avatar}
              </div>

              {/* Name */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.3px",
                }}
              >
                {member.name}
              </h3>

              {/* Role with gradient */}
              <span
                className="gradient-text"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                }}
              >
                {member.role}
              </span>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "#a6a6a6",
                }}
              >
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
