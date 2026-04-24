"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SmoothScroll from "@/components/SmoothScroll";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <SmoothScroll />
      <Nav mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* Simple Hero */}
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 80,
          padding: "160px 32px 80px",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h1
            className="section-heading text-white"
            style={{ 
              marginBottom: 16,
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Liên hệ
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Gửi thông tin dự án, chúng tôi sẽ phản hồi trong 24 giờ
          </p>
        </div>
      </section>
      
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
