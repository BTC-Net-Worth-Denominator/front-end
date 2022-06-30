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
                <h2> {asset.asset_price * (1/currentPrice)} <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-currency-bitcoin" viewBox="0 0 16 16">
                <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z"/>
                </svg></h2>
            </AssetStyling>
        </div>
    )
}

export default Asset