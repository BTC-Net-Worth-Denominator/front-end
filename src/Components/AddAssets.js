import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const AssetField = styled.div`
    padding: 3%;
    display: flex;
    align-items: space-center;
`;

const HeaderStyling = styled.div`
    background-color: orange;
    color: white;
    font-size: 20px;
    width: 50%;
    padding: 1%;
`

const AssetStyling = styled.div`
    padding: 4% 0%;
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
                <center><h1>Add Assets</h1></center>
            </HeaderStyling>
            <section>
            <div>
                <h3>Enter in an asset, with its current corresponding fair market value to add it to your portfolio.</h3>
            </div>
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
            </section>
        </AssetStyling>
    )
}

export default AddAsset;