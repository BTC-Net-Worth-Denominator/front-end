import Asset from './Asset'
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../Utils/axiosWithAuth';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`

const VPStyling = styled.div`
    background-color: orange;
    text-align: center;
    color: white;
    font-size: 20px;
    padding: 1% 15%;
`

const PortfolioStyling = styled.div`
    padding-top: 4%;
    padding-bottom: 30%;
`

const TotalStyling = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LoadingStyle = styled.div`
    margin: 20%;
`

const initialAssets = []
const initialUserAssets = []
const initialPrice = 0

const Portfolio = () => {

    const [assets, setAssets] = useState(initialAssets)
    const [userAssets, setUserAssets] = useState(initialUserAssets)
    const [btcPrice, setBTCPrice] = useState(initialPrice)
    let totalNW = 0

    useEffect(() => {

        const pricePromise = axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
        
        .catch(err => {
            console.log(err)
        })

		const assetPromise = axios.get('https://btc-net-worth.herokuapp.com/api/assets')
			
			.catch((err) => {
				console.log(`The error is: ${err}` );
			});

        Promise.all([pricePromise, assetPromise]).then(([priceRes, assetRes]) => {

            setBTCPrice(priceRes.data.bpi.USD.rate_float)
            setAssets(assetRes.data.filter(asset => asset.user_id === parseInt(localStorage.user_id)));

        })

	}, []);

    if (assets.length === 0){
        return (

        <LoadingStyle>
            <center>
            <h1>No Current Portfolio</h1>
            </center>
        </LoadingStyle>
        )

    }
    

    const handleRefresh = () => {
        window.location.reload()    
    }


    // Adding together total net worth by mapping over each asset

    assets.map(asset => {
        totalNW += asset.asset_price
    })


    return(
        <div>
            <PortfolioStyling>
            <HeaderDiv>
                <h2>Remove Asset</h2>
                <VPStyling>
                    <h1>VIEW PORTFOLIO</h1>
                </VPStyling>
                <h1 onClick={handleRefresh}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg></h1>
            </HeaderDiv>

            <section>
                {assets.map(asset => {

					return(
					<Asset asset={asset} />)

				})}
            </section>   
            
            <section>
                <TotalStyling>
                    <h2>Total Net Worth</h2>
                    <h2>{totalNW * (1/btcPrice)} BTC</h2>
                </TotalStyling>
            </section>
            </PortfolioStyling>
        </div>
    )
}

export default Portfolio