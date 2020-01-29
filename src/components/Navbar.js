// React
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = [
        { name: "Home", url: "/" },
        { name: "About Me", url: "/about" },
        { name: "Projects", url: "/projects" },
        { name: "Technologies", url: "/technologies" },
        { name: "Contact", url: "/contact" }
    ];
    return (
        <nav className="navbar">
            <ul>
                {links.map(link => (
                    <li>
                        <NavLink to={link.url}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
