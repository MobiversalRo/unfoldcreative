import Navbar from "@/components/Navbar";
import InnovationPageContent from "@/components/InnovationPageContent";
import Footer from "@/components/Footer";

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
