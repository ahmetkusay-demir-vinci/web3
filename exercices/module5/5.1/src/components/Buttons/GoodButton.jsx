import React, { useContext } from "react";
import { CountersContext } from "contexts/CountersContext";

const GoodButton = () => {
  const { increaseGood } = useContext(CountersContext);

  return <button onClick={increaseGood}>Good</button>;
};

export default GoodButton;
