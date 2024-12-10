import { useState } from 'react';
import EditPhoneForm from 'components/EditPhoneForm/EditPhoneForm.jsx';
import 'components/PersonList/PersonList.css';

const PersonList = ({ persons, refetch, setError }) => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
      <div className="person-list">
        <h2>Liste des personnes</h2>
        <ul>
          {persons.map((person) => (
              <li key={person.id}>
                <strong>{person.name}</strong> - {person.phone || 'N/A'}
                <br />
                <small>{person.address.street}, {person.address.city}</small>
                <br />
                <button onClick={() => setSelectedPerson(person)}>Modifier le numéro</button>
              </li>
          ))}
        </ul>

        {/* Formulaire de modification */}
        {selectedPerson && (
            <EditPhoneForm
                personName={selectedPerson.name}
                onClose={() => setSelectedPerson(null)}
                refetch={refetch}
                setError={setError}
            />
        )}
      </div>
  );
};

export default PersonList;