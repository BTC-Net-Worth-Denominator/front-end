// Imports 

import './App.css';
import React from 'react';

// Component Imports

import Process from './Components/TheProcess';
import Portfolio from './Components/Portfolio';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import AddAssets from './Components/AddAssets'

// Routing

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// *** ----- Styling  ----- ***

// const AppContainer = styled.div`
// 	height: 100%;
// `;
// const RouteContainer = styled.div`
// 	display: flex;
// 	height: 85%;
// 	align-items: center;
// 	flex-direction: column;
// `;


function App() {
  return (
    <Router>
    <div className="App">
        <NavBar />
        {/* <Route exact path='/process' component={Process}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/create-account' component={CreateAccount}/>
        <Route exact path='/add-assets' component={AddAssets}/>
        <Route exact path="/login" component={Login} /> 
        <Route path="/" component={Home} /> */}
    </div>
    </Router>
  );
}

export default App;
