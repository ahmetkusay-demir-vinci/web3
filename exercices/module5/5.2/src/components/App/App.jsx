import './App.css'
import React from 'react';
import OpinionsList from 'components/Opinion/OpinionsList';
import AddOpinionForm from 'components/Opinion/AddOpinionForm';

const App = () => {
  return (
    <div>
      <h1>Opinion Voting App</h1>
      <OpinionsList />
      <AddOpinionForm />
    </div>
  );
};

export default App;
