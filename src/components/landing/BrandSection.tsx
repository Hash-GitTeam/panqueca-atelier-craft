import { PenTool, Hand, Gem, Scissors, Clock } from "lucide-react";

const values = [
  { text: "Peças autorais, desenhadas uma a uma", icon: PenTool },
  { text: "Produção artesanal em ateliê", icon: Hand },
  { text: "Edições limitadas — não massificado", icon: Gem },
  { text: "Acabamento superior em cada costura", icon: Scissors },
  { text: "Estética atemporal, fora de tendências", icon: Clock },
];

const BrandSection = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Panqueca — Ateliê Infantil
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-16">
          Por trás de cada peça, um ateliê que pensa diferente.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card/60 border border-border/50"
            >
              <div className="w-12 h-12 rounded-full bg-caramel/10 flex items-center justify-center">
                <v.icon className="w-5 h-5 text-caramel" strokeWidth={1.5} />
              </div>
              <p className="font-sans text-sm font-light text-foreground/80 leading-relaxed">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
