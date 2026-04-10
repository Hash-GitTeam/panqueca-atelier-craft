

## Plano: Melhorar qualidade da imagem Hero desktop

### Problema
A imagem `hero-panqueca-desktop.webp` tem 1920×918px mas apenas **92KB** — compressão excessiva que gera artefatos visuais (pixelização/craquelado).

### Solução
Re-codificar a imagem original com qualidade maior (WebP quality ~85 em vez do ~40-50 atual). Isso deve resultar em ~200-300KB — ainda excelente para performance web.

### Passos

1. **Você precisa enviar novamente a imagem original** (preferencialmente em PNG ou JPG de alta qualidade, antes de qualquer compressão WebP). A imagem atual já chegou comprimida demais.

2. Após o envio, vou converter para WebP com quality 85, mantendo as dimensões 1920×918px.

3. O resultado ficará entre 150-300KB — visualmente nítido e com carregamento rápido.

### Nota importante
Se a imagem original que você tem já é este mesmo WebP de 92KB, será necessário exportar novamente do arquivo fonte (Photoshop, Canva, etc.) com qualidade mais alta antes de enviar.

