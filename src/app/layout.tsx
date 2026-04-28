import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Tx Tech — Phát triển Website & Mobile App chuyên nghiệp",
  description:
    "Phát triển website và ứng dụng di động cho cá nhân & doanh nghiệp. Thiết kế hiện đại, tối ưu hiệu suất, bảo mật cao. Báo giá minh bạch.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full">
      <body className="min-h-full flex flex-col bg-black text-white antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
