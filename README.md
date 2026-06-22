# 🍳 Sabor Rei

## 📖 Sobre o Projeto

O **Sabor Rei** é uma aplicação web desenvolvida em **React** com o objetivo de proporcionar uma experiência prática e intuitiva para consulta de receitas culinárias.

A plataforma permite que os usuários explorem receitas de diferentes categorias, visualizem detalhes completos de preparo, descubram novas opções através da funcionalidade **"Surpreenda-me"**, realizem buscas e salvem receitas favoritas.

O projeto foi desenvolvido como atividade prática de Front-End utilizando React, consumo de APIs e componentização.

---

## 🚀 Funcionalidades

### 🏠 Página Inicial

* Exibição de receitas em destaque.
* Carousel informativo com dicas e sugestões.
* Navegação rápida para as principais funcionalidades.

### 🔍 Busca de Receitas

* Pesquisa dinâmica de receitas.
* Filtragem baseada nos dados retornados pela API.

### 📂 Categorias

* Navegação por categorias de receitas.
* Exibição de receitas relacionadas à categoria selecionada.

### 🍽️ Detalhes da Receita

* Imagem ilustrativa.
* Lista de ingredientes.
* Modo de preparo.
* Informações completas da receita.

### ⭐ Favoritos

* Adição e remoção de receitas favoritas.
* Gerenciamento utilizando Context API.

### 🎲 Surpreenda-me

* Geração aleatória de receitas.
* Navegação direta para uma receita sorteada.

### 👤 Área do Usuário

* Telas de Login.
* Tela de Cadastro.

---

## 🛠️ Tecnologias Utilizadas

* React
* Vite
* React Router DOM
* Axios
* Context API
* CSS Modules
* JavaScript (ES6+)
* HTML5
* CSS3

---

## 📡 API Utilizada

O projeto consome dados da API de Receitas:

https://api-receitas-pi.vercel.app

Utilizada para:

* Listagem de receitas.
* Busca por categorias.
* Detalhamento das receitas.
* Pesquisa personalizada.

---

## 📁 Estrutura do Projeto

```bash
src/
│
├── assets/
├── components/
│   ├── BarraDeBusca/
│   ├── CardHorizontal/
│   ├── CardVertical/
│   ├── Carousel/
│   ├── CategoriasCard/
│   ├── Footer/
│   ├── Header/
│   ├── ListaIngredientes/
│   ├── Modal/
│   ├── ModoPreparo/
│   ├── RecipeCard/
│   └── ReceitaInfo/
│
├── context/
│   └── FavContext/
│
├── Pages/
│   ├── Cadastro/
│   ├── Categoria/
│   ├── CategoriaReceitas/
│   ├── Favoritos/
│   ├── Home/
│   ├── Login/
│   └── ReceitaEspecifica/
│
├── services/
│   └── api.js
│
├── App.jsx
└── main.jsx
```

## ⚙️ Como Executar o Projeto

### Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### Entre na pasta do projeto

```bash
cd sabor-rei
```

### Instale as dependências

```bash
npm install
```

### Execute o projeto

```bash
npm run dev
```

### Abra no navegador

```bash
http://localhost:5173
```

---

## 🎯 Conceitos Aplicados

Durante o desenvolvimento foram utilizados diversos conceitos fundamentais do React:

* Componentização
* Props
* Hooks (useState, useEffect)
* Context API
* Rotas Dinâmicas
* React Router DOM
* Consumo de API REST
* Manipulação de Estados
* Navegação SPA (Single Page Application)
* CSS Modules
* Responsividade

---

## 📷 Funcionalidades em Destaque

* Sistema de Favoritos.
* Receita Aleatória ("Surpreenda-me").
* Busca Inteligente.
* Categorias Personalizadas.
* Página Detalhada de Receitas.
* Interface Responsiva.

---

## 👨‍💻 Desenvolvedores

📚 Categorias - Carlos Eduardo

⭐ Favoritos - Felipe Damásio

👤 Login e Cadastro - Gabriel Ecard

🍽️ Receita Especifica - Vitor Ribeiro

📊 Listagem de Categorias - Kenny Pavelka

🏠 Home - Vinicius Lamas

---

## 📄 Licença

Projeto desenvolvido para fins educacionais.
