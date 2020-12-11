import React, {useEffect, useState, useContext} from "react";
import GameView from "../view/gameView";
import QuizCorrectAnswerView from "../view/quizCorrectAnswerView";
import GameEndView from "../view/gameEndView";
import axios from "axios";
import {MovieStateContext} from "../context/activeMovieContext";
import {useHistory} from 'react-router-dom';


function Game({trackData, trackTitles}) {

    const {movie} = useContext(MovieStateContext);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentQuestionNr, setCurrentQuestionNr] = useState(1);
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (movie) {
            const answer = movie.questions[currentQuestionNr].answer
                ? movie.questions[currentQuestionNr].answer
                : trackData[currentQuestionNr-1].name.split('-')[0];

                setCurrentQuestion({
                'number': currentQuestionNr,
                'spotifyid': movie.questions[currentQuestionNr].spotifyid,
                'question': movie.questions[currentQuestionNr].question,
                'answer': answer,
                'options': movie.questions[currentQuestionNr].options ? shuffleList(movie.questions[currentQuestionNr].options.split(',').concat(answer)) : generateRandomOptions(answer),
            })
            setLoading(false)
        } else {
            history.push("/movies");
        }
    }, [currentQuestionNr]);

    const shuffleList = (list) => {
        return list.sort(() => Math.random() - 0.5);
    }

    const generateRandomOptions = (answer) => {
        let randomOptions = [answer];
        while (randomOptions.length < 4) {
            const option = trackTitles[Math.floor(Math.random() * Math.floor(trackTitles.length))];
            if (!randomOptions.includes(option)) {
                randomOptions = [...randomOptions, option];
            }
        }
        return shuffleList(randomOptions);
    }


    // Loads next question/ finishes quiz
    const nextQuestion = (answer) => {
        if (answer === currentQuestion.answer) {
            setScore(score+10);
        }
        if (currentQuestionNr < movie.questions.length - 1) {
            setCurrentQuestionNr(currentQuestionNr+1)
        } else {
            setFinished(true)
        }
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
                />
            );
        } else {
            return <GameEndView score={score}/>;
        }
    } else return <div>Is loading</div>;
}

export default Game;

