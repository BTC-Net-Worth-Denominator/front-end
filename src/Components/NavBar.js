// Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Styling

// const NavStyling = {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     textAlign: 'center',
//     backgroundColor: '#9b8da1',
//  }
 
//  const LinkStyling = {
//     color: 'white',
//     backgroundColor: '#9b8da1',
//     textAlign: 'center',
//     fontSize: 20,
//     padding: 15,
//  }

// *** Component ***

const NavBar = () => {

    return (
        <div>
            <Link to='/'><h2>Home</h2></Link>
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