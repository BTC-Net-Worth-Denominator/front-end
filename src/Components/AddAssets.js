import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const AssetField = styled.div`
    padding: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: 5%;
    text-align: center;
    font-size: 1.5rem;
`;

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
    font-size: 1.5rem;

`

const initialAsset = {

    assetName: '',
    assetValue: 0,

}

const AddAsset = () => {

    const [ assets, setAssets ] = useState(initialAsset)
    const { push } = useHistory();


    const handleChange = (e) => {
        setAssets({
            ...assets,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post(``, assets)
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log(err)
            }) 
    }

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
                    <label>Asset Name
                        <input 
                        type="text" 
                        name="assetName" 
                        id="assetName"
                        onChange={handleChange}
                        />
                    </label>
                    <label>Asset Value (USD)
                        <input 
                        type="text" 
                        name="assetValue" 
                        id="assetValue"
                        onChange={handleChange}
                        />
                    </label>
                    <button id='submit'>[+]</button>
                </form>
                </AssetField>
            </ContentStyling>
        </AssetStyling>
    )
}

export default AddAsset;