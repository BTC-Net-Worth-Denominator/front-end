// Imports 

import './App.css';
import React from 'react';
import styled from 'styled-components';

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


const AppContainer = styled.div`
	height: 100%;
  padding: 3%;
`;
const RouteContainer = styled.div`
	display: flex;
	height: 85%;
	align-items: center;
	flex-direction: column;
`;

function App() {
  return (
    <div>
      <AppContainer>
        <NavBar />
        <Switch>
          <RouteContainer>
            <Route exact path='/process' component={Process}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/create-account' component={CreateAccount}/>
            <Route exact path='/add-assets' component={AddAssets}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </RouteContainer>
        </Switch>
      </AppContainer>
    </div>
  );
}

export default App;
