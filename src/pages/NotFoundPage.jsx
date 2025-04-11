import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="not-found-container">
            <h1>404</h1>
            <p>Страница не найдена</p>
            <Link to="/users">Вернуться на главную</Link>
        </div>
    );
}

export default NotFoundPage;
