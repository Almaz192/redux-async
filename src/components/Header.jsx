// components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/users">
                <h2>Логотип или Название</h2>
            </Link>
            <nav>
                <Link to="/users">Пользователи</Link>
            </nav>
        </header>
    );
}

export default Header;
