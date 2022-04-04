import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const initialMessage = ''

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
    padding: 5% 0%;
`

const ButtonStyling = {
    backgroundColor: 'orange',
    padding: '0.5% 4%',
    fontSize: '1.5rem',
    margin: '4%',
}

const initialCredentials = {
    username: '',
    password: '',
}

const Login = () => {

    const [ credentials, setCredentials ] = useState(initialCredentials);
    const [ loginMessage, setLoginMessage ] = useState(initialMessage);
    const { push } = useHistory();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post(`https://btc-net-worth.herokuapp.com/api/auth/login`, credentials)
        .then(resp => {
            const { token, message, user_id } = resp.data
            console.log(resp.data)
            localStorage.setItem('token', token);
            localStorage.setItem('message', message);
            localStorage.setItem('user_id', user_id);
            push('/portfolio')
        })
        .catch(err => {
            console.log(err)
        })

    }

    return(
            <div>
                <AccountStyling>
                <HeaderDiv>
                    <center>
                        <h1>Login</h1>
                    </center>
                </HeaderDiv>
                <FormStyling>
                    <form onSubmit={handleSubmit}>
                    <RowStyling>
                    <label>Username:
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
                    <label>Password:
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
                        <FooterStyling>
                            <center>
                            <h3>Not A Current User?</h3>    
                            <Link to="/create-account" >
                            <h4>Create Account</h4>
                            </Link>
                            </center>   
                        </FooterStyling>  
                </AccountStyling>  
            </div>
    )
}

export default Login