const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

export async function buscarFilmes(pesquisa: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${pesquisa}&language=pt-BR`,
    {
      headers,
    }
  );

  const data = await response.json();

  return data.results;
}
export async function buscarDetalhes(id: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
    {
      headers,
    }
  );

  const data = await response.json();

  return data;
}
export async function buscarElenco(id: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=pt-BR`,
    {
      headers,
    }
  );

  const data = await response.json();

  return data.cast;
}
