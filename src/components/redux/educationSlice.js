import { createSlice } from '@reduxjs/toolkit';

export const educationSlice = createSlice({
    name: 'education',
    initialState: {
        education : 'none'
    },
    reducers: {
        setEducation(state, action){
            state.education = action.payload;
        },
    },
});

export const { setEducation} = educationSlice.actions;

export const selectEducation = state => state.education.education;

export default educationSlice.reducer;
