import { useState } from "react";
import "./ClickCounter.css";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log(`value of count before click: ${count}`);
    setCount(count + 1);
  };

  return (
    <div className="card">
      <button onClick={handleClick}>count is {count}</button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default ClickCounter;