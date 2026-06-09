import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";
  return {
    title: isDE ? "Über uns" : "About Us",
    description: isDE
      ? "Unfold Creative ist ein Ort, an dem Vorstellungskraft Schuhen Leben einhaucht — europäische Handwerkskunst trifft auf globale Perspektive."
      : "Unfold Creative is a place where imagination brings shoes to life — European craftsmanship meets a global perspective.",
    alternates: { canonical: `https://unfoldcreative-design.com/${locale}/about` },
  };
}

export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <div className="pt-20" />
      <Team />
      <Footer />
    </main>
  );
}
