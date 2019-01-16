# Projeto MyReads

Este é um projeto final de sessão do curso de React, aulas de Fundamentos da Udacity's. Este é um projeto executado sobre um template visual disponibilizado pelo curso, e tendo seu objetivo, deixa-lo funcional:
 * poder fazer troca dos livros entres as estantes
 * busca de novos livros e poder adicionalos a estante

Este projeto utiliza [Create React App](https://github.com/facebookincubator/create-react-app) de boilerplate.

## Iniciando o desenvolvimento

Para iniciar o desenvolvimento:

* Instale as dependencias do projeto `npm install` ou `yarn install`
* Inicialize o servidor de desenvolvimento `npm start` ou `yarn start`


## Backend Server

Como backend não é objectivo do projeto, um arquivo base de conexão com servidor foi disponibilizado [`BooksAPI.js`](src/ultils/BooksAPI.js) que utilzia os métodos:

* [`getAll`](#getall) # Obter todos os livros
* [`update`](#update) # Atualize os livros 
* [`search`](#search) # Produre por livros

### `getAll`

```js
getAll()
```

* Retorna um JSON através de uma Promise, com coleção de livros.
* Essa coleção representa os livros a serem exibidos na página inicial.

### `update`

```js
update(book, shelf)
```

* book: `<Object>` retorna informação de livro baseada no seu `id`
* shelf: `<String>` contem a informação de categorização do livro na estante ["wantToRead", "currentlyReading", "read"]  
* Retorna um JSON através de uma Promise, utilizando metodo POST

### `search`

```js
search(query)
```

* query: `<String>`
* Retorna um JSON através de uma Promise com uma a coleção de itens com máximo de 20 objectos.
* Está resposta, retorna livros sem estado, eles irão para a estante através da categorização

## Importante
A pesquisa é limitada a termos pre-definidos no arquivo [SEARCH_TERMS.md](SEARCH_TERMS.md). _Somente_ esses termos terão resultado.

## Create React App

Este projeto usou o [Create React App 2](https://github.com/facebookincubator/create-react-app) como base de configuações de servidor de desenvolvimento e configurações de [Babel](https://babeljs.io) e [Webpack](https://webpack.js.org). 
Mais informações sobre [here](https://facebook.github.io/create-react-app/).

## Contributing

Este código inicial foi disponilizado, para uso dos estudantes Udacity.

Este Projeto utiliza icones adicionais dispobilizados pelo [Icons8](https://icons8.com), sendo usado como tag img disponivel no próprio site e usando licença [CC BY-ND 3.0](https://creativecommons.org/licenses/by-nd/3.0/)