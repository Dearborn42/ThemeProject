import React, {useContext, useState} from 'react'
import Header from './Header'
import {ThemeContextWrapper} from './ThemeContext';

const Navbar = () => {
    const [menuToggle, setMenu] = useState("");
    const {darkMode, theme} = useContext(ThemeContextWrapper);
    return (
        <>
        <nav className={`navbar navbar-${theme}`}>
            <div className="nav-wrapper">
                <div className="logo">
                <button className={`${theme}`}><i className="fas fa-chess-knight"></i> Logo</button >
                </div>

                <ul id="menu">
                <li><button className={`${theme}`}onClick={() => darkMode()}>Change Mode</button ></li>
                </ul>
            </div>
            </nav>

            <div className={`menuIcon ${menuToggle}`} onClick={() => setMenu(prev => prev === "" ? "toggle" : "")}>
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
            </div>


            <div className={`overlay-menu ${theme} menu-${menuToggle}`}>
            <ul id="menu">
                <li><button className={`btn-${theme}`}onClick={() => darkMode()}>Change Mode</button ></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar