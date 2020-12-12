import React from "react";

const GameEndView = ({ score }) => {
    return (
        <div>
            <h1>{"You have completed the quiz"}</h1>
            <div>{"Your score was: " + score}</div>
            <button onClick={() => console.log("End game upload highscore!")}>
                End quiz
            </button>
        </div>
    );
};

export default GameEndView;
