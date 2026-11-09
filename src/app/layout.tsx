import type { Metadata, Viewport } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Personalize from "@/components/Personalize";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kestrel Ridge Builders | Kitchen, Bath, Roofing & Remodeling in Millbrook, OH",
  description:
    "Licensed & insured remodeling contractor serving Millbrook and Greater Summit Valley since 2004. Kitchens, bathrooms, roofing, decks, windows & doors. Fixed-price quotes, 10-year workmanship warranty. Request a free estimate.",
  openGraph: {
    title: "Kestrel Ridge Builders — Remodeling done right, on schedule",
    description:
      "Kitchens, bathrooms, roofing, decks, windows & doors in Millbrook, OH. Free in-home estimates.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#23272e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-clip">
        <Personalize />
        {children}
      </body>
    </html>
  );
}
