import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Pulse 2026",
  description: "The fifteenth annual technology conference celebrating the latest developments in the ECE and CS departments at the University of Illinois Urbana-Champaign",
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/assets/2026/Icon_transparent.png', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/assets/2026/Icon_transparent.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`} style={{ fontFamily: 'var(--font-montserrat)' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
