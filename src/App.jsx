// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import Recetas from "./pages/Recetas/Recetas";
import RecipePage from "./pages/RecipePage/RecipePage";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/receta/:id" element={<RecipePage />} />
        <Route path="/aboutProyect" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
