import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import rootReducer from "./root-reducer";

import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice"
import menuReducer from "./menu/menuSlice"
import shopReducer from "./shop/shopSlice"

// const middlewares = [logger];

const reducers = combineReducers({
    user: userReducer,
    cart: cartReducer,
    menu: menuReducer,
    shop: shopReducer
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger)
})

export default store;