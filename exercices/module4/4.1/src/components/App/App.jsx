import { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const addPerson = (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page
    const personObject = {
      name: newName,
    };

    // Vérifier si le nom existe déjà dans le répertoire 
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
      };
      // Ajouter la nouvelle personne au tableau
      setPersons(persons.concat(personObject));
      setNewName(""); // Réinitialiser l'entrée du formulaire
    }
  };

  // Fonction pour capturer les changements dans l'entrée
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
