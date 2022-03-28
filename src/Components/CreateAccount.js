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

const RowStyling = styled.div`
   text-align: start;

`

const FormStyling = styled.div`
    padding: 4% 0%;
    text-align: center;
`

const AccountStyling = styled.div`
    padding: 10% 0%;
`
const ButtonStyling = {
    backgroundColor: 'orange',
    padding: '0.5% 4%',
    fontSize: '1.5rem',
    margin: '4%',
}

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
            <AccountStyling>
            <HeaderDiv>
                <center>
                    <h1>Create Account</h1>
                </center>
            </HeaderDiv>
            <FormStyling>
                <form onSubmit={handleSubmit}>
                    <RowStyling>
                    <label>Enter Username:
                        <input 
                        type="text" 
                        name="username" 
                        id="username"
                        onChange={handleChange}
                        />
                    </label>
                    </RowStyling>
                    <RowStyling>
                    <label>Create Password:
                        <input 
                        type="password" 
                        name="password" 
                        id="password"
                        onChange={handleChange}
                        />
                    </label>
                    </RowStyling>
                    <button id='submit' style={ButtonStyling}>Submit</button>
                </form>
            </FormStyling>
            <center>
                <h3>Already A User?</h3>    
                <Link to="/login" >
                <h4>Login Page</h4>
                </Link>
            </center>
            </AccountStyling>
        </div>
    )
}

export default CreateAccount