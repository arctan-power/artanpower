import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import SolutionOverview from "@/components/SolutionOverview";
import KeyFeatures from "@/components/KeyFeatures";
import TechnologyStack from "@/components/TechnologyStack";
import ProductModules from "@/components/ProductModules";
import QuantumSecurity from "@/components/QuantumSecurity";
import UseCases from "@/components/UseCases";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <KeyFeatures />
      <TechnologyStack />
      <ProductModules />
      <QuantumSecurity />
      <UseCases />
      <About />
      <CTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
