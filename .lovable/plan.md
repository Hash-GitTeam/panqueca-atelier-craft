

## Problema
O texto sobre a imagem do hero tem baixo contraste porque o overlay gradiente atual é muito sutil (`from-background/30 via-background/10 to-background/70`), dificultando a leitura especialmente sobre imagens claras.

## Solução
Reforçar a legibilidade do texto aplicando duas técnicas combinadas:

1. **Aumentar a opacidade do overlay gradiente** — trocar de `from-background/30 via-background/10 to-background/70` para `from-background/60 via-background/40 to-background/80`, criando uma camada mais densa entre a imagem e o texto.

2. **Adicionar text-shadow nos textos** — aplicar um sutil `text-shadow` no título e na descrição para criar separação visual mesmo em áreas onde a imagem é mais clara.

3. **Ajustar cor do subtítulo** — trocar `text-foreground/70` para `text-foreground/90` no label "Panqueca — Ateliê Infantil" para melhorar contraste.

### Arquivo alterado
- `src/components/landing/HeroSection.tsx` — overlay, text-shadow e cores do texto.

