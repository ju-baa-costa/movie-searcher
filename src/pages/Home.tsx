import { useState } from "react";
import CardFilme from "../components/CardFilme";
import BarraPesquisa from "../components/BarraPesquisa";
import type { Filme } from "../types/movie";
import { buscarFilmes } from "../services/api";
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const [pesquisa, setPesquisa] = useState("");
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(false);
  const [pesquisou, setPesquisou] = useState(false);

  
  async function pesquisar() {
    if (!pesquisa.trim()) return;

    try {
      setLoading(true);
      setPesquisou(true);
      const resultados = await buscarFilmes(pesquisa);

      setFilmes(resultados);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="home">
      <header className="home-header">
        <div>
          <h1>Movie Finder</h1>

          <p>Search and rate your favorite movies.</p>
        </div>

        <button className="rated-button" onClick={() => navigate('/avaliados')}>
          Filmes Avaliados
        </button>
        <BarraPesquisa
          pesquisa={pesquisa}
          setPesquisa={setPesquisa}
          pesquisar={pesquisar}
        />
      </header>

      <section className="movies-grid">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Carregando filmes...</p>
          </div>
        ) : filmes.length === 0 && pesquisou ? (
          <p className="empty-message">Nenhum filme encontrado.</p>
        ) : (
          filmes.map((filme) => <CardFilme key={filme.id} filme={filme} />)
        )}
      </section>
    </div>
  );
}
