import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import EVvsStandard from "@/components/EVvsStandard";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CategoryGrid />
        <EVvsStandard />
        <ServicesGrid />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
