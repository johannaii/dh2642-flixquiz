import React from "react";
import "../styling/highscoreview.css";

const HighscoreView = ({ movie, highscore }) => (
  <div className={"highscoreWrapper"}>
    <span className="highscoreHeader">HIGHSCORE</span>
    <div className="highscoreContentWrapper">
      <span className="highscoreContentHeader">{movie.title}</span>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {highscore?.sort(compareHighscore).map((user, key) => (
            <tr>
              <td>{key + 1}</td>
              <td>{user.user} </td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

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

export default HighscoreView;