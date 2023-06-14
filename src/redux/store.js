import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

// import rootReducer from "./root-reducer";

import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice"

const middlewares = [logger];

const store = configureStore({
    reducer: { user: userReducer, cart: cartReducer },
    middleware: middlewares
})

export default store;