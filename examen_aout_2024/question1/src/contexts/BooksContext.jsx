import React, { createContext, useState } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const updateBookState = async (id, state) => {
    try {
      await axios.patch(`http://localhost:3000/books/${id}`, { state });
      fetchBooks();
    } catch (error) {
      console.error("Error updating book state:", error);
    }
  };

  return (
    <BooksContext.Provider value={{ books, fetchBooks, updateBookState }}>
      {children}
    </BooksContext.Provider>
  );
};