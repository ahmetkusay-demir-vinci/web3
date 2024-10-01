import { useState } from "react";
import "./App.css";

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>button press history: {allClicks.join(" ")}</div>;
};

// On passe un gestionnaire d'événements et un texte à afficher dans le bouton
const Button = ({ handleClick, text, clickCount }) => (
  <button onClick={handleClick}>
    {text} ({clickCount}){" "}
  </button>
);

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAll] = useState([]);
  const [value, setValue] = useState(10);

  // En React, interdiction de muter l'état directement, il faut un nouvel objet et définir l'état avec ce nouvel objet
  // Interdiction de faire ça : clicks.left++ ou clicks.left += 1
  // ici le nouvel objet est : { left: clicks.left + 1 }
  const handleLeftClick = () => {
    console.log(`value before of clicks left: ${clicks.left}`);
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };
    setClicks(newClicks);
    setAll(allClicks.concat("L")); // Ajoute "L" dans l'historique des clics
  };

  const handleRightClick = () => {
    console.log(`value before of clicks right: ${clicks.right}`);
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
    setAll(allClicks.concat("R")); // Ajoute "R" dans l'historique des clics
  };

  const setToValue = (newValue) => () => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <Button
          handleClick={handleLeftClick}
          text="left"
          clickCount={clicks.left}
        />
        <Button
          handleClick={handleRightClick}
          text="right"
          clickCount={clicks.right}
        />
      </div>
      <br />
      <History allClicks={allClicks} />
      <br />
      <div>
        <button onClick={setToValue(1000)}>thousand</button>
        <button onClick={setToValue(0)}>reset</button>
        <button onClick={setToValue(value + 1)}>increment</button>
      </div>
      {value}
    </div>
  );
};

export default App;
