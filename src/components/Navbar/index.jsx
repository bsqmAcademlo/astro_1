import React, { useState } from "react";
import "./styles.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const classMenu = isOpen ? "menu menu_show" : "menu";
    const typeIcon = isOpen ? "icon_menu bx bx-x" : "icon_menu bx bx-menu";

    return (
        <nav className="stylesNavbar">
            <span className="logo text-gradient">
                <a href="/index/">bsquiroz</a>
            </span>

            <ul className={classMenu}>
                <li>
                    <a href="/">home</a>
                    <span className="gradient"></span>
                </li>
                <li>
                    <a href="/about/">about</a>
                    <span className="gradient"></span>
                </li>
                <li>
                    <a href="/portfolio/">portfolio</a>
                    <span className="gradient"></span>
                </li>
                <li>
                    <a href="/work/">work</a>
                    <span className="gradient"></span>
                </li>
                <li>
                    <a href="/contact/">contact</a>
                    <span className="gradient"></span>
                </li>
            </ul>

            <i className={typeIcon} onClick={handleClick}></i>
        </nav>
    );
};
