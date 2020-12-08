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
import Profile from "./presenter/profile";

const App = ({ authorization, database, model }) => {
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
      //setLoading(false);
    });
  }, []);

  const chooseMovie = (movie) => {
    setChosenMovie(movie)
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Home database={database} />
          </div>
        </Route>
        <Route path="/create">
          <CreatePlayer database={database} />
        </Route>
        <Route path="/login">
          <SignIn database={database} />
        </Route>
        <Route path="/profile">
          <Profile database={database}/>
        </Route>0
        <Route path="/movies">
          <Movies movies={movies} chooseMovie={chooseMovie}/>
        </Route>
        <Route path="/game/:movie">
          <Game movie={chosenMovie}/>
        </Route>
        <Route exact path="/highscores">
          <Highscores movies={movies} database={database} chooseMovie={chooseMovie}/>
        </Route>
        <Route path="/highscores/:movie">
          <Highscore movie={chosenMovie} database={database} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
