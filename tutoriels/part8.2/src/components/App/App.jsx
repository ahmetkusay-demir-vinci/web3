import { useQuery } from '@apollo/client';
import { useState } from 'react';
import 'components/App/App.css';
import { ALL_PERSONS } from '../../queries.js'
import PersonList from 'components/PersonList/PersonList.jsx';
import AddPersonForm from 'components/AddPersonForm/AddPersonForm.jsx';

// Gestion des notifications
const Notify = ({ message }) => {
  if (!message) return null;

  return <div style={{ color: 'red' }}>{message}</div>;
};

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { loading, error, data, refetch } = useQuery(ALL_PERSONS, {
    pollInterval: 2000, // Actualisation automatique toutes les 2 secondes
  });

  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(null), 10000);
  };

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
      <div className="app-container">
        <h1>Annuaire des personnes</h1>
        <Notify message={errorMessage} />
        <AddPersonForm onPersonAdded={() => refetch()} setError={notify} />
        <PersonList persons={data.allPersons} refetch={refetch} setError={notify} />
      </div>
  );
};

export default App;