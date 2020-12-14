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
          setHighscore(highscoreList.sort(compareHighscore).slice(0,10));
        });
    } else {
      history.push("/highscores")
    }
  }, []);

  return <HighscoreView movie={movie} highscore={highscore} />;
};

const compareHighscore = (a, b) => {
  let ai = a.score;
  let bi = b.score;
  if (ai > bi) {
    return -1;
  } else if (ai < bi) {
    return 1;
  } else {
    return 0;
  }
};

export default Highscore;
