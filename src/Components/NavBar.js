import { useState, useEffect } from "react";
 

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="site-title">Name</a>
            <ul>
                <li>
                    <a href="/Projects">Projects</a>
                </li>

                <li>
                    <a href="/About Me">About Me</a>
                </li>
            </ul>
        </nav>

    );
}

