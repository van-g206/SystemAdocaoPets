# 🐾 PetAdopt — Deploy no GitHub Pages

Sistema de adoção de pets construído com React + Vite + TypeScript + Tailwind CSS.

## 🚀 Como fazer o deploy no GitHub Pages

### Passo 1 — Crie o repositório no GitHub
1. Acesse [github.com/new](https://github.com/new)
2. Crie um repositório com o nome **`SystemAdocaoPets`** (público)
3. Não inicialize com README

### Passo 2 — Ajuste o nome do repositório nos arquivos (se necessário)
Se criar o repositório com um nome diferente de `SystemAdocaoPets`, troque **todas** as ocorrências
de `/SystemAdocaoPets/` por `/nome-do-seu-repo/` nestes arquivos:
- `vite.config.ts` → campo `base`
- `src/app/App.tsx` → constante `BASE`
- `index.html` → script de redirect e links de manifest/icon
- `public/manifest.json` → `start_url`, `scope` e `icons[].src`
- `public/sw.js` → constante `BASE`
- `public/404.html` → `window.location.replace`

### Passo 3 — Envie o código para o GitHub
```bash
git init
git add .
git commit -m "chore: initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SystemAdocaoPets.git
git push -u origin main
```

### Passo 4 — Ative o GitHub Pages com GitHub Actions
1. No repositório, vá em **Settings → Pages**
2. Em **Source**, selecione **GitHub Actions**
3. O workflow em `.github/workflows/deploy.yml` fará o build e deploy automaticamente

### Passo 5 — Acesse o site
Após o primeiro deploy (≈ 2–3 minutos), seu site estará disponível em:
```
https://SEU_USUARIO.github.io/SystemAdocaoPets/
```

---

## 🛠️ Desenvolvimento local

```bash
npm install
npm run dev
```
O app ficará disponível em `http://localhost:5173`

> Em desenvolvimento local o `base` do Vite é ignorado, então tudo funciona normalmente sem precisar mudar nada.

## 📦 Build manual

```bash
npm run build
```
Os arquivos gerados ficam na pasta `dist/`.

---

## Tecnologias
- React 18 + TypeScript
- Vite 6
- Tailwind CSS 4
- React Router 7
- shadcn/ui + Radix UI
- PWA (Service Worker + manifest)
