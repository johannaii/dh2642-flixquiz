import React, {useContext, useEffect, useState} from "react";
import MoviesView from "../view/moviesView";
import {MovieStateContext} from "../context/activeMovieContext";

const Movies = ({ movies }) => {
  const [availableMovies, setAvailableMovies] = useState(movies);
  const {setMovie} = useContext(MovieStateContext);

  useEffect(() => {
    setAvailableMovies(movies);
  }, [movies]);

  return <MoviesView movies={availableMovies} chooseMovie={setMovie} />;
};
export default Movies;
