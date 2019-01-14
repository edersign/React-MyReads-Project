import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './bookItem';

const booksList = ({showingBooks, shelf, updateShelf}) => (
  <ol className="books-grid">
    {showingBooks.filter((c) => (c.shelf === shelf)).map((book) => (
      <li key={ book.id }>
        <BookItem
          id={ book.id }
          title={ book.title }
          authors={ book.authors }
          thumbnail={ book.imageLinks.thumbnail }
          shelf={ book.shelf }
          book={book}
          updateShelf={updateShelf}
        />
      </li>
    ))}
  </ol>
)

booksList.propTypes = {
  shelf: PropTypes.string,
  showingBooks: PropTypes.array.isRequired,
  updateShelf: PropTypes.func
}

export default booksList;