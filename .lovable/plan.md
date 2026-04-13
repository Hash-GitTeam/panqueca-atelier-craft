

## Diagnóstico: Queda de Performance Mobile (89 → 69)

Identifiquei os principais fatores que provavelmente causaram a queda no PageSpeed Insights mobile:

### 1. Imagens JPG grandes sem otimização
- `sensorial-texture.jpg` — **275 KB** (JPG, não WebP)
- `detail-texture.jpg` — **150 KB** (JPG, não WebP)
- `hero-panqueca-mom.jpg` / `hero-panqueca.jpg` — parecem não estar em uso, mas estão no bundle

Essas imagens JPG são significativamente maiores que WebP equivalente e impactam diretamente o LCP mobile.

### 2. Google Fonts via CSS @import (render-blocking)
A linha `@import url('https://fonts.googleapis.com/css2...')` no `index.css` é **render-blocking** — o navegador precisa baixar o CSS das fontes antes de renderizar qualquer coisa. Isso penaliza diretamente o FCP e LCP.

### 3. Hero carrega 2 imagens mobile simultaneamente
O carousel do `HeroSection` importa `hero-panqueca-mobile.webp` (133KB) e `hero-panqueca-mobile-2.webp` (145KB) como imports estáticos — ambas são incluídas no bundle mesmo que só uma apareça inicialmente.

### Plano de Correção

**A. Converter JPGs restantes para WebP (qualidade 90)**
- `sensorial-texture.jpg` → `.webp`
- `detail-texture.jpg` → `.webp` (já existe `differential-texture.webp`, verificar se `detail-texture.jpg` ainda é usado)
- `cta-panqueca.jpg` → `.webp`
- `product-dads-mini.jpg` e `product-moms-mini.jpg` → `.webp`
- Remover imagens não utilizadas (`hero-panqueca.jpg`, `hero-panqueca-mom.jpg`)

**B. Mover Google Fonts para `<link>` no index.html com `preconnect`**
- Remover o `@import` do `index.css`
- Adicionar `<link rel="preconnect">` e `<link rel="stylesheet">` com `display=swap` no `index.html` (já tem preconnect, falta o stylesheet link)

**C. Lazy-load a segunda imagem do carousel mobile**
- Usar import dinâmico ou simplesmente `loading="lazy"` para a segunda slide, evitando carregá-la como recurso crítico

Estimativa de ganho: **10-20 pontos** no PageSpeed mobile, voltando ao patamar anterior.

