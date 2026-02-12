# Instituto Lumine — Master Plan

## Visão Geral

Site institucional de duas páginas para o Instituto Lumine, uma associação cristã sem fins lucrativos de educação clássica em Gurinhém, Paraíba. O projeto piloto abre em março de 2026. O site existe para apresentar o instituto com dignidade e viabilizar doações para a abertura.

**Sensação-alvo:** "Este projeto ainda está começando, mas é sério, responsável e digno de apoio."

---

## Arquitetura do Projeto

```
instituto-lumine/
├── .claude/                    # Memória do Claude Code
│   └── INSTRUCTIONS.md         # Instruções persistentes do projeto
├── docs/                       # Knowledge base (não vai pro build)
│   ├── sections/               # Contexto por seção do site
│   │   ├── 01-hero.md
│   │   ├── 02-onde-nasce.md
│   │   ├── 03-o-que-e.md
│   │   ├── 04-como-funciona.md
│   │   ├── 05-por-que-apoiar.md
│   │   ├── 06-meta-financiamento.md
│   │   ├── 07-apoio-recorrente.md
│   │   ├── 08-compromisso.md
│   │   ├── 09-faq.md
│   │   ├── 10-contato.md
│   │   ├── 11-rodape.md
│   │   └── 12-doar.md
│   ├── design/
│   │   ├── TOKENS.md           # Design tokens extraídos da identidade
│   │   ├── TYPOGRAPHY.md       # Sistema tipográfico
│   │   ├── LAYOUT.md           # Regras de layout e ritmo visual
│   │   └── COMPONENTS.md       # Componentes reutilizáveis
│   ├── content/
│   │   ├── VOICE.md            # Tom de voz e diretrizes editoriais
│   │   ├── DATA.md             # Dados institucionais reais
│   │   └── PLACEHOLDERS.md     # Textos provisórios com tom correto
│   └── technical/
│       ├── STACK.md            # Decisões técnicas e justificativas
│       ├── DEPLOY.md           # Estratégia de deploy
│       └── ACCESSIBILITY.md    # Requisitos de acessibilidade
├── src/
│   ├── pages/
│   │   ├── index.html          # Landing page principal
│   │   └── doar.html           # Página de doação
│   ├── components/             # Partials HTML reutilizáveis
│   ├── styles/
│   │   ├── tokens.css          # CSS custom properties
│   │   ├── base.css            # Reset + tipografia base
│   │   ├── layout.css          # Grid e containers
│   │   ├── sections.css        # Estilos por seção
│   │   └── utilities.css       # Utilitários pontuais
│   └── scripts/
│       └── main.js             # Interações mínimas (copy PIX, FAQ toggle, etc.)
├── public/
│   └── images/                 # Logo, QR code, assets estáticos
├── PLAN.md                     # ← VOCÊ ESTÁ AQUI
└── README.md                   # Instruções de build e deploy
```

---

## Páginas

| Rota     | Arquivo              | Propósito                              |
|----------|----------------------|----------------------------------------|
| `/`      | `src/pages/index.html` | Landing page com 11 seções             |
| `/doar`  | `src/pages/doar.html`  | Página de doação PIX                   |

---

## Seções da Landing Page (ordem fixa)

| #  | Seção                          | Doc de contexto               | Layout hint                          |
|----|--------------------------------|-------------------------------|--------------------------------------|
| 1  | Hero                           | `sections/01-hero.md`         | Full-width, fundo navy, CTAs duplos  |
| 2  | Onde o Lumine nasce            | `sections/02-onde-nasce.md`   | Texto editorial, respiro generoso    |
| 3  | O que é o Instituto Lumine     | `sections/03-o-que-e.md`     | Dois blocos lado a lado ou editorial |
| 4  | Como funciona o piloto         | `sections/04-como-funciona.md`| Timeline ou steps, sem cards genéricos|
| 5  | Por que precisamos de apoio    | `sections/05-por-que-apoiar.md`| Texto direto, tom sóbrio            |
| 6  | Meta de financiamento          | `sections/06-meta-financiamento.md`| Barra de progresso, número claro |
| 7  | Apoio recorrente               | `sections/07-apoio-recorrente.md`| Valores sugeridos, sem pressão    |
| 8  | Nosso compromisso              | `sections/08-compromisso.md`  | Texto curto, peso institucional      |
| 9  | FAQ                            | `sections/09-faq.md`          | Accordion, perguntas reais           |
| 10 | Contato                        | `sections/10-contato.md`      | Email, WhatsApp, simples             |
| 11 | Rodapé                         | `sections/11-rodape.md`       | CNPJ, links, legal                   |

---

## Fluxo de Trabalho Recomendado

### Fase 1 — Fundação (Claude Code)
1. Ler `PLAN.md` e `.claude/INSTRUCTIONS.md`
2. Implementar `tokens.css` a partir de `docs/design/TOKENS.md`
3. Implementar `base.css` a partir de `docs/design/TYPOGRAPHY.md`
4. Criar estrutura HTML da landing com todas as seções vazias
5. Criar estrutura HTML da página de doação

### Fase 2 — Seções (Claude Code, uma por vez)
6. Para cada seção: ler `docs/sections/XX-nome.md` → implementar HTML + CSS
7. Alternar entre seções de fundo claro e escuro para ritmo visual
8. Testar responsividade após cada seção

### Fase 3 — Interatividade + Polish
9. JavaScript: FAQ accordion, copy PIX, scroll suave
10. Botões flutuantes (WhatsApp + Apoiar)
11. Revisão de acessibilidade
12. Testes mobile

### Fase 4 — Conteúdo Final (Wellington)
13. Substituir placeholders por texto final
14. Ajustes de tom e comprimento
15. Deploy

---

## Decisões Estratégicas

### Por que HTML/CSS puro (sem framework)?
→ Ver `docs/technical/STACK.md`

### Por que não usar imagens de banco?
→ O projeto é honesto. Sem fotos genéricas de crianças sorridentes. Logo + tipografia + cor carregam a identidade.

### Por que textos provisórios e não lorem ipsum?
→ O tom afeta o layout. Textos curtos demais ou longos demais quebram o ritmo visual. Placeholders realistas garantem que a estrutura funcione com o conteúdo final.
