import React, { useState } from 'react';

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className="content-header">
            <header>
                <div className="logo">
                    <a href="#">ROQUE'S PORTFOLIO</a>
                </div>
                <nav id="nav" style={{ display: menuActive ? 'block' : '' }}>
                    <ul>
                        <li><a href="#INICIO" onClick={toggleMenu}>INICIO</a></li>
                        <li><a href="#SOBREMIM" onClick={toggleMenu}>SOBREMIM</a></li>
                        <li><a href="#HABILIDADES" onClick={toggleMenu}>HABILIDADES</a></li>
                        <li><a href="#CURRICULUM" onClick={toggleMenu}>CURRICULUM</a></li>
                        <li><a href="#PORTFOLIO" onClick={toggleMenu}>PORTFOLIO</a></li>
                    </ul>
                </nav>
                <div className="nav-responsive" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars">Menu</i>
                </div>
            </header>
        </div>
    );
}