import React, { useState, createContext } from "react";

const GameStateContext = createContext("");
const GameStateProvider = GameStateContext.Provider;

function GameProvider({ children }) {
    const [currentQuestion, setCurrentQuestion] = useState(0); //
    const [viewQuestion, setViewQuestion] = useState(0); // 1 means show answers
    // Current quiz???

    return (
        <GameStateProvider
            value={{
                currentQuestion,
                setCurrentQuestion,
                viewQuestion,
                setViewQuestion,
            }}
        >
            {children}
        </GameStateProvider>
    );
}

export { GameProvider, GameStateContext };
