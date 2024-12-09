import PageTitle from "components/PageTitle/PageTitle";
import MovieListView from "components/MovieListView/MovieListView";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
  const { movies } = useOutletContext(); // TODO by me
  
  return (
    <div>
      <PageTitle title="My favorite movies" />
      <MovieListView movies={movies} />
    </div>
  );
};

export default MovieListPage;
