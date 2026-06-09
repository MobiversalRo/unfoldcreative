import Navbar from "@/components/Navbar";
import DepartmentsHero from "@/components/DepartmentsHero";
import DepartmentsSubSections from "@/components/DepartmentsSubSections";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";
  return {
    title: isDE ? "Abteilungen" : "Departments",
    description: isDE
      ? "Trendforschung, Design, Einkauf, Labor und Grafik — wir begleiten Produkte von der ersten Idee bis zum finalen Prototypen."
      : "Trend research, design, sourcing, laboratory and graphics — we guide products from first idea to final prototype.",
    alternates: { canonical: `https://unfoldcreative-design.com/${locale}/departments` },
  };
}

export default function DepartmentsPage() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <DepartmentsHero />
      <DepartmentsSubSections />
      <Footer />
    </main>
  );
}
