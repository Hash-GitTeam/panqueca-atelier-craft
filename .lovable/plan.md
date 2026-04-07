

## Plano: Reposicionar texto da Hero para o lado direito (desktop)

### Resumo
No desktop, mover o bloco de texto (título, descrição e botão) para o lado direito da imagem, alinhado à direita. No mobile, manter centralizado como está hoje.

### Alteração

**Arquivo:** `src/components/landing/HeroSection.tsx`

- Trocar o container de texto de `text-center max-w-2xl mx-auto` para usar `flex items-center justify-end` no desktop
- No desktop (`md:`): texto alinhado à direita com `md:text-right md:items-end md:ml-auto md:mr-16`
- No mobile: manter centralizado (`text-center`)
- O gradiente será ajustado para `bg-gradient-to-l` (da direita para esquerda) no desktop, criando mais contraste onde o texto ficará
- Os indicadores de slide permanecem centralizados na parte inferior

### Detalhes técnicos

O `div` do conteúdo textual (linha 71-90) terá suas classes alteradas de:
```
text-center px-6 max-w-2xl mx-auto pt-20
```
Para:
```
text-center md:text-right px-6 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-16 pt-20
```

O gradiente (linha 67) será atualizado para ter mais cobertura do lado direito no desktop, mantendo a legibilidade do texto na nova posição.

