import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import personService from "services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  // Hook d'effet pour récupérer les données depuis le serveur
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  // Fonction pour gérer la soumission du formulaire
  const addPerson = (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page

    const nameExists = persons.some((person) => person.name === newName); // Vérifier si le nom existe déjà dans le répertoire

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      personService.create(personObject).then((returnedPerson) => {
        // Ajouter la nouvelle personne au tableau
        setPersons(persons.concat(personObject));
        setNewName(""); // Réinitialiser l'entrée du formulaire pour le nom
        setNewNumber(""); // Réinitialiser l'entrée du formulaire pour le numéro
      });
    }
  };

  // Fonction pour capturer les changements dans l'entrée
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
