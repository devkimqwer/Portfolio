import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DefaultLayout from "@/components/layout/DefaultLayout/DefaultLayout";
import { className } from "@/util/functions";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const pretendard = localFont({
  src: [
    { path: "./fonts/Pretendard-Thin.woff", weight: "100", style: "normal" },
    {
      path: "./fonts/Pretendard-ExtraLight.woff",
      weight: "200",
      style: "normal",
    },
    { path: "./fonts/Pretendard-Light.woff", weight: "300", style: "normal" },
    { path: "./fonts/Pretendard-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Pretendard-Medium.woff", weight: "500", style: "normal" },
    {
      path: "./fonts/Pretendard-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    { path: "./fonts/Pretendard-Bold.woff", weight: "700", style: "normal" },
    {
      path: "./fonts/Pretendard-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    { path: "./fonts/Pretendard-Black.woff", weight: "900", style: "normal" },
  ],
  variable: "--font-family-pretend",
});

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={className(
          geistSans.variable,
          geistMono.variable,
          pretendard.variable
        )}
      >
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
