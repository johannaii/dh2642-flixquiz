import React, { useEffect, useState } from "react";
import HighscoresView from "../view/highscoresView";

const Highscores = ({ movies, chooseMovie }) => {
  const [availableMovies, setAvailableMovies] = useState(movies);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    if (movies.length > 0) {
      isLoading(false);
      setAvailableMovies(movies)
    }
  }, [movies]);

  return (
    <HighscoresView
      movies={availableMovies}
      chooseMovie={chooseMovie}
      loading={loading}
    />
  );
};
export default Highscores;
