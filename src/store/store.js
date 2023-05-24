import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productReducer from './productSlice'
import wishlistReducer from "./wishlistSlice";
const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
    }
});

export default store;