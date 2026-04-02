const SensorialSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-muted flex items-center justify-center">
            <span className="font-sans text-sm text-muted-foreground">Imagem sensorial</span>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-center">
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
      </div>
    </section>
  );
};

export default SensorialSection;
