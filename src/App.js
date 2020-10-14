import React, { useEffect, Fragment } from 'react';
import logo from './logo.svg';
import jwt_decode from 'jwt-decode';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import FarmerDashboard from './pages/admin/layouts/layouts';
import SignInPage from './pages/signupandsignin/signInPage';


import { store } from "./utils/store";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from './routes/privateRoute';

import { setCurrentUser } from "./redux/authentication/action";
import { logout } from "./redux/authentication/action";
import { clearCurrentProfile } from './redux/profile/action';
import './App.css';



const App = () => {
  
  if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken)
    const decode = jwt_decode(localStorage.jwtToken)
    store.dispatch(setCurrentUser(decode.user))
     let currentTime = Date.now() / 100;
     if(decode.exp < currentTime){
       
       store.dispatch(clearCurrentProfile());
       store.dispatch(logout());
       
       window.location.href = '/'
     }
  }
    
  return (
    <div className="App">
       <Provider store={store}>
          <Switch>
            <Route exact path="/" component={SignInPage} />
            <PrivateRoute  path="/dashboard" component={FarmerDashboard} />
           
          </Switch>
       </Provider>
     
    </div>
  );
}

export default App;
