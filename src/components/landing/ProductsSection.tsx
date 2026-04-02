import dadsMini from "@/assets/product-dads-mini.jpg";
import momsMini from "@/assets/product-moms-mini.jpg";

const ProductCard = ({
  image,
  alt,
  title,
  subtitle,
  description,
  features,
}: {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}) => (
  <div className="group">
    <div className="overflow-hidden mb-8">
      <img
        src={image}
        alt={alt}
        className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        loading="lazy"
        width={800}
        height={1000}
      />
    </div>
    <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
      {subtitle}
    </p>
    <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">
      {title}
    </h3>
    <p className="font-sans text-base font-light leading-relaxed text-muted-foreground mb-6">
      {description}
    </p>
    <ul className="space-y-2 mb-8">
      {features.map((f, i) => (
        <li key={i} className="font-sans text-sm text-foreground/70 flex items-start gap-2">
          <span className="block w-1 h-1 rounded-full bg-caramel mt-2 flex-shrink-0" />
          {f}
        </li>
      ))}
    </ul>
    <a
      href="#"
      className="inline-block font-sans text-sm tracking-wide border border-foreground/30 px-7 py-3 text-foreground/90 hover:bg-foreground/5 transition-colors duration-300"
    >
      Ver detalhes
    </a>
  </div>
);

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 md:py-28 px-6 bg-card scroll-mt-8">
      <div className="max-w-4xl mx-auto">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-4">
          Peças em destaque
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-center mb-16">
          Feitas para quem escolhe com intenção.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <ProductCard
            image={dadsMini}
            alt="Body Over Dad's Mini — body de moletom marrom escuro"
            title="Body Over Dad's Mini"
            subtitle="Best seller"
            description="A referência do pai, no tamanho do filho. Oversized, macio, com identidade própria."
            features={[
              "Moletom macio com toque aveludado",
              "Modelagem over exclusiva Panqueca",
              "Botões de pressão para facilitar a troca",
              "Cores: marrom escuro e caramelo",
            ]}
          />
          <ProductCard
            image={momsMini}
            alt="Body Over Mom's Mini — body de moletom caramelo"
            title="Body Over Mom's Mini"
            subtitle="Best seller"
            description="O colo da mãe traduzido em roupa. Aconchego, suavidade e presença."
            features={[
              "Algodão premium com acabamento delicado",
              "Modelagem over exclusiva Panqueca",
              "Botões de pressão funcionais",
              "Cores: caramelo e bege natural",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
