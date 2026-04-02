import detailImage from "@/assets/detail-texture.jpg";

const DifferentialSection = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <img
            src={detailImage}
            alt="Detalhe do tecido e costura de uma peça Panqueca"
            className="w-full aspect-[16/9] md:aspect-[21/9] object-cover"
            loading="lazy"
            width={1200}
            height={514}
          />
        </div>
        <div className="max-w-2xl mx-auto text-center">
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
      </div>
    </section>
  );
};

export default DifferentialSection;
