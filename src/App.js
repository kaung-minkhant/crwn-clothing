import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromUser = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {

      if (userAuth) {
        // console.log(userAuth);
        createUserProfileDocument(userAuth)
        const userRef = await createUserProfileDocument(userAuth);
        this.unsubscribeFromUser = onSnapshot(userRef, snapShot => {
          // console.log(snapShot)
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromUser();
  }



  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/shop'} component={ShopPage} />
          <Route exact path={'/signin'} render={() => this.props.currentUser ? <Redirect to={'/'} /> : <SignInAndSignUpPage />} />
        </Switch>
      </div >
    );
  }
}

const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
