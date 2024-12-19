import { createContext, useContext } from "react";

export const BioContext = createContext()

export const BioProvider = ({ children }) => {
    const myName = "Amit"
    const myAge = 26;

    // return <BioContext.Provider value={myName}>
    return <BioContext.Provider value={{ myName, myAge }}>
        {children}
    </BioContext.Provider>
}

// custom hooks

export const useBioContext = () => {
    const context = useContext(BioContext)
    if (context === undefined) {
        throw new Error("Component out side of BioProvider")
    }
    return context;
}