import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import React from "react";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";

import "./App.scss";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

class App extends React.Component {
  componentDidMount() {
    //when auth state changes get details and store in app

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      //signUp
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
        console.log(this.state);
      }
      //google and manual
      this.setState({ currentUser: user });
      console.log(this.state);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

//connect is HOC
//takes 2 params:
//    mapStateToProps to get data
//    & mapDispatchToProps to send  dispatching actions and payload[data] to the reducer
//          => Takes object as a param with multiple actions
//          => user => dispatch(setCurrentUser(user))

const mapDispatchToProps = (dispatch) => ({
  //key
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
