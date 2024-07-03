import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    "auth/login",
    async (body: { username: string; password: string }, thunkAPI) => {
        try {
            const res = await axios.post(
                "http://127.0.0.1:8000/api/auth/login",
                body
            );

            const token = res.data.token;
            localStorage.setItem("token", token);
            
            thunkAPI.dispatch(SET_LOGIN({ user: res.data.data, token }));

            return token;
        } catch (error) {
            const err = error as Error;
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);
