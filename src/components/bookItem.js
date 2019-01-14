import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book, shelf, updateShelf }) => (
  <div className="book">
      <div className="book-top">
          <div className="book-cover" 
              style={{ 
                  width: 128, 
                  height: 193, 
                  backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}>
          </div>

      <div className="book-shelf-changer">
          <select 
          value={book.shelf}
          onChange={(e) => updateShelf(book, e.target.value.trim())}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
          </select>
      </div>
  </div>
  <div className="book-title">{book.title}</div>
  <div className="book-authors">{book.authors.map((author, idx) => (
      <p key={idx}>{author}</p>
  ))}</div>
  </div>
);

BookItem.propTypes = {
    shelf: PropTypes.string,
    updateShelf: PropTypes.func
}

export default BookItem;