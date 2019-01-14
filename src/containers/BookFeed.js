import React from 'react';
import PropTypes from 'prop-types';

import BooksList from '../components/booksList';
import Section from '../components/section';
import SearchButton from '../components/search'

const BookFeed = ({books, shelf, updateShelf}) => (
    <React.Fragment>
        <Section sectionTitle={'Currently Reading'}>
            <BooksList 
                showingBooks={books}
                shelf={`currentlyReading`}
                updateShelf={updateShelf}
            />
            </Section>

            <Section sectionTitle={'Want to Read'}>
                <BooksList 
                    showingBooks={books} 
                    shelf={`wantToRead`}
                    updateShelf={updateShelf}
                />
            </Section>
            
            <Section sectionTitle={'Read'}>
            <BooksList 
                showingBooks={books}
                shelf={`read`}
                updateShelf={updateShelf}
                />
            </Section>
            <SearchButton />
    </React.Fragment>
);

BookFeed.propTypes = {
    shelf: PropTypes.string,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func
}

export default BookFeed;