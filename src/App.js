import React from 'react'
import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from "./components/header/header.component";

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'

import './App.scss'
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sign-up.component";
import CheckOutPage from "./pages/checkout/checkout.component";



class App extends React.Component{
  componentDidMount(){
    const {setCurrentUser} = this.props
    // Whenever an authencation state gets changed we are going to get those authentication 
    // details and store it in our app
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {

      // SignUp Method
      if(user){
        const userRef = await createUserProfileDocument(user)
        
        userRef.onSnapshot( snapshot => {
          const user = {
            id: snapshot.id,
            ...snapshot.data()
          }
          // Calling the Function
          setCurrentUser(user)
           
        })
      }

    })
  }

  // Unmounting the Component State
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    const {currentUser} = this.props
    return (
      <div>
        <Header  currentUser= {currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route
          exact
          path='/signin'
          render = {
            () => currentUser ?
            (<Redirect to='/' />)
            :
            (<SignInAndSignUpPage/>)
          }
          />
                    <Route exact path='/checkout' component={CheckOutPage} />

        </Switch>
      </div>
    );
  }
} 



// Note:
// 1. Connect is HOC [High Order Component]
// 2. It take two parameters
//      2.1 mapStateToProps => Subscribe the Data from the store
//      2.2 mapDispatchToProps => Dispatching Actions and Payload[Data] to the Reducer
//          2.2.1  => Takes object as parameter with multiple actions can be dispatched
//                 => user => dispatch(setCurrentUser(user)) 
  

const mapDispatchToProps = dispatch => (
  {
    // Key         : Call Back Function -> user => dispatch(setCurrentUser(user))
    setCurrentUser : function (user){
      // dispatching setCurrentUser Action Creator with the user parameter
      dispatch(setCurrentUser(user))
    }
  }
)

const mapStateToProps = ({user}) => (
    {
        currentUser : user.currentUser
    }
  )

export default connect(mapStateToProps,mapDispatchToProps)(App);


