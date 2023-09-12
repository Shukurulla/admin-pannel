import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoading: false,
    courses: []
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        courseLoadingStart: state => {
            state.isLoading = true
        },
        courseLoadingSuccess: (state, action) => {
            state.isLoading = false
            state.courses = action.payload
        },
        courseLoadingFailure: state => {
            state.isLoading = false
        
        }
    }
})
export const { courseLoadingFailure,courseLoadingStart,courseLoadingSuccesss } = courseSlice.actions
export default courseSlice.reducer