import { takeLatest, put, all, call } from "redux-saga/effects";

import { signInFailure, signInSuccess } from "./userSlice";

import { auth, googleProvider } from "../../firebase/firebase.utils";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { getDoc } from "firebase/firestore";

import { userSagaActions } from "./user.sagas.actions";

export function* processUser(user) {
  const userRef = yield call(createUserProfileDocument, user);
  const userSnapshot = yield getDoc(userRef);
  yield put(
    signInSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data(),
    })
  );
}

export function* googleSignInAsync() {
  try {
    const { user } = yield signInWithPopup(auth, googleProvider);
    yield call(processUser, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* emailSignInAsync({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    yield call(processUser, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(userSagaActions.GOOGLE_SIGNIN_START, googleSignInAsync);
}

export function* onEmailSigninStart() {
  yield takeLatest(userSagaActions.EMAIL_SIGNIN_START, emailSignInAsync);
}

export function* userSagas() {
  yield all([call(onGoogleSigninStart), call(onEmailSigninStart)]);
}
