import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/cinema" className="nav-link">Cinema</Link>
      <Link to="/movies" className="nav-link">Movies</Link>
    </nav>
  );
};

export default NavBar;
