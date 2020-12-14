import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const GameEndView = ({ score, movie, percentage }) => {
  return (
    <div className="gameWrapper">
      <span className="gameHeader">{"Great job!"}</span>
      <span className="gameContent">{"Your score on the quiz:"}</span>
      <span className="gameEndScore">{score}</span>
        <span className="gameContent">{(percentage*100).toFixed(2)} %</span>
      <Link to={"/highscores/" + movie.urlid}>
        <Button className="gameEndButton">See highscore</Button>
      </Link>
    </div>
  );
};

export default GameEndView;
