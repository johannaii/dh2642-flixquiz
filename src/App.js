import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DataAdder from "./components/DataAdder";
import Home from "./presenter/home";
import CreatePlayer from "./presenter/createPlayer";
import SignIn from "./presenter/signIn";
import Movies from "./presenter/movies";
import Game from "./presenter/game";
import Highscores from "./presenter/highscores";
import Highscore from "./presenter/highscore";
import { Credentials } from "./Credentials";
import axios from "axios";

const App = ({ authorization, database, model }) => {
    // Spotify get token
    const spotify = Credentials();
    const [token, setToken] = useState("");

    useEffect(() => {
        axios("https://accounts.spotify.com/api/token", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization:
                    "Basic " +
                    btoa(spotify.ClientId + ":" + spotify.ClientSecret),
            },
            data: "grant_type=client_credentials",
            method: "POST",
        }).then((tokenResponse) => {
            setToken(tokenResponse.data.access_token);
        });
    }, [spotify.ClientId, spotify.ClientSecret]);
    // End of spotify get token

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [chosenMovie, setChosenMovie] = useState("");

    useEffect(() => {
        const movieList = [];
        database?.ref("movies").on("value", (snapshot) => {
            snapshot.forEach((snap) => {
                movieList.push(snap.val());
            });
            setMovies(movieList);
            setLoading(false);
        });
    }, []);

    const chooseMovie = (movie) => {
        setChosenMovie(movie);
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        {loading ? (
                            <span>IS LOADING</span>
                        ) : (
                            movies.map((movie) => (
                                <div key={movie.title}>{movie.title}</div>
                            ))
                        )}
                        <DataAdder database={database} />
                        <Home database={database} />
                    </div>
                </Route>
                <Route path="/create">
                    <CreatePlayer database={database} />
                </Route>
                <Route path="/login">
                    <SignIn database={database} />
                </Route>
                <Route path="/movies">
                    <Movies movies={movies} chooseMovie={chooseMovie} />
                </Route>
                <Route path="/game/">
                    <Game
                        token={token}
                        database={database}
                        movie={"Lion king"}
                    />
                </Route>
                {/*
        <Route path="/game/:movie">
          <Game movie={chosenMovie}/>
        </Route>
        */}
                <Route exact path="/highscores">
                    <Highscores
                        movies={movies}
                        database={database}
                        chooseMovie={chooseMovie}
                    />
                </Route>
                <Route path="/highscores/:movie">
                    <Highscore movie={chosenMovie} database={database} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
