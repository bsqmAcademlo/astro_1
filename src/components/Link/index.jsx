import React from "react";
import "./styles.css";

export const Link = ({ href, text, path }) => {
    const styleLink = path === href ? "link active_link" : "link";
    return (
        <li className={styleLink}>
            <a href={href}>{text}</a>
            <span className="gradient"></span>
        </li>
    );
};
