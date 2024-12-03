import "components/Header/Header.css";
import NavBar from "components/NavBar/NavBar";

const Header = ({ urlLogo, children }) => {
  return (
    <header className="header">
      <img src={urlLogo} alt="logo" className="logo" />
      <NavBar />
      {children}
    </header>
  );
};

export default Header;
