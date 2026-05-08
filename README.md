# 📚 BookSearch Finder

O **BookSearch Finder** é uma aplicação mobile desenvolvida em **React Native** que permite a consulta de informações literárias utilizando a [Open Library API](https://openlibrary.org/developers/api). O utilizador pode pesquisar por títulos de livros e obter instantaneamente dados sobre a obra.

## Funcionalidades

* **Busca por Título:** Localiza livros através de palavras-chave ou títulos completos.
* **Dados Detalhados:** Apresenta o nome do livro, autor principal e o primeiro ano de publicação.
* **Feedback Visual:** Utilização de `ActivityIndicator` para indicar o estado de carregamento durante a consulta à API.
* **Tratamento de Erros:** Alertas personalizados para buscas sem resultados ou falhas de ligação à rede.
* **Interface Organizada:** Layout moderno e limpo com foco na legibilidade.

## Tecnologias Utilizadas

* **React Native**
* **JavaScript (ES6+)**
* **Hooks (useState):** Gestão de estados de busca, resultados e carregamento.
* **Async/Await & Fetch API:** Consumo assíncrono de dados da API Open Library.

## 📦 Instalação e Execução

1.  **Clonar o repositório:**
    ```bash
    git clone https://github.com/ferrnd/OpenLibrary-Finder-Native.git
    ```
2.  **Instalar dependências:**
    ```bash
    npm install
    ```
3.  **Configurar para Web (opcional):**
    ```bash
    npx expo install react-dom react-native-web @expo/metro-runtime
    ```
4.  **Iniciar a aplicação:**
    ```bash
    npx expo start
    ```
    *Pressiona `w` no terminal para abrir no navegador.*

