import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import HighscoreView from "../view/highscoreView";

const Highscore = ({ movie, database }) => {
  const [highscore, setHighscore] = useState([]);
  const [loading, isLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const highscoreList = [];
    if (movie.id) {
      database
        ?.ref("highscore")
        .child(movie.id)
        .on("value", (snapshot) => {
          snapshot.forEach((snap) => {
            highscoreList.push(snap.val());
          });
          setHighscore(highscoreList);
          isLoading(false);
        });
    } else {
      history.push("/highscores");
    }
  }, []);

  return <HighscoreView movie={movie} highscore={highscore} />;
};
export default Highscore;
