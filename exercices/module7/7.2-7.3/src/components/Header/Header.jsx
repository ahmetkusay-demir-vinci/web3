import "components/Header/Header.css";

const Header = ({ urlLogo, children }) => {
  return (
    <header className="header">
      <img src={urlLogo} alt="logo" className="logo" />
      {children}
    </header>
  );
};

export default Header;
