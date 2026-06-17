# 🐾 PetAdopt - Sistema PWA de Adoção de Animais

![PWA](https://img.shields.io/badge/PWA-Enabled-success)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

Sistema completo de adoção de animais desenvolvido como Progressive Web App (PWA), otimizado para demonstrações acadêmicas e uso real.

## 🎯 Funcionalidades Principais

### 📱 Progressive Web App
- ✅ **Instalável** - Adicione à tela inicial como app nativo
- ✅ **Offline First** - Funciona sem internet
- ✅ **Background Sync** - Sincroniza dados automaticamente
- ✅ **Responsivo** - Mobile-first design
- ✅ **Fast** - Service Worker para performance

### 🐕 Features do Sistema
- **Feed de Pets** - Navegue por animais disponíveis
- **Busca e Filtros** - Por espécie, porte, localização
- **Detalhes Completos** - Informações de saúde, personalidade
- **Cadastro de Pets** - Formulário completo para abrigos
- **Favoritos** - Salve seus pets preferidos
- **Login/Cadastro** - Sistema de autenticação

## 🚀 Quick Start

```bash
# Clone o repositório
git clone <repo-url>

# Instale as dependências
pnpm install

# Rode o servidor de desenvolvimento
pnpm dev

# Acesse http://localhost:5173
```

## 📋 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── Layout.tsx           # Layout principal
│   │   ├── InstallPrompt.tsx    # Banner de instalação PWA
│   │   └── OfflineIndicator.tsx # Indicador de status online/offline
│   ├── pages/
│   │   ├── HomePage.tsx         # Landing page
│   │   ├── PetsPage.tsx         # Feed de animais
│   │   ├── PetDetailPage.tsx    # Detalhes do pet
│   │   ├── AddPetPage.tsx       # Cadastro de pets (com Background Sync)
│   │   ├── LoginPage.tsx        # Autenticação
│   │   └── FavoritesPage.tsx    # Pets favoritos
│   ├── hooks/
│   │   └── usePWA.ts            # Hook para funcionalidades PWA
│   └── data/
│       └── pets.ts              # Mock data de pets
public/
├── manifest.json                # Web App Manifest
├── sw.js                        # Service Worker
└── offline.html                 # Página offline customizada
```

## 🎓 Demo para Apresentação

Veja [PWA_DEMO.md](./PWA_DEMO.md) para:
- Roteiro completo de apresentação
- Como demonstrar cada feature PWA
- Checklist pré-apresentação
- Dicas e boas práticas

### 3 Telas Principais

1. **Feed de Animais** (`/pets`)
   - Demonstra: Instalação PWA
   
2. **Detalhes do Pet** (`/pets/:id`)
   - Demonstra: Modo Offline
   
3. **Cadastro de Pet** (`/add-pet`)
   - Demonstra: Background Sync

## 🛠️ Tecnologias

- **React 18.3** - UI Framework
- **TypeScript 5** - Type Safety
- **React Router 7** - Navegação
- **Tailwind CSS 4** - Styling
- **Vite 6** - Build Tool
- **Service Workers** - PWA Features
- **Lucide React** - Ícones
- **Shadcn/ui** - Componentes

## 📱 PWA Features Implementadas

### Service Worker
```javascript
// Cache automático de assets
// Network-first com fallback para cache
// Offline support completo
```

### Web App Manifest
```json
{
  "name": "PetAdopt",
  "short_name": "PetAdopt",
  "display": "standalone",
  "theme_color": "#f4a30e"
}
```

### Install Prompt
- Detecta suporte à instalação
- Banner customizado
- Gerencia estado de instalação

### Background Sync
- Sincroniza cadastros offline
- Retry automático
- Feedback visual ao usuário

## 🎨 Design System

**Cores:**
- Primary: `#f4a30e` (Laranja)
- Secondary: `#754907` (Marrom)
- Background: `#e4dcdc` (Bege)

**Tipografia:**
- Font Family: Inter, sans-serif
- Escala modular para títulos

## 📊 Performance

Execute Lighthouse para validar:
```bash
# No Chrome DevTools:
1. F12 → Lighthouse
2. Select "Progressive Web App"
3. Run audit
```

Expectativa: **100/100 PWA Score**

## 🔧 Scripts

```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview
```

## 📄 Licença

MIT

## 👥 Contribuindo

PRs são bem-vindos! Para mudanças maiores, abra uma issue primeiro.

---

**Desenvolvido para demonstração de PWA em ambiente acadêmico** 🎓
