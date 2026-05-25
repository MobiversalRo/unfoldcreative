import Navbar from "@/components/Navbar";
import DepartmentsHero from "@/components/DepartmentsHero";
import DepartmentsSubSections from "@/components/DepartmentsSubSections";
import Footer from "@/components/Footer";

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
