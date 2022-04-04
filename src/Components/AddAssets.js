import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const AssetField = styled.div`
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: 0% 3%;
    text-align: center;
    font-size: 2rem;
    border: white 2px solid;
`;

const FieldStyling = styled.div`
   text-align: start;

`
const FormFieldStyling = styled.div`
        margin: 0% 1%;
        width: 300px;
 `

const HeaderStyling = styled.div`
    background-color: orange;
    text-align: center;
    color: white;
    font-size: 20px;
    padding: 1%;
    margin: 0% 20%;
`

const AssetStyling = styled.div`
    padding: 4% 0%;
`

const ContentStyling = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 10%;
    padding-top: 5%;
`

const TextStyling = styled.div`

    width: 30%;
    font-size: 2rem;

`

const ButtonStyling = {
    backgroundColor: 'orange',
    padding: '0.5% 4%',
    fontSize: '1.5rem',
    margin: '4%',
}

const initialAsset = {

    asset_name: '',
    asset_value: 0,
    user_id: 0

}

const AddAsset = () => {

    const [ assets, setAssets ] = useState(initialAsset)
    const { push } = useHistory();


    const handleChange = (e) => {
        setAssets({
            ...assets,
            [e.target.name]: e.target.value,
            ['user_id']: localStorage.user_id
        })
    }

    console.log(localStorage.user_id)

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post(`https://btc-net-worth.herokuapp.com/api/assets`, assets)
        .then(resp => {
            console.log(assets)
        })
        .catch(err => {
            console.log(err)
        })

    }
    console.log(assets)

    return(
        <AssetStyling>
            <HeaderStyling>
                <center><h1>ADD ASSETS</h1></center>
            </HeaderStyling>
            <ContentStyling>
                <TextStyling>
                    <h3>Enter in an asset, with its current corresponding fair market value to add it to your portfolio.</h3>
                </TextStyling>
                <AssetField>
                <form onSubmit={handleSubmit}>
                   <FieldStyling>
                        <label>Asset Name: 
                            <FormFieldStyling>
                            <input style={{ width: "300px" }}
                            type="text" 
                            name="asset_name" 
                            id="asset_name"
                            onChange={handleChange}
                            />
                            </FormFieldStyling>
                        </label>
                    </FieldStyling>
                    
                    <FieldStyling>
                        <label>Asset Value (USD):  
                            <FormFieldStyling>
                            <input style={{ width: "300px" }}
                            type="text" 
                            name="asset_value" 
                            id="asset_value"
                            onChange={handleChange}
                            />
                            </FormFieldStyling>
                        </label>
                    </FieldStyling>
                    <button id='submit' style={ButtonStyling}>Add Asset</button>
                </form>
                </AssetField>
            </ContentStyling>
        </AssetStyling>
    )
}

export default AddAsset;