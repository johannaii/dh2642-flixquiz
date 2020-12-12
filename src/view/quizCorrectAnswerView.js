import React from "react";

const QuizCorrectAnsView = ({
    currentQuestionNum,
    nextQuestion,
    question,
    correctAlternative,
    wrongAlternatives,
}) => {
    // Circle of Life id = "0juMU08O9byWiRBtKM1j5E";
    // Circle of lifes album id ="7e8y48Z2fkJNGBOKSECCeS"

    // Life id = "6hdEgJdm3FFLvssWuoXKdV"
    //const testId = "0juMU08O9byWiRBtKM1j5E";

    return (
        <div>
            <h1>{"Question #" + (currentQuestionNum + 1)}</h1>
            <div>{question}</div>
            <div>
                {/*Show same order as in quiz and mark red if wrong answer*/}
                <button class="correctAnswer">{correctAlternative}</button>
                <button> {wrongAlternatives[0]} </button>
                <button> {wrongAlternatives[1]} </button>
                <button> {wrongAlternatives[2]} </button>
            </div>
            <button onClick={nextQuestion}>Next question</button>
            {/*This shows after nextQuestion button is pressed */}
        </div>
    );
};

export default QuizCorrectAnsView;
