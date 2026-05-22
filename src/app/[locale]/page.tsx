import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Departments from "@/components/Departments";
import InnovationHub from "@/components/InnovationHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Departments />
      <InnovationHub />
      <Contact />
      <Footer />
    </main>
  );
}
