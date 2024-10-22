import React, { useContext } from "react";
import { CountersContext } from "contexts/CountersContext";

const ResetButton = () => {
  const { resetAll } = useContext(CountersContext);

  return <button onClick={resetAll}>Reset</button>;
};

export default ResetButton;
