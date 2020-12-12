import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import "../styling/movieview.css";

const MoviesView = ({ movies, chooseMovie }) => (
  <div className={"movieWrapper"}>
    <span className="moviesHeader">
      Which of the movies do you want to play?
    </span>
    <div className="cardsName">
      {movies?.map((movie, key) => (
        <Link key={key} to={`/game`}>
          <Card
            key={key}
            className="movieCard"
            onClick={() => {
              chooseMovie(movie);
            }}
          >
            {movie.title}
          </Card>
        </Link>
      ))}
    </div>
  </div>
);

export default MoviesView;
