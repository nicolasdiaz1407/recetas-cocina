// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import FavoritesProvider from "./context/FavoritesProvider";
import Home from "./pages/Home";
import Recetas from "./pages/Recetas/Recetas";
import RecipePage from "./pages/RecipePage/RecipePage";
import AboutProyect from "./pages/About/About";
import AboutApp from "./pages/AboutApp/AboutApp";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/receta/:id" element={<RecipePage />} />
          <Route path="/aboutProyect" element={<AboutProyect />} />
          <Route path="/aboutApp" element={<AboutApp />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
