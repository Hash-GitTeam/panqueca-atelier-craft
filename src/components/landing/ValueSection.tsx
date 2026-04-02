const values = [
  "Peças autorais, desenhadas uma a uma",
  "Produção artesanal em ateliê",
  "Não massificado — edições limitadas",
  "Acabamento superior em cada costura",
  "Estética atemporal, fora de tendências",
];

const ValueSection = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">
          O que faz uma Panqueca, Panqueca.
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

export default ValueSection;
