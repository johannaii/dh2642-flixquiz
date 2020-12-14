import React from "react";
import "../styling/gameview.css";
import {Button} from "semantic-ui-react";
import PopUp from "../components/PopUp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {width} from "@fortawesome/free-solid-svg-icons/faAt";

const GameView = ({
                      currentQuestionNum,
                      nextQuestion,
                      question,
                      correctTrackId,
                      answerAlternatives,
                      toggleShow,
                      show
                  }) => {

    return (
        <div className="gameWrapper">
      <span className="gameHeader">
        {"Question " + (currentQuestionNum)}
      </span>
            <span className="gameContent">{question}</span>
            <iframe
                src={
                    "https://open.spotify.com/embed/track/" +
                    correctTrackId /* correctAlternative.id */
                }
                width="80"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                className="songFrame"
            ></iframe>

            {answerAlternatives.map((answer, index) => (
                <Button key={index} onClick={() => nextQuestion(answer)} className="gameButton">
                    {answer}
                </Button>
            ))}
            <span className="backButton">
                <FontAwesomeIcon icon={faArrowLeft} onClick={toggleShow} className="backButtonGame" />
            </span>
            {show ? <PopUp toggle={toggleShow}/> : null}
        </div>
    );
};

export default GameView;

