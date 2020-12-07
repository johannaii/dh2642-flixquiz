import React from "react";

const CreatePlayerView = ({userChange, createPlayer}) => (
    <div>
        <input onChange={event => userChange(event)}
               type={"text"}/>
        <button onClick={() => createPlayer()}>Add player!</button>
    </div>
);

export default CreatePlayerView;
