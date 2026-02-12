# Deploy — Instituto Lumine

## Estratégia

Site estático puro. Qualquer CDN ou servidor serve.

## Opções recomendadas

### Opção A: Vercel (recomendada)
- Zero config para estático
- HTTPS automático
- Custom domain fácil (institutolumine.org)
- Deploy via Git push
- Gratuito no tier hobby

### Opção B: Cloudflare Pages
- Performance excelente (edge network)
- HTTPS automático
- Gratuito
- DNS + hosting integrados

### Opção C: Netlify
- Similar ao Vercel para estático
- Gratuito
- Forms nativos (caso precise no futuro)

### Opção D: GitHub Pages
- Gratuito
- Simples, mas menos features

## DNS

Apontar `institutolumine.org` para o provedor escolhido via:
- CNAME record (para subdomínio)
- A/AAAA records (para apex domain)
- Ou nameservers do provedor

## Checklist pré-deploy
- [ ] Testar ambas as páginas em mobile
- [ ] Verificar links (CTAs, anchors, WhatsApp, mailto)
- [ ] Validar HTML (W3C validator)
- [ ] Testar copiar PIX
- [ ] Verificar meta tags OG
- [ ] Gerar og-image.png (1200x630)
- [ ] Comprimir imagens (logo PNGs, QR code)
- [ ] Minificar CSS (opcional — arquivos já são pequenos)
