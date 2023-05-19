import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

export const fetchProducts = createAsyncThunk('products', async () => {
    const products = await fetch('https://fakestoreapi.com/products');
    const data = await products.json();
    return data
});


const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })

            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
                state.data = action.payload;
            })

            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR
            });
    }
})

export default productSlice.reducer;
