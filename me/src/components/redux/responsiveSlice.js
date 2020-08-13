import { createSlice } from '@reduxjs/toolkit';
import { setMenuOpen } from '../navigation/navigation';

export const responsiveSlice = createSlice({
    name: 'responsive',
    initialState: {
        width: 0,
        height: 0,
    },
    reducers: {
        setWidth(state){
            state.width = window.innerWidth;
        },
        setHeight(state){
            state.height = window.innerWidth;
        }
    },
});

export const { setWidth, setHeight } = responsiveSlice.actions;

export const selectWidth = state => state.responsive.width;

export const selectHeight = state => state.responsive.height;

export default responsiveSlice.reducer;
