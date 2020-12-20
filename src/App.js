import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import { UserStateContext } from "./context/activeUserContext";
import Home from "./presenter/home";
import CreatePlayer from "./presenter/createPlayer";
import SignIn from "./presenter/signIn";
import Movies from "./presenter/movies";
import Highscores from "./presenter/highscores";
import Highscore from "./presenter/highscore";
import Profile from "./presenter/profile";
import LoadGame from "./presenter/loadGame";
import { Credentials } from "./Credentials";
import axios from "axios";
import PrivateRoute from "./components/PrivateRoute";

const App = ({ authorization, database }) => {
  // Spotify get token
  const spotify = Credentials();
  const [token, setToken] = useState("");
  const [movies, setMovies] = useState([]);
  const { user, setUser } = useContext(UserStateContext);

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);
    });
  }, [spotify.ClientId, spotify.ClientSecret]);
  // End of spotify get token

  useEffect(() => {
    const movieList = [];
    database?.ref("movies").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        movieList.push(snap.val());
      });
      setMovies(movieList);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return user ? (
              <Redirect to="profile" />
            ) : (
              <Home database={database} />
            );
          }}
        ></Route>
        <Route path="/create">
          <CreatePlayer database={database} />
        </Route>
        <Route path="/login">
          <SignIn database={database} />
        </Route>
        <PrivateRoute path="/profile" isAuthenticated={user}>
          <Profile database={database} />
        </PrivateRoute>
        <PrivateRoute path="/movies" isAuthenticated={user}>
          <Movies movies={movies} />
        </PrivateRoute>
        <PrivateRoute path="/game" isAuthenticated={user}>
          <LoadGame token={token} database={database} />
        </PrivateRoute>
        <PrivateRoute exact path="/highscores" isAuthenticated={user}>
          <Highscores movies={movies} database={database} />
        </PrivateRoute>
        <PrivateRoute path="/highscores/:movie" isAuthenticated={user}>
          <Highscore database={database} />
        </PrivateRoute>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
