import { useState } from "react";
import "./ClickCounter.css";

function ClickCounter({
  title,
  messageClick = "You are a master in the art of clicking !",
  messageMouseOver = "Please, click on me now !",
}) {
  const [count, setCount] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);

  const handleClick = () => {
    console.log(`value of count before click: ${count}`);
    setCount(count + 1);
  };

  const handleMouseEnter = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      {mouseOver ? <p>{messageMouseOver}</p> : null}
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        count is {count}
      </button>
      {count > 10 ? <p>{messageClick}</p> : null}
    </div>
  );
}

export default ClickCounter;
