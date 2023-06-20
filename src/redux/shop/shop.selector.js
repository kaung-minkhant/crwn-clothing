import { createSelector } from "reselect";
// import SHOP_DATA from "./shop.data";


// const mapTitleToID = (shop_data) => {
//     const collection_id_map = {}
//     shop_data.forEach(shop_catagory => {
//         collection_id_map[shop_catagory.title.toLowerCase()] = shop_catagory.id
//     });
//     return collection_id_map
// }

// const COLLECTION_ID_MAP = mapTitleToID(SHOP_DATA)

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    (shop) => shop.shop_data
)

export const selectCollection = collectionID =>
    createSelector(
        [selectShopItems],
        (shopItems) => shopItems ? shopItems[collectionID] : { title: '', items: [] }
    )

export const selectCollectionAsArray = createSelector(
    [selectShopItems],
    (shopItems) => shopItems ? Object.keys(shopItems).map(key => shopItems[key]) : []
)

export const selectIsFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
)