import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return(
        <div>
            <img>{/*bitcoin logo here*/}</img>
            <h1>BTC Net Worth Calculator</h1>
            <br />
            <h3>Calculate your asset's worth in sats.</h3>
            <br />
            <Link to="/create-account" >
            <h4>Create Account</h4>
            </Link>
            <Link to="/login" >
            <h4>Login</h4>
            </Link>
        </div>
    )
}

export default Home