// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


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
    width: '50%',
    color: 'black'
 }

 const LinkStyling = {
    padding: '0% 6%',
    color: 'black',
    textDecoration: 'none',
    fontSize: '20px',
    whiteSpace: 'nowrap'

}

 const LogoStyling = {
     display: 'flex',
     flexDirection: 'flex-start',
     width: '50%',
 }

 const ButtonStyling = {
    backgroundColor: 'orange',
    padding: '2%',
 }
 
 

// *** Component ***

const NavBar = () => {

    const { push } = useHistory();


    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('message');
        localStorage.removeItem('user_id');
        push('/login')
    }

    console.log(localStorage)
    
    return (
        <div style={NavStyling}>
            <div style={LogoStyling}>
                <Link to='/'>
                <img src='https://peterdavidconley.com/wp-content/uploads/2022/03/bitcoin_logo.png' height='50px' width='50px'></img>
                </Link>
            </div>
            <div style={NavLinkStyling}>
                    <Link to='/process' style={LinkStyling}>Process</Link>
                <br />
                {localStorage.user_id !== undefined &&
                    <Link to='/add-assets' style={LinkStyling}>Add Assets</Link>
                }
                <br />
                {localStorage.user_id !== undefined &&
                    <Link to='/portfolio' style={LinkStyling}>View Portfolio</Link>
                }
                <br />
                    <Link to='/create-account' style={LinkStyling}>Create Account</Link>
                <br />
                    <Link to='/login' style={LinkStyling}>Login</Link>
                <br />
                    <button onClick={handleLogout} style={ButtonStyling}>Logout</button>
            </div>
        </div>
    )

}

export default NavBar;