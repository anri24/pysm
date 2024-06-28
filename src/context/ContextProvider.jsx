import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    activeService: null,
    isModalOpen: null,
    selectedOrderData: null,
    setUser: () => {},
    setToken: () => {},
    setActiveService: () => {},
    setIsModalOpen: () => {},
    setSelectedOrderData: () => {},
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('USER')) || {});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [activeService, setActiveService] = useState({});

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrderData, setSelectedOrderData] = useState({});

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    const setUserName = (user) => {
        if(user) {
            localStorage.setItem('USER', JSON.stringify({name: user.name}))
        } else {
            localStorage.removeItem('USER');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            activeService,
            isModalOpen,
            selectedOrderData,
            setUser,
            setToken,
            setActiveService,
            setUserName,
            setIsModalOpen,
            setSelectedOrderData,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
