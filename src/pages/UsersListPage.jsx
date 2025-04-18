import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAsync } from "../store/async/usersAsync.js";
import { Link } from "react-router-dom";

function UsersListPage() {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsersAsync());
    }, [dispatch]);

    if (loading) return <div className="container">Загрузка...</div>;
    if (error) return <div className="container">Ошибка: {error}</div>;

    return (
        <div className="container">
            <h1 className="page-title">Список пользователей</h1>
            {list.map((user) => (
                <div key={user.id} className="user-card">
                    <div className="user-info">
                        <img
                            src={`https://robohash.org/${user.id}?set=set2`}
                            alt={user.name}
                        />
                        <div className="user-text">
                            <div className="user-name">
                                <h3>{user.name}</h3>
                            </div>
                            <div className="user-te">
                                <p>Email: {user.email}</p>
                                <p>
                                    Адрес: {user.address?.street},{" "}
                                    {user.address?.city}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="Butt">
                        <Link to={`/users/${user.id}`}>Подробнее</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UsersListPage;
