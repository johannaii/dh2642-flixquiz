import React, { useContext, useEffect, useState } from "react";
import MoviesView from "../view/moviesView";
import { MovieStateContext } from "../context/activeMovieContext";

function Movies({ movies }) {
  const [availableMovies, setAvailableMovies] = useState(movies);
  const { setMovie } = useContext(MovieStateContext);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    if (movies.length > 0) {
      isLoading(false);
      setAvailableMovies(movies);
    }
  }, [movies]);

  return (
    <MoviesView
      movies={availableMovies}
      chooseMovie={setMovie}
      loading={loading}
    />
  );
}
export default Movies;
