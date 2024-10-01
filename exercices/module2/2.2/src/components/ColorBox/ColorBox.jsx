import { useState } from "react";
import "./ColorBox.css";

const colors = ["red", "green", "blue", "yellow", "purple"];

function ColorBox({ title }) {
  const [color, setColor] = useState(0);

  const handleClick = () => {
    console.log(`value of color before click: ${color}`);
    setColor((color + 1) % colors.length);
  };

  return (
    <div className="color-box" data-color={colors[color]}>
      <button className="color-box-button" onClick={handleClick}>
        {colors[(color + 1) % colors.length]}
      </button>
      <h3>{colors[color]}</h3>
    </div>
  );
}

export default ColorBox;
