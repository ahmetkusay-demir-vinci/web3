import React, { useEffect, useContext } from "react";
import { BooksContext } from "contexts/BooksContext";
import BookItem from "components/BookItem/BookItem";
import "./BooksPage.css";

const BooksPage = () => {
  const { books, fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="books-page">
      <h1>Gestion de livres</h1>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <BookItem book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;