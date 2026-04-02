const values = [
  "Peças autorais, desenhadas uma a uma",
  "Produção artesanal em ateliê",
  "Edições limitadas — não massificado",
  "Acabamento superior em cada costura",
  "Estética atemporal, fora de tendências",
];

const BrandSection = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Panqueca — Ateliê Infantil
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">
          Por trás de cada peça, um ateliê que pensa diferente.
        </h2>
        <ul className="space-y-5">
          {values.map((v, i) => (
            <li
              key={i}
              className="font-sans text-base font-light text-foreground/70 flex items-center justify-center gap-3"
            >
              <span className="block w-6 h-px bg-caramel" />
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandSection;
