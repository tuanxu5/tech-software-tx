const logos = [
  "Vingroup",
  "FPT",
  "Viettel",
  "VNPT",
  "Momo",
  "Tiki",
  "Shopee",
  "Grab",
];

export default function LogoStrip() {
  return (
    <section
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 24px",
      }}
    >
      <p
        className="text-center mb-8"
        style={{ fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase" }}
      >
        <span className="gradient-text" style={{ fontWeight: 600 }}>Khách hàng tin tưởng</span>
      </p>
      <div
        className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        style={{ maxWidth: 900, margin: "0 auto" }}
      >
        {logos.map((logo) => (
          <span
            key={logo}
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "-0.3px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
