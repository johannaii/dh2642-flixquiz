import React, { useEffect, useState } from "react";
import MoviesView from "../view/moviesView";

const Movies = ({ movies, chooseMovie }) => {
  const [availableMovies, setAvailableMovies] = useState(movies);
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
      chooseMovie={chooseMovie}
      loading={loading}
    />
  );
};
export default Movies;
