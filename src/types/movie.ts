export interface Filme {
  id: number;
  title: string;
  poster_path: string;
  vote_average?: number;
  overview?: string;
  release_date?: string;
  rating?: number | null;
}
