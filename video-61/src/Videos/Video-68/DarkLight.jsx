import "./index.css"

import { createContext, use, useState } from "react";

export const ThemeContex = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark")

    const handleToggleTheme = () => {
        return setTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark")
    }

    return <ThemeContex.Provider value={{ theme, handleToggleTheme }}>
        {children}
    </ThemeContex.Provider >
}

// creating a component
export const DarkLight = () => {

    const { theme, handleToggleTheme } = use(ThemeContex)

    return (
        <div className={`container ${theme === "dark" ? "light" : "dark"}`}>
            <h1>Dark Light Mode Website</h1>
            <h2>Hello!! My React v19 fans </h2>
            <button className="btn"
                onClick={handleToggleTheme}>
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </div>
    )
}