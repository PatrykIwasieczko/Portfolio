// React
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = [
        { name: "Home", url: "/" },
        { name: "About Me", url: "/about" },
        { name: "Projects", url: "/projects" },
        { name: "Skills", url: "/skills" }
    ];
    return (
        <nav className="navbar">
            <ul>
                {links.map(link => (
                    <li key={link.name}>
                        <NavLink to={link.url}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
