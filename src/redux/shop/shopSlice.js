// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
  shop_data: null,
  isFetching: false,
  errorMessage: undefined,
};

// export const fetchShopCollection = createAsyncThunk(
//     'collection/fetch',
//     async (collection_name) => {
//         const collectionRef = retrieveCollectionRef(collection_name)
//         const snapshot = await getDocs(collectionRef)
//         const shop_data = await retrieveCollectionItems(snapshot)
//         return shop_data
//     }
// )

export const shopSlice = createSlice({
  name: "shopSlice",
  initialState: INITIAL_STATE,
  reducers: {
    fetchShopCollectionStart: (state) => {
      state.isFetching = true;
      state.errorMessage = null;
    },
    fetchShopCollectionSuccess: (state, action) => {
      state.isFetching = false;
      state.shop_data = action.payload;
      state.errorMessage = null;
    },
    fetchShopCollectionFail: (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload.message;
    },
  },
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(fetchShopCollection.pending, (state) => {
  //             state.isFetching = true
  //         })
  //         .addCase(fetchShopCollection.fulfilled, (state, action) => {
  //             state.isFetching = false
  //             state.shop_data = action.payload
  //         })
  //         .addCase(fetchShopCollection.rejected, (state, action) => {
  //             state.isFetching = false
  //             state.errorMessage = action.error.message
  //         })
  // }
});

export const {
  fetchShopCollectionSuccess,
  fetchShopCollectionFail,
  fetchShopCollectionStart,
} = shopSlice.actions;

export default shopSlice.reducer;
