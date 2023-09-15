import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from "../slice/course";
import MentorReducer from "../slice/mentor";
import StudentReducer from "../slice/students";

export const store = configureStore({
  reducer: {
    CourseReducer,
    MentorReducer,
    StudentReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
