import Hero from "./Component/hero";
import SummaryProjects from "./Component/summary-projects";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <SummaryProjects />
      </main>
    </div>
  );
}
