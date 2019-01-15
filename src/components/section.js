import React from 'react';

const Section = ({ sectionTitle, id,  children }) => (
    <div className="bookshelf" id={id}>
        <h2 className="bookshelf-title">{sectionTitle}</h2>
        <div className="bookshelf-books">{children}</div>
    </div>
)
export default Section;