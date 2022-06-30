import styled from 'styled-components'
import axiosWithAuth from '../Utils/axiosWithAuth';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssetStyling = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5% 0%;
    padding: 1%;
    border: 4px white solid;
`

const ButtonStyling = {
    backgroundColor: 'orange',
    padding: '0.5%',
 }

 const initialPrice = 0

const Asset = (props) => {

    const [ currentPrice, setCurrentPrice ] = useState(initialPrice)


    const { asset } = props

    const handleDelete = () => {
        axiosWithAuth()
        .delete(`/assets/${asset.asset_id}`)
        .then(resp => {
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }

    axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then(resp => {
        setCurrentPrice(resp.data.bpi.USD.rate_float)
    })
    .catch(err => {
        console.log(err)
    })
    
    return(
        <div >
            <AssetStyling>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-backspace-reverse" viewBox="0 0 16 16">
                    <path d="M9.854 5.146a.5.5 0 0 1 0 .708L7.707 8l2.147 2.146a.5.5 0 0 1-.708.708L7 8.707l-2.146 2.147a.5.5 0 0 1-.708-.708L6.293 8 4.146 5.854a.5.5 0 1 1 .708-.708L7 7.293l2.146-2.147a.5.5 0 0 1 .708 0z"/>
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.08a2 2 0 0 0 1.519-.698l4.843-5.651a1 1 0 0 0 0-1.302L10.6 1.7A2 2 0 0 0 9.08 1H2zm7.08 1a1 1 0 0 1 .76.35L14.682 8l-4.844 5.65a1 1 0 0 1-.759.35H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7.08z"/>
                    </svg>
                    <button onClick={handleDelete} style={ButtonStyling}> Delete</button>
                </div>
                <h2> {asset.asset_name}</h2>
                <h2> {asset.asset_price * (1/currentPrice)} BTC</h2>
            </AssetStyling>
        </div>
    )
}

export default Asset