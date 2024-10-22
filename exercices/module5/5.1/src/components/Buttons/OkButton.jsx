import React, { useContext } from "react";
import { CountersContext } from "contexts/CountersContext";

const OkButton = () => {
  const { increaseOk } = useContext(CountersContext);

  return <button onClick={increaseOk}>Ok</button>;
};

export default OkButton;
