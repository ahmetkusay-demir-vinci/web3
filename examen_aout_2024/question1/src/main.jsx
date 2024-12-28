import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "components/App/App";
import HomePage from "components/pages/HomePage";
import BooksPage from "components/pages/BooksPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<BooksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);