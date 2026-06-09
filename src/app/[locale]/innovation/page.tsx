import Navbar from "@/components/Navbar";
import InnovationPageContent from "@/components/InnovationPageContent";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";
  return {
    title: isDE ? "Innovation Hub" : "Innovation Hub",
    description: isDE
      ? "Digitales Design, 3D-Prototyping, Tech Packs und Produktionsabstimmung — unsere Innovation Division begleitet den gesamten Entwicklungsprozess."
      : "Digital design, 3D prototyping, tech packs and production coordination — our Innovation division supports the full development process.",
    alternates: { canonical: `https://unfoldcreative-design.com/${locale}/innovation` },
  };
}

export default function InnovationPage() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <div className="pt-20" />
      <InnovationPageContent />
      <Footer />
    </main>
  );
}
