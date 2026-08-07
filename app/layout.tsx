import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karla Leung - Full-Stack Developer",
  description: "Full-Stack Developer portfolio - React, Next.js, PHP, C#, Python",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
