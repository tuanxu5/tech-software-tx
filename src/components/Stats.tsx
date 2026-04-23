import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "50+", label: "Dự án hoàn thành" },
  { value: "40+", label: "Khách hàng hài lòng" },
  { value: "5+", label: "Năm kinh nghiệm" },
  { value: "99%", label: "Đúng deadline" },
];

export default function Stats() {
  return (
    <section style={{ padding: "80px 24px", background: "#000" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        >
          {stats.map((stat, idx) => (
            <ScrollReveal key={stat.label} delay={idx * 100}>
              <div className="text-center group cursor-default">
                <div
                  className="gradient-text group-hover:scale-110 transition-transform duration-300"
                  style={{
                    fontSize: "clamp(48px, 6vw, 72px)",
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-2px",
                    marginBottom: 12,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "#a6a6a6",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
