import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const initialCredentials = {
    username: '',
    password: '',
}

const HeaderDiv = styled.div`
    font-size: 30px;
    color: white;
`

const initialMessage = ''

const CreateAccount = () => {

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

    // Add in error messages:
    // 1. Username already taken
    // 2. Password too short

    return(
        <div>
            <HeaderDiv>
                <center>
                    <h1>Create Account</h1>
                </center>
            </HeaderDiv>
            <form onSubmit={handleSubmit}>
                <label>Enter Username:
                    <input 
                    type="text" 
                    name="username" 
                    id="username"
                    onChange={handleChange}
                    />
                </label>
                <label>Create Password:
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
                <h3>Already A User?</h3>    
                <Link to="/login" >
                <h4>Login Page</h4>
                </Link>
            </center>
        </div>
    )
}

export default CreateAccount