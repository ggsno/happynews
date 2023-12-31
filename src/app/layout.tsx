import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "행복한 소식",
  description: "행복한 소식을 모아 전해드립니다.",
  openGraph: {
    images: "/happiest_sun.gif",
  },
  icons: "/happiest_sun.gif",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <div className="mt-[var(--header-height)]">{children}</div>
      </body>
    </html>
  );
}
