import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import OrderMainPart from './Components/Order/OrderMainPart/OrderMainPart';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ShowService from './Components/Order/ShowService/ShowService';
import ReviewPlace from './Components/Order/ReviewPlace/ReviewPlace';
import AddService from './Components/Admin/AddService/AddService';
import Admin from './Components/Admin/Admin/Admin';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <PrivateRoute path="/order">
             <OrderMainPart></OrderMainPart>
          </PrivateRoute>
          <Route path="/login">
             <Login></Login>
          </Route>
          <PrivateRoute path="/services">
             <ShowService></ShowService>
          </PrivateRoute>
          <PrivateRoute path="/review">
             <ReviewPlace></ReviewPlace>
          </PrivateRoute>
          <PrivateRoute path="/addService">
             <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/adminServiceList">
             <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
             <MakeAdmin></MakeAdmin>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
