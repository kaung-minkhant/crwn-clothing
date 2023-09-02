import { takeLatest, put, all, call } from 'redux-saga/effects'

import { signInFailure, signInSuccess, signOutSuccess } from './userSlice'

import {
  auth,
  googleProvider,
  isUserAuthenticated,
} from '../../firebase/firebase.utils'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUserProfileDocument } from '../../firebase/firebase.utils'
import { getDoc } from 'firebase/firestore'

import { userSagaActions } from './user.sagas.actions'
import { clearCart } from '../cart/cartSlice'

export function* processUser(user) {
  const userRef = yield call(createUserProfileDocument, user)
  const userSnapshot = yield getDoc(userRef)
  yield put(
    signInSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data(),
    }),
  )
}

export function* googleSignInAsync() {
  try {
    const { user } = yield signInWithPopup(auth, googleProvider)
    yield call(processUser, user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* emailSignInAsync({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password)
    yield call(processUser, user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(userSagaActions.GOOGLE_SIGNIN_START, googleSignInAsync)
}

export function* onEmailSigninStart() {
  yield takeLatest(userSagaActions.EMAIL_SIGNIN_START, emailSignInAsync)
}

export function* checkUserAsync() {
  try {
    const user = yield isUserAuthenticated()
    if (!user) return
    yield call(processUser, user)
  } catch (error) {
    console.log(error)
    yield put(signInFailure(error))
  }
}

export function* signoutAsync() {
  yield signOut(auth)
  yield put(signOutSuccess())
  yield put(clearCart())
}

export function* signUpAsync({ payload: { email, password, displayName } }) {
  const { user } = yield createUserWithEmailAndPassword(auth, email, password)
  const userRef = yield call(createUserProfileDocument, user, {displayName})
  const userSnapshot = yield getDoc(userRef)
  yield put(
    signInSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data(),
    }),
  )
}

export function* onCheckUser() {
  yield takeLatest(userSagaActions.CHECK_USER, checkUserAsync)
}

export function* onSignout() {
  yield takeLatest(userSagaActions.SIGN_OUT, signoutAsync)
}

export function* onSignUp() {
  yield takeLatest(userSagaActions.SIGN_UP, signUpAsync)
}

export function* userSagas() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onCheckUser),
    call(onSignout),
    call(onSignUp),
  ])
}
