import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App, { HomePage, CinemaPage, MovieListPage, AddMoviePage, MoviePage} from "components/App/App";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "cinema", element: <CinemaPage /> },
      { path: "movies", element: <MovieListPage /> },
      { path: "movies/add", element: <AddMoviePage />},
      { path: "movies/:id", element: <MoviePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
