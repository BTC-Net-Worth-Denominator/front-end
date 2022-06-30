// Imports
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AccountContext } from './AccountContext';

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
    const { userId, setUserId } = useContext(AccountContext)

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('message');
        setUserId(undefined)
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
                {userId &&
                    <Link to='/add-assets' style={LinkStyling}>Add Assets</Link>
                }
                <br />
                {userId &&
                    <Link to='/portfolio' style={LinkStyling}>View Portfolio</Link>
                }
                <br />
                    <Link to='/create-account' style={LinkStyling}>Create Account</Link>
                <br />
                    <Link to='/login' style={LinkStyling}>Login</Link>
                <br />
                    <button onClick={handleLogout} style={ButtonStyling}>Logout <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                    </svg></button>
                    
            </div>
        </div>
    )

}

export default NavBar;