import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../../api.model';

export const getSearchPeopleResults = createAsyncThunk("search/getSearchPeopleResults", async ({ post, search }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await fetch(
            `${API.searchPeople}${search}`,
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

        return fulfillWithValue(data.results)
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const getSearchPlanetResults = createAsyncThunk("search/getSearchPlanetsResults", async ({ post, search }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await fetch(
            `${API.searchPlanets}${search}`,
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

        return fulfillWithValue(data.results)
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const getSearchStarshipsResults = createAsyncThunk("search/getSearchStarshipsResults", async ({ post, search }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await fetch(
            `${API.searchStarships}${search}`,
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

        return fulfillWithValue(data.results)
    } catch (error) {
        return rejectWithValue(error);
    }
});

const searchSlice = createSlice(({
    name: "search",
    initialState: {
        results: [],
        loading: false,
        error: null,
        hasError: false,
        isPeople: false,
        isPlanets: false,
        isStarships: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSearchPeopleResults.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getSearchPeopleResults.fulfilled, (state, action) => {
                state.loading = false;
                state.isPeople = true;
                state.isPlanets = false;
                state.isStarships = false;
                state.results = action.payload;
            })
            .addCase(getSearchPeopleResults.rejected, (state, action) => {
                state.loading = false;
                state.hasError = true;
                state.error = action.payload;
            })
            .addCase(getSearchPlanetResults.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getSearchPlanetResults.fulfilled, (state, action) => {
                state.loading = false;
                state.isPlanets = true;
                state.isPeople = false;
                state.isStarships = false;
                state.results = action.payload;
            })
            .addCase(getSearchPlanetResults.rejected, (state, action) => {
                state.loading = false;
                state.hasError = true;
                state.error = action.payload;
            })
            .addCase(getSearchStarshipsResults.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getSearchStarshipsResults.fulfilled, (state, action) => {
                state.loading = false;
                state.isStarships = true;
                state.isPlanets = false;
                state.isPeople = false;
                state.results = action.payload;
            })
            .addCase(getSearchStarshipsResults.rejected, (state, action) => {
                state.loading = false;
                state.hasError = true;
                state.error = action.payload;
            })
    }
}));

export default searchSlice.reducer;