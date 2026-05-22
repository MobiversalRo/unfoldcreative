import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unfold Creative — Footwear Design Studio",
  description:
    "We create shoes and accessories for the consumers of the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
