import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";
  return {
    title: isDE ? "Kontakt" : "Contact",
    description: isDE
      ? "Lass uns über Design, Entwicklung und neue Kollaborationen sprechen. Wir sind offen für ambitionierte Brands und spannende Projekte."
      : "Let's talk about design, development and new collaborations. We're open to ambitious brands and exciting projects.",
    alternates: { canonical: `https://unfoldcreative-design.com/${locale}/contact` },
  };
}

export default function ContactPage() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
