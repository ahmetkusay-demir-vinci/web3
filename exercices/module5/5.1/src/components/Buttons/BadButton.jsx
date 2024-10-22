import React, { useContext } from "react";
import { CountersContext } from "contexts/CountersContext";

const BadButton = () => {
  const { increaseBad } = useContext(CountersContext);

  return <button onClick={increaseBad}>Bad</button>;
};

export default BadButton;
