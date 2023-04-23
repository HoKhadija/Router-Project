import React from 'react';
import LogoPic from './Best Movies.png'
import "./NavBar.css"
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <div id='navBar'>
            <nav className="navbar">
                <Link to="/">
                    <img className="navbar__logo" src={LogoPic} alt="Netflix Logo" />
                </Link>

                <ul className="navbar__links" style={{ flexWrap: "wrap" }}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <a href="#movieList">Movies List</a>
                    </li>
                    <li>
                        <a href="#addNew">Add Movie</a>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;
