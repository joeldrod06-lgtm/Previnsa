import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";
import { HeroSection } from "./sections/HeroSection";
import { SectorsSection } from "./sections/SectorsSection";
import { ServicesSection } from "./sections/ServicesSection";

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <HeroSection />
      <ServicesSection />
      <SectorsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
