interface AreaAvaliacaoProps {
  rating?: number;

  onRemove?: () => void;
}

export default function AreaAvaliacao({
  rating,
  onRemove,
}: AreaAvaliacaoProps) {
  if (!rating) {
    return <div className="not-rated">Não avaliado</div>;
  }

  return (
    <div className="rating-area">
      <div className="stars">
        {Array.from({
          length: rating,
        }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>

      <button
        className="remove-rating"
        onClick={(e) => {
          e.stopPropagation();

          onRemove?.();
        }}
      >
        ✕
      </button>
    </div>
  );
}
