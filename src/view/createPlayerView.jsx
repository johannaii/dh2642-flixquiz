import React from "react";
import {Button, Input } from "semantic-ui-react";
import "../styling/signin.css"

const CreatePlayerView = ({userChange, createPlayer}) => (
    <div className="signWrapper">
        <span className="informationText">Enter the username you want to use.</span>
        <Input size='big' placeholder="Username" onChange={event => userChange(event)}
               type={"text"}/>
        <Button className="sign" size='large' onClick={() => createPlayer()}>Create user</Button>
    </div>
);

export default CreatePlayerView;
