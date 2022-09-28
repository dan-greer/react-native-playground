import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload)
        },
        remove: (state, action) => {
            // to be implemented later?
        }
    }
})

export const { add, remove } = cartSlice.actions

export default cartSlice.reducer