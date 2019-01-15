import React from 'react';
import PropTypes from 'prop-types';

import BooksList from '../components/booksList';
import Section from '../components/section';

const BookFeed = ({books, shelf, updateShelf}) => (
    <React.Fragment>
        <Section id={`currentlyReading`} sectionTitle={'Currently Reading'}>
            <BooksList 
                showingBooks={books}
                shelf={`currentlyReading`}
                updateShelf={updateShelf}
            />
            </Section>

            <Section id={`wantToRead`} sectionTitle={'Want to Read'}>
                <BooksList 
                    showingBooks={books} 
                    shelf={`wantToRead`}
                    updateShelf={updateShelf}
                />
            </Section>
            
            <Section id={`read`} sectionTitle={'Read'}>
            <BooksList 
                showingBooks={books}
                shelf={`read`}
                updateShelf={updateShelf}
                />
            </Section>
    </React.Fragment>
);

BookFeed.propTypes = {
    shelf: PropTypes.string,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func
}

export default BookFeed;