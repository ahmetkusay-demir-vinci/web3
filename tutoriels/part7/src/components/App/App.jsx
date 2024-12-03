import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import HomePage from "components/HomePage/HomePage";
import AboutPage from "components/AboutPage/AboutPage";
import ContactPage from "components/ContactPage/ContactPage";

const App = () => (
  <div>
    <NavBar />
    <Outlet />
  </div>
);

export default App;
export { AboutPage, ContactPage, HomePage };
