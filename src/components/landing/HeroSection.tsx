import { useState, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import heroImageDad from "@/assets/hero-panqueca-desktop.webp";
import heroImageDadMobile from "@/assets/hero-panqueca-mobile.webp";
import heroImageMobile2 from "@/assets/hero-panqueca-mobile-2.webp";

const desktopSlides = [
  {
    image: heroImageDad,
    alt: "Pai com bebê usando Body Over Dad's Mini Panqueca",
  },
];

const mobileSlides = [
  {
    image: heroImageDadMobile,
    alt: "Bebê com Body Over Dad's Mini Panqueca",
  },
  {
    image: heroImageMobile2,
    alt: "Bebê com Body Over Dad's Mini Panqueca — foto 2",
  },
];

const HeroSection = () => {
  const isMobile = useIsMobile();
  const slides = isMobile ? mobileSlides : desktopSlides;
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

  // Reset current when slides change (e.g. resize desktop→mobile)
  useEffect(() => {
    setCurrent(0);
  }, [isMobile]);

  // Auto-play only when more than 1 slide
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo, slides.length]);

  return (
    <>
      {/* Hero Image - Clean, no overlay */}
      <section className="relative min-h-[80vh] md:min-h-[85vh] overflow-hidden">
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
          </div>
        ))}

        {/* Indicators - bottom of hero image (only if multiple slides) */}
        {slides.length > 1 && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-white/90 w-6"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Info Section */}
      <section className="bg-background py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/70 mb-6">
            Panqueca — Ateliê Infantil
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight mb-4 text-espresso">
            Body Over Dad's / Mom's Mini
          </h1>
          <p className="font-sans text-base md:text-lg font-light leading-relaxed text-foreground/80 mb-8 max-w-lg mx-auto">
            Modelagem over exclusiva, mais solta e confortável para o dia a dia.
          </p>
          <a
            href="#produtos"
            className="inline-block font-sans text-sm tracking-wide bg-espresso text-white px-8 py-3.5 hover:bg-espresso/90 transition-colors duration-300"
          >
            Ver detalhes
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
