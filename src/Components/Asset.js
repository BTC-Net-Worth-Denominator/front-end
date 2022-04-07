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
            console.log(resp)
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

    console.log(currentPrice)
    console.log(1/currentPrice)
    
    return(
        <div >
            <AssetStyling>
                <button onClick={handleDelete} style={ButtonStyling}>Delete</button>
                <h2> {asset.asset_name}</h2>
                <h2> {asset.asset_price * (1/currentPrice)} BTC</h2>
            </AssetStyling>
        </div>
    )
}

export default Asset