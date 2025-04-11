import { createSlice } from "@reduxjs/toolkit";
import { getUsersAsync, getUserByIdAsync } from "../async/usersAsync.js";

const initialState = {
    list: [],
    selectedUser: null,
    loading: false,
    error: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getUsersAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload;
        });

        builder.addCase(getUsersAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(getUserByIdAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getUserByIdAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.selectedUser = action.payload;
        });
        builder.addCase(getUserByIdAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default usersSlice.reducer;
