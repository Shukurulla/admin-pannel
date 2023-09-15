import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  students: [],
  error: "",
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    studentsLoadingStart: (state) => {
      state.isLoading = true;
    },
    studentsLoadingSuccess: (state, action) => {
      state.isLoading = false;
      state.students = action.payload;
    },
    studentsLoadingFailure: (state) => {
      state.isLoading = false;
      state.error = "error";
    },
  },
});

export const {
  studentsLoadingStart,
  studentsLoadingFailure,
  studentsLoadingSuccess,
} = studentSlice.actions;

export default studentSlice.reducer;
