import { createContext } from "react";

export const BioContext = createContext()

export const BioProvider = ({ children }) => {
    const myName = "Amit"
    const myAge = 26;

    // return <BioContext.Provider value={myName}>
    return <BioContext.Provider value={{ myName, myAge }}>
        {children}
    </BioContext.Provider>
}