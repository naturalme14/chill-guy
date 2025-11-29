import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grade Predictor - Chill Guy Edition",
  description: "Find out how cooked your GPA really is with savage roasts and black chill guy vibes.",
  keywords: ["grade predictor", "GPA roaster", "chill guy", "degen", "crypto"],
  authors: [{ name: "Chill Guy" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Grade Predictor",
    description: "Your GPA just got roasted",
    url: "http://localhost:3000",
    siteName: "Grade Predictor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grade Predictor",
    description: "Your GPA just got roasted",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
