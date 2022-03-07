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
            <Link to='/'>
            <img src='https://peterdavidconley.com/wp-content/uploads/2022/03/bitcoin_logo.png' height='50px' width='50px'></img>
            </Link>
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