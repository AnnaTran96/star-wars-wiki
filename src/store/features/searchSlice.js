import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../../api.model';

export const getSearchResults = createAsyncThunk("search/getSearchResults", async ({ post, search }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await fetch(
            `${API.search}${search}`,
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
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSearchResults.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getSearchResults.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload;
            })
            .addCase(getSearchResults.rejected, (state, action) => {
                state.loading = false;
                state.hasError = true;
                state.error = action.payload;
            })
    }
}));

export default searchSlice.reducer;