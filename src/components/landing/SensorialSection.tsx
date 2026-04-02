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
              A maciez do moletom que encosta na pele do bebê. O peso leve de quem
              não sente que está vestido. A costura que não marca. O caimento que
              acompanha cada movimento.
            </p>
            <p>
              Algumas coisas só se entendem ao toque. E quando você sentir,
              vai saber que escolheu certo.
            </p>
          </div>
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
