import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import "../styling/highscoresview.css";

const HighscoresView = ({ movies, chooseMovie }) => (
  <div className="highscoresWrapper">
    <span className="highscoresHeader">HIGHSCORES</span>
    <span className="highscoresContent">
      Which of the movies do you want to see the highscore of?
    </span>
    {movies?.map((movie, key) => (
      <Link to={`/highscores/${movie.urlid}`} key={movie.urlid}>
        <Card
          className="higscoreCard"
          onClick={() => {
            chooseMovie(movie);
          }}
        >
          {movie.title}
        </Card>
      </Link>
    ))}
  </div>
);

export default HighscoresView;
