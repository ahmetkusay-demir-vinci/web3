import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Note from "components/Note/Note";
import noteService from "services/notes";

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  // Permet de récupérer les données de l'API RESTful au chargement de l'application via le fichier db.json
  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  // la méthode ne modifie pas le tableau notes mais crée une copie du tableau notes avec la nouvelle note ajoutée
  const addNote = (event) => {
    event.preventDefault(); // permet de ne pas recharger la page lors de la soumission du formulaire
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    noteService.create(noteObject).then((returnedNote) => {
      console.log(returnedNote);
      setNotes(notes.concat(returnedNote));
      setNewNote(""); // réinitialise la valeur de l'entrée de formulaire
    });
  };

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important }; // variable où on crée une copie de la note avec la propriété important modifiée

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  // gestionnaire d'événements pour la modification de l'entrée de formulaire sinon pas possible de saisir du texte
  // pas besoin de preventDefault lors de la saisie de texte
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
