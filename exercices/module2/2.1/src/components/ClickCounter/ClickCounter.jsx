import { useState } from "react";
import "./ClickCounter.css";

function ClickCounter({title,messageClick = "You are a master in the art of clicking !",}) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log(`value of count before click: ${count}`);
    setCount(count + 1);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={handleClick}>count is {count}</button>
      {count > 10 ? <p>{messageClick}</p> : null}
    </div>
  );
}

export default ClickCounter;
