import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPlanets = createAsyncThunk("planets/getPlanets", async ({ post, planet }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await fetch(
            planet,
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

const planetSlice = createSlice(({
    name: "planets",
    initialState: {
        planets: [],
        planetsIsLoading: false,
        hasPlanetsError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPlanets.pending, (state, action) => {
                state.planetsIsLoading = true;
            })
            .addCase(getPlanets.fulfilled, (state, action) => {
                state.planetsIsLoading = false;
                state.planets = action.payload;
            })
            .addCase(getPlanets.rejected, (state, action) => {
                state.planetsIsLoading = false;
                state.hasPlanetsError = true;
            })
    }
}));

export default planetSlice.reducer;