import React from "react";
import { Link } from "react-router-dom";
import "../styling/movieview.css";

const MoviesView = ({ movies, chooseMovie }) => (
  <div className={"debug"}>
    <div className={"flexParent"}>
      Which of the movies do you want to play?
      {movies?.map((movie, key) => (
        <Link to={`/game/${movie.urlid}`} key={movie.urlid}>
          <button
            key={key}
            onClick={() => {
              chooseMovie(movie);
            }}
          >
            {movie.title}
          </button>
        </Link>
      ))}
    </div>
  </div>
);

export default MoviesView;
