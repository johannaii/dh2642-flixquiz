import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const GameEndView = ({ score, movie }) => {
  return (
    <div className="gameWrapper">
      <span className="gameHeader">{"Congratulations!"}</span>
      <span className="gameContent">{"Your have finished the quiz."}</span>
      <span className="gameContent">{"Your score on the quiz:"}</span>
      <span className="gameEndScore">{score}</span>
      <Link to={"/highscores/" + movie.urlid}>
        <Button className="gameEndButton">See highscore</Button>
      </Link>
    </div>
  );
};

export default GameEndView;
