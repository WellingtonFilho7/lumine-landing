# Acessibilidade — Instituto Lumine

## Nível: WCAG 2.1 AA (requisitos básicos)

## Checklist

### Contraste
- Texto normal (< 24px): ratio mínimo 4.5:1
- Texto grande (≥ 24px ou 19px bold): ratio mínimo 3:1
- Verificar especialmente: texto branco sobre navy, texto sobre gold
- Ferramenta: WebAIM Contrast Checker

### Cores confirmadas (passar no checker)
| Combinação                     | Ratio esperado | OK? |
|-------------------------------|---------------|-----|
| --black (#1A1613) sobre --off-white (#F9F7F4) | ~16:1 | ✓ |
| --white (#FFF) sobre --navy (#0D3B66)          | ~11:1 | ✓ |
| --dark-gray (#3D3632) sobre --off-white         | ~9:1  | ✓ |
| --mid-gray (#8C8279) sobre --white              | ~3.7:1| ⚠ (ok para large text only) |
| --gold (#F5A623) sobre --navy                   | ~5:1  | ✓ |
| --black sobre --gold                            | ~7:1  | ✓ |

### Focus
- Todos os elementos interativos devem ter `:focus-visible` visível
- Outline: 2px solid var(--focus-ring), offset: 2px
- Nunca `outline: none` sem substituto

### Navegação por teclado
- Tab order lógico (segue DOM order)
- Enter/Space ativam botões e links
- `<details>/<summary>` já é acessível nativamente
- Escape fecha menus (se houver mobile menu)

### Estrutura de headings
- Landing: h1 no hero, h2 por seção, h3 para sub-itens
- Doação: h1 no título, h2 para sub-seções
- Nunca pular níveis (h1 → h3)

### Imagens
- Logo: `alt="Instituto Lumine — Educação Cristã Clássica"`
- QR Code: `alt="QR Code para doação via PIX ao Instituto Lumine"`
- Ícones decorativos: `aria-hidden="true"`

### Botões e links
- Botões com texto descritivo ou `aria-label`
- WhatsApp flutuante: `aria-label="Conversar no WhatsApp"`
- Copiar PIX: `aria-label="Copiar chave PIX"`
- Links que abrem nova aba: `target="_blank" rel="noopener noreferrer"`

### Landmarks
```html
<header role="banner">       <!-- Navbar -->
<main role="main">            <!-- Conteúdo -->
<footer role="contentinfo">   <!-- Rodapé -->
<nav role="navigation">       <!-- Menu -->
```

### Idioma
```html
<html lang="pt-BR">
```

### Motion
- `prefers-reduced-motion`: respeitar, desabilitar animações
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```
