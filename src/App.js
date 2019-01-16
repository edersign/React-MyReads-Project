import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';

import Header from './components/header';
import BookFeed from './containers/BookFeed'
import SearchPage from './containers/searchPage'
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: true
  }

  // carregando livros async 
  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({
     books,
      loading: false
    })
  }
  
  updateShelf = (book, shelf) => {

    // O update do livro é assíncrono
    BooksAPI.update(book, shelf);

    // Seto a estante atual
    book.shelf = shelf;  

    // 1. Uso o estado atual
    // 2. Removo o livro caso ele exista
    // 3. Caso o livro não exista ele vai retornar todos os livros
    // 4. Adiciono o livro novamente com o `concat`, sem realizar nenhuma mutação
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat(book)
    }));
  }

  render() {
    const isLoading = this.state.loading;
    const books = this.state.books;
    return (
      <div className="app">
        <Header title='MyReads' />
        {isLoading ? (
        <h2 className="loading">Loading</h2>
        ) : (
          <main className="wrapper">
            <Switch>
              <Route exact path="/" component={() => <BookFeed books={books} updateShelf={this.updateShelf} />} />
              <Route path="/search" render={({ history }) => (<SearchPage updateShelf={this.updateShelf} /> )} />
            </Switch>
          </main>
        )}
      </div>
    );
  }
}

export default BooksApp;