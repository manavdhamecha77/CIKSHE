// app/page.tsx
import HeroSection from "@/components/HeroSection";
import TabsSection from "@/components/TabsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TabsSection />
      <Footer />
    </main>
  );
}
