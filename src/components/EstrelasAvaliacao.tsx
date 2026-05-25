interface EstrelasAvaliacaoProps {
  notaAtual?: number;

  aoAvaliar: (nota: number) => void;
}

export default function EstrelasAvaliacao({
  notaAtual = 0,
  aoAvaliar,
}: EstrelasAvaliacaoProps) {
  return (
    <div className="estrelas-container">
      {[1, 2, 3, 4, 5].map((estrela) => (
        <button
          key={estrela}
          className="estrela-button"
          onClick={() => aoAvaliar(estrela)}
        >
          {estrela <= notaAtual ? "★" : "☆"}
        </button>
      ))}
    </div>
  );
}
