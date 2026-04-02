const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-lg mx-auto text-center">
        <div className="mb-10">
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto bg-muted rounded-full flex items-center justify-center">
            <span className="font-sans text-sm text-muted-foreground">Imagem</span>
          </div>
        </div>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Panqueca — Ateliê Infantil
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
          Pronto para ver de perto?
        </h2>
        <p className="font-sans text-base font-light text-muted-foreground mb-10">
          Descubra por que os Bodys Over da Panqueca são os Best-Sellers da marca.
        </p>
        <a
          href="#"
          className="inline-block font-sans text-sm tracking-wide bg-primary text-primary-foreground px-10 py-4 hover:opacity-90 transition-opacity duration-300"
        >
          Ver detalhes
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
