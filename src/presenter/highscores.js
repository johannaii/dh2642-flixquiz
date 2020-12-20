import React, { useEffect, useState, useContext } from "react";
import HighscoresView from "../view/highscoresView";
import { MovieStateContext } from "../context/activeMovieContext";

function Highscores({ movies }) {
  const [availableMovies, setAvailableMovies] = useState(movies);
  const { movie, setMovie } = useContext(MovieStateContext);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    if (movies.length > 0) {
      isLoading(false);
      setAvailableMovies(movies);
    }
  }, [movies]);

  return (
    <HighscoresView
      movies={availableMovies}
      chooseMovie={setMovie}
      loading={loading}
    />
  );
}
export default Highscores;
