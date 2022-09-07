import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {

    return (
        <section className= "header-padre">
            <div className="div-logo-header">
                <img src='./img/logo.jpeg' alt="logo"/>
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
                        <Link className="Link" to='/todas'> Ver Todas </Link>
                    </li>

                </ul>

            </nav>
        </section>
    )
}

export default Header