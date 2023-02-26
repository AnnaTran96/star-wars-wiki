import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice(({
    name: "favourites",
    initialState: {
        favourites: [],
        loading: false,
        hasError: false,
        error: null
    },
    reducers: {
        addFavourite: (state, action) => {
            state.favourites = [...state.favourites, action.payload];
            localStorage.setItem(
                'favourites',
                JSON.stringify({
                    favourites: state.favourites
                }),
            );
        },
        removeFavourite: (state, action) => {
            state.favourites = [...state.favourites.filter((item) => item.name !== action.payload.name)];
            localStorage.setItem(
                'favourites',
                JSON.stringify({
                    favourites: state.favourites
                }),
            );
        }
    }
}));

export const { addFavourite, removeFavourite } = favouritesSlice.actions
export default favouritesSlice.reducer;