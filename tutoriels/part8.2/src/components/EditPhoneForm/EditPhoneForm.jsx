import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_NUMBER, ALL_PERSONS } from '../../queries.js';
import 'components/EditPhoneForm/EditPhoneForm.css';

const EditPhoneForm = ({ personName, onClose, refetch, setError }) => {
  const [phone, setPhone] = useState('');

  const [editNumber] = useMutation(EDIT_NUMBER, {
    // Mise à jour du cache
    update: (cache, { data: { editNumber } }) => {
      const existingData = cache.readQuery({ query: ALL_PERSONS });
      const updatedPersons = existingData.allPersons.map((person) =>
          person.name === editNumber.name ? { ...person, phone: editNumber.phone } : person
      );
      cache.writeQuery({
        query: ALL_PERSONS,
        data: { allPersons: updatedPersons },
      });
    },
    onCompleted: () => onClose(),
    onError: (error) => {
      const messages = error.graphQLErrors.map((e) => e.message).join('\n');
      setError(messages);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    editNumber({ variables: { name: personName, phone } });
  };

  return (
      <form className="edit-phone-form" onSubmit={handleSubmit}>
        <h2>Modifier le numéro pour {personName}</h2>
        <div>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Nouveau numéro" required />
        </div>
        <button type="submit">Modifier</button>
        <button type="button" onClick={onClose}>Annuler</button>
      </form>
  );
};

export default EditPhoneForm;