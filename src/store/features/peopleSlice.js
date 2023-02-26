import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../../api.model';

export const getPeople = createAsyncThunk("people/getPeople", async (payload, { fulfillWithValue, rejectWithValue }) => {

    try {
        const response = await fetch(
            API.people,
            {
                method: 'GET',
                body: JSON.stringify(payload),
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

const peopleSlice = createSlice(({
    name: "people",
    initialState: {
        people: [],
        loading: false,
        hasError: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPeople.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPeople.fulfilled, (state, action) => {
                state.loading = false;
                state.people = action.payload;
            })
            .addCase(getPeople.rejected, (state, action) => {
                state.loading = false;
                state.hasError = true;
                state.error = action.payload;
            })
    }
}));

export default peopleSlice.reducer;