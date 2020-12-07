import React from "react";
import { Link } from "react-router-dom";
import "../styling/highscoreview.css";

const HighscoresView = ({ movies, chooseMovie }) => (
  <div className={"debug"}>
    HIGHSCORES
    <div className={"flexParent"}>
      Which of the movies do you want to see the highscore of?
      {movies?.map((movie, key) => (
        <Link to={`/highscores/${movie.urlid}`} key={movie.urlid}>
          <button onClick={()=> {chooseMovie(movie)}}>
            {movie.title}
            </button>
        </Link>
      ))}
    </div>
  </div>
);

export default HighscoresView;
