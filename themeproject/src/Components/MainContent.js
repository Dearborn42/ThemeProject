import React, {useContext} from 'react'
import { ThemeContextWrapper } from './ThemeContext'

const MainContent = () => {
    const {theme} = useContext(ThemeContextWrapper);
    return (
        <div className={`mainContent ${theme}`}>MainContent</div>
    )
}

export default MainContent