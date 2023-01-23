import { configureStore } from "@reduxjs/toolkit";
import { RootReducers } from "../Root/RootReducers";

export const store = configureStore({
    reducer: RootReducers
})