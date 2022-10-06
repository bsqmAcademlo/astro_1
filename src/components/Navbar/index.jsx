import { useState } from "react";
import { Link } from "../Link";
import "./styles.css";

const dataLink = [
    {
        id: 0,
        href: "/",
        text: "home",
    },
    {
        id: 1,
        href: "/about/",
        text: "about",
    },
    {
        id: 2,
        href: "/portfolio/",
        text: "portfolio",
    },
    {
        id: 3,
        href: "/work/",
        text: "work",
    },
    {
        id: 4,
        href: "/contact/",
        text: "contact",
    },
];

export default function Navbar({ pathname }) {
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
                {dataLink.map(({ href, id, text }) => (
                    <Link key={id} href={href} text={text} path={pathname} />
                ))}
            </ul>

            <i className={typeIcon} onClick={handleClick}></i>
        </nav>
    );
}
