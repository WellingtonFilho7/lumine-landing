# Layout e Ritmo Visual — Instituto Lumine

## Princípio Central

O site não pode parecer um documento contínuo. Cada seção deve ter identidade visual própria, variando pelo menos um destes elementos em relação à seção anterior: cor de fundo, layout (centrado vs coluna vs lado-a-lado), espaçamento, ou presença de elemento gráfico.

## Container System

```
.container        → max-width: 72rem (1152px), padding lateral
.container-narrow → max-width: 48rem (768px), para texto editorial
.container-wide   → max-width: 84rem (1344px), para seções que respiram mais
```

## Mapa de Fundos por Seção

| #  | Seção                     | Fundo           | Variante CSS       |
|----|---------------------------|-----------------|--------------------|
| 1  | Hero                      | Navy            | --bg-navy          |
| 2  | Onde o Lumine nasce       | Off-white       | --bg-light         |
| 3  | O que é o Instituto       | Branco          | --bg-white         |
| 4  | Como funciona o piloto    | Warm creme      | --bg-warm          |
| 5  | Por que apoiar            | Navy            | --bg-navy          |
| 6  | Meta de financiamento     | Off-white       | --bg-light         |
| 7  | Apoio recorrente          | Branco          | --bg-white         |
| 8  | Nosso compromisso         | Warm creme      | --bg-warm          |
| 9  | FAQ                       | Off-white       | --bg-light         |
| 10 | Contato                   | Navy            | --bg-navy          |
| 11 | Rodapé                    | Dark (navy escuro)| #0A2E52         |

Regra: nunca mais de 2 seções consecutivas com fundo claro sem uma seção escura quebrando.

## Separadores entre Seções

Não usar `<hr>` grosso. Opções permitidas:
- Mudança de cor de fundo (preferencial)
- Linha fina 1px em `--warm-gray` com margin vertical generosa
- Ornamento tipográfico sutil (ex: `· · ·`)

## Layouts por Tipo de Conteúdo

### Texto editorial (seções 2, 5, 8)
- Container narrow (48rem)
- Texto centrado ou alinhado à esquerda
- Parágrafos com max-width: 65ch
- Espaço generoso acima e abaixo

### Informação estruturada (seções 3, 4)
- Container padrão (72rem)
- Pode usar grid 2 colunas em desktop
- Mobile: stack vertical
- Nunca cards com sombra grande — preferir bordas finas ou apenas tipografia

### Dados e números (seção 6)
- Número grande (R$ 37.000) como focal point
- Barra de progresso sutil
- Container narrow

### Ação/CTA (seções 7, doação)
- Container narrow
- Elementos de ação centralizados
- Valores como chips/badges, não como cards

### FAQ (seção 9)
- Container narrow
- Accordion com toggle
- Pergunta em Source Sans 3 semibold, resposta em Source Sans 3 regular
- Separadores finos entre perguntas

## Breakpoints

```css
/* Mobile-first */
/* Default: 320px+ */
@media (min-width: 640px)  { /* Tablet portrait */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Wide desktop */ }
```

## Botões Flutuantes

- Posição: `fixed`, canto inferior direito
- Stack vertical: WhatsApp embaixo, "Apoiar" em cima
- Mobile: ícone apenas, sem texto
- Desktop: ícone + texto curto
- Z-index alto mas não cobrindo conteúdo
- Sombra média para destacar do fundo
- Transição suave de opacidade no scroll (aparecem após Hero)
- Cores: WhatsApp verde (#25D366), Apoiar em gold

## Regras de Espaçamento entre Seções

- Padding vertical de seção: `var(--space-2xl)` (96px) padrão
- Hero: padding maior, `var(--space-3xl)` bottom
- Seções escuras: padding extra para respirar
- Nunca menos que 64px de padding vertical em qualquer seção
