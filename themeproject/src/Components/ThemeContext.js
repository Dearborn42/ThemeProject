import React, {useState} from 'react'

const ThemeContextWrapper = React.createContext();

const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const darkMode = () => {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
    }
    return (
        <ThemeContextWrapper.Provider value={{darkMode, theme}}>
            { children }
        </ThemeContextWrapper.Provider>
    )
}

export {ThemeContext, ThemeContextWrapper}