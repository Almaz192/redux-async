import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersAsync = createAsyncThunk(
    "users/getUsersAsync",
    async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
            throw new Error("Не удалось загрузить список пользователей");
        }
        return await response.json();
    }
);

export const getUserByIdAsync = createAsyncThunk(
    "users/getUserByIdAsync",
    async (id) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) {
            throw new Error("Не удалось загрузить пользователя");
        }
        return await response.json();
    }
);
