import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  courses: [],
  course:[]
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    courseLoadingStart: (state) => {
      state.isLoading = true;
    },
    courseLoadingSuccess: (state, action) => {
      state.isLoading = false;
      state.courses = action.payload;
    },
    courseLoadingFailure: (state) => {
      state.isLoading = false;
    },
    courseIdLoading: (state,action) => {
      state.isLoading = false
      state.course = action.payload
    }
  },
});
export const {
  courseLoadingFailure,
  courseLoadingStart,
  courseLoadingSuccess,
  courseIdLoading
} = courseSlice.actions;
export default courseSlice.reducer;
