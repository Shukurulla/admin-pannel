import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from '../slice/course'

export const store = configureStore({
    reducer: {
        course: CourseReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})