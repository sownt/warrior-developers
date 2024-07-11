import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Đăng ký tham dự cuộc thi Warrior Developers",
  description: "Warrior Developers là một cuộc thi lập trình được tổ chức ngay trong sự kiện Google I/O Extended Cloud Hanoi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
