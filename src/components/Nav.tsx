"use client";

import { X, Menu } from "lucide-react";
import Logo from "@/components/Logo";

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
        <a href="/" className="no-underline group">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <Logo size={36} showText={true} />
          </div>
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
          className="lg:hidden flex items-center justify-center relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            width: 48,
            height: 48,
            background: mobileMenuOpen ? "rgba(255, 255, 255, 0.08)" : "transparent",
            borderRadius: "50%",
            transition: "all 0.3s ease",
            border: "none",
            cursor: "pointer",
          }}
        >
          {mobileMenuOpen ? (
            <X size={24} color="#ffffff" strokeWidth={2} />
          ) : (
            <Menu size={24} color="#ffffff" strokeWidth={2} />
          )}
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
