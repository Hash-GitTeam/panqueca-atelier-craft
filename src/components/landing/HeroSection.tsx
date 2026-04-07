import { useState, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import heroImageDad from "@/assets/hero-panqueca.jpg";
import heroImageDadMobile from "@/assets/hero-panqueca-mobile.webp";
import heroImageMom from "@/assets/hero-panqueca-mom.jpg";

const slides = [
  {
    image: heroImageDad,
    mobileImage: heroImageDadMobile,
    alt: "Bebê com Body Over Dad's Mini Panqueca",
    title: "Body Over Dad's Mini",
    description: "Modelagem over exclusiva, mais solta e confortável para o dia a dia.",
  },
  {
    image: heroImageMom,
    mobileImage: undefined as string | undefined,
    alt: "Mãe segurando bebê com Body Over Mom's Mini Panqueca",
    title: "Body Over Mom's Mini",
    description: "Modelagem over exclusiva, mais solta e confortável para o dia a dia.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === current || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 500);
    },
    [current, isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current === 0 ? 1 : 0);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Preload both images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current && !isTransitioning ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.alt}
            className="w-full h-full object-cover"
            width={1200}
            height={800}
            fetchPriority={i === 0 ? "high" : undefined}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/35 to-background/80" />
        </div>
      ))}

      <div
        className="relative z-10 text-center px-6 max-w-2xl mx-auto pt-20 transition-opacity duration-500 ease-in-out"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/70 mb-8">
          Panqueca — Ateliê Infantil
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight mb-6 text-espresso">
          {slide.title}
        </h1>
        <p className="font-sans text-base md:text-lg font-light leading-relaxed text-foreground/80 mb-10 max-w-lg mx-auto">
          {slide.description}
        </p>
        <a
          href="#produtos"
          className="inline-block font-sans text-sm tracking-wide bg-espresso text-white px-8 py-3.5 hover:bg-espresso/90 transition-colors duration-300"
        >
          Ver detalhes
        </a>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-foreground/70 w-6"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
