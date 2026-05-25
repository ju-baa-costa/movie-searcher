# 🎬 Movie Finder

Movie Finder é uma aplicação web que permite pesquisar filmes utilizando a API do TMDB, visualizar detalhes completos das obras e criar uma coleção pessoal de avaliações, como indicado no pdf de instruções.

O projeto foi estruturado seguindo uma arquitetura fullstack, com frontend em React e backend planejado em Flask + SQLite.

---

# O desafio
Desenvolver uma aplicação utilizando:

- consumo de API externa
- componentização
- gerenciamento de estado
- CRUD de avaliações
- navegação entre páginas
- persistência de dados
- arquitetura fullstack

Além da interface funcional, o projeto também teve foco em organização de código, experiência do usuário e preparação para integração backend/frontend.

---

# Funcionalidades

Pesquisa de filmes em tempo real  
Consumo da API do TMDB  
Página de detalhes do filme  
Sistema de avaliações com estrelas  
Página de filmes avaliados  
Gerenciamento global de estado com Context API  
Responsividade  
Loading states  

---

# Tecnologias Utilizadas

## Frontend

- React
- TypeScript
- React Router DOM
- CSS
- Context API
- TMDB API
- Vite

## Backend

- Python
- Flask
- Flask-CORS
- SQLite

---

# Aprendizados:

Durante o desenvolvimento deste projeto, aprofundei meus conhecimentos em:

- Componentização no React
- Gerenciamento de estado global
- Navegação entre páginas
- Consumo de APIs REST
- Estruturação de aplicações frontend
- Arquitetura fullstack
- Responsividade e experiência do usuário


E tive novas experiências com:
- Organização de rotas backend
- CRUD com Flask
- Integração planejada com banco SQLite

---

# Estrutura do Projeto

```bash
movie-finder/
│
├── src/
│
├── backend/
│   ├── app.py
│   ├── database.py
│   ├── models.py
│   ├── requirements.txt
│   │
│   └── routes/
│       └── movies.py
│
├── database/
│   └── schema.sql
│
└── README.md
```

---

# ⚠️ Observação Sobre o Backend

O projeto foi arquitetado para integração completa entre React e Flask utilizando SQLite como persistência principal. Porém, por eu estar sem um computador pessoal, não pde utilizar meu ambiente de desenvolvimento de preferência (vs code), tendo assim que recorrer ao CodeSandbox, que tem diversas limitações, portanto  não foi possível executar simultaneamente o ambiente Node + Python para realizar a integração completa entre frontend e backend.

Mesmo assim, toda a estrutura backend foi desenvolvida e organizada no repositório, incluindo:

- Estrutura Flask
- Rotas REST
- CRUD
- Configuração SQLite
- Modelagem inicial
- Organização em camadas

Para demonstrar o funcionamento completo da lógica de avaliações durante o desenvolvimento online, foi utilizada persistência temporária com localStorage.

---

# Melhorias Futuras

- Integração completa frontend/backend
- Sistema de autenticação
- Filtros avançados
- Infinite scroll
- Dark/light mode
- Deploy fullstack
- Testes automatizados

---

# Como Rodar o Projeto

## Frontend

```bash
npm install
npm run dev
```

## Backend

```bash
cd backend

pip install -r requirements.txt

python app.py
```

---

# Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_TMDB_API_KEY=sua_chave_aqui
```

---

