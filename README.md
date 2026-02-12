# Instituto Lumine — Site Institucional

Site estático de 2 páginas para o Instituto Lumine.
Educação cristã clássica para crianças de Gurinhém, Paraíba.

## Estrutura

```
docs/           → Knowledge base (não vai pro deploy)
  sections/     → Contexto por seção (Claude Code lê antes de codificar)
  design/       → Tokens, tipografia, layout, componentes
  content/      → Tom de voz, dados, textos placeholder
  technical/    → Stack, deploy, acessibilidade
.claude/        → Instruções persistentes para Claude Code
src/            → Código-fonte (HTML, CSS, JS)
public/         → Assets estáticos (imagens, favicon)
PLAN.md         → Master plan do projeto
```

## Como usar com Claude Code

```bash
cd instituto-lumine
claude
# Claude Code lê .claude/INSTRUCTIONS.md automaticamente
# Depois peça: "Leia PLAN.md e comece pela Fase 1"
```

## Como usar com Claude.ai Projects

1. Crie um Project chamado "Instituto Lumine"
2. Adicione como knowledge: `docs/content/VOICE.md` e `docs/content/DATA.md`
3. Use para refinar textos, planejar comunicação, revisar tom

## Deploy

Site estático. Funciona em qualquer CDN.
Recomendado: Vercel (`npx vercel --prod`)

## Domínio

institutolumine.org
