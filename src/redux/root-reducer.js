import { combineReducers } from "redux";

import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import menuReducer from "./menu/menuSlice";
import shopReducer from "./shop/shopSlice";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  menu: menuReducer,
  shop: shopReducer,
});
