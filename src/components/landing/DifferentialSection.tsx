import detailImage from "@/assets/detail-texture.jpg";

const DifferentialSection = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8">
            Modelagem autoral, pensada do zero.
          </h2>
          <div className="space-y-5 font-sans text-base font-light leading-relaxed text-muted-foreground">
            <p>
              Cada peça Panqueca nasce de uma modelagem exclusiva — desenhada aqui,
              não copiada de catálogos industriais.
            </p>
            <p>
              A modelagem é propositalmente mais solta, mais generosa.
              Permite que o bebê se mova com liberdade total, sem costuras
              que apertam ou tecidos que limitam.
            </p>
            <p>
              Não é padrão de mercado. É padrão Panqueca.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={detailImage}
            alt="Detalhe do tecido e costura de uma peça Panqueca"
            className="w-full aspect-[3/4] object-cover"
            loading="lazy"
            width={800}
            height={1067}
          />
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
