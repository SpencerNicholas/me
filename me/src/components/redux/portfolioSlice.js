import { createSlice } from '@reduxjs/toolkit';

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        hover: 0,
        item: 0,
    },
    reducers: {
        setHover: (state, action) => {
            state.hover = action.payload;
        },
        setPortfolio: (state, action) =>{
            switch (action.payload) {
                case 'trackmyfriends':
                    state.item = 'trackmyfriends';
                    break;
                default:
                    state.item = 0;
            }
        }
    },
});

export const { setHover, setPortfolio } = portfolioSlice.actions;

export const selectHover = state => state.portfolio.hover;

export const selectPortfolio = state => state.portfolio.item;

export default portfolioSlice.reducer;
