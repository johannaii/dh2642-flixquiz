import React, { useEffect, useState, useContext } from "react";
import GameView from "../view/gameView";
import QuizCorrectAnswerView from "../view/quizCorrectAnswerView";
import GameEndView from "../view/gameEndView";
import axios from "axios";
import { GameProvider } from "../context/activeGameContext";
import { MovieStateContext } from "../context/activeMovieContext";
import { UserStateContext } from "../context/activeUserContext";
import { useHistory } from "react-router-dom";

// Declares all functions used in the view
// Listeners
// Props...
// Variables
function Game({ token, database }) {
  // setStates
  //const { currentQuestion, setCurrentQuestion } = useContext(GameProvider);
  const [answered, setAnswered] = useState(0); // Show answer or not
  const [finishedQuiz, setFinishedQuiz] = useState(0); // Finished quiz or not
  const [currentQuestion, setCurrentQuestion] = useState(0); // Shows question #currentQuestion
  //const [viewQuestion, setViewQuestion] = useState(0);

  // for currentQuestion
  const [correctAlternative, setCorrectAlternative] = useState("");
  const [otherAlternatives, setOtherAlternatives] = useState(["", "", ""]);
  const { movie } = useContext(MovieStateContext);
  const history = useHistory();
  //
  // Collecting first quiz from firebase
  //
  const [loading, setLoading] = useState(true);

  // Make sure to find quiz with title of chosen movie now just picks first quiz
  useEffect(() => {
    if (movie) {
      setLoading(false);
      // Setup first question
      const questionInfo = movie?.questions[currentQuestion + 1];

      const correctTrackId = questionInfo.spotifyid;
      const trackName = searchForSong(correctTrackId);

      const albumId = movie?.spotifyid;
      searchForOtherAlternatives(albumId, trackName);

      //console.log(movie);
    } else {
      history.push("/movies");
    }
  }, []);

  //console.log(quiz);
  //
  // Collected quiz from firebase
  //

  const setAnswers = (questionInfo, trackId, albumId) => {
    if (questionInfo.question === "What's the song title?") {
      const trackName = searchForSong(trackId);
      searchForOtherAlternatives(albumId, trackName);
    } else {
      setCorrectAlternative(() => questionInfo.answer);
      setOtherAlternatives(() => [questionInfo.options, "alt2", "alt3"]);
    }
  };

  // Searches for song and saves name in correctAlternative state
  const searchForSong = (trackId) => {
    axios(` https://api.spotify.com/v1/tracks/${trackId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((tracksResponse) => {
      if (tracksResponse.status === 200) {
        const trackInfo = tracksResponse.data;
        setCorrectAlternative(trackInfo.name);
        return trackInfo.name;
      }
      return "";
    });
  };
  // End of searchForSong

  // Searches for an album and retrieves it's tracks
  const searchForOtherAlternatives = (albumId, trackName) => {
    axios(` https://api.spotify.com/v1/albums/${albumId}/tracks`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((tracksResponse) => {
      //console.log(tracksResponse);
      if (tracksResponse.status === 200) {
        const almbumInfo = tracksResponse.data.items;

        // Find three wrongAlternatives
        let count = 0;
        let tracks = ["", "", ""];
        almbumInfo.forEach((track) => {
          if (count < 3 && track.name !== trackName) {
            tracks[count] = track.name;
            count++;
            //console.log(track.name);
          }
        });
        setOtherAlternatives(tracks);
      }
    });
  };
  // End of searchForOtherAlternatives

  // Loads next question/ finishes quiz
  const nextQuestion = (answer) => {
    console.log(answer);
    /* if (!answered) {
      setAnswered(1);
      // Display correct answer in green, and if wrong chosen that one in red
      // check if correct answer then give points
      // calculate points and add to totalPointsSoFar
    } */
    if (currentQuestion < movie?.questions.length - 2) {
      const nextQuestionNum = currentQuestion + 1;
      setCurrentQuestion(nextQuestionNum);
      //setAnswered(0);
      const questionInfo = movie?.questions[currentQuestion + 1];

      const correctTrackId = questionInfo.spotifyid;
      const albumId = movie?.spotifyid;

      setAnswers(questionInfo, correctTrackId, albumId);
    } else {
      //console.log("Finished quiz");
      setFinishedQuiz(1);
      // Do end of quiz stuff
      // save points to firebase and show score page
    }
  };
  // End of nextQuestion

  // Displays one of three views, quiz, quiz but showing answers, endGameView
  if (!loading) {
    if (!finishedQuiz) {
      const questionInfo = movie?.questions[currentQuestion + 1];
      const question = questionInfo.question;
      const correctTrackId = questionInfo.spotifyid;
      return (
        <GameView
          currentQuestionNum={currentQuestion}
          nextQuestion={nextQuestion}
          correctTrackId={correctTrackId}
          correctAlternative={correctAlternative}
          wrongAlternatives={otherAlternatives}
          question={question}
        />
      );
    } else {
      return <GameEndView score={"1000"} />;
    }
  } else return <div>Is loading</div>;
}

export default Game;

