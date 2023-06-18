import { createSlice } from "@reduxjs/toolkit";
// import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
    shop_data: null
}

export const shopSlice = createSlice({
    name: 'shopSlice',
    initialState: INITIAL_STATE,
    reducers: {
        setShopData: (state, action) => {
            state.shop_data = action.payload
        }
    }
})

export const { setShopData } = shopSlice.actions;

export default shopSlice.reducer;