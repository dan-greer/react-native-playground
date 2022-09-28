import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './cart.slice';

export default configureStore({
    reducer: {
        cart: cartSliceReducer
    }
})