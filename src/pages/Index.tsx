import { lazy, Suspense } from "react";
import HeroSection from "@/components/landing/HeroSection";

const ProblemSection = lazy(() => import("@/components/landing/ProblemSection"));
const DifferentialSection = lazy(() => import("@/components/landing/DifferentialSection"));
const ProductDadSection = lazy(() => import("@/components/landing/ProductDadSection"));
const ProductMomSection = lazy(() => import("@/components/landing/ProductMomSection"));
const BrandSection = lazy(() => import("@/components/landing/BrandSection"));
const SensorialSection = lazy(() => import("@/components/landing/SensorialSection"));
const ScarcitySection = lazy(() => import("@/components/landing/ScarcitySection"));
const FinalCTASection = lazy(() => import("@/components/landing/FinalCTASection"));

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <Suspense fallback={null}>
        <ProblemSection />
        <DifferentialSection />
        <ProductDadSection />
        <ProductMomSection />
        <BrandSection />
        <SensorialSection />
        <ScarcitySection />
        <FinalCTASection />
      </Suspense>
    </main>
  );
};

export default Index;
