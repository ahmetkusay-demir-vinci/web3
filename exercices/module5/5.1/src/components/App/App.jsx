import './App.css'

import React, { useContext } from 'react';
import { CountersContext } from 'contexts/CountersContext';
import GoodButton from 'components/Buttons/GoodButton';
import OkButton from 'components/Buttons/OkButton';
import BadButton from 'components/Buttons/BadButton';
import ResetButton from 'components/Buttons/ResetButton';

const App = () => {
  const { good, ok, bad } = useContext(CountersContext);

  return (
    <div>
      <h1>Vote Results</h1>
      <p>Good: {good}</p>
      <p>Ok: {ok}</p>
      <p>Bad: {bad}</p>

      <GoodButton />
      <OkButton />
      <BadButton />
      <ResetButton />
    </div>
  );
};

export default App;
