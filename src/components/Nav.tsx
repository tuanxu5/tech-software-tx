"use client";

interface NavProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const navLinks = [
  { label: "Dịch vụ", href: "#services" },
  { label: "Quy trình", href: "#process" },
  { label: "Dự án", href: "#portfolio" },
  { label: "Báo giá", href: "#pricing" },
  { label: "Đánh giá", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav({ mobileMenuOpen, setMobileMenuOpen }: NavProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "transparent",
        padding: "24px 24px 0",
      }}
    >
      {/* Floating Nav Container */}
      <div
        className="mx-auto flex items-center justify-between px-8"
        style={{
          maxWidth: 1200,
          padding: "14px 14px 14px 32px",
          background: "rgba(18, 18, 18, 0.85)",
          backdropFilter: "blur(10px) saturate(180%)",
          WebkitBackdropFilter: "blur(10px) saturate(180%)",
          borderRadius: 100,
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Logo - Left */}
        <a href="/" className="flex items-center gap-3 text-white no-underline group">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="transition-transform duration-300 group-hover:scale-110">
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d7ac38" />
                <stop offset="100%" stopColor="#ed3334" />
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
            <path d="M10 9h12v3H10zM10 15h12v3H10zM10 21h8v3h-8z" fill="white" stroke="white" strokeWidth="0.5" />
          </svg>
          <span
            className="font-display text-white"
            style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.5px" }}
          >
            Tx Tech
          </span>
        </a>

        {/* Desktop nav + CTA - Right */}
        <div className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link px-4 py-2">
              {link.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary" style={{ padding: "16px 40px", fontSize: 16, fontWeight: 600, marginLeft: 8 }}>
            Liên hệ
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 bg-white transition-all duration-200"
            style={{
              transform: mobileMenuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 bg-white transition-all duration-200"
            style={{ opacity: mobileMenuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 bg-white transition-all duration-200"
            style={{
              transform: mobileMenuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden mt-2 mx-6"
          style={{
            background: "rgba(18, 18, 18, 0.95)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            borderRadius: 20,
            border: "1px solid rgba(255, 255, 255, 0.08)",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
          }}
        >
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link py-3 border-b"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a href="tel:0386426150" className="nav-link py-2">
                0386 426 150
              </a>
              <a href="/contact" className="btn-primary justify-center">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
