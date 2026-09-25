import type { Metadata } from "next";
import { Bodoni_Moda, Caveat, IBM_Plex_Mono, Inter } from "next/font/google";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const serif = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
const hand = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: "Kavya Ramireddy — Luxury Marketing & Brand Strategy",
  description:
    "Portfolio of Kavya Ramireddy — luxury marketing & brand strategy professional, INSEAD MiM '27. Consumer insights, brand communications & content marketing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${mono.variable} ${sans.variable} ${hand.variable}`}>
        <Nav />
        {children}
        <PageTransition />
        <Cursor />
      </body>
    </html>
  );
}
