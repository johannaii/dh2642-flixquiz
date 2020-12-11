import React, {useState, createContext} from 'react';

const MovieStateContext = createContext('');
const MovieStateProvider = MovieStateContext.Provider;

function MovieProvider({children}) {

    const [movie, setMovie] = useState('hej');

    return (
        <MovieStateProvider value={{movie, setMovie}}>
            {children}
        </MovieStateProvider>
    )
}

export {MovieProvider, MovieStateContext};