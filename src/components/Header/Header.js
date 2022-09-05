import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {

    return (
        <section className= "header-padre">
            <div className="div-logo-header">
                <p>PONER LOGO</p>
            </div>
            
            <nav className="nav-header">
                <ul className="main-nav">
                    <li>
                        <Link className="Link" to='/'> Home </Link>
                    </li>
                    <li>
                        <Link className="Link" to='/favoritos'> Favoritos </Link>
                    </li>

                    <li>
                        <Link className="Link" to='/favoritos'> Favoritos </Link>
                    </li>

                </ul>

            </nav>
        </section>
    )
}

export default Header