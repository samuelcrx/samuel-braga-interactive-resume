import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Braga | Tech Lead & Software Engineer",
  description: "Hands-on Tech Lead and Specialist Software Engineer with expertise in distributed systems, software architecture, and full-stack engineering. Building scalable digital products with technical excellence.",
  keywords: ["Tech Lead", "Software Engineer", "Software Architecture", "Distributed Systems", "Full-Stack Developer", "Cloud Engineering", "DevOps"],
  authors: [{ name: "Samuel Braga" }],
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
