import ctaImage from "@/assets/cta-panqueca.jpg";

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-lg mx-auto text-center">
        <div className="mb-10">
          <img
            src={ctaImage}
            alt="Detalhe dos Bodys Over Panqueca"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full mx-auto"
            loading="lazy"
            width={320}
            height={320}
          />
        </div>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Panqueca — Ateliê Infantil
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
          Pronto para ver de perto?
        </h2>
        <p className="font-sans text-base font-light text-muted-foreground mb-10">
          Descubra por que o Body Over da Panqueca é o Best-Seller da marca.
        </p>
        <a
          href="#produtos"
          className="inline-block font-sans text-sm tracking-wide bg-primary text-primary-foreground px-10 py-4 hover:opacity-90 transition-opacity duration-300"
        >
          Ver detalhes
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
