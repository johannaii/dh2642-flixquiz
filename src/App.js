import React, {useEffect, useState} from "react";
import "./App.css";
import DataAdder from './components/DataAdder';
import Home from './presenter/home';
import CreatePlayer from "./presenter/createPlayer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from "./presenter/signIn";

const App = ({authorization, database, model}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


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

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        {loading ? (
                            <span>IS LOADING</span>
                        ) : (
                            movies.map((movie) => <div key={movie.title}>{movie.title}</div>)
                        )}
                        <DataAdder database={database}/>
                        <Home database={database}/>
                    </div>
                </Route>
                <Route path="/movies" >
                    <p>MOVIE TIME!</p>
                </Route>
                <Route path="/create">
                    <CreatePlayer database={database}/>
                </Route>
                <Route path="/login">
                    <SignIn database={database}/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
