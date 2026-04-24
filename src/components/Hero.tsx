import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: 180, paddingBottom: 140, minHeight: "90vh" }}
    >
      {/* Grid background - more visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Large gradient orbs - more prominent */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(215,172,56,0.15) 0%, transparent 60%)",
          filter: "blur(80px)",
          animation: "float 25s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(237,51,52,0.12) 0%, transparent 60%)",
          filter: "blur(80px)",
          animation: "float 30s ease-in-out infinite 8s",
        }}
      />

      {/* Geometric shapes */}
      <div
        className="absolute top-[15%] right-[10%] w-[120px] h-[120px] pointer-events-none"
        style={{
          border: "1px solid rgba(215, 172, 56, 0.2)",
          borderRadius: "24px",
          transform: "rotate(15deg)",
          animation: "float 20s ease-in-out infinite 3s",
        }}
      />
      {/* <div
        className="absolute bottom-[20%] left-[8%] w-[100px] h-[100px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(237, 51, 52, 0.2)",
          animation: "float 22s ease-in-out infinite 6s",
        }}
      /> */}
      <div
        className="absolute top-[40%] left-[15%] w-[80px] h-[80px] pointer-events-none"
        style={{
          border: "1px solid rgba(215, 172, 56, 0.15)",
          borderRadius: "16px",
          transform: "rotate(-20deg)",
          animation: "float 18s ease-in-out infinite 10s",
        }}
      />

      {/* Diagonal accent lines */}
      {/* <div
        className="absolute top-[25%] right-[5%] w-[200px] h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(215,172,56,0.3) 50%, transparent 100%)",
          transform: "rotate(-45deg)",
        }}
      />
      <div
        className="absolute bottom-[30%] left-[5%] w-[180px] h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(237,51,52,0.25) 50%, transparent 100%)",
          transform: "rotate(45deg)",
        }}
      /> */}

      <div className="relative z-10 flex flex-col items-center px-6" style={{ maxWidth: 1100 }}>
        {/* Main heading with animated gradient highlight */}
        <h1
          className="text-center text-white mb-8 fade-in-up"
          style={{ 
            fontSize: "clamp(48px, 7vw, 92px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            maxWidth: 1000,
          }}
        >
          Thiết kế{" "}
          <span 
            style={{ 
              display: "inline-block",
              position: "relative",
              background: "linear-gradient(90deg, #d7ac38 0%, #ed3334 25%, #d7ac38 50%, #ed3334 75%, #d7ac38 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientShift 4s ease-in-out infinite",
            }}
          >
            Website & Mobile App
          </span>{" "}
          <span
            style={{
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            chuyên nghiệp
          </span>
        </h1>

        {/* Subtitle - more concise */}
        <p
          className="text-center mb-12 fade-in-up"
          style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            lineHeight: 1.6,
            color: "rgba(255, 255, 255, 0.6)",
            maxWidth: 680,
            letterSpacing: "-0.01em",
            animationDelay: "0.1s",
          }}
        >
          Phát triển giải pháp số cho cá nhân và doanh nghiệp.
          Thiết kế hiện đại, hiệu suất cao, bảo mật tốt.
        </p>

        {/* CTA buttons - cleaner design */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 fade-in-up" 
          style={{ animationDelay: "0.2s" }}
        >
          <a 
            href="/contact" 
            className="btn-primary group" 
            style={{ 
              padding: "16px 32px", 
              fontSize: 16,
              fontWeight: 600,
              display: "inline-flex", 
              alignItems: "center", 
              gap: 10,
            }}
          >
            Bắt đầu dự án
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="#portfolio" 
            className="btn-frosted group" 
            style={{ 
              padding: "16px 32px", 
              fontSize: 16,
              fontWeight: 500,
              display: "inline-flex", 
              alignItems: "center", 
              gap: 10,
            }}
          >
            <Play size={18} />
            Xem dự án
          </a>
        </div>
      </div>
    </section>
  );
}
