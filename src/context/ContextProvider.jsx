import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    activeService: null,
    setUser: () => {},
    setToken: () => {},
    setActiveService: () => {},
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [activeService, setActiveService] = useState({});

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            activeService,
            setUser,
            setToken,
            setActiveService,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
