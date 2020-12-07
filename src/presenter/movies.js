import React, { useEffect, useState } from "react";
import MoviesView from "../view/moviesView";

const Movies = ({ movies, chooseMovie }) => {
  const [availableMovies, setAvailableMovies] = useState(movies);

  useEffect(() => {
    setAvailableMovies(movies);
  }, [movies]);

  return <MoviesView movies={availableMovies} chooseMovie={chooseMovie} />;
};
export default Movies;
