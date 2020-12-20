import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {auth, db} from "./services/config";
import {UserProvider} from "./context/activeUserContext";
import {MovieProvider} from "./context/activeMovieContext";
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <React.StrictMode>
        <MovieProvider>
                <UserProvider>
                    <App authorization={auth} database={db}/>
                </UserProvider>
        </MovieProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
