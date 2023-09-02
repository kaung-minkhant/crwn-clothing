import { createSelector } from "reselect";

const selectMenu = (state) => state.menu;

export const selectMenuItems = createSelector(
  [selectMenu],
  (menu) => menu.menu_items
);

export const selectMenuLoad = createSelector(
  [selectMenu],
  (menu) => menu.loading
);

export const selectMenuItemsAsArray = createSelector(
  [selectMenuItems],
  (menuItems) =>
    menuItems ? Object.keys(menuItems).map((key) => menuItems[key]) : []
);
