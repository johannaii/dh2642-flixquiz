import React from "react";
import {Link} from "react-router-dom";
import {Card} from "semantic-ui-react";
import MoonLoader from "react-spinners/MoonLoader";
import "../styling/highscoresview.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const HighscoresView = ({movies, chooseMovie, loading}) => (
    <div className="highscoresWrapper">
        <span className="highscoresHeader">HIGHSCORES</span>
        <span className="highscoresContent">
      Which of the movies do you want to see the highscore of?
    </span>
        {loading ? (
            <div className="loading">
                <MoonLoader size="90px"/>
            </div>
        ) : (
            <div className="cardsWrapper">
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
        )}
        <span className="backButtonContainer">
      <Link to="/profile">
                <FontAwesomeIcon icon={faArrowLeft} className="backButtonHighscores"/>
      </Link>
    </span>
    </div>
);

export default HighscoresView;
