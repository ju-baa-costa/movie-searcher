import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AvaliacoesProvider } from "./contexts/AvaliacoesContext";
import Home from "./pages/Home";
import DetalhesFilme from "./pages/DetalhesFilme";
import FilmesAvaliados from './pages/FilmesAvaliados'

export default function App() {
  return (
    <AvaliacoesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/filme/:id" element={<DetalhesFilme />} />
          <Route path="/avaliados" element={<FilmesAvaliados />} />
        </Routes>
      </BrowserRouter>
    </AvaliacoesProvider>
  );
}
