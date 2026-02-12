# Tipografia — Instituto Lumine

## Fontes

### Display / Títulos: Source Serif 4
- Google Fonts: `Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400`
- Caráter: serifada editorial, séria sem ser antiquada
- Justificativa: a identidade do logo usa uma rounded sans-serif (tipo Nunito/Baloo), mas o site precisa de tom editorial — Source Serif 4 traz dignidade e leitura confortável sem conflitar com o logo

### Body / Interface: Source Sans 3
- Google Fonts: `Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400`
- Caráter: sans-serif humanista, legível, companheira natural da Source Serif
- Usada em: parágrafos, labels, botões, navegação, metadados

### Monospace (apenas chave PIX): JetBrains Mono
- Google Fonts: `JetBrains+Mono:wght@400`
- Uso único: exibir a chave PIX copiável

## Escala Tipográfica

```css
:root {
  /* Modular scale ~1.25 (Major Third) */
  --text-xs:     0.8rem;     /* 12.8px — metadados, legal */
  --text-sm:     0.875rem;   /* 14px — labels, captions */
  --text-base:   1.0625rem;  /* 17px — corpo principal */
  --text-md:     1.25rem;    /* 20px — lead paragraphs */
  --text-lg:     1.5rem;     /* 24px — h4, subtítulos */
  --text-xl:     1.875rem;   /* 30px — h3 */
  --text-2xl:    2.25rem;    /* 36px — h2 */
  --text-3xl:    3rem;       /* 48px — h1 em desktop */
  --text-4xl:    3.75rem;    /* 60px — hero display */

  --leading-tight:   1.2;
  --leading-normal:  1.6;
  --leading-relaxed: 1.75;

  --measure:     65ch;       /* Largura ideal de linha para leitura */
}
```

## Hierarquia

| Elemento    | Fonte          | Peso | Tamanho       | Line-height    | Cor            |
|-------------|----------------|------|---------------|----------------|----------------|
| h1 (hero)   | Source Serif 4 | 700  | text-4xl → text-3xl mobile | tight | white ou black |
| h2 (seção)  | Source Serif 4 | 600  | text-2xl → text-xl mobile  | tight | dark-gray      |
| h3 (sub)    | Source Serif 4 | 600  | text-xl       | tight          | dark-gray      |
| h4          | Source Sans 3  | 700  | text-lg       | tight          | dark-gray      |
| body        | Source Sans 3  | 400  | text-base     | relaxed        | dark-gray      |
| lead        | Source Sans 3  | 300  | text-md       | normal         | mid-gray       |
| small/meta  | Source Sans 3  | 400  | text-sm       | normal         | mid-gray       |
| label/CTA   | Source Sans 3  | 600  | text-sm       | tight          | —              |

## Regras

- **Máximo 65ch de largura** para texto corrido (conforto de leitura)
- **Títulos de seção (h2)** sempre com um `lead` ou subtítulo abaixo — nunca título solto seguido de parágrafo
- **Não usar all-caps** exceto em labels muito pequenos (ex: "CNPJ", "PIX")
- **Itálico** apenas para ênfase editorial ou citações
- **Negrito em corpo** usar com moderação — prefira estrutura hierárquica a negrito inline
- **Letter-spacing**: leve em headings (-0.02em), neutro em body
