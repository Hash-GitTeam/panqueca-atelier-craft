import heroImage from "@/assets/hero-panqueca.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mãe segurando bebê com roupinha Panqueca"
          className="w-full h-full object-cover"
          width={1200}
          height={800}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto pt-20">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/70 mb-8">
          Panqueca — Ateliê Infantil
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight mb-6 text-espresso">
          Liberdade para se mover.
          <br />
          Conforto para ser bebê.
        </h1>
        <p className="font-sans text-base md:text-lg font-light leading-relaxed text-foreground/80 mb-10 max-w-lg mx-auto">
          Body com modelagem autoral, pensado para acompanhar cada movimento — com estética que foge do comum.
        </p>
        <a
          href="#produtos"
          className="inline-block font-sans text-sm tracking-wide border border-foreground/30 px-8 py-3.5 text-foreground/90 hover:bg-foreground/5 transition-colors duration-300"
        >
          Ver os detalhes de perto
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
