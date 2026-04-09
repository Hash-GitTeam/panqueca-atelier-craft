

## Plano: Atualizar banner desktop e textos de 5 seções

### Alterações

1. **Banner desktop da Hero** — Copiar `Banner_LP_Panqueca_-_1920x918.webp` para `src/assets/` e atualizar o import em `HeroSection.tsx` para usar a nova imagem no array `desktopSlides`.

2. **Seção "Modelagem autoral"** (`DifferentialSection.tsx`) — Atualizar os parágrafos conforme texto fornecido (remover referência a "Bodys Over" no plural, ajustar para singular e novo conteúdo).

3. **Seção "Body Over Dad's Mini"** (`ProductDadSection.tsx`) — Atualizar descrição e lista de características. Remover label "Best seller".

4. **Seção "Body Over Mom's Mini"** (`ProductMomSection.tsx`) — Atualizar descrição e lista de características. Remover label "Best seller".

5. **Seção "Você não pode tocar agora"** (`SensorialSection.tsx`) — Substituir os dois parágrafos pelo novo texto (dois parágrafos).

6. **Seção "Pronto para ver de perto?"** (`FinalCTASection.tsx`) — Atualizar descrição para texto fornecido.

### Arquivos editados
- `src/assets/hero-panqueca-desktop.webp` (novo arquivo)
- `src/components/landing/HeroSection.tsx`
- `src/components/landing/DifferentialSection.tsx`
- `src/components/landing/ProductDadSection.tsx`
- `src/components/landing/ProductMomSection.tsx`
- `src/components/landing/SensorialSection.tsx`
- `src/components/landing/FinalCTASection.tsx`

