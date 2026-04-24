import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: 180, paddingBottom: 140, minHeight: "90vh" }}
    >
      {/* Enhanced background with grid and orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
        }}
      />

      {/* Gradient orbs - more visible */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.25]"
        style={{
          background: "radial-gradient(circle, rgba(215,172,56,0.6) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.2]"
        style={{
          background: "radial-gradient(circle, rgba(237,51,52,0.5) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "float 25s ease-in-out infinite 5s",
        }}
      />

      {/* Floating shapes */}
      <div
        className="absolute top-1/3 right-1/4 w-32 h-32 rounded-2xl opacity-[0.08]"
        style={{
          background: "linear-gradient(135deg, #d7ac38, #ed3334)",
          transform: "rotate(45deg)",
          animation: "float 15s ease-in-out infinite 2s",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full opacity-[0.06]"
        style={{
          background: "linear-gradient(90deg, #ed3334, #d7ac38)",
          animation: "float 18s ease-in-out infinite 4s",
        }}
      />

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
          <span
            style={{
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
              WebkitTextFillColor: "transparent",
              textStroke: "2px rgba(255, 255, 255, 0.8)",
              color: "transparent",
            }}
          >
            Thiết kế
          </span>{" "}
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
          </span>
          {" "}chuyên nghiệp
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
