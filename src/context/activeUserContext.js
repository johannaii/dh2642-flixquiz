import React, { useState, createContext } from "react";

const UserStateContext = createContext("");
const UserStateProvider = UserStateContext.Provider;

function UserProvider({ children }) {
  const localStorageUser = localStorage.getItem("activeUser");
  let activeUser = "";
  if (localStorageUser) {
    activeUser = localStorageUser;
  }
  const [user, setUser] = useState(activeUser);

  return (
    <UserStateProvider value={{ user, setUser }}>{children}</UserStateProvider>
  );
}

export { UserProvider, UserStateContext };
