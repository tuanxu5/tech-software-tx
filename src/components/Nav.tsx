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
  { label: "FAQ", href: "#faq" },
];

export default function Nav({ mobileMenuOpen, setMobileMenuOpen }: NavProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6"
        style={{ maxWidth: 1200, height: 56 }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-white no-underline group">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="transition-transform duration-300 group-hover:scale-110">
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d7ac38" />
                <stop offset="100%" stopColor="#ed3334" />
              </linearGradient>
            </defs>
            <rect width="22" height="22" rx="5" fill="url(#logo-gradient)" />
            <path d="M7 6h8v2H7zM7 10h8v2H7zM7 14h5v2H7z" fill="white" stroke="white" strokeWidth="0.5" />
          </svg>
          <span
            className="font-display text-white"
            style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.3px" }}
          >
            Tx Tech
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link px-3 py-2">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:0386426150" className="nav-link px-3 py-2">
            0386 426 150
          </a>
          <a href="#contact" className="btn-primary" style={{ padding: "8px 16px", fontSize: 14 }}>
            Nhận báo giá
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
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
          className="md:hidden border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)", background: "#000" }}
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
              <a href="#contact" className="btn-primary justify-center">
                Nhận báo giá
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
