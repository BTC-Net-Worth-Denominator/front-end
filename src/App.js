// Imports 

import React from 'react';
import styled from 'styled-components';
import './App.css';
import { AccountProvider } from './Components/AccountContext';

// import 

// Component Imports

import Process from './Components/TheProcess';
import Portfolio from './Components/Portfolio';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import AddAssets from './Components/AddAssets'

// Routing

import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './Routing/PrivateRoute';



const AppContainer = styled.div`
	height: 100%;
  margin: 0;
  background-color: black;
  color: white;
  
`;

const RouteContainer = styled.div`
	padding: 5%;
  height: 100%;
`;

function App() {
  return (
    <div>
      <AppContainer>
        <AccountProvider>
        <NavBar />
        <Switch>
          <RouteContainer>
            <Route exact path='/process' component={Process}/>
            <PrivateRoute exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/create-account' component={CreateAccount}/>
            <PrivateRoute exact path='/add-assets' component={AddAssets}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </RouteContainer>
        </Switch>
        </AccountProvider>
      </AppContainer>
    </div>
  );
}

export default App;
