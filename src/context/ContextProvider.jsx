import { useContext } from "react";
import { createContext } from "react";
import { useTranslation } from "react-i18next";

const StateContext = createContext({
    changeLanguage: () => {},
})

export const ContextProvider = ({children}) => {
    const [_, i18n] = useTranslation("global");


    function changeLanguage(lang){
        i18n.changeLanguage(lang)
    }

    return (
        <StateContext.Provider value={{
            changeLanguage,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
