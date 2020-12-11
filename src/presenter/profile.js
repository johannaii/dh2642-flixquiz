import React, { useContext, useEffect, useState } from "react";
import { UserStateContext } from "../context/activeUserContext";
import { useHistory } from "react-router-dom";
import ProfileView from "../view/profileView";

const Profile = ({ database }) => {
  const { user, setUser } = useContext(UserStateContext);
  const [highscore, setHighscore] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (user !== "") {
      let highscoreList = [];
      database?.ref("highscore").on("value", (snapshot) => {
        snapshot.forEach((snap) => {
          highscoreList.push(snap.val());
        });
        setHighscore(highscoreList);
      });
    } else {
      history.push("/");
    }
  }, []);

  const logOut = () => {
    localStorage.clear();
    setUser("");
  };

  return <ProfileView username={user} logOut={logOut}/>;
};
export default Profile;
