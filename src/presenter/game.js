import React from "react";
import GameView from "../view/gameView";
import QuizCorrectAnswerView from "../view/quizCorrectAnswerView";
import axios from "axios";
//import useModelProp from "../useModelProp";

// Declares all functions used in the view
// Listeners
// Props...
// Variables
function Game({ token, model }) {
    // Usemodelprops
    //
    let currentQuestion = 0;
    //const currentQuestion = useModelProp(model, "currentQuestion");
    // Collect these from firebase later on
    const questions = ["", "", "", ""]; // Length is amount of questions
    const testIds = [
        "0juMU08O9byWiRBtKM1j5E",
        "6hdEgJdm3FFLvssWuoXKdV",
        "22KvbVZLVA9aY7zsRWK0fw",
    ];
    let correctAlternative = "";
    let otherAlternatives = ["", "", ""];

    // Searches for a song of Spotify API
    const searchForSong = (trackId) => {
        axios(`	https://api.spotify.com/v1/tracks/${trackId}`, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then((tracksResponse) => {
            //console.log(tracksResponse);
            if (tracksResponse.status === 200) {
                // Track found save info
                //console.log(tracksResponse.data);
                //console.log(tracksResponse.data.artists[0].name); // Can loop through all artists
                console.log(
                    "This would be the correct track: " +
                        tracksResponse.data.name
                ); // Name of track/ song
                correctAlternative = tracksResponse.data;
                //console.log(tracksResponse.data.album.name); // Name of album track is in
                return tracksResponse.data.name;
                // Set correctAnswerName = tracksResponse.data.name;
            }
        });
    };
    // End of searchForSong

    // Searches for an album and retrieves it's tracks
    // Get it's id from above by
    // trackResponse.data.album.id
    const searchForAllbumsTracks = (albumId) => {
        axios(`	https://api.spotify.com/v1/albums/${albumId}/tracks`, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then((tracksResponse) => {
            //console.log(tracksResponse);
            if (tracksResponse.status === 200) {
                // Track found save info
                //console.log(tracksResponse.data);
                // all tracks lay in
                console.log(tracksResponse.data.items);
                // One tracks name can be accesed by
                console.log(tracksResponse.data.items[1].name);
                // One tracks id can be accesed by
                console.log(tracksResponse.data.items[1].id);
            }
        });
    };
    // End of searchForAllbumsTracks

    // Same as searchForAlbumTracks-ish
    const findOtherAlternatives = (idOfCorrectTrack) => {
        axios(`	https://api.spotify.com/v1/albums/${idOfCorrectTrack}/tracks`, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then((tracksResponse) => {
            if (tracksResponse.status === 200) {
                // Fill otherAlternative with tracks != correctAnswerTrack
                let alternative = 0;
                tracksResponse.data.items.forEach((track) => {
                    if (alternative < 3) {
                        // Also check that not same as correct answer
                        // track.id !== idOfCorrectTrack &&
                        console.log(
                            "This would be otheralternative #" +
                                alternative +
                                " name: " +
                                track.name
                        );
                        otherAlternatives[alternative] = track;
                        alternative++;
                    }
                });
            }
        });
    };

    // Loads next question/ finishes quiz
    const nextQuestion = () => {
        // check if correct answer then give points
        // calculate points and add to totalPointsSoFar

        // Display correct answer in green, and if wrong chosen that one in red

        console.log("Next question");
        currentQuestion++;

        if (currentQuestion >= questions.length) {
            console.log("Finished quiz");
            // Do end of quiz stuff
            // save points to firebase and show score page
        } else {
            // ??? Check which type nextquestion is ???
            // Rerender question
        }
    };

    // Returns View
    return (
        <div>
            <GameView
                currentQuestion={currentQuestion}
                searchTrack={searchForSong}
                searchAlbum={searchForAllbumsTracks}
                nextQuestion={nextQuestion}
                testIds={testIds}
                findOtherAlternatives={findOtherAlternatives}
            />
            <QuizCorrectAnswerView
                currentQuestion={currentQuestion}
                searchTrack={searchForSong}
                searchAlbum={searchForAllbumsTracks}
                nextQuestion={nextQuestion}
                testIds={testIds}
                findOtherAlternatives={findOtherAlternatives}
            />
        </div>
    );
}

export default Game;
