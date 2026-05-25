import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

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
