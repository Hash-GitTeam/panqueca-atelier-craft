import sensorialImage from "@/assets/sensorial-texture.jpg";

const SensorialSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-card">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8">
            Você não pode tocar agora — mas vai entender quando chegar.
          </h2>
          <div className="space-y-5 font-sans text-base font-light leading-relaxed text-muted-foreground">
            <p>
              Moletom 100% algodão, ideal para a pele do bebê. Tecido respirável e de alta qualidade. A costura que não marca, que não machuca. O caimento que acompanha o movimento.
            </p>
            <p>
              Algumas coisas só se entendem ao toque. E quando você sentir,
              vai saber que escolheu certo.
            </p>
          </div>
          <a
            href="#produtos"
            className="inline-block font-sans text-sm tracking-wide bg-espresso text-white px-8 py-3.5 hover:bg-espresso/90 transition-colors duration-300 mt-8"
          >
            Ver detalhes
          </a>
        </div>
        <div className="relative">
          <img
            src={sensorialImage}
            alt="Textura do tecido macio de uma peça Panqueca"
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

export default SensorialSection;
