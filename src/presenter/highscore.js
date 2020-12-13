import React, { useEffect, useState, useContext } from "react";
import HighscoreView from "../view/highscoreView";
import { MovieStateContext } from "../context/activeMovieContext";
import { useHistory } from "react-router-dom";

const Highscore = ({ database }) => {
  const [highscore, setHighscore] = useState([]);
  const { movie, setMovie } = useContext(MovieStateContext);
  const history = useHistory();

  useEffect(() => {
    if (movie) {
      const highscoreList = [];
      database
        ?.ref("highscore")
        .child(movie.id)
        .on("value", (snapshot) => {
          snapshot.forEach((snap) => {
            highscoreList.push(snap.val());
          });
          setHighscore(highscoreList);
        });
    } else {
      history.push("/highscores")
    }
  }, []);

  return <HighscoreView movie={movie} highscore={highscore} />;
};
export default Highscore;
