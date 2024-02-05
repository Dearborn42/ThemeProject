import React from 'react'

const Header = ({theme, text, class_name}) => {
    return (
        <div className={class_name}>
            <button className={`${theme}`}><i className="fas fa-chess-knight"></i>{text}</button >
        </div>
    )
}

export default Header