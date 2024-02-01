import React, {useContext, useState} from 'react'
import App from '../App';

const ThemeContextWrapper = React.createContext();

const ThemeContext = () => {
    const [theme, setTheme] = useState("dark");
    const darkMode = () => {
        if(theme === "dark")
            return setTheme("light");
        return setTheme("dark");
    }
    return (
        <ThemeContextWrapper.Provider value={{darkMode, theme}}>
            <App />
        </ThemeContextWrapper.Provider>
    )
}

export default ThemeContext