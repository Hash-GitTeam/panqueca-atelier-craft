

## Plano: Reduzir altura da Hero no mobile para mostrar preview da próxima seção

### Resumo
No mobile, trocar `min-h-screen` por uma altura menor (ex: `85vh`) para que o início da seção de informações apareça no primeiro frame. No desktop, manter `min-h-screen`.

### Alteração

**Arquivo:** `src/components/landing/HeroSection.tsx` (linha 60)

Trocar:
```
className="relative min-h-screen overflow-hidden"
```
Por:
```
className="relative min-h-[85vh] md:min-h-screen overflow-hidden"
```

Isso faz com que no mobile a imagem ocupe ~85% da tela, deixando visível o topo da seção seguinte e indicando ao usuário que há mais conteúdo abaixo.

