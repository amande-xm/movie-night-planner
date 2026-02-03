export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  adult: boolean;
  popularity: number;
  original_language: string;
}

export interface TMDBAPIResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
/*
💡 3 points importants à savoir sur TMDB

    Les images (poster_path) : L'API ne te donne pas l'URL complète. Elle te donne juste la fin (ex: /uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg). Pour afficher l'image, tu devras ajouter l'URL de base devant.

        Exemple : https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg

        w500 est la largeur de l'image. Tu peux changer pour w200, original, etc.

    Les dates : Parfois release_date peut être une chaîne vide "" si le film n'est pas encore sorti ou si l'info manque. Pense à vérifier ça avant d'afficher la date.

    Les Genres : L'objet film contient seulement les IDs (genre_ids: [28, 12]). Pour afficher "Action" ou "Aventure", tu devras faire un appel séparé à l'endpoint /genre/movie/list de TMDB pour obtenir la correspondance ID <-> Nom, ou stocker une liste en dur dans ton code.
*/
