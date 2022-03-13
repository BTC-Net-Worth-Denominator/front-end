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
    justifyContent: 'flex-end',
    alignSelf: 'center',
    color: 'black'
 }

 const LogoStyling = {
     display: 'flex',
     flexDirection: 'flex-start'
 }

 const ButtonStyling = {
    backgroundColor: 'orange',
    padding: '2%',
 }

 const LinkStyling = {
     padding: '0% 2%',
 }
 

// *** Component ***

const NavBar = () => {

    return (
        <div style={NavStyling}>
            <div style={LogoStyling}>
                <Link to='/'>
                <img src='https://peterdavidconley.com/wp-content/uploads/2022/03/bitcoin_logo.png' height='50px' width='50px'></img>
                </Link>
            </div>
            <div style={NavLinkStyling}>
                <Link to='/process'  style={LinkStyling}>The Process</Link>
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