import { Link } from "react-router-dom";
import "components/NavBar/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/cinema" className="nav-link">Cinema</Link>
      <Link to="/movies" className="nav-link">Movies</Link>
      <Link to="/movies/add" className="nav-link">Add movie</Link>
    </nav>
  );
};

export default NavBar;
