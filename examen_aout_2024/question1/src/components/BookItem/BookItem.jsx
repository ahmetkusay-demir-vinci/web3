import React, { useState } from "react";
import { useContext } from "react";
import { BooksContext } from "contexts/BooksContext";
import "./BookItem.css";

const BookItem = ({ book }) => {
  const [state, setState] = useState(book.state);
  const { updateBookState } = useContext(BooksContext);

  const handleUpdate = () => {
    updateBookState(book.id, state);
  };

  return (
    <div className="book-item">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="read">lu</option>
        <option value="to_read">à lire</option>
        <option value="reading">en cours de lecture</option>
      </select>
      <button onClick={handleUpdate}>Mettre à jour l’état</button>
    </div>
  );
};

export default BookItem;