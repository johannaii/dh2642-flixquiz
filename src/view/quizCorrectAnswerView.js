import React from "react";

const QuizCorrectAnsView = ({
    currentQuestion,
    searchTrack,
    searchAlbum,
    nextQuestion,
    testIds,
    findOtherAlternatives,
}) => {
    // Circle of Life id = "0juMU08O9byWiRBtKM1j5E";
    // Circle of lifes album id ="7e8y48Z2fkJNGBOKSECCeS"

    // Life id = "6hdEgJdm3FFLvssWuoXKdV"
    //const testId = "0juMU08O9byWiRBtKM1j5E";

    return (
        <div>
            <h1>{"Question #" + (currentQuestion + 1)}</h1>
            <div>The correct answer was track </div>
            <div>
                {/*Show same order as in quiz and mark red if wrong answer*/}
                {findOtherAlternatives("7e8y48Z2fkJNGBOKSECCeS")}
                <button> Track2 </button> {/*wrongAlternatives[0].name*/}
                <button class="correctAnswer">
                    {searchTrack(testIds[currentQuestion])}
                </button>
                {/*correctAlternative.name*/}
                <button> Track3 </button> {/*wrongAlternatives[1].name*/}
                <button> Track4 </button> {/*wrongAlternatives[2].name*/}
            </div>
            <button>Next question</button>
            {/*This shows after nextQuestion button is pressed */}
        </div>
    );
};

export default QuizCorrectAnsView;
