import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "portfolio-pm - 웹 개발자 포트폴리오",
  description: "창의적인 웹 개발자 PM의 포트폴리오 웹사이트입니다. React, Next.js, TypeScript를 활용한 프로젝트들과 개발 경험을 공유합니다.",
  keywords: ["웹 개발", "React", "Next.js", "TypeScript", "포트폴리오", "개발자"],
  authors: [{ name: "PM" }],
  creator: "PM",
  openGraph: {
    title: "portfolio-pm - 웹 개발자 포트폴리오",
    description: "창의적인 웹 개발자 PM의 포트폴리오 웹사이트",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
