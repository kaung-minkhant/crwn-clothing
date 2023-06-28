import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { retrieveCollectionRef } from "../../firebase/firebase.utils";
import { getDocs } from "firebase/firestore";
import { retrieveMenuItems } from "../../firebase/firebase.utils";

const INITIAL_STATE = {
  menu_items: null,
  loading: false,
  errorMessage: null,
};

export const fetchMenu = createAsyncThunk("menu/fetch", async () => {
  const menuRef = retrieveCollectionRef("menu");
  const menuSnapshot = await getDocs(menuRef);
  const menuObj = await retrieveMenuItems(menuSnapshot);
  //   console.log(menuObj);
  return menuObj;
});

export const menuSlice = createSlice({
  name: "menuSlice",
  initialState: INITIAL_STATE,
  reducers: {
    updateMenuItems: (state, action) => {
      state.menu_items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menu_items = action.payload;
        state.errorMessage = null;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { updateMenuItems } = menuSlice.actions;
export default menuSlice.reducer;
