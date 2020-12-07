import React from "react";

const HighscoreView = ({ highscore }) => (
  <div className={"debug"}>
    HIGHSCORE
    <div className={"flexParent"}>
      {highscore?.sort(compareHighscore).map((user, key) => (
        <div key={key}>
          user: {user.user} score: {user.score}
        </div>
      ))}
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
