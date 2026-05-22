import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f5f0]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
