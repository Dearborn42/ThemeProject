import React, {useContext} from 'react'
import { ThemeContextWrapper } from './ThemeContext';
import Section from './Section';
import data from '../Utils/data';

const MainContent = () => {
    const {theme} = useContext(ThemeContextWrapper);
    return (
        <div className={`mainContent ${theme}`}>
            {data.map(x => (
                <Section content={x.content} title={x.title} theme={theme} />
            ))}
        </div>  
    )
}

export default MainContent