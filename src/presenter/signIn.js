import React, {useContext, useEffect, useState} from "react";
import SignInView from "../view/signInView";
import {UserStateContext} from "../context/activeUserContext";
import {useHistory} from 'react-router-dom';

const SignIn = ({database}) => {

    const [userId, setUserId] = useState(0);
    const {user, setUser} = useContext(UserStateContext);
    const history = useHistory();

    const userList = [];
    database?.ref("users").on("value", (snapshot) => {
        snapshot.forEach((snap) => {
            userList.push(snap.val());
        });
    });

    const handleUserChange = (e) => {
        setUserId(e.target.value)
    }

    const createInput = () => {
        if (userList.find((user) => user.userId === userId)) {
            console.log("Great!")
            setUser(userId);
            history.push('/movies')
        } else {
            console.log("This user doesn't exist")
        }
    }

    return (<SignInView userChange={handleUserChange} createPlayer={createInput}/>);
}

export default SignIn;
