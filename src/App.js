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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  unsubscribeFromUser = null;
  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {

      if (userAuth) {
        // console.log(userAuth);
        // this.setState({ currentUser: userAuth })
        createUserProfileDocument(userAuth)
        const userRef = await createUserProfileDocument(userAuth);
        this.unsubscribeFromUser = onSnapshot(userRef, snapShot => {
          // console.log(snapShot)
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        })
      } else {
        this.setState({ currentUser: userAuth }, () => console.log(this.state))
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/shop'} component={ShopPage} />
          <Route path={'/signin'} component={SignInAndSignUpPage} />
        </Switch>
      </div >
    );
  }
}

export default App;
