import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginUser = (userdata) => {
        setUser(userdata);
        setIsLoggedIn(true);
    }
    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    }
  return (
    <AuthContext.Provider value={{user, isLoggedIn, loginUser, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
