import type { GenreResponse } from "../interfaces/genre"; // On ajoute GenreResponse aux imports

const API_KEY = import.meta.env.VITE_REACT_APP_TMDB_API;
const BASE_URL = "https://api.themoviedb.org/3";


export const fetchGenres = async (): Promise<GenreResponse> => {
  if (!API_KEY) throw new Error("Missing API key");
  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-EN`,
    ); //à corriger
    if (!response.ok) {
      throw new Error("Error when fetching genres");
    }
    return await response.json();
  } catch (error) {
    console.error("Error Genres API:", error);
    throw error;
  }
};
