import { useState } from "react";
import "./Header.css";

const Header = ({ title, version }) => {
  // useState(false) permet de définir une variable d'état menuPrinted qui est initialisée à false
  // setMenuPrinted est une fonction qui permet de modifier la valeur de menuPrinted
  const [menuPrinted, setMenuPrinted] = useState(false);

  // fonction de gestion d'évenement pour le click sur le header
  const handleClick = () => {
    console.log(`value of menuPrinted before click: ${menuPrinted}`);
    setMenuPrinted(!menuPrinted); // inverse la valeur de menuPrinted
  };

  return (
    // !!! Attention !!! L'attribut d'événement onClick reçoit le nom de la fonction de gestion d'événement sans les parenthèses
    // ce n'est pas un appel de fonction, mais une référence à la fonction
    <header onClick={handleClick}>
      <h1 className="animate__animated animate__bounce">
        {/*condition ? valeurSiVraie : valeurSiFausse*/}
        {menuPrinted ? `${title}... and rarely do we hate it!` : title}{" "}
      </h1>
      <h4>Version: {version}</h4>
    </header>
  );
};

export default Header;
