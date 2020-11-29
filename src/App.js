import React, { useEffect, useState } from "react";
import "./App.css";
import DataAdder from './components/DataAdder';

const App = ({ authorization, database }) => {
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
      <div className="App">
        {loading ? (
            <span>IS LOADING</span>
        ) : (
            movies.map((movie) => <div key={movie.title}>{movie.title}</div>)
        )}
        <DataAdder database={database}/>
      </div>
  );
};

export default App;
