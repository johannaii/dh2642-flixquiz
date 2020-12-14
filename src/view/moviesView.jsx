import React from "react";
import {Link} from "react-router-dom";
import {Card} from "semantic-ui-react";
import MoonLoader from "react-spinners/MoonLoader";
import "../styling/moviesview.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const MoviesView = ({movies, chooseMovie, loading}) => (
    <div className={"movieWrapper"}>
        <span className="moviesHeader">QUIZZES</span>
        <span className="moviesContent">
      Which of the movies do you want to play?
    </span>
        {loading ? (
            <div className="loading">
                <MoonLoader size="90px"/>
            </div>
        ) : (
            <div className="cardsWrapper">
                {movies?.map((movie, key) => (
                    <Link to={`/game/${movie.urlid}`} key={movie.urlid}>
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
        )}
        <span className="backButtonContainer">
      <Link to="/profile">
                <FontAwesomeIcon icon={faArrowLeft} className="backButtonMovies"/>
      </Link>
    </span>
    </div>
);

export default MoviesView;
