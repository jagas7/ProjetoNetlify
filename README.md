# EcoPulse Landing Page

Landing page em React com tema diferente do Figma original, mantendo a base estrutural solicitada na atividade: header, hero, soluções, blocos de solução, depoimentos, preços, contato e footer.

## O que foi implementado

- React + Vite + TypeScript.
- Página principal em `src/pages/Home.tsx`.
- Componentes separados em `src/components`.
- CSS separado em `src/styles`, incluindo `index.css`, `utility.css`, `header.css`, `hero.css`, `solution.css`, `testimonials.css`, `pricing.css`, `contact.css` e `footer.css`.
- Header responsivo com menu mobile, `useState` e `useEffect` para controlar o overflow da página.
- Componente `Button` reutilizável.
- Componente `Card` para os cards de soluções.
- Componente `TestimonialCard` recebendo dados por props, incluindo quantidade de estrelas.
- Carrossel de depoimentos com animação CSS e pausa no hover.
- Seção de preços com plano em destaque.
- Formulário de contato com validação no frontend.
- Netlify Function para envio de e-mail em `netlify/functions/send-email.ts`.
- Rota curta `/api/send-email` configurada no `netlify.toml`.
- Validação no backend, CORS, tratamento de `OPTIONS`, `POST`, status `400`, `405`, `422`, `500` e resposta de sucesso `200`.
- Variáveis de ambiente via `.env.example`.
- Campo honeypot simples contra spam.
- Bônus: Toast com `react-toastify`.
- Bônus opcional: reCAPTCHA v2 no frontend com `react-google-recaptcha` quando `VITE_RECAPTCHA_SITE_KEY` estiver configurada.

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Rode o projeto em modo desenvolvimento:

```bash
npm run dev
```

Acesse o endereço exibido no terminal, normalmente:

```txt
http://localhost:5173
```

## Como testar a Netlify Function localmente

Crie o `.env` baseado no `.env.example`:

```bash
cp .env.example .env
```

Preencha as variáveis SMTP:

```txt
SMTP_HOST=smtp.seu-provedor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@dominio.com
SMTP_PASS=sua-senha-ou-app-password
CONTACT_EMAIL=email-que-recebe@dominio.com
ALLOWED_ORIGIN=http://localhost:8888
```

Inicie o servidor da Netlify:

```bash
npx netlify-cli dev
```

O Netlify CLI costuma expor o site em:

```txt
http://localhost:8888
```

Teste o envio pelo formulário ou execute:

```bash
npx netlify-cli functions:invoke send-email --port 8888 --payload '{"email":"teste@teste.com","message":"Ola!"}'
```

## Usando Gmail como SMTP

Para Gmail, use Senha de App, não a senha normal da conta.

Exemplo:

```txt
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app
CONTACT_EMAIL=email-que-recebe@dominio.com
ALLOWED_ORIGIN=https://seu-site.netlify.app
```

## Variáveis de ambiente no Netlify

No painel da Netlify, configure:

```txt
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASS
CONTACT_EMAIL
ALLOWED_ORIGIN
```

Opcional para ativar o reCAPTCHA no formulário:

```txt
VITE_RECAPTCHA_SITE_KEY
```

## Configuração de deploy

O arquivo `netlify.toml` já está configurado assim:

```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

No painel da Netlify, confira:

```txt
Build command: npm run build
Publish directory: dist
Functions directory: netlify/functions
```

## Build de produção

```bash
npm run build
```

Este comando roda a checagem TypeScript e gera a pasta `dist`.

## Observações para apresentação

A função de e-mail roda no servidor da Netlify, por isso as credenciais SMTP não ficam expostas no React. O frontend chama `/api/send-email`, e o `netlify.toml` redireciona essa rota para `/.netlify/functions/send-email`.

O `.env` não deve ser commitado. Use apenas o `.env.example` como modelo.
