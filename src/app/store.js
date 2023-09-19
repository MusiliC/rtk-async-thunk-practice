import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
import postReducer from "../features/posts/postSlice"

export const store = configureStore({
    reducer: {
        todoReducer: todoReducer,
        postReducer: postReducer
    },
})
