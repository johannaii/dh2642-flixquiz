import React from "react";

const GameView = ({
    currentQuestionNum,
    nextQuestion,
    question,
    correctTrackId,
    correctAlternative,
    wrongAlternatives
}) => {
    const answerAlternatives = [correctAlternative, wrongAlternatives[0], wrongAlternatives[1], wrongAlternatives[2]];
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
        <div>
            <h1>{"Question #" + (currentQuestionNum + 1)}</h1>
            <div>{question}</div>
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
            ></iframe>
            <div>
                {/*random order on these 4*/}
                {/* Randomly pick three others from album */}
            <button>{answerAlternatives[0]}</button>
            <button>{answerAlternatives[1]}</button>
            <button>{answerAlternatives[2]}</button>
            <button>{answerAlternatives[3]}</button>
            </div>
            <button onClick={nextQuestion}>Submit/ Show answer</button>
            {/*This shows after nextQuestion button is pressed */}
        </div>
    );
};

export default GameView;

// We can also have name of song then 4 to listen to
// Or just random ass questions
