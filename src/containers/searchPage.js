import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
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

    updateQuery = event => {
        this.setState(() => ({
            query: event.trim()
        }))

        BooksAPI.search(event, 20).then((results) => {
            this.setState({ 
                results
            })
        })
    }

  render() {
    const { query, results } = this.state
    const { updateShelf } = this.props;
    
    const searchErr = results ? results.error : results.length > 0;

    console.log(results)
    return (
      <div className="search-books">
        <div className="search-books-bar">
            <Link to="/">Close</Link>
            <div className="search-books-input-wrapper">
                <input
                type="text" 
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />
            </div>
        </div>
        <div className="search-books-results">
            {results.length > 1 && (
            <div>
              <h3>Search returned {results.length} books </h3>
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
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
    </div>
    )
  }
}

export default SearchPage;