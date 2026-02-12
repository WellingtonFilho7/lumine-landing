# Design Tokens — Instituto Lumine

Extraídos da identidade visual (logo com brasão, lanterna, livro, campo dourado).

## Paleta de Cores

```css
:root {
  /* === Primárias (do logo) === */
  --navy:        #0D3B66;   /* Azul escuro principal — fundo do brasão, fundo escuro */
  --blue:        #2E7AB8;   /* Azul médio — anel do selo, links */
  --gold:        #F5A623;   /* Dourado/laranja — campo do brasão, acentos */
  --gold-light:  #F8C565;   /* Dourado claro — hover, destaques sutis */

  /* === Neutros === */
  --white:       #FFFFFF;
  --off-white:   #F9F7F4;   /* Fundo creme — calor sem ser amarelo */
  --warm-gray:   #E8E4DF;   /* Bordas, separadores */
  --mid-gray:    #8C8279;   /* Texto secundário */
  --dark-gray:   #3D3632;   /* Texto principal */
  --black:       #1A1613;   /* Texto em fundo claro, máximo contraste */

  /* === Fundos de seção (alternância de ritmo) === */
  --bg-light:    var(--off-white);
  --bg-white:    var(--white);
  --bg-navy:     var(--navy);
  --bg-warm:     #F3EDE6;   /* Creme mais quente para variação */

  /* === Estados === */
  --focus-ring:  var(--blue);
  --hover-gold:  var(--gold-light);
  --border:      var(--warm-gray);
}
```

## Espaçamento

```css
:root {
  --space-xs:    0.5rem;    /* 8px */
  --space-sm:    1rem;      /* 16px */
  --space-md:    1.5rem;    /* 24px */
  --space-lg:    2.5rem;    /* 40px */
  --space-xl:    4rem;      /* 64px */
  --space-2xl:   6rem;      /* 96px */
  --space-3xl:   8rem;      /* 128px */

  --section-padding-y: var(--space-2xl);
  --container-max:     72rem;  /* 1152px */
  --container-narrow:  48rem;  /* 768px — para texto corrido */
  --container-padding: var(--space-md);
}
```

## Sombras e Bordas

```css
:root {
  --shadow-sm:    0 1px 3px rgba(13, 59, 102, 0.06);
  --shadow-md:    0 4px 12px rgba(13, 59, 102, 0.08);
  --border-thin:  1px solid var(--warm-gray);
  --border-radius: 4px;     /* Mínimo — institucional, não startup */
}
```

## Regras de Uso

- **Navy** é o fundo escuro principal. Usado no Hero e em 1-2 seções para ritmo.
- **Gold** é acento, nunca dominante. Botões primários, ícones, destaques.
- **Off-white/warm** são os fundos claros. Alternar para evitar monotonia.
- **Branco puro** usado com moderação (seções que precisam de máxima limpeza).
- Nunca usar gradientes entre cores.
- Nunca usar opacidade abaixo de 0.7 em texto.
