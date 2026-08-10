import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awesome AIGC Tools — Open-source Creative Radar",
  description: "A bilingual, searchable index of useful open-source tools for AI image, video, audio, 3D, design, prompts, and workflows.",
  openGraph: {
    title: "Awesome AIGC Tools",
    description: "Find the right open-source creative AI tool before your GPU gets cold.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awesome AIGC Tools",
    description: "A bilingual, task-first radar for open-source creative AI tools.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
