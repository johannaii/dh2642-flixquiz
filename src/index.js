import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {auth, db} from "./services/config";
import MovieModel from './model/MovieModel';
import {UserProvider} from "./context/activeUserContext";
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <App authorization={auth} database={db} model={MovieModel}/>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
