import { createSlice } from '@reduxjs/toolkit';

export const experienceSlice = createSlice({
    name: 'experience',
    initialState: {
        experience : 'none'
    },
    reducers: {
        setExperience(state, action){
            state.experience = action.payload;
        },
    },
});

export const { setExperience} = experienceSlice.actions;

export const selectExperience = state => state.experience.experience;

export default experienceSlice.reducer;
