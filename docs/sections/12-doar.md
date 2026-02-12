# Página /doar — Página de Doação

## Propósito
Página focada, simples, sem distrações. Uma pessoa chegou aqui porque quer doar. Facilitar ao máximo. Não convencer — facilitar.

## Estrutura da página (ordem fixa)

### 1. Header
- Navbar igual à landing (sticky)
- Link "← Voltar ao site" no topo ou na navbar

### 2. Título + Contexto
- Título: "Apoie a abertura do Instituto Lumine"
- Subtítulo: 1-2 frases contextualizando (abertura em março de 2026, meta de R$ 37.000)
- Tom: direto, sem dramatizar

### 3. QR Code PIX (elemento central)
- Imagem do QR Code, tamanho generoso (min 250x250px)
- Centralizado
- Instrução: "Abra o app do seu banco e escaneie o código"

### 4. Chave PIX copiável
- Chave: `eae0b735-1a54-4b66-a791-3d0dc30aa728`
- Componente `.pix-copy` com botão "Copiar"
- Feedback visual ao copiar
- Tipo da chave: "Chave aleatória"
- Titular: "Associação Lumine"

### 5. Valores sugeridos
- R$ 50, R$ 150, R$ 300
- Badges clicáveis? Não — apenas sugestões visuais
- Texto: "Sugestões de valor. Qualquer quantia é bem-vinda."

### 6. Selos de confiança
- CNPJ 29.256.508/0001-37
- Associação sem fins lucrativos
- Gurinhém, Paraíba
- Layout: horizontal badges com ícones SVG mínimos

### 7. Mini FAQ de doação (2-3 perguntas)
- "A doação gera recibo?" → Sim, podemos emitir recibo de doação por e-mail.
- "Posso doar mensalmente?" → Sim. Basta agendar um PIX recorrente no app do seu banco.
- "Para quem vai o dinheiro?" → Para a Associação Lumine (CNPJ 29.256.508/0001-37), que administra o Instituto Lumine.

### 8. Convite para contato
- "Tem alguma dúvida? Escreva para contato@institutolumine.org"
- Simples, uma linha

### 9. Rodapé
- Mesmo da landing (componente reutilizado)

## Fundo
- Branco ou off-white predominante
- Seção do QR code pode ter um card sutil ou fundo levemente diferente para destaque

## Botões flutuantes
- Mesmos da landing (WhatsApp + Apoiar)
- Na página de doação, o "Apoiar" pode virar scroll-to-PIX

## O que NÃO fazer
- Não criar formulário de doação
- Não pedir nome, email ou dados do doador
- Não colocar depoimentos
- Não adicionar contador de doadores
- Não usar linguagem de urgência ("últimos dias", "falta pouco")
- Não encher de texto — a página deve ser curta e focada
