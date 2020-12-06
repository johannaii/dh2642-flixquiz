import React, {useState, createContext} from 'react';

const UserStateContext = createContext('');
const UserStateProvider = UserStateContext.Provider;

function UserProvider({children}) {

    const [user, setUser] = useState('hej');

    return (
        <UserStateProvider value={{user, setUser}}>
            {children}
        </UserStateProvider>
    )
}

export {UserProvider, UserStateContext};