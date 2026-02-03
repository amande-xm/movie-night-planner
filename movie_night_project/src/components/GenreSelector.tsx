import { useState, useEffect } from "react";
import type { Genre, GenreResponse } from "../interfaces/genre";
import { fetchGenres } from "../utils/tmdb";

function GenreSelector() {
  const [genres, setGenres] = useState<Genre[]>([]);

  const [selectedGenreId, setSelectedGenreId] = useState<string>("");

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data: GenreResponse = await fetchGenres();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error when loading genres:", error);
      }
    };

    loadGenres();
  }, []);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenreId(e.target.value);
    console.log("ID du genre sélectionné :", e.target.value);
  };

  return (
    <>
      <label htmlFor="genre">Select genre:</label>

      <select
        id="genre-select"
        className="form-select"
        value={selectedGenreId}
        onChange={handleGenreChange}
      >
        <option value="">-- All genres --</option>

        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default GenreSelector;
