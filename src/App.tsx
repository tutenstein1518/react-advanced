import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPages from "./pages/FavoritesPages";
import React from "react";
import Navigation from "./components/Navigation";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPages />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
