import { lazy, Suspense } from "react";
import HeroSection from "@/components/landing/HeroSection";

const PositioningSection = lazy(() => import("@/components/landing/PositioningSection"));
const ProblemSection = lazy(() => import("@/components/landing/ProblemSection"));
const DifferentialSection = lazy(() => import("@/components/landing/DifferentialSection"));
const ProductsSection = lazy(() => import("@/components/landing/ProductsSection"));
const ValueSection = lazy(() => import("@/components/landing/ValueSection"));
const SensorialSection = lazy(() => import("@/components/landing/SensorialSection"));
const ScarcitySection = lazy(() => import("@/components/landing/ScarcitySection"));
const FinalCTASection = lazy(() => import("@/components/landing/FinalCTASection"));

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <Suspense fallback={null}>
        <PositioningSection />
        <ProblemSection />
        <DifferentialSection />
        <ProductsSection />
        <ValueSection />
        <SensorialSection />
        <ScarcitySection />
        <FinalCTASection />
      </Suspense>
    </main>
  );
};

export default Index;
