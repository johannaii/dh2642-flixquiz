import React from "react";

const GameView = ({
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
    // const testId = "0juMU08O9byWiRBtKM1j5E";

    // You can find an id of a spotify song through spotify by copying song URI
    // You do this by rightclicking on a song, press share and copying the URI
    // You get for example spotify:track:22KvbVZLVA9aY7zsRWK0fw
    // The id is then 22KvbVZLVA9aY7zsRWK0fw
    // To play the demo of the song just get the iframe and set id

    return (
        <div>
            <h1>{"Question #" + (currentQuestion + 1)}</h1>
            <div>What is this song called?</div>
            <iframe
                src={
                    "https://open.spotify.com/embed/track/" +
                    testIds[currentQuestion] /* correctAlternative.id */
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
                {/*findOtherAlternatives(correctAlternative.album.name)*/}
                {findOtherAlternatives("7e8y48Z2fkJNGBOKSECCeS")}
                <button> Track2 </button> {/*wrongAlternatives[0].name*/}
                <button>{searchTrack(testIds[currentQuestion])}</button>
                {/*correctAlternative.name*/}
                <button> Track3 </button> {/*wrongAlternatives[1].name*/}
                <button> Track4 </button> {/*wrongAlternatives[2].name*/}
            </div>
            <button onClick={nextQuestion}>Submit/ Show answer</button>
            {/*This shows after nextQuestion button is pressed */}
            {currentQuestion++}
            <h1>{"Question #" + (currentQuestion + 1)}</h1>
            <div>What is this song called?</div>
            <iframe
                src={
                    "https://open.spotify.com/embed/track/" +
                    testIds[currentQuestion]
                }
                width="80"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe>
            <div>
                {/*random order on these 4*/}
                <button>{searchTrack(testIds[currentQuestion])}</button>{" "}
                {/*correctAlternative.name*/}
                {/* Randomly pick three others from album */}
                {/*findOtherAlternatives(correctAlternative.album.name)*/}
                {findOtherAlternatives("7e8y48Z2fkJNGBOKSECCeS")}
                <button> Track2 </button> {/*wrongAlternatives[0].name*/}
                <button> Track3 </button> {/*wrongAlternatives[1].name*/}
                <button> Track4 </button> {/*wrongAlternatives[2].name*/}
            </div>
            <button onClick={nextQuestion}>Submit/ Show answer</button>
            {currentQuestion++}
            <h1>We can also have </h1>
            <h1>{"Question #" + (currentQuestion + 1)}</h1>
            <div>
                {
                    "Which of these is the correct song? The song is called Hoist the Colours"
                }
            </div>
            {/*correctAlternative.name */}
            <div>
                <iframe
                    src={
                        "https://open.spotify.com/embed/track/" +
                        testIds[currentQuestion]
                    }
                    width="80"
                    height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                ></iframe>
                <iframe
                    src={
                        "https://open.spotify.com/embed/track/" +
                        testIds[currentQuestion]
                    }
                    width="80"
                    height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                ></iframe>
                <iframe
                    src={
                        "https://open.spotify.com/embed/track/" +
                        testIds[currentQuestion]
                    }
                    width="80"
                    height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                ></iframe>
                <iframe
                    src={
                        "https://open.spotify.com/embed/track/" +
                        testIds[currentQuestion]
                    }
                    width="80"
                    height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                ></iframe>
                <div>
                    <input></input> <button>Finish quiz/ Show answer</button>
                </div>
            </div>
        </div>
    );
};

export default GameView;

// We can also have name of song then 4 to listen to
// Or just random ass questions
