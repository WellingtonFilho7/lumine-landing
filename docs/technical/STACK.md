# Stack Técnica — Instituto Lumine

## Decisão: HTML/CSS/JS puro

### Justificativa
- **2 páginas estáticas** — framework seria over-engineering
- **Zero dependências** — não precisa de npm, node, build step
- **Deploy universal** — funciona em qualquer servidor, CDN, ou Vercel estático
- **Manutenção simples** — Wellington pode editar texto direto no HTML
- **Performance máxima** — sem JavaScript framework, sem hydration, sem bundle

### Alternativas descartadas
| Opção       | Motivo da rejeição                                          |
|-------------|-------------------------------------------------------------|
| Next.js     | Overkill para 2 páginas. Requer Node.js. Build desnecessário |
| Astro       | Bom candidato, mas adiciona complexidade sem ganho real aqui |
| Hugo/11ty   | Possível, mas a curva de setup não justifica para 2 arquivos |
| WordPress   | Peso absurdo, vulnerabilidades, hosting mais complexo        |

### E se precisar crescer?
Se o site precisar de mais páginas, blog ou área administrativa no futuro, migrar para Astro ou 11ty seria natural. A estrutura de CSS com custom properties e HTML semântico facilita essa migração.

## Estrutura de Arquivos

```
instituto-lumine/
├── index.html            # Landing page
├── doar.html             # Página de doação
├── css/
│   ├── tokens.css        # Custom properties
│   ├── base.css          # Reset + tipografia
│   ├── layout.css        # Container + grid
│   ├── sections.css      # Estilos por seção
│   └── utilities.css     # Helpers
├── js/
│   └── main.js           # FAQ toggle, PIX copy, floating buttons, scroll
├── images/
│   ├── logo-brasao-branco.png
│   ├── logo-brasao-escuro.png
│   ├── wordmark-laranja.png
│   ├── wordmark-branco.png
│   ├── qrcode-pix.png
│   └── favicon.png
├── robots.txt
├── sitemap.xml
└── manifest.json         # PWA básico (opcional)
```

## Fontes (Google Fonts)

Link para `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

## Meta Tags Essenciais

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Instituto Lumine — Educação cristã clássica para crianças de Gurinhém, Paraíba. Projeto piloto com abertura em março de 2026.">
<meta name="theme-color" content="#0D3B66">
<link rel="icon" href="/images/favicon.png">

<!-- Open Graph -->
<meta property="og:title" content="Instituto Lumine">
<meta property="og:description" content="Educação cristã clássica para crianças de Gurinhém, Paraíba.">
<meta property="og:image" content="https://institutolumine.org/images/og-image.png">
<meta property="og:url" content="https://institutolumine.org">
<meta property="og:type" content="website">
```

## JavaScript — Escopo mínimo

| Funcionalidade           | Abordagem                                    |
|--------------------------|----------------------------------------------|
| FAQ accordion            | `<details>/<summary>` nativo (zero JS)       |
| Copiar chave PIX         | `navigator.clipboard.writeText()` + feedback |
| Scroll suave             | CSS `scroll-behavior: smooth` + anchor links |
| Navbar sticky com sombra | `IntersectionObserver` no hero               |
| Floating buttons fade-in | `IntersectionObserver` no hero               |

Total: ~50 linhas de JS.

## SEO Básico

- `<title>` único por página
- `<meta description>` único por página
- Headings hierárquicos (h1 > h2 > h3)
- `<html lang="pt-BR">`
- `sitemap.xml` com as 2 URLs
- `robots.txt` permissivo
- Structured data (Organization schema) opcional
