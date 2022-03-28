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

const FooterStyling = styled.div`
    margin-top: 10%;
`

const RowStyling = styled.div`
   text-align: start;

`
const InputStyling = styled.div`
        margin: 0% 1%;
        width: 300px;
 `

const FormStyling = styled.div`
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0% 20%;
    text-align: center;
    font-size: 2rem;
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
                        <InputStyling>
                            <input style={{ width: "300px" }}
                            type="text" 
                            name="username" 
                            id="username"
                            onChange={handleChange}
                            />
                        </InputStyling>
                    </label>
                    </RowStyling>
                    <RowStyling>
                    <label>Create Password:
                        <InputStyling>
                            <input style={{ width: "300px" }}
                            type="password" 
                            name="password" 
                            id="password"
                            onChange={handleChange}
                            />
                        </InputStyling>
                    </label>
                    </RowStyling>
                    <button id='submit' style={ButtonStyling}>Submit</button>
                </form>
            </FormStyling>
            <center>
                <FooterStyling>
                    <h3>Already A User?</h3>    
                    <Link to="/login" >
                    <h4>Login Page</h4>
                    </Link>
                </FooterStyling>
            </center>
            </AccountStyling>
        </div>
    )
}

export default CreateAccount