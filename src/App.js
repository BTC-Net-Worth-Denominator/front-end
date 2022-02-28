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
    <div className="App">
        <NavBar />
        <h1>BTC Net Worth Application</h1>
    </div>
  );
}

export default App;
