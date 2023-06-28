import { takeLatest, put, all, call } from "redux-saga/effects";

import { googleSigninFailure, googleSigninSuccess } from "./userSlice";

import { auth, googleProvider } from "../../firebase/firebase.utils";
import { signInWithPopup } from "firebase/auth";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { getDoc } from "firebase/firestore";

import { userSagaActions } from "./user.sagas.actions";

export function* googleSignInAsync() {
  try {
    const { user } = yield signInWithPopup(auth, googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield getDoc(userRef);
    yield put(
      googleSigninSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
    console.log(userSnapshot);
  } catch (error) {
    yield put(googleSigninFailure(error));
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(userSagaActions.GOOGLE_SIGNIN_START, googleSignInAsync);
}

export function* userSagas() {
  yield all([call(onGoogleSigninStart)]);
}
