// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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

     const { push } = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token');
        push('/login')
    }

    return (
        <div>
            <Link to='/'><h2>Home</h2></Link>
            <Link to='/process' >The Process</Link>
            <Link to='/add-assets'>Add Assets</Link>
            <Link to='/portfolio'>View Portfolio</Link>
            <Link to='/create-account'>Create Account</Link>
            <Link to='/login'>Login</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default NavBar;