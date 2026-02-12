# Estratégia de Ferramentas e Automação — Instituto Lumine

## Quando usar o quê

### Claude.ai (Projects)
Use para **pensar, planejar e refinar conteúdo.**

| Tarefa                                        | Por quê no Project              |
|-----------------------------------------------|----------------------------------|
| Refinar tom de voz dos textos placeholder     | Precisa de ida-e-volta, contexto longo |
| Escrever o FAQ final                          | Requer sensibilidade editorial   |
| Revisar copy da página de doação              | Tom é crítico, precisa lapidar   |
| Planejar comunicação pós-lançamento           | Estratégia, não código           |
| Discutir posicionamento sobre denominação     | Decisão institucional            |
| Criar OG image e assets visuais               | Geração + refinamento iterativo  |

**Setup recomendado:** Criar um Project "Instituto Lumine" com:
- O prompt original do site como instrução do projeto
- VOICE.md como arquivo de referência
- DATA.md como arquivo de referência
- Isso dá contexto permanente a toda conversa dentro do projeto

### Claude Code
Use para **construir, implementar e iterar código.**

| Tarefa                                        | Por quê no Claude Code           |
|-----------------------------------------------|----------------------------------|
| Implementar HTML/CSS de cada seção            | Código direto, orientado por docs |
| Criar tokens.css a partir de TOKENS.md        | Tradução mecânica doc → código   |
| Testar responsividade e corrigir              | Precisa de terminal              |
| Implementar JS (PIX copy, FAQ, scroll)        | Código funcional                 |
| Otimizar imagens                              | Ferramentas CLI                  |
| Gerar sitemap.xml e robots.txt                | Boilerplate                      |
| Validar acessibilidade (axe-core, lighthouse) | Ferramentas CLI                  |
| Deploy para Vercel                            | CLI direto                       |

**Setup recomendado:** O diretório `.claude/INSTRUCTIONS.md` já existe.
Claude Code vai ler automaticamente e ter todo o contexto necessário.

---

## Fluxo de trabalho 10x

### Passo 1 — Copiar a knowledge base para o repo local
```bash
# No seu terminal
git init instituto-lumine
# Copiar toda a estrutura docs/ e .claude/ para o repo
```

### Passo 2 — Abrir Claude Code no diretório
```bash
cd instituto-lumine
claude
```
Claude Code vai ler `.claude/INSTRUCTIONS.md` automaticamente.

### Passo 3 — Comandos sequenciais para Claude Code
Cada comando abaixo é uma tarefa atômica que Claude Code pode executar:

```
1. "Leia docs/design/TOKENS.md e crie css/tokens.css"
2. "Leia docs/design/TYPOGRAPHY.md e crie css/base.css com reset e tipografia"
3. "Leia docs/design/LAYOUT.md e crie css/layout.css"
4. "Crie o index.html com a estrutura de todas as 11 seções vazias, seguindo docs/sections/ para a ordem e os fundos corretos"
5. "Implemente a seção Hero seguindo docs/sections/01-hero.md e docs/content/PLACEHOLDERS.md"
6. "Implemente a seção Onde o Lumine nasce seguindo 02-onde-nasce.md"
... (uma seção por comando)
7. "Crie doar.html seguindo docs/sections/12-doar.md"
8. "Implemente js/main.js com: copiar PIX, navbar sticky, floating buttons"
9. "Crie robots.txt e sitemap.xml para institutolumine.org"
10. "Rode validação de acessibilidade e corrija problemas"
```

### Passo 4 — Review visual no browser
Abra `index.html` no browser, anote ajustes, volte ao Claude Code:
```
"Na seção Hero, aumente o padding bottom. Na seção FAQ, diminua o espaço entre perguntas."
```

### Passo 5 — Conteúdo final (Claude.ai Project)
Abra o Project "Instituto Lumine", cole os placeholders, refine com Wellington.
Depois volte ao Claude Code para substituir os textos no HTML.

---

## Automações que valem a pena

### 1. Script de otimização de imagens
```bash
# Claude Code pode criar um script que:
# - Converte PNGs do logo para WebP
# - Gera favicon em múltiplos tamanhos
# - Comprime QR code
# - Gera og-image.png (1200x630)
```

### 2. Validação automática
```bash
# Script que roda:
# - HTML validator (html-validate ou similar)
# - Lighthouse CLI para performance + accessibility
# - Link checker para URLs quebrados
```

### 3. Deploy script
```bash
# Se Vercel:
npx vercel --prod
# Se Netlify:
npx netlify deploy --prod --dir=.
```

---

## Skills e integrações úteis

### Para o site
- **Frontend Design skill** (já lida) — referência para qualidade visual
- **Claude Code project memory** — `.claude/INSTRUCTIONS.md` já preparado

### Para materiais complementares
- **PPTX skill** — se precisar de apresentação para apoiadores
- **PDF skill** — se precisar de relatório de prestação de contas
- **DOCX skill** — cartas formais, documentos institucionais

### Para conteúdo futuro
- **Claude.ai Project** com knowledge base fixa — para manter consistência editorial em tudo que o Lumine produzir (emails, posts, relatórios)

---

## Prioridade de execução

| Prioridade | Tarefa                              | Onde        | Tempo estimado |
|------------|-------------------------------------|-------------|----------------|
| 1          | Implementar HTML/CSS completo       | Claude Code | 2-3 sessões    |
| 2          | Refinar textos placeholder          | Project     | 1 sessão       |
| 3          | Implementar JS mínimo              | Claude Code | 30 min         |
| 4          | Otimizar imagens e assets          | Claude Code | 30 min         |
| 5          | Testar + corrigir responsivo/a11y  | Claude Code | 1 sessão       |
| 6          | Deploy                             | Claude Code | 15 min         |
| 7          | Substituir placeholders por texto final | Claude Code | 30 min    |

**Tempo total estimado: 3-4 sessões de trabalho focado.**

---

## O que NÃO automatizar

- Tom de voz — precisa de julgamento humano
- Decisão sobre posicionamento denominacional — institucional
- Aprovação visual final — Wellington precisa ver e aprovar
- Dados financeiros — sempre confirmar antes de publicar
