import { useEffect, useState } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  buscarDetalhes,
  buscarElenco,
} from "../services/api";

import EstrelasAvaliacao from "../components/EstrelasAvaliacao";

import { useAvaliacoes } from "../contexts/AvaliacoesContext";

export default function DetalhesFilme() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    avaliacoes,
    avaliarFilme,
    removerAvaliacao,
  } = useAvaliacoes();

  const [filme, setFilme] =
    useState<any>(null);

  const [elenco, setElenco] =
    useState<any[]>([]);

  useEffect(() => {
    async function carregarFilme() {
      if (!id) return;

      const data =
        await buscarDetalhes(id);

      setFilme(data);

      const elencoData =
        await buscarElenco(id);

      setElenco(elencoData);
    }

    carregarFilme();
  }, [id]);

  if (!filme) {
    return (
      <div className="loading-page">
        Carregando...
      </div>
    );
  }

  return (
    <div className="details-container">
      <button
        className="back-button"
        onClick={() => navigate('/')}
      >
        ← Voltar
      </button>

      <div
        className="backdrop"
        style={{
          backgroundImage: `url(
            https://image.tmdb.org/t/p/original${filme.backdrop_path}
          )`,
        }}
      />

      <div className="overlay" />

      <div className="details-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt={filme.title}
          className="details-poster"
        />

        <div className="details-info">
          <h1>{filme.title}</h1>

          <div className="details-meta">
            <span>
              ⭐{" "}
              {filme.vote_average?.toFixed(
                1
              )}
            </span>

            <span>
              📅 {filme.release_date}
            </span>
          </div>

          <p>{filme.overview}</p>

          <div className="avaliacao-section">
            <h3>Sua avaliação</h3>

            <EstrelasAvaliacao
              notaAtual={
                avaliacoes[
                  String(filme.id)
                ]
              }
              aoAvaliar={(nota) =>
                avaliarFilme(
                  filme.id,
                  nota
                )
              }
            />

            {avaliacoes[
              String(filme.id)
            ] && (
              <button
                className="remove-rating"
                onClick={() =>
                  removerAvaliacao(
                    filme.id
                  )
                }
              >
                Remover avaliação
              </button>
            )}
          </div>

          <div className="elenco-section">
            <h2>Elenco</h2>

            <div className="elenco-grid">
              {elenco
                .slice(0, 10)
                .map((ator) => (
                  <div
                    key={ator.id}
                    className="ator-card"
                  >
                    <img
                      src={
                        ator.profile_path
                          ? `https://image.tmdb.org/t/p/w300${ator.profile_path}`
                          : "https://placehold.co/300x450/1b2640/FFFFFF?text=Sem+Foto"
                      }
                      alt={ator.name}
                    />

                    <h3>{ator.name}</h3>

                    <p>
                      {
                        ator.character
                      }
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}