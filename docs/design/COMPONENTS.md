# Componentes Reutilizáveis — Instituto Lumine

## Navbar

```
.navbar
  Logo (imagem SVG ou PNG, max-height 48px) + "Instituto Lumine" em text
  Links: Sobre | Piloto | Apoiar
  Mobile: hamburger simples → slide-in
```
- Fundo: transparente no hero, branco com shadow-sm ao scrollar
- Posição: sticky top
- Transição suave de fundo

## Botão Primário (.btn-primary)
- Background: var(--gold)
- Texto: var(--black)  
- Font: Source Sans 3, 600, text-sm, uppercase (letter-spacing: 0.05em)
- Padding: 0.875rem 2rem
- Border-radius: var(--border-radius)
- Hover: var(--hover-gold)
- Focus: outline 2px var(--focus-ring)

## Botão Secundário (.btn-secondary)
- Background: transparent
- Border: 2px solid currentColor
- Mesmo sizing do primário
- Em fundo escuro: branco. Em fundo claro: navy.

## Section Header (.section-header)
```html
<header class="section-header">
  <span class="section-label">Sobre o projeto</span>
  <h2>O que é o Instituto Lumine</h2>
  <p class="section-lead">Subtítulo ou frase de contexto</p>
</header>
```
- `.section-label`: text-sm, uppercase, letter-spacing, cor gold ou mid-gray
- `h2`: Source Serif 4, 600
- `.section-lead`: text-md, light weight, cor mid-gray
- Espaçamento consistente entre os 3 elementos

## FAQ Item (.faq-item)
```html
<details class="faq-item">
  <summary>Pergunta aqui</summary>
  <div class="faq-answer">
    <p>Resposta aqui.</p>
  </div>
</details>
```
- Usar `<details>/<summary>` nativo (acessível, sem JS necessário)
- Estilizar com CSS para remover marker padrão
- Ícone de seta/chevron via CSS pseudo-element
- Animação de abertura via max-height transition

## Progress Bar (.progress-bar)
```html
<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="37000">
  <div class="progress-bar-fill" style="width: 0%"></div>
</div>
```
- Background: var(--warm-gray)
- Fill: var(--gold)
- Height: 8px
- Border-radius: 4px
- Valor atual será 0% (ainda não há arrecadação)

## PIX Copy (.pix-copy)
```html
<div class="pix-copy">
  <code class="pix-key">eae0b735-1a54-4b66-a791-3d0dc30aa728</code>
  <button class="pix-copy-btn" aria-label="Copiar chave PIX">Copiar</button>
</div>
```
- Font: JetBrains Mono
- Background sutil (off-white ou light gray)
- Botão com feedback visual ao copiar ("Copiado ✓")

## Trust Badge (.trust-badge)
```html
<div class="trust-badges">
  <span class="trust-badge">
    <svg>...</svg>
    CNPJ registrado
  </span>
</div>
```
- Inline-flex, gap entre ícone e texto
- Texto em text-sm, mid-gray
- Ícones SVG inline, 16x16

## Floating Buttons (.floating-btns)
- Container fixo, bottom-right
- Flex column, gap entre botões
- Cada botão é circular no mobile (48x48), pill no desktop
- Transição de entrada (fade-in após scroll)
