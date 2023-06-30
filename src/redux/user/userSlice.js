import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: INITIAL_STATE,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.errorMessage = null;
    },
    signInFailure: (state, action) => {
      state.errorMessage = action.payload.message;
    },
  },
});

export const { signInFailure, signInSuccess } = userSlice.actions;

export default userSlice.reducer;
