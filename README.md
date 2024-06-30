# 🏀 EBAC Sports

Bem-vindo ao repositório do projeto **EBAC Sports**! Este é um e-commerce de artigos esportivos desenvolvido com React e Redux.

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca para construção de interfaces de usuário.
- **Redux** - Gerenciamento de estado centralizado.
- **Redux Toolkit** - Ferramentas para simplificar o uso do Redux.
- **Redux Toolkit Query** - Consultas de API simplificadas com caching e polling.
- **ESLint** - Ferramenta para garantir a qualidade do código.
- **Prettier** - Formatação de código consistente.
- **EditorConfig** - Manutenção de estilos de codificação consistentes entre diferentes editores.

## 🛠️ Funcionalidades

- **Adicionar ao Carrinho** - Adicione produtos ao carrinho de compras.
- **Remover do Carrinho** - Remova produtos do carrinho de compras.
- **Favoritar Produtos** - Adicione ou remova produtos dos favoritos.
- **Consulta de Produtos** - Consulte produtos a partir de uma API simulada.

## 🏗️ Estrutura do Projeto

```plaintext
src
├───assets
│       cesta.png
│
├───components
│   ├───Header
│   │       index.tsx
│   │       styles.ts
│   │
│   └───Produto
│           index.tsx
│           styles.ts
│
├───containers
│       Produtos.tsx
│       styles.ts
│
├───store
│       apiSlice.ts
│       cartSlice.ts
│       index.ts
│
├───styles
│       index.ts
│
├───App.tsx
├───index.tsx
├───react-app-env.d.ts
├───reportWebVitals.ts
```
## 🏁 Iniciando o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/ebac_sports.git
    ```

2. **Navegue até o diretório do projeto**:
    ```bash
    cd ebac_sports
    ```

3. **Instale as dependências**:
    ```bash
    npm install
    ```

4. **Inicie o servidor de desenvolvimento**:
    ```bash
    npm start
    ```

O projeto estará disponível em `http://localhost:3000`.

## 📦 Deploy

Este projeto pode ser facilmente implantado em serviços como Vercel, Netlify, ou qualquer outro serviço de hospedagem de aplicativos React.
