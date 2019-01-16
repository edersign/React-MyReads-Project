import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Debounce } from 'react-throttle';
import * as BooksAPI from '../utils/BooksAPI';
import BookItem from '../components/bookItem';

class SearchPage extends React.Component {
    static propTypes = {
        updateShelf: PropTypes.func.isRequired
    };
    state = {
        query: '',
        results:[],
        searchErr: false
    }

    updateQuery = e => {
        //console.log(e)
        this.setState(() => ({
            query: e.trim()
        }))

        BooksAPI.search(e, 20).then((results) => {
            this.setState({ 
                results
            })
        })
    }

  render() {
    const { query, results } = this.state
    const { updateShelf } = this.props;
    
    const searchErr = results ? results.error : results.length > 0;

    console.log('results', results)
    console.log('query', query)
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
            <Link className="close-search" to="/">
               Close
            </Link>
            <div className="search-books-input-wrapper">
                <Debounce time="400" handler="onChange">
                    <input type="text" placeholder="Search by title or author" onChange={(e) => this.updateQuery(e.target.value)} />
                </Debounce>
            </div>
        </div>
        <div className="search-books-results">
            {results.length > 1 && (
            <div>
              <h2 className="bookshelf-title">Search returned {results.length} books </h2>
              <ol className="books-grid">
                {results.map((book) => (
                <li key={ book.id }>
                    <BookItem
                    shelf={ book.shelf }
                    book={book}
                    updateShelf={updateShelf}
                    />
                </li>
                ))}
              </ol>
            </div>
          )}
          {searchErr && (
            <h2 className="bookshelf-title">Search did not return any books for {query}.<br />Please try again</h2>
          )}
        </div>
    </div>
    )
  }
}

export default SearchPage;