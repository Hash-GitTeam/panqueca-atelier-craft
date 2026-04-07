

## Plano: Substituir imagens do site por fotos reais

### Resumo
Substituir 7 imagens placeholder por fotos reais da marca enviadas pelo usuario, incluindo implementacao de imagem responsiva no Hero (desktop vs mobile).

### Arquivos de imagem a copiar

| Upload | Destino |
|---|---|
| `Desktop_Hero_Banner_1.webp` | `src/assets/hero-panqueca.jpg` (substituir) |
| `Mobile_Hero_Banner_1.webp` | `src/assets/hero-panqueca-mobile.webp` (novo) |
| `Seção_Marca_Autoral.webp` | `src/assets/detail-texture.jpg` (substituir) |
| `Body_Over_Dad_s_Mini.webp` | `src/assets/product-dads-mini.jpg` (substituir) |
| `Body_Over_Mom_s_Mini.webp` | `src/assets/product-moms-mini.jpg` (substituir) |
| `Você_não_pode_tocar_agora.webp` | `src/assets/sensorial-texture.jpg` (substituir) |
| `CTA_PL.webp` | `src/assets/cta-panqueca.jpg` (substituir) |

### Alteracoes em codigo

**1. `src/components/landing/HeroSection.tsx`**
- Importar a imagem mobile: `hero-panqueca-mobile.webp`
- Adicionar campo `mobileImage` ao primeiro slide do carrossel
- Usar o hook `useIsMobile()` para selecionar a imagem correta (desktop 16:9 ou mobile 9:16) no render
- O slide 2 (Mom's Mini) continua com a imagem atual `hero-panqueca-mom.jpg` (nao foi enviada substituta)

### Secoes que NAO precisam de alteracao de codigo
As demais imagens mantem os mesmos nomes de arquivo, entao os imports existentes em `DifferentialSection`, `ProductDadSection`, `ProductMomSection`, `SensorialSection` e `FinalCTASection` continuarao funcionando automaticamente apos a copia.

