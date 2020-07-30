import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        page: 1,
        hover: false,
        menu: false,
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
        setHover: (state, action) => {
            switch (action.payload) {
                case 'About':
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
                case 'LinkedIn':
                    state.hover = 6;
                    break;
                case 'Instagram':
                    state.hover = 7;
                    break;
                case 'Twitter':
                    state.hover = 8;
                    break;
                case 'GitHub':
                    state.hover = 9;
                    break;
                default:
                    state.hover = 0;
            }
        },
        setMenuOpen: (state, action) => {
            state.menu = action.payload;
        },
    },
});

export const { setPage, setHover, setMenuOpen } = navigationSlice.actions;

export const selectPage = state => state.navigation.page;

export const selectHover = state => state.navigation.hover;

export const selectMenu = state => state.navigation.menu;

export default navigationSlice.reducer;
