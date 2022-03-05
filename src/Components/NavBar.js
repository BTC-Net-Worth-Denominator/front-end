// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// *** Styling ***

const NavStyling = {
    display: 'flex',
    padding: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    backgroundColor: 'black',
    margin: '1%'
 }
 

// *** Component ***

const NavBar = () => {

    return (
        <div style={NavStyling}>
            
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