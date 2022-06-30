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
    asset_price: 0,
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
            document.getElementById("asset_form").reset();
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
                <form onSubmit={handleSubmit} id='asset_form'>
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
                        <label>Asset Value <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                        </svg> (USD):  
                            <FormFieldStyling>
                            <input style={{ width: "300px" }}
                            type="text" 
                            name="asset_price" 
                            id="asset_price"
                            onChange={handleChange}
                            />
                            </FormFieldStyling>
                        </label>
                    </FieldStyling>
                    <button id='submit' style={ButtonStyling}>Add Asset <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-in-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                    <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg></button>
                </form>
                </AssetField>
            </ContentStyling>
        </AssetStyling>
    )
}

export default AddAsset;