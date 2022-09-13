import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {

    return (
        <header className= "header-padre">
                
            <div ><img className='MacmuvyLogo' src="/img/logo.jpeg" alt="Logo" /></div>
            
            <nav className="nav-header">
                <ul className="main-nav">
                    <li>
                        <Link className="Link" to='/'> Home </Link>
                    </li>

                    <li>
                        <Link className="Link" to='/favoritos'> Favoritos </Link>
                    </li>

                    <li>
                        <Link className="Link" to='/todas'> Todas </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header