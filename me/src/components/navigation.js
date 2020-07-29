import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        page: 1,
        hover: false,
    },
    reducers: {
        setPage: (state, action) => {
            switch (action.payload) {
                case 'Home':
                    state.page = 1;
                    break;
                case 'Experience':
                    state.page = 2;
                    break;
                case 'Education':
                    state.page = 3;
                    break;
                case 'Skills':
                    state.page = 4;
                    break;
                case 'Portfolio':
                    state.page = 5;
                    break;
                case 'Contact':
                    state.page = 6;
                    break;
                default:
                    state.page = 1;
            }
        },
        setHover: (state, action)=>{
            switch (action.payload) {
                case 'Home':
                    state.hover = 1;
                    break;
                case 'Experience':
                    state.hover = 2;
                    break;
                case 'Education':
                    state.hover = 3;
                    break;
                case 'Skills':
                    state.hover = 4;
                    break;
                case 'Portfolio':
                    state.hover = 5;
                    break;
                case 'Contact':
                    state.hover = 6;
                    break;
                default:
                    state.hover = 0;
            }
        }
    },
});

export const { setPage, setHover } = navigationSlice.actions;

export const selectPage = state => state.navigation.page;

export const selectHover = state => state.navigation.hover;

export default navigationSlice.reducer;
