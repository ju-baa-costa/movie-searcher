import AreaAvaliacao from "./AreaAvaliacao";
import type { Filme } from "../types/movie";
import { useNavigate } from "react-router-dom";
import { useAvaliacoes } from "../contexts/AvaliacoesContext";

interface CardFilmeProps {
  filme: Filme;
}

export default function CardFilme({ filme }: CardFilmeProps) {
  const navigate = useNavigate();
  const { avaliacoes, removerAvaliacao } = useAvaliacoes();
  const notaUsuario = avaliacoes[String(filme.id)];
  return (
    <div className="movie-card" onClick={() => navigate(`/filme/${filme.id}`)}>
      <img
        src={
          filme.poster_path
            ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
            : "https://placehold.co/500x750/1b2640/FFFFFF?text=Sem+Imagem"
        }
        alt={filme.title}
      />

      <div className="movie-info">
        <div className="movie-title-row">
          <h2>{filme.title}</h2>
        </div>

        <AreaAvaliacao
          rating={notaUsuario}
          onRemove={() => removerAvaliacao(filme.id)}
        />
      </div>
    </div>
  );
}
