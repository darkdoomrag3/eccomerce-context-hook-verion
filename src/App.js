import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import Hats from './components/Hats/Hats';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'
import CheckoutPage from './pages/checkout/checkout.component';


class App extends React.Component {

  componentDidMount() {

    auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
    })


  }

  render() {

    return (
      <>

        
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/chekout' component={CheckoutPage} />
          <Route exact path='/signin' 
          
          render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SigninAndSignUp />)} />
     
     
        </Switch>


      </>


    );

  }

}


const mapStateToProps = ({ user }) => ({

  currentUser: user.currentUser

})

const mapDispatchToProps = dispatch => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))

})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



//// 15 6