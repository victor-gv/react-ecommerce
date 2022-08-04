import React, { useContext } from "react";
import { createContext, useCallback, useMemo, useState } from "react";

const MY_AUTH_TOKEN = "MY_AUTH_TOKEN_1";


export const AuthContext = createContext();

export function AuthContextProvider ({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(MY_AUTH_TOKEN));

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const login = useCallback (() => {
        localStorage.setItem(MY_AUTH_TOKEN, "true");
        setIsAuthenticated(true);
    } , []);

    const logout = useCallback (() => {
        localStorage.removeItem(MY_AUTH_TOKEN);
        localStorage.removeItem("user");
        setIsAuthenticated(false);
    } , []);

    const value = useMemo(() => ({
        isAuthenticated,
        login,
        logout,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword
    }), [isAuthenticated, login, logout, userEmail, setUserEmail, userPassword, setUserPassword]);

    return ( <AuthContext.Provider value={value}>{children}</AuthContext.Provider> );
}

export function useAuthContext() {
    return useContext(AuthContext);
}



