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
                        <li><a href="#BIOGRAFIA" onClick={toggleMenu}>BIOGRAFIA</a></li>
                        <li><a href="#HABILIDADES" onClick={toggleMenu}>HABILIDADES</a></li>
                        <li><a href="#CURRICULUM" onClick={toggleMenu}>CURRICULUM</a></li>
                        <li><a href="#PROJETOS" onClick={toggleMenu}>PROJETOS</a></li>
                    </ul>
                </nav>
               
            </header>
        </div>
    );
}