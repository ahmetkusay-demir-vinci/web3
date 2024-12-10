import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PERSON, ALL_PERSONS } from '../../queries.js';
import 'components/AddPersonForm/AddPersonForm.css';

const AddPersonForm = ({ onPersonAdded, setError }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');

  const [addPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }], // Actualise la liste après l'ajout
    onCompleted: () => {
      setName('');
      setPhone('');
      setStreet('');
      setCity('');
      if (onPersonAdded) onPersonAdded();
    },
    onError: (error) => {
      const messages = error.graphQLErrors.map((e) => e.message).join('\n');
      setError(messages);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson({ variables: { name, phone, street, city } });
  };

  return (
      <form className="add-person-form" onSubmit={handleSubmit}>
        <h2>Ajouter une personne</h2>
        <div>
          <label>Nom :</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" required />
        </div>
        <div>
          <label>Téléphone :</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Téléphone" />
        </div>
        <div>
          <label>Rue :</label>
          <input value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Rue" required />
        </div>
        <div>
          <label>Ville :</label>
          <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ville" required />
        </div>
        <button type="submit">Ajouter</button>
      </form>
  );
};

export default AddPersonForm;