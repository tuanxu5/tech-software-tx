"use client";

import { ShoppingBag, Building2, Home, Utensils, GraduationCap, Plane, FileText, Smartphone, Heart, Newspaper, Car, Palette, Music, Dumbbell, Hotel, Briefcase } from "lucide-react";

const categories = [
  { id: "ecommerce", name: "Bán hàng", icon: ShoppingBag },
  { id: "corporate", name: "Công ty", icon: Building2 },
  { id: "realestate", name: "Bất động sản", icon: Home },
  { id: "restaurant", name: "Nhà hàng", icon: Utensils },
  { id: "education", name: "Giáo dục", icon: GraduationCap },
  { id: "travel", name: "Du lịch", icon: Plane },
  { id: "healthcare", name: "Y tế", icon: Heart },
  { id: "news", name: "Tin tức", icon: Newspaper },
  { id: "automotive", name: "Ô tô", icon: Car },
  { id: "design", name: "Thiết kế", icon: Palette },
  { id: "entertainment", name: "Giải trí", icon: Music },
  { id: "fitness", name: "Thể thao", icon: Dumbbell },
  { id: "hotel", name: "Khách sạn", icon: Hotel },
  { id: "business", name: "Doanh nghiệp", icon: Briefcase },
  { id: "landing", name: "Landing Page", icon: FileText },
  { id: "app", name: "Mobile App", icon: Smartphone },
];

const projects = [
  {
    title: "Fashion Store",
    category: "ecommerce",
    categoryName: "Bán hàng",
    description: "Website bán hàng thời trang với 5000+ sản phẩm. Tích hợp thanh toán VNPay, Momo. Doanh thu 2 tỷ/tháng.",
    tags: ["Next.js", "Shopify", "Tailwind"],
    image: "🛍️",
  },
  {
    title: "Corporate Website",
    category: "corporate",
    categoryName: "Công ty",
    description: "Website giới thiệu công ty tập đoàn. Đa ngôn ngữ (VI/EN). SEO top 3 Google. 50k visits/tháng.",
    tags: ["Next.js", "Strapi", "AWS"],
    image: "🏢",
  },
  {
    title: "Real Estate Portal",
    category: "realestate",
    categoryName: "Bất động sản",
    description: "Website môi giới BĐS. 10,000+ listings. Map search, mortgage calculator. 100k visits/tháng.",
    tags: ["React", "Node.js", "MySQL"],
    image: "🏠",
  },
  {
    title: "Restaurant Booking",
    category: "restaurant",
    categoryName: "Nhà hàng",
    description: "Hệ thống đặt bàn nhà hàng online. Tích hợp Google Maps, payment gateway. 500+ bookings/ngày.",
    tags: ["React", "Firebase", "Stripe"],
    image: "🍽️",
  },
  {
    title: "Education Platform",
    category: "education",
    categoryName: "Giáo dục",
    description: "Nền tảng học trực tuyến. Video streaming, quiz, certificate. 3000+ học viên đăng ký.",
    tags: ["Next.js", "MongoDB", "Vercel"],
    image: "🎓",
  },
  {
    title: "Travel Booking",
    category: "travel",
    categoryName: "Du lịch",
    description: "Website đặt tour du lịch. Tích hợp thanh toán, quản lý booking. 1000+ tours đã bán.",
    tags: ["React", "Node.js", "Stripe"],
    image: "✈️",
  },
  {
    title: "Hospital Management",
    category: "healthcare",
    categoryName: "Y tế",
    description: "Hệ thống quản lý bệnh viện. Đặt lịch khám, quản lý bệnh án điện tử. 5000+ bệnh nhân.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "🏥",
  },
  {
    title: "News Portal",
    category: "news",
    categoryName: "Tin tức",
    description: "Website tin tức đa chuyên mục. CMS mạnh mẽ, SEO tốt. 200k visits/ngày.",
    tags: ["Next.js", "Strapi", "Vercel"],
    image: "📰",
  },
  {
    title: "Car Dealership",
    category: "automotive",
    categoryName: "Ô tô",
    description: "Website showroom ô tô. 3D car viewer, test drive booking. 500+ xe đã bán.",
    tags: ["React", "Three.js", "Node.js"],
    image: "🚗",
  },
  {
    title: "Design Portfolio",
    category: "design",
    categoryName: "Thiết kế",
    description: "Portfolio cho designer. Gallery đẹp, animation mượt. 10k+ views/tháng.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    image: "🎨",
  },
  {
    title: "Music Streaming",
    category: "entertainment",
    categoryName: "Giải trí",
    description: "Nền tảng nghe nhạc online. 10,000+ bài hát, playlist, social features.",
    tags: ["React", "Node.js", "AWS S3"],
    image: "🎵",
  },
  {
    title: "Fitness App",
    category: "fitness",
    categoryName: "Thể thao",
    description: "Ứng dụng tập luyện iOS & Android. Workout tracking, nutrition. 10,000+ downloads.",
    tags: ["React Native", "Firebase", "Stripe"],
    image: "💪",
  },
  {
    title: "Hotel Booking",
    category: "hotel",
    categoryName: "Khách sạn",
    description: "Website đặt phòng khách sạn. Real-time availability, payment gateway. 2000+ bookings/tháng.",
    tags: ["Next.js", "Node.js", "Stripe"],
    image: "🏨",
  },
  {
    title: "Business Dashboard",
    category: "business",
    categoryName: "Doanh nghiệp",
    description: "Hệ thống quản lý doanh nghiệp. CRM, inventory, analytics. 500+ users.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "💼",
  },
  {
    title: "Product Landing",
    category: "landing",
    categoryName: "Landing Page",
    description: "Landing page giới thiệu sản phẩm. Conversion rate 12%. A/B testing, analytics.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    image: "📄",
  },
  {
    title: "Delivery App",
    category: "app",
    categoryName: "Mobile App",
    description: "App giao hàng iOS & Android. Real-time tracking, payment. 50,000+ orders.",
    tags: ["React Native", "Firebase", "Google Maps"],
    image: "📱",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        padding: "120px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(215, 172, 56, 0.06) 0%, transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div className="text-center fade-in-up" style={{ marginBottom: 60 }}>
          <h2 className="section-heading text-white" style={{ marginBottom: 20 }}>
            Dự án tiêu biểu
          </h2>
          <p
            style={{
              fontSize: 19,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Hơn 100+ dự án đa lĩnh vực đã hoàn thành cho khách hàng trên toàn quốc
          </p>
        </div>

        {/* Category Icons - Display only */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 16,
            marginBottom: 80,
            maxWidth: 1100,
            margin: "0 auto 80px",
          }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            
            return (
              <div
                key={category.id}
                style={{
                  padding: "20px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(215, 172, 56, 0.1) 0%, rgba(237, 51, 52, 0.1) 100%)";
                  e.currentTarget.style.borderColor = "rgba(215,172,56,0.3)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon 
                    size={24} 
                    style={{ 
                      stroke: "rgba(255,255,255,0.6)",
                      transition: "all 0.3s ease",
                    }} 
                    strokeWidth={2}
                  />
                </div>

                {/* Label */}
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                  }}
                >
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="btn-primary"
            style={{ padding: "18px 36px", fontSize: 18, fontWeight: 600 }}
          >
            Bắt đầu dự án của bạn
          </a>
        </div>
      </div>

      {/* Mobile responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 20px !important;
          }
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(120px"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(350px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
