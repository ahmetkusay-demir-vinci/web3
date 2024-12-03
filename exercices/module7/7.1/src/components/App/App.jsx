import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import NavBar from "components/NavBar/NavBar";
import HomePage from "components/Pages/HomePage";
import CinemaPage from "components/Pages/CinemaPage";
import MovieListPage from "components/Pages/MovieListPage";

const App = () => (
  <div>
    <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
      <NavBar />
    </Header>
    <main>
      <Outlet />
    </main>
    <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
      <p>© 2021 UGC Cinémas</p>
    </Footer>
  </div>
);

export default App;
export { HomePage, CinemaPage, MovieListPage };
