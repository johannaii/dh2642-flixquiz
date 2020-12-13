import React from "react";
import {Button, Input } from "semantic-ui-react";
import "../styling/signin.css"

const SignInView = ({userChange, createPlayer, userNotExist}) => (
    <div className="signWrapper">
        <span className="informationText">Enter your username to continue.</span>
        <Input size='big' placeholder="Username" onChange={event => userChange(event)}
               type={"text"}/>
        <span className="errorText" style={userNotExist ? {display: 'block'} : {display: 'none'}}>
            This username doesn't exist.
        </span>
        <Button className="sign" size='large' onClick={() => createPlayer()}>Sign in</Button>
    </div>
);

export default SignInView;