import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import CardFilme from "../components/CardFilme";

import { useAvaliacoes } from "../contexts/AvaliacoesContext";

import { buscarDetalhes } from "../services/api";

export default function FilmesAvaliados() {
  const navigate = useNavigate();

  const { avaliacoes } =
    useAvaliacoes();

  const [filmes, setFilmes] =
    useState<any[]>([]);

  useEffect(() => {
    async function carregarFilmes() {
      const ids =
        Object.keys(avaliacoes);

      const filmesData =
        await Promise.all(
          ids.map((id) =>
            buscarDetalhes(id)
          )
        );

      setFilmes(filmesData);
    }

    carregarFilmes();
  }, [avaliacoes]);

  return (
    <div className="rated-page">
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Voltar
      </button>

      <h1>Filmes Avaliados</h1>

      <p className="rated-subtitle">
        Sua coleção pessoal de filmes
        avaliados.
      </p>

      {filmes.length === 0 ? (
        <div className="empty-rated">
          <h2>
            Nenhum filme avaliado
          </h2>

          <p>
            Avalie filmes para vê-los
            aqui.
          </p>
        </div>
      ) : (
        <div className="movies-grid">
          {filmes.map((filme) => (
            <CardFilme
              key={filme.id}
              filme={filme}
            />
          ))}
        </div>
      )}
    </div>
  );
}