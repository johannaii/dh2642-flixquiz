import React, { useEffect, useState, useContext } from "react";
import GameView from "../view/gameView";
import GameEndView from "../view/gameEndView";
import { MovieStateContext } from "../context/activeMovieContext";
import { UserStateContext } from "../context/activeUserContext";
import { useHistory } from "react-router-dom";
import LoadingView from "../view/loadingView";

function Game({ trackData, trackTitles, database }) {
  const { movie } = useContext(MovieStateContext);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionNr, setCurrentQuestionNr] = useState(1);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [show, setShow] = useState(false);
  const { user } = useContext(UserStateContext);
  const history = useHistory();

  useEffect(() => {
    if (movie) {
      const answer = movie.questions[currentQuestionNr].answer
        ? movie.questions[currentQuestionNr].answer
        : trackData[currentQuestionNr - 1].name.split("-")[0];

      setCurrentQuestion({
        number: currentQuestionNr,
        spotifyid: movie.questions[currentQuestionNr].spotifyid,
        question: movie.questions[currentQuestionNr].question,
        answer: answer,
        options: movie.questions[currentQuestionNr].options
          ? shuffleList(
              movie.questions[currentQuestionNr].options
                .split(",")
                .concat(answer)
            )
          : generateRandomOptions(answer),
      });
      setLoading(false);
    } else {
      history.push("/movies");
    }
  }, [currentQuestionNr]);

  const shuffleList = (list) => {
    return list.sort(() => Math.random() - 0.5);
  };

  const generateRandomOptions = (answer) => {
    let randomOptions = [answer];
    while (randomOptions.length < 4) {
      const option =
        trackTitles[Math.floor(Math.random() * Math.floor(trackTitles.length))];
      if (!randomOptions.includes(option)) {
        randomOptions = [...randomOptions, option];
      }
    }
    return shuffleList(randomOptions);
  };

  // Loads next question/ finishes quiz
  const nextQuestion = (answer) => {
    if (answer === currentQuestion.answer) {
      setScore(score + 10);
    }
    if (currentQuestionNr < movie.questions.length - 1) {
      setCurrentQuestionNr(currentQuestionNr + 1);
    } else {
      database.ref(`highscore/${movie.id}`).push().set({
        movieid: movie.id,
        score: score,
        user: user,
      });
      setFinished(true);
    }
  };

  const toggleShow = () => {
    setShow(!show);
};

  if (!loading) {
    if (!finished) {
      return (
        <GameView
          currentQuestionNum={currentQuestion.number}
          nextQuestion={nextQuestion}
          correctTrackId={currentQuestion.spotifyid}
          answerAlternatives={currentQuestion.options}
          question={currentQuestion.question}
          toggleShow={toggleShow}
          show={show}
        />
      );
    } else {
      return <GameEndView score={score} movie={movie} />;
    }
  } else return <LoadingView />;
}

export default Game;
