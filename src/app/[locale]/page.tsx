import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Departments from "@/components/Departments";
import InnovationHub from "@/components/InnovationHub";
import ContactTeaser from "@/components/ContactTeaser";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";
  return {
    title: isDE
      ? "Unfold Creative — Schuhdesign Studio"
      : "Unfold Creative — Footwear Design Studio",
    description: isDE
      ? "Wir kreieren Schuhe und Accessoires für Konsumenten der Welt — europäische Handwerkskunst trifft auf globale Perspektive."
      : "We create shoes and accessories for the consumers of the world — European craftsmanship meets a global perspective.",
    alternates: { canonical: `https://unfoldcreative-design.com/${locale}` },
  };
}

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero />
      <About />
      <Departments />
      <InnovationHub />
      <ContactTeaser />
      <Footer />
    </main>
  );
}
