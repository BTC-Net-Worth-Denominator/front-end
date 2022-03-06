import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeStyling = styled.div`
	padding: 5%;
    font-size: 30px;
    a:link {
        color: grey;
        }
`;

const Home = () => {

    return(
        <HomeStyling>
        <div>
            <img src='https://peterdavidconley.com/wp-content/uploads/2022/03/bitcoin_logo.png' height='150px' width='150px'></img>
            <h1>BTC Net Worth Calculator</h1>
            <h3 style={{color: 'orange'}}>Calculate your assets worth in sats.</h3>
            <br />
            <Link to="/create-account" >
            <h4 style={{color: 'grey'}}>Create Account</h4>
            </Link>
            <Link to="/login" >
            <h4 style={{color: 'grey'}}>Login</h4>
            </Link>
        </div>
        </HomeStyling>
    )
}

export default Home