import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Departments from "@/components/Departments";
import InnovationHub from "@/components/InnovationHub";
import ContactTeaser from "@/components/ContactTeaser";
import Footer from "@/components/Footer";

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
