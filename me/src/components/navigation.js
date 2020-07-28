import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        page: 1,
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
    },
});

export const { setPage } = navigationSlice.actions;

export const selectPage = state => state.navigation.page;

export default navigationSlice.reducer;
