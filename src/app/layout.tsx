import type { Metadata } from "next";
import "./globals.css";

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
    <html>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
