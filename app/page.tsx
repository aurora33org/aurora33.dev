import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingControls } from './components/layout/FloatingControls';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ContactSection } from './components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <FloatingControls />
      <Navbar />
      <main id="main">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
