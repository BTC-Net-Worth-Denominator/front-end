// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

// *** Styling ***

const NavStyling = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '2%',
    color: 'black'
 }

 const NavLinkStyling = {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    color: 'black'
 }

 const ButtonStyling = {
    backgroundColor: 'orange'
 }
 

// *** Component ***

const NavBar = () => {

    return (
        <div style={NavStyling}>
            <div>
                <Link to='/'>
                <img src='https://peterdavidconley.com/wp-content/uploads/2022/03/bitcoin_logo.png' height='50px' width='50px'></img>
                </Link>
            </div>
            <div style={NavLinkStyling}>
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
                <button style={ButtonStyling}>Logout</button>
            </div>
        </div>
    )

}

export default NavBar;