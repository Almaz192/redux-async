import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByIdAsync } from "../store/async/usersAsync.js";
import { useParams, Link } from "react-router-dom";

function UserDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedUser, loading, error } = useSelector(
        (state) => state.users
    );

    useEffect(() => {
        dispatch(getUserByIdAsync(id));
    }, [dispatch, id]);

    if (loading) return <div className="container">Загрузка...</div>;
    if (error) return <div className="container">Ошибка: {error}</div>;
    if (!selectedUser) return null;

    return (
        <div className="container">
            <div className="user-details">
                <h1>Детальная страница пользователя</h1>
                <p>
                    <strong>Имя:</strong> {selectedUser.name}
                </p>
                <p>
                    <strong>Адрес:</strong> {selectedUser.address?.street},{" "}
                    {selectedUser.address?.city}
                </p>
                <p>
                    <strong>Телефон:</strong> {selectedUser.phone}
                </p>
                <p>
                    <strong>Геолокация:</strong>{" "}
                    {selectedUser.address?.geo?.lat},{" "}
                    {selectedUser.address?.geo?.lng}
                </p>
                <p>
                    <strong>Логин:</strong> {selectedUser.username}
                </p>
                <p>
                    <strong>Пароль:</strong> *****
                </p>
                <Link to="/users" className="back-button">
                    Назад к списку пользователей
                </Link>
            </div>
        </div>
    );
}

export default UserDetailsPage;
