// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// *** Styling ***

const NavStyling = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    backgroundColor: 'white',
    margin: '1%',
    color: 'black'
 }
 

// *** Component ***

const NavBar = () => {

    return (
        <div style={NavStyling}>
            <h2>BTC Asset Denominator App</h2>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/process' >The Process</Link>
            <br />
            <Link to='/add-assets'>Add Assets</Link>
            <br />
            <Link to='/portfolio'>View Portfolio</Link>
            <br />
            <Link to='/create-account'>Create Account</Link>
            <br />
            <Link to='/login'>Login</Link>
            <br />
            <button>Logout</button>
            
        </div>
    )

}

export default NavBar;