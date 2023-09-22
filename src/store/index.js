import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from "../slice/course";
import MentorReducer from "../slice/mentor";
import StudentReducer from "../slice/students";
import UiReducer from "../slice/ui";

export const store = configureStore({
  reducer: {
    CourseReducer,
    MentorReducer,
    StudentReducer,
    ui: UiReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
