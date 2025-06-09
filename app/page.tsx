import Footer from "./Component/footer";
import Hero from "./Component/hero";
import HeroSection from "./Component/hero-banner";
import SummaryProjects from "./Component/summary-projects";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <SummaryProjects />
        <HeroSection />
        <Footer />
      </main>
    </div>
  );
}
