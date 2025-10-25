import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skylook Ceilings - Professional False Ceiling Services",
  description:
    "Transform your space with beautiful false ceilings, POP designs, and gypsum installations. Professional ceiling services for residential and commercial spaces.",
  keywords:
    "false ceiling, POP ceiling, gypsum ceiling, interior design, ceiling installation, ceiling repair",
  authors: [{ name: "Skylook Ceilings" }],
  openGraph: {
    title: "Skylook Ceilings - Professional False Ceiling Services",
    description:
      "Transform your space with beautiful false ceilings, POP designs, and gypsum installations.",
    type: "website",
    locale: "en_US",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
