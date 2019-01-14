import React from 'react';

const Section = ({ sectionTitle, children }) => (
    <div className="list-books-content">
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{sectionTitle}</h2>
                <div className="bookshelf-books">{children}</div>
            </div>
        </div>
    </div>
)
export default Section;