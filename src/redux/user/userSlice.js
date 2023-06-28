import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: INITIAL_STATE,
  reducers: {
    googleSigninSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.errorMessage = null;
    },
    googleSigninFailure: (state, action) => {
      state.errorMessage = action.payload.message;
    },
    emailSigninSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.errorMessage = null;
    },
    emailSigninFailure: (state, action) => {
      state.errorMessage = action.payload.message;
    },
  },
});

export const {
  googleSigninFailure,
  googleSigninSuccess,
  emailSigninFailure,
  emailSigninSuccess,
} = userSlice.actions;

export default userSlice.reducer;
