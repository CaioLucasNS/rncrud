import React, { createContext } from 'react';
import users from '../data/users';

const UsersContext = createContext({});

export const UserProvider = ({ children }) => {
    return(
        <UsersContext.Provider value={{
            state: { users }
        }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContext;