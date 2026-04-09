import momsMini from "@/assets/product-moms-mini.jpg";

const ProductMomSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-card">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-5">
            Body Over Mom's Mini
          </h2>
          <p className="font-sans text-base font-light leading-relaxed text-muted-foreground mb-8">
            O colo da mãe traduzido em roupa. Conforto no toque, leveza no
            caimento e a delicadeza de quem cuida nos mínimos detalhes.
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Moletom macio 100% algodão",
              "Modelagem over exclusiva Panqueca",
              "Botões de pressão para facilitar a troca",
              "Cores: marrom escuro e caramelo",
            ].map((f, i) => (
              <li key={i} className="font-sans text-sm text-foreground/70 flex items-start gap-2">
                <span className="block w-1 h-1 rounded-full bg-caramel mt-2 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="https://panquecaparapequenos.com.br/produtos/body-over-moms-mini/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-sm tracking-wide bg-espresso text-white px-8 py-3.5 hover:bg-espresso/90 transition-colors duration-300"
          >
            Comprar agora
          </a>
        </div>
        <div className="overflow-hidden order-1 md:order-2">
          <img
            src={momsMini}
            alt="Body Over Mom's Mini — body de moletom caramelo no corpo do bebê"
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

export default ProductMomSection;
