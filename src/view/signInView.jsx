import React from "react";

const SignInView = ({userChange, createPlayer}) => (
    <div>
        <input onChange={event => userChange(event)}
               type={"text"}/>
        <button onClick={() => createPlayer()}>Sign in</button>
    </div>
);

export default SignInView;
