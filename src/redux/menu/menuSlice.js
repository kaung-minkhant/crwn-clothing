import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    menu_items: null
}

export const menuSlice = createSlice({
    name: 'menuSlice',
    initialState: INITIAL_STATE,
    reducers: {
        updateMenuItems: (state, action) => {
            state.menu_items = action.payload
        }
    }
})

export const { updateMenuItems } = menuSlice.actions;
export default menuSlice.reducer;