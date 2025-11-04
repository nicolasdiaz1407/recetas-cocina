// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home";
import Recetas from "./pages/Recetas/Recetas";
import RecipePage from "./pages/RecipePage/RecipePage";
import AboutProyect from "./pages/About/About";
import AboutApp from "./pages/AboutApp/AboutApp";

function App() {
  return (
    <Router>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/receta/:id" element={<RecipePage />} />
        <Route path="/aboutProyect" element={<AboutProyect />} />
        <Route path="/aboutApp" element={<AboutApp />} />
      </Routes>
    </Router>
  );
}

export default App;
