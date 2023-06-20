import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { retrieveCollectionItems, retrieveCollectionRef } from "../../firebase/firebase.utils";
import { getDocs } from "firebase/firestore";
// import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
    shop_data: null,
    isFetching: false,
    errorMessage: undefined
}

export const fetchShopCollection = createAsyncThunk(
    'collection/fetch',
    async (collection_name) => {
        const collectionRef = retrieveCollectionRef(collection_name)
        const snapshot = await getDocs(collectionRef)
        const shop_data = await retrieveCollectionItems(snapshot)
        return shop_data
    }
)

export const shopSlice = createSlice({
    name: 'shopSlice',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchShopCollection.pending, (state) => {
                state.isFetching = true
            })
            .addCase(fetchShopCollection.fulfilled, (state, action) => {
                state.isFetching = false
                state.shop_data = action.payload
            })
            .addCase(fetchShopCollection.rejected, (state, action) => {
                state.isFetching = false
                state.errorMessage = action.error.message
            })
    }
})

export const { setShopData } = shopSlice.actions;

export default shopSlice.reducer;