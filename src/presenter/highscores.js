import React, { useEffect, useState } from "react";
import HighscoresView from "../view/highscoresView";

const Highscores = ({ movies, chooseMovie }) => {
  return <HighscoresView movies={movies} chooseMovie={chooseMovie} />;
};
export default Highscores;
