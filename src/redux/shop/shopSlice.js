import { createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
    shop_data: SHOP_DATA
}

export const shopSlice = createSlice({
    name: 'shopSlice',
    initialState: INITIAL_STATE,
    reducers: {}
})

export default shopSlice.reducer;