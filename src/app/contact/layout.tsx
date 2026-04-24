import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ - Tx Tech | Phát triển Website & Mobile App",
  description: "Liên hệ với Tx Tech để nhận tư vấn miễn phí và báo giá chi tiết cho dự án website và mobile app của bạn. Phản hồi trong 24 giờ.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
