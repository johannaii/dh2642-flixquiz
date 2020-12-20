import React, { useContext, useEffect, useState } from "react";
import SignInView from "../view/signInView";
import { UserStateContext } from "../context/activeUserContext";
import { useHistory } from "react-router-dom";

function SignIn({ database }) {
  const [userId, setUserId] = useState(0);
  const { user, setUser } = useContext(UserStateContext);
  const history = useHistory();
  const [userNotExist, setUserNotExist] = useState(false);

  const userList = [];
  database?.ref("users").on("value", (snapshot) => {
    snapshot.forEach((snap) => {
      userList.push(snap.val());
    });
  });

  const handleUserChange = (e) => {
    setUserId(e.target.value);
  };

  const createInput = () => {
    if (userList.find((user) => user.userId === userId)) {
      setUser(userId);
      localStorage.setItem("activeUser", userId);
      history.push("/profile");
    } else {
      setUserNotExist(true);
    }
  };

  return (
    <SignInView
      userChange={handleUserChange}
      createPlayer={createInput}
      userNotExist={userNotExist}
    />
  );
}

export default SignIn;
