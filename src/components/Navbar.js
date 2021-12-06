import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <img src={logo} alt="" className="logo" />
            </div>
            <ul className="nav-links">
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
