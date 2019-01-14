import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';

import Header from './components/header';
import BookFeed from './containers/BookFeed'
import SearchPage from './containers/searchPage'
import './App.css';

class BooksApp extends React.Component {
  state = {
    booksList: [],
    loading: true
  }

  componentDidMount() {
        this.fethAllBooks();
    };

    fethAllBooks() {
       BooksAPI.getAll().then((booksList) => {
        this.setState({
            booksList,
            loading: false
          })
      })
    };

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((booksList) => {
      this.fethAllBooks();
    })
  }

  render() {
    const isLoading = this.state.loading;
    const books = this.state.booksList;
    return (
      <div className="app">
        <Header title='MyReads' />
        {isLoading ? (
        <h2 className="loading">Loading</h2>
        ) : (
          <Switch>
            <Route exact path="/" component={() => <BookFeed books={books} updateShelf={this.updateShelf} />} />
            <Route path="/search" render={({ history }) => (<SearchPage updateShelf={this.updateShelf} /> )} />
          </Switch>
        )}
      </div>
    );
  }
}

export default BooksApp;