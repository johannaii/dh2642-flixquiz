import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../styling/profileview.css"

const ProfileView = ({ username }) => (
  <div className="profileWrapper">
    <span className="profileHeader">{"Welcome" + " " +username}!</span>
    <Link to="/movies">
        <Button className="startButton" size="massive" >Start quiz</Button>
      </Link>
      <Link to="/highscores">
        <Button className="highscoreButton" size="massive" >See highscore</Button>
      </Link>
  </div>
);

export default ProfileView;
