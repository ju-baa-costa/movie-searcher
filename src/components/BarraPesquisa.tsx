interface BarraPesquisaProps {
  pesquisa: string;

  setPesquisa: (value: string) => void;

  pesquisar: () => void;
}

export default function BarraPesquisa({
  pesquisa,
  setPesquisa,
  pesquisar,
}: BarraPesquisaProps) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Pesquisar filmes..."
        className="search-input"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            pesquisar();
          }
        }}
      />

      <button className="search-button" onClick={pesquisar}>
        Buscar
      </button>
    </div>
  );
}
