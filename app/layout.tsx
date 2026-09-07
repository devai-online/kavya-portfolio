import type { Metadata } from "next";
import { Bodoni_Moda, IBM_Plex_Mono, Inter } from "next/font/google";
import Link from "next/link";
import Cursor from "@/components/Cursor";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const serif = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
  variable: "--font-serif",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kavya Ramireddy — Luxury Marketing & Brand Strategy",
  description:
    "Portfolio of Kavya Ramireddy — luxury marketing & brand strategy professional, INSEAD MiM '27. Consumer insights, brand communications & content marketing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${mono.variable} ${sans.variable}`}>
        <nav className="nav">
          <Link href="/" className="serif" style={{ fontSize: 17, letterSpacing: "0.02em" }}>
            Kavya
          </Link>
          <div style={{ display: "flex", gap: 28 }}>
            <Link href="/work" className="micro">Work</Link>
            <Link href="/about" className="micro">About</Link>
            <Link href="/vision" className="micro">Vision</Link>
            <Link href="/contact" className="micro">Contact</Link>
          </div>
        </nav>
        {children}
        <PageTransition />
        <Cursor />
      </body>
    </html>
  );
}
