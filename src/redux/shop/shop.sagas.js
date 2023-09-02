import { takeLatest, call, put } from "redux-saga/effects";
import {
  retrieveCollectionRef,
  retrieveCollectionItems,
} from "../../firebase/firebase.utils";
import { getDocs } from "firebase/firestore";
import {
  fetchShopCollectionSuccess,
  fetchShopCollectionFail,
  fetchShopCollectionStart,
} from "./shopSlice";

import { shopSagaActions } from "./shop.sagas.actions";

export function* fetchCollectionAsync({ payload }) {
  yield put(fetchShopCollectionStart());
  const collectionRef = retrieveCollectionRef(payload);
  try {
    const snapshot = yield getDocs(collectionRef);
    const shop_data = yield call(retrieveCollectionItems, snapshot);
    yield put(fetchShopCollectionSuccess(shop_data));
  } catch (error) {
    yield put(fetchShopCollectionFail(error));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(shopSagaActions.fetch_collection, fetchCollectionAsync);
}
