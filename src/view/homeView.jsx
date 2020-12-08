import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../styling/homeview.css";

const HomeView = () => (
  <div className="homeWrapper">
    <span className="header">FLIXQUIZ</span>
    <Link to="/login">
      <Button className="signIn" size="massive">
        Sign in
      </Button>
    </Link>
    <Link to="/create">
      <Button className="signIn" size="massive">
        Create player
      </Button>
    </Link>
  </div>
);

export default HomeView;
