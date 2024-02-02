import React from 'react'

const Header = ({theme}) => {
    return (
        <div className="logo">
            <button className={`${theme}`}><i className="fas fa-chess-knight"></i> Logo</button >
        </div>
    )
}

export default Header