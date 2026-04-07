

## Plano: Separar Hero em foto limpa + seção de informações

### Resumo
Remover o overlay e o texto de cima da imagem da Hero. Criar uma nova seção logo abaixo com as informações (título, descrição, botão, indicadores de slide). A foto fica 100% limpa.

### Alterações

**Arquivo:** `src/components/landing/HeroSection.tsx`

1. **Bloco da imagem (seção 1):** Manter o carrossel de imagens em tela cheia, mas remover:
   - O overlay (`hero-image-overlay`)
   - O bloco de texto (título, descrição, botão)
   - Os indicadores de slide de dentro desta seção

2. **Nova seção de informações (seção 2):** Logo abaixo da imagem, criar um bloco com fundo `bg-background` contendo:
   - Label "Panqueca — Ateliê Infantil"
   - Título do slide atual (ex: "Body Over Dad's Mini")
   - Descrição do slide
   - Botão "Ver detalhes" (âncora para `#produtos`)
   - Indicadores de slide (bolinhas)
   - Centralizado, com padding generoso (`py-12 px-6`)

3. A lógica do carrossel (auto-play, transição) permanece igual, apenas o conteúdo textual muda de posição.

**Arquivo:** `src/index.css`
- A classe `.hero-image-overlay` pode ser mantida (não será mais usada na Hero, mas não causa problema).

### Resultado visual
```text
┌──────────────────────────┐
│                          │
│   Foto Hero (sem filtro) │
│   (min-h-screen)         │
│                          │
└──────────────────────────┘
┌──────────────────────────┐
│  Panqueca — Ateliê       │
│  Body Over Dad's Mini    │
│  Descrição...            │
│  [Ver detalhes]          │
│  ● ○                     │
└──────────────────────────┘
│  Restante do site...     │
```

