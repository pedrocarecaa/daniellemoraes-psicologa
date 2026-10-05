# Site – Danielle Moraes | Psicóloga (Peruíbe - SP)

Site one-page em HTML, CSS e JavaScript puros. Não precisa de instalação nem de build.

## Estrutura

```
index.html        página principal
css/style.css     todos os estilos
js/main.js        configuração central + menu, barra mobile e animações
assets/
  logo.jpg        logo (cabeçalho, rodapé e imagem de compartilhamento)
  favicon.png     ícone da aba do navegador
  danielle.jpg    foto da seção "Sobre"
LEIA-ME.md        este arquivo
```

## Como publicar

Envie **todas as pastas e arquivos juntos**, mantendo a estrutura acima, para a hospedagem (Netlify, Vercel, GitHub Pages, hospedagem comum etc.).
No Netlify, basta arrastar a pasta descompactada (ou este .zip) em "Deploy manually".

## Como trocar o WhatsApp, o horário ou a mensagem

Abra `js/main.js` e edite o bloco `professional` no topo:

- `WHATSAPP_NUMBER`: número no formato internacional, só dígitos (55 + DDD + número). Atual: `5511992182174`
- `message`: mensagem automática que aparece na conversa
- `instagram` e `hours`: link do Instagram e horário de atendimento

Todos os botões "Agendar" e o link do rodapé leem desse único ponto.

## Antes de publicar de vez

- Em `index.html`, a tag `canonical` ainda aponta para `https://www.SEU-DOMINIO.com.br/`. Troque pelo endereço real do site.
- Para a imagem aparecer ao compartilhar o link (WhatsApp, Instagram, Facebook), a tag `og:image` precisa de endereço completo, por exemplo `https://www.seudominio.com.br/assets/logo.jpg`. Hoje ela está como `assets/logo.jpg`.
