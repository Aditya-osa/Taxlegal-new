import React from 'react';
import './BookGallery.css';

const BookGallery = ({ books }) => {
  return (
    <div className="book-gallery-container">
      <h4 className="book-gallery-title">Authored Books</h4>
      <div className="book-gallery">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <div className="book-cover-wrapper">
              <img src={book.cover} alt={book.title} className="book-cover" />
            </div>
            <div className="book-info">
              <p className="book-title">{book.title}</p>
              <p className="book-year">{book.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGallery;
