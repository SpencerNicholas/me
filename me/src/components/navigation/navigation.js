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
                case 'ABOUT':
                    state.page = 1;
                    break;
                case 'EXPERIENCE':
                    state.page = 2;
                    break;
                case 'EDUCATION':
                    state.page = 3;
                    break;
                case 'SKILLS':
                    state.page = 4;
                    break;
                case 'PORTFOLIO':
                    state.page = 5;
                    break;
                default:
                    state.page = 1;
            }
        },
        setHover: (state, action) => {
            switch (action.payload) {
                case 'ABOUT':
                    state.hover = 1;
                    break;
                case 'EXPERIENCE':
                    state.hover = 2;
                    break;
                case 'EDUCATION':
                    state.hover = 3;
                    break;
                case 'SKILLS':
                    state.hover = 4;
                    break;
                case 'PORTFOLIO':
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
                case 'contactDetails':
                    state.hover = 10;
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
