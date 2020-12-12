import React from "react";
import "../styling/gameview.css";
import {Button} from "semantic-ui-react";

const GameView = ({
                      currentQuestionNum,
                      nextQuestion,
                      question,
                      correctTrackId,
                      answerAlternatives
                  }) => {
    //console.log("In game view:");
    //console.log(answerAlternatives);
    // Circle of Life id = "0juMU08O9byWiRBtKM1j5E";
    // Circle of lifes album id ="7e8y48Z2fkJNGBOKSECCeS"

    // Life id = "6hdEgJdm3FFLvssWuoXKdV"
    // const testId = "0juMU08O9byWiRBtKM1j5E";

    // You can find an id of a spotify song through spotify by copying song URI
    // You do this by rightclicking on a song, press share and copying the URI
    // You get for example spotify:track:22KvbVZLVA9aY7zsRWK0fw
    // The id is then 22KvbVZLVA9aY7zsRWK0fw
    // To play the demo of the song just get the iframe and set id

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
            {/*random order on these 4*/}
            {/* Randomly pick three others from album */}
            {answerAlternatives.map((answer, index) => (
                <Button key={index} onClick={() => nextQuestion(answer)} className="gameButton">
                    {answer}
                </Button>
            ))}
        </div>
    );
};

export default GameView;

// We can also have name of song then 4 to listen to
// Or just random ass questions

