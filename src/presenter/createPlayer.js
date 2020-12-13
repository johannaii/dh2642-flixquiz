import React, { useEffect, useState, useContext } from "react";
import CreatePlayerView from "../view/createPlayerView";
import { UserStateContext } from "../context/activeUserContext";
import { useHistory } from "react-router-dom";

const CreatePlayer = ({ database }) => {
  const [userId, setUserId] = useState(0);
  const { user, setUser } = useContext(UserStateContext);
  const [userExist, setUserExist] = useState(false);
  const history = useHistory();

  const handleUserChange = (e) => {
    setUserId(e.target.value);
  };

  const userList = [];
  database?.ref("users").on("value", (snapshot) => {
    snapshot.forEach((snap) => {
      userList.push(snap.val());
    });
  });

  const createInput = () => {
    if (userList.find((user) => user.userId === userId)) {
      setUserExist(true);
    } else {
      database.ref(`users/`).push().set({
        userId,
      });
      setUser(userId);
      localStorage.setItem("activeUser", userId);
      history.push("/profile");
    }
  };

  return (
    <CreatePlayerView
      userChange={handleUserChange}
      createPlayer={createInput}
      userExist={userExist}
    />
  );
};

export default CreatePlayer;
