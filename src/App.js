import React, { useEffect, Fragment } from 'react';
import logo from './logo.svg';
import jwt_decode from 'jwt-decode';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import UsersPage from './pages/admin/users/allUsers';
import AgentsPage from './pages/admin/agents/allAgents';
import AddAgentPage from './pages/admin/agents/addAgent';
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
    <div id="kt_body"  className="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading">
       <Provider store={store}>
          <Switch>
            <Route exact path="/" component={SignInPage} />
            <PrivateRoute  path="/dashboard" component={UsersPage} />
            <PrivateRoute  path="/agents" component={AgentsPage} />
            <PrivateRoute  path="/add-agent" component={AddAgentPage} />
          </Switch>
       </Provider>
     
    </div>
  );
}

export default App;
