import React from "react";
import { Link } from "react-router-dom";
import "../styling/highscoreview.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

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
          {highscore?.map((user, key) => (
            <tr>
              <td>{key + 1}</td>
              <td>{user.user} </td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      <div className="backButtonContainer">
    <Link to="/highscores">
        <FontAwesomeIcon icon={faArrowLeft} className="backButtonHighscore"/>
    </Link>
      </div>
  </div>
);


export default HighscoreView;
