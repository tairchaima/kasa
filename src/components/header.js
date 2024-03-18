import React from 'react'
import "./../css/header.css"
import logo from "./../images/kasaLogo.png"

const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="kasa logo" />
          </div>
        <nav className="nav">
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">A propos</a></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header