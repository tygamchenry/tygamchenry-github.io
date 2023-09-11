import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return <nav className="nav">
        <ul class="nav-menu">
            <li className="btn">
                <a href="/">Home</a>
            </li>
            <li className="btn">
                <a href="/">About</a>
            </li>
            <li className="btn">
                <a href="/">Projects</a>
            </li>
            <li className="btn">
                <a href="/">Contact</a>
            </li>
        </ul>
    </nav>
}