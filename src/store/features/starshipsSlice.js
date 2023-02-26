import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getStarships = createAsyncThunk("starships/getStarships", async ({ post, starship }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await fetch(
            starship,
            {
                method: 'GET',
                body: JSON.stringify(post),
                header: {
                    'Content-Type': 'application/json'
                }
            }
        )
        if (!response.ok) {
            return rejectWithValue(response.status);
        }
        const data = await response.json();
        return fulfillWithValue(data);
    } catch (error) {
        return rejectWithValue(error);
    }
});

const initialState = {
    starships: [],
    starshipsIsLoading: false,
    hasStarshipsError: false
}

const starshipsSlice = createSlice(({
    name: "starships",
    initialState,
    reducers: {
        resetStarships: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getStarships.pending, (state, action) => {
                state.starshipsIsLoading = true;
            })
            .addCase(getStarships.fulfilled, (state, action) => {
                state.starshipsIsLoading = false;
                state.starships = [...state.starships, action.payload];
            })
            .addCase(getStarships.rejected, (state, action) => {
                state.starshipsIsLoading = false;
                state.hasStarshipsError = true;
            })
    }
}));

export const { resetStarships } = starshipsSlice.actions;
export default starshipsSlice.reducer;