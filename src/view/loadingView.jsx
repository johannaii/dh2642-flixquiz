import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import "../styling/gameview.css";

const LoadingView = ({}) => (
  <div className="gameWrapper">
    <div className="loading">
      <MoonLoader size="90px" />
    </div>
  </div>
);

export default LoadingView;
