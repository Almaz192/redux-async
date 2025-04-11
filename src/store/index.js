import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slice/usersSlice.js";

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

export default store;
