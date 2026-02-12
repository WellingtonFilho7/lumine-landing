# Claude Code — Instruções do Projeto Instituto Lumine

## Identidade do Projeto
Site institucional estático de 2 páginas para o Instituto Lumine (educação cristã clássica, Gurinhém-PB).
Meta: viabilizar doações para abertura do piloto em março de 2026.

## Regras Invioláveis

### Arquitetura
- Apenas 2 páginas: `/` (landing) e `/doar` (doação)
- Não criar rotas, páginas ou seções extras
- Ordem das seções da landing é fixa (ver PLAN.md)

### Tom Visual
- Editorial, não startup
- Institucional, não corporativo
- Sério sem ser frio
- NUNCA: gradientes chamativos, cards genéricos repetidos, estética de SaaS
- NUNCA: lorem ipsum — usar placeholders de `docs/content/PLACEHOLDERS.md`

### Código
- HTML semântico (header, main, section, footer, nav, article)
- CSS puro com custom properties (definidas em tokens.css)
- JavaScript mínimo (só FAQ accordion, copy PIX, scroll suave)
- Mobile-first
- Sem dependências npm, sem build tools, sem frameworks
- Fontes via Google Fonts (Source Serif 4 + Source Sans 3)

### Acessibilidade
- Contraste mínimo WCAG AA
- Focus visível em todos os interativos
- Aria-labels nos botões de ícone
- Estrutura de headings correta (h1 → h2 → h3, sem pular)

## Dados Reais (usar sempre que aplicável)
- CNPJ: 29.256.508/0001-37
- Nome jurídico: Associação Lumine
- Nome público: Instituto Lumine
- Chave PIX: eae0b735-1a54-4b66-a791-3d0dc30aa728
- WhatsApp: (83) 99994-3792
- Email: contato@institutolumine.org
- Meta: R$ 37.000
- Abertura: março de 2026
- Localidade: Gurinhém, Paraíba

## Antes de Codificar Qualquer Seção
1. Ler o arquivo de contexto correspondente em `docs/sections/`
2. Ler `docs/design/TOKENS.md` para cores e espaçamentos
3. Ler `docs/design/LAYOUT.md` para regras de ritmo visual
4. Verificar se o placeholder correto existe em `docs/content/PLACEHOLDERS.md`

## Estrutura de CSS
```
styles/
├── tokens.css      # Custom properties (cores, fontes, espaços)
├── base.css        # Reset + tipografia + links
├── layout.css      # Container, grid, responsivo
├── sections.css    # Cada seção com prefixo .section-nome
└── utilities.css   # .sr-only, .text-center, etc.
```

Cada seção tem classe `.section-{nome}` (ex: `.section-hero`, `.section-faq`).
Nunca usar IDs para estilização.

## Checklist de Qualidade por Seção
- [ ] HTML semântico correto
- [ ] Texto placeholder realista (não genérico)
- [ ] Responsivo em 320px, 768px, 1200px
- [ ] Contraste verificado
- [ ] Ritmo visual diferente da seção anterior (fundo, layout, etc.)
