import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import { BooksProvider } from "contexts/BooksContext";

const App = () => {
  return (
    <BooksProvider>
      <NavBar />
      <Outlet />
    </BooksProvider>
  );
};

export default App;