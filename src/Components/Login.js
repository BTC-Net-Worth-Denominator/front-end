import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const initialCredentials = {
    username: '',
    password: '',
}

const initialMessage = ''

const HeaderDiv = styled.div`
    font-size: 30px;
    color: white;
`

const LoginStyling = styled.div`
    padding: 10% 0%;
`

const Login = () => {

    const [ credentials, setCredentials ] = useState(initialCredentials);
    const [ loginMessage, setLoginMessage ] = useState(initialMessage);

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        // axios.post(``, credentials)
        // .then(resp => {
        //     console.log(resp)
        //     setLoginMessage(resp.data.message)
        // })
        // .catch(err => {
        //     console.log(err)
        // })

    }

    return(
            <div>
                <LoginStyling>
                <HeaderDiv>
                    <center>
                        <h1>Login</h1>
                    </center>
                </HeaderDiv>
            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input 
                    type="text" 
                    name="username" 
                    id="username"
                    onChange={handleChange}
                    />
                </label>
                <label>Password:
                    <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={handleChange}
                    />
                </label>
                <button id='submit'>Submit</button>
            </form>
            <center>
                <h3>Not A Current User?</h3>    
                <Link to="/create-account" >
                <h4>Create Account</h4>
                </Link>
            </center>     
            </LoginStyling>   
            </div>
    )
}

export default Login