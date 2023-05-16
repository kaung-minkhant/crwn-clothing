import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromUser = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {

      if (userAuth) {
        // console.log(userAuth);
        // this.setState({ currentUser: userAuth })
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
          <Route path={'/shop'} component={ShopPage} />
          <Route path={'/signin'} component={SignInAndSignUpPage} />
        </Switch>
      </div >
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
